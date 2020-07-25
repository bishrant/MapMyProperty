import * as shp from 'shpjs';
import { convertFeatureCollectionToGraphics } from './FeatureCollectionUtils';
import { addGraphics } from '../../store/graphics.actions';
import { id } from '../../store/todo';
import { getDefaultSymbol } from './DefaultSymbols';
import * as shpwrite from 'shp-write';
import { downloadFile } from './DownloadFile';
import Graphic = require('esri/Graphic');
// const shpwrite = require('shp-write');
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

// (optional) set names for feature types and zipped folder
const options = {
  folder: 'myshapes',
  types: {
    point: 'mypoints',
    polygon: 'mypolygons',
    line: 'mylines'
  }
};
const zipClass = (function () {
  let zipWriter: any, blobWriter: any;
  return {
    addFiles: (filenames: any, files: any, onend: any) => {
      let addIndex = 0;
      function nextFile () {
        const file = files[addIndex];
        const blob = new Blob([file], { type: 'application / octet - stream' });

        zipWriter.add(
          filenames[addIndex],
          new zip.BlobReader(blob),
          function () {
            addIndex++;
            if (addIndex < files.length) nextFile();
            else onend();
          },
          null
        );
      }

      function createZipWriter () {
        zip.createWriter(blobWriter, function (writer: any) {
          zipWriter = writer;
          nextFile();
        });
      }

      if (zipWriter) nextFile();
      else {
        blobWriter = new zip.BlobWriter('application/zip');
        createZipWriter();
      }
    },
    getBlobURL: function (callback: any) {
      zipWriter.close(function (blob: any) {
        const blobURL = URL.createObjectURL(blob);
        callback(blobURL);
        zipWriter = null;
      });
    }
  };
})();

const downloadSHP = () => {
  // a GeoJSON bridge for features
  const geoj = { type: 'FeatureCollection', features: [{ type: 'Feature', properties: {}, geometry: { type: 'Polygon', coordinates: [[[-116.23535156249999, 32.99023555965106], [-97.91015624999999, 32.99023555965106], [-97.91015624999999, 44.18220395771566], [-116.23535156249999, 44.18220395771566], [-116.23535156249999, 32.99023555965106]]] } }, { type: 'Feature', properties: {}, geometry: { type: 'Point', coordinates: [-102.0849609375, 29.649868677972304] } }, { type: 'Feature', properties: {}, geometry: { type: 'LineString', coordinates: [[-98.173828125, 44.809121700077355], [-90.87890625, 33.97980872872457], [-93.8671875, 31.690781806136822]] } }] };

  const y = [shpwrite.geojson.line(geoj)];
  console.log(y);

  y.forEach(function (l: any) {
    shpwrite.write(l.properties, l.type, l.geometries, function (err: any, files: any) {
      console.log(files);
      const prefix = l.type + '.';
      zipClass.addFiles([prefix + 'dbf', prefix + 'shp', prefix + 'shx', prefix + 'prj'],
        [files.dbf.buffer, files.shp.buffer, files.shx.buffer, files.prj], function () {
          zipClass.getBlobURL(function (blobURL: any) {
            console.log(blobURL);
            const dlink = document.createElement('a');
            dlink.download = name;
            dlink.href = blobURL;
            dlink.onclick = function () {
            // revokeObjectURL needs a delay to work properly
              setTimeout(function () {
                window.URL.revokeObjectURL(dlink.href);
              }, 100);
            };
            dlink.click();
            dlink.remove();
          });
        });
      if (err) {
        console.error(err);
      }
    });
  });
};

const convertSHPToGraphics = async (file: any, store: any) => {
  getZipEntries(file, readerCompleteMultiple, store);
};

export { convertSHPToGraphics, downloadSHP };
