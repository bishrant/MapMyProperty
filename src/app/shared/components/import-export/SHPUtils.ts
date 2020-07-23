import * as shp from 'shpjs';
import { convertFeatureCollectionToGraphics } from './FeatureCollectionUtils';
import { addGraphics } from '../../store/graphics.actions';
import { id } from '../../store/todo';
import { getDefaultSymbol } from './DefaultSymbols';
import Graphic = require('esri/Graphic');
declare const zip: any;
zip.workerScriptsPath = 'scripts/';

const getZipEntries = (file: any, callback: any, store: any) => {
  const reader = new zip.BlobReader(file);
  zip.createReader(reader, function (reader: any) {
    callback(reader, file, store);
  });
};

const fileToArrayBuffer = (file: any) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });

const getWriter = (entry: any) => {
  const writer = new zip.BlobWriter();
  return new Promise(function (resolve: any, reject: any) {
    try {
      (entry as any).getData(writer, (blob: any) => {
        resolve(blob);
      });
    } catch (e) {
      reject(e);
    }
  });
};

const zipToSHP_AGOL = (file: File, store: any) => {
  const formData = new FormData();
  const publishParams: any = {
    targetSR: { wkid: 102100 },
    maxRecordCount: 1000,
    enforceInputFileSizeLimit: true,
    enforceOutputJsonSizeLimit: true,
    genralize: false,
    reducePrecision: false,
    numberOfDigitsAfterDecimal: 0
  };

  formData.append('publishParameters', JSON.stringify(publishParams));
  formData.append('filetype', 'shapefile');
  formData.append('f', 'json');
  formData.append('file', file);
  const url = 'https://www.arcgis.com/sharing/rest/content/features/generate';
  fetch(url, {
    method: 'POST',
    mode: 'cors',
    body: formData
  })
    .then((response) => response.json())
    .then((result: any) => {
      //   const t = result.json();
      if (typeof result.error !== 'undefined') {
        console.error('Error parsing shapefile.' + result.error.message);
      } else {
        const graphicArray: any = [];
        result.featureCollection.layers.forEach((layer: any) => {
          const g = layer.layerDefinition.geometryType;
          console.log(g);
          const geometryType = g.split('esriGeometry')[1].toLowerCase();
          layer.featureSet.features.forEach((feature: any) => {
            console.log(feature);
            const _g = feature.geometry;
            _g.type = geometryType;
            const _graphic = new Graphic({
              geometry: _g,
              attributes: {
                id: id(),
                geometryType: geometryType,
                symbol: getDefaultSymbol(geometryType)
              },
              symbol: getDefaultSymbol(geometryType)
            });
            const _graphicJson: any = _graphic.toJSON();
            _graphicJson.symbol = getDefaultSymbol(geometryType);
            _graphicJson.geometry.type = geometryType;
            graphicArray.push(JSON.stringify(_graphicJson));
          });
        });
        store.dispatch(addGraphics({ graphics: graphicArray }));
      }
    });
};

const readerCompleteMultiple = (zipReader: any, file: any, store: any) => {
  try {
    zipReader.getEntries(async (entries: any) => {
      const nestedZips = entries.filter((e: any) => /^.*\.(zip)$/gi.test(e.filename));
      let graphicsArray: any = [];
      if (nestedZips.length > 0) {
        // const nestedZip = nestedZips[0];
        for (let i = 0; i < nestedZips.length; i++) {
          const nestedZip = nestedZips[i];
          const blob: any = await getWriter(nestedZip);
          const _file = new File([blob], nestedZip.filename, {
            type: 'application/zip',
            lastModified: Date.now()
          });
          const _shp = await fileToArrayBuffer(_file);
          const _featureCollection = shp.parseZip(_shp);
          const _graphics = convertFeatureCollectionToGraphics(_featureCollection);
          graphicsArray = graphicsArray.concat(_graphics);
          if (i >= nestedZips.length - 1) {
            console.log(graphicsArray);
            store.dispatch(addGraphics({ graphics: graphicsArray }));
          }
          console.log(graphicsArray);
        }
      } else {
        try {
          const _arrayBuffer = await fileToArrayBuffer(file);
          const _featureCollection = shp.parseZip(_arrayBuffer);
          const _graphicArray = convertFeatureCollectionToGraphics(_featureCollection);
          store.dispatch(addGraphics({ graphics: _graphicArray }));
        } catch (error) {
          zipToSHP_AGOL(file, store);
        }
      }
    });
  } catch (error) {
    console.error(error);
    zipToSHP_AGOL(file, store);
  }
};

const convertSHPToGraphics = async (file: any, store: any) => {
  getZipEntries(file, readerCompleteMultiple, store);
};

export { convertSHPToGraphics };
