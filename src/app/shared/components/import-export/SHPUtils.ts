import * as shp from 'shpjs';
import { convertFeatureCollectionToGraphics } from './FeatureCollectionUtils';
import { addGraphics } from '../../store/graphics.actions';
import { id } from '../../store/todo';
import { getDefaultSymbol } from './DefaultSymbols';
import * as shpwrite from 'shp-write';
import * as shpwriteGeoJSON from 'shp-write/src/geojson';
import { downloadFile } from './DownloadFile';
import { async } from 'rxjs';
import Graphic = require('esri/Graphic');
import { arcgisToGeoJSON } from '../../utils/GeoJSONUtils';
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

    getBlobURL: () => new Promise((resolve: any, reject: any) => {
      zipWriter.close((blob: any) => {
        const blobURL = URL.createObjectURL(blob);
        resolve(blobURL);
        zipWriter = undefined;
      })
    })
  }
})();

const shpWriteFromJSON = (geoj: any) => {
  return new Promise((resolve: any, reject: any) => {
    shpwrite.write(geoj.properties, geoj.type, geoj.geometries, (err: any, shpFile: any) => {
      if (err) reject(err);

      resolve(shpFile);
    });
  })
}
var input = {
  'displayFieldName': 'prop0',
  'fieldAliases': {'prop0': 'prop0'},
  'geometryType': 'esriGeometryPolygon',
  'fields': [
    {
      'name': 'prop0',
      'type': 'esriFieldTypeString',
      'alias': 'prop0',
      'length': 20
    },
    {
      'name': 'OBJECTID',
      'type': 'esriFieldTypeOID',
      'alias': 'OBJECTID'
    },
    {
      'name': 'FID',
      'type': 'esriFieldTypeDouble',
      'alias': 'FID'
    }
  ],
  'spatialReference': { 'wkid': 4326 },
  'features': [
    {
      'geometry': {
        'x': 102,
        'y': 0.5
      },
      'attributes': {
        'prop0': 'value0',
        'OBJECTID': 0,
        'FID': 0
      }
    }, {
      'geometry': {
        'paths': [
          [[102, 0],
            [103, 1],
            [104, 0],
            [105, 1]]
        ]
      },
      'attributes': {
        'prop0': null,
        'OBJECTID': null,
        'FID': 1
      }
    }, {
      'geometry': {
        'rings': [
          [ [100, 0],
            [100, 1],
            [101, 1],
            [101, 0],
            [100, 0] ]
        ]
      },
      'attributes': {
        'prop0': null,
        'OBJECTID': 2,
        'FID': 30.25
      }
    }
  ]
};


const downloadSHP = async () => {
  const t = arcgisToGeoJSON(input, null);
  console.log(t);
  // a GeoJSON bridge for features
  const geoj = { type: 'FeatureCollection', features: [{ type: 'Feature', properties: {}, geometry: { type: 'Polygon', coordinates: [[[-116.23535156249999, 32.99023555965106], [-97.91015624999999, 32.99023555965106], [-97.91015624999999, 44.18220395771566], [-116.23535156249999, 44.18220395771566], [-116.23535156249999, 32.99023555965106]]] } }, { type: 'Feature', properties: {}, geometry: { type: 'Point', coordinates: [-102.0849609375, 29.649868677972304] } }, { type: 'Feature', properties: {}, geometry: { type: 'LineString', coordinates: [[-98.173828125, 44.809121700077355], [-90.87890625, 33.97980872872457], [-93.8671875, 31.690781806136822]] } }] };

  const y = [shpwriteGeoJSON.line(geoj), shpwriteGeoJSON.point(geoj)];
  console.log(y);

  const line: any = { type: 'line', geom: await shpWriteFromJSON(shpwriteGeoJSON.line(geoj)) };
  const pt: any = { type: 'point', geom: await shpWriteFromJSON(shpwriteGeoJSON.point(geoj)) };
  const polygon: any = { type: 'polygon', geom: await shpWriteFromJSON(shpwriteGeoJSON.polygon(geoj)) };
  // const shps = [line, pt];
  const filesArray: any = [];
  const fileNamesArray: any = [];
  [line, pt, polygon].forEach((f: any) => {
    console.log(f);
    const p = f.type + '.';
    const g = f.geom;
    filesArray.push(g.shp.buffer, g.dbf.buffer, g.shx.buffer, g.prj);
    fileNamesArray.push(p + 'shp', p + 'dbf', p + 'shx', p + 'prj');
  })
  console.log(filesArray, fileNamesArray);
  zipClass.addFiles(fileNamesArray, filesArray, function () {
    zipClass.getBlobURL()
      .then((blobURL: any) => {
        console.log(blobURL);
        const dlink = document.createElement('a');
        dlink.download = name;
        dlink.href = blobURL;
        dlink.onclick = function () {
        // revokeObjectURL needs a delay to work properly
          setTimeout(function () {
            window.URL.revokeObjectURL(dlink.href);
          }, 500);
        };
        dlink.click();
        dlink.remove();
      });
  });
};

const convertSHPToGraphics = async (file: any, store: any) => {
  getZipEntries(file, readerCompleteMultiple, store);
};

export { convertSHPToGraphics, downloadSHP };
