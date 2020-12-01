import * as shp from 'shpjs';
import { convertFeatureCollectionToGraphics } from './FeatureCollectionUtils';
import { getDefaultSymbol } from './DefaultSymbols';
import * as shpwrite from './lib/shp-write';
import * as shpwriteGeoJSON from './lib/shp-write/src/geojson';
import { arcgisToGeoJSON } from './GeoJSONUtils';
import {
  createWebMercatorPointFromGraphic, createWebMercatorPolygonFromGraphic,
  createWebMercatorLineFromGraphic
} from './WebMercatorUtils';
import { addGraphics } from '../store/graphics.actions';
import { id } from '../store/todo';
import { GetGraphicsForExtentUsingString } from './DrawUtils';
import Graphic = require('esri/Graphic');
declare const zip: any;
zip.workerScriptsPath = 'scripts/';

const getZipEntries = (file: any, callback: any, store: any, mapView: __esri.MapView) => {
  const reader = new zip.BlobReader(file);
  zip.createReader(reader, function (reader: any) {
    callback(reader, file, store, mapView);
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

const zipToShpAGOL = (file: File, store: any, mapView: __esri.MapView) => {
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
        const _graphicToZoom = [];
        result.featureCollection.layers.forEach((layer: any) => {
          const g = layer.layerDefinition.geometryType;

          const geometryType = g.split('esriGeometry')[1].toLowerCase();
          layer.featureSet.features.forEach((feature: any) => {
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
            _graphicToZoom.push(_graphic);
            const _graphicJson: any = _graphic.toJSON();
            _graphicJson.symbol = getDefaultSymbol(geometryType);
            _graphicJson.geometry.type = geometryType;
            graphicArray.push(JSON.stringify(_graphicJson));
          });
        });
        store.dispatch(addGraphics({ graphics: graphicArray }));

        setTimeout(() => { mapView.goTo(_graphicToZoom) }, 250)
      }
    });
};

const readerCompleteMultiple = (zipReader: any, file: any, store: any, mapView: __esri.MapView) => {
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
            store.dispatch(addGraphics({ graphics: graphicsArray }));
          }
        }
      } else {
        try {
          const _arrayBuffer = await fileToArrayBuffer(file);
          const _featureCollection = shp.parseZip(_arrayBuffer);
          const _graphicArray = convertFeatureCollectionToGraphics(_featureCollection);
          graphicsArray = _graphicArray;
          store.dispatch(addGraphics({ graphics: _graphicArray }));
        } catch (error) {
          zipToShpAGOL(file, store, mapView);
        }
      }
      mapView.goTo(GetGraphicsForExtentUsingString(JSON.stringify(graphicsArray)));
    });
  } catch (error) {
    console.error(error);
    zipToShpAGOL(file, store, mapView);
  }
};

const zipClass = (function () {
  let zipWriter: any;
  let blobWriter: any;
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

const downloadSHP = async (data: any, filename: string) => {
  const geoJSONStructure: any = {
    fields: [{ name: 'id', type: 'esriFieldTypeString', length: 20 }],
    spatialReference: { wkid: 3857 },
    features: []
  }
  data.forEach((feat: any) => {
    const _f = JSON.parse(feat);
    const _geomType = _f.attributes.geometryType;
    const _geom = _geomType === 'point' ? createWebMercatorPointFromGraphic(_f)
      : (_geomType === 'polygon' || _geomType === 'circle') ? createWebMercatorPolygonFromGraphic(_f)
        : createWebMercatorLineFromGraphic(_f);
    const _ff = {
      geometry: _geom.toJSON(),
      attributes: { id: _f.attributes.id }
    };
    geoJSONStructure.features.push(_ff);
  });
  const geoj = arcgisToGeoJSON(geoJSONStructure, 'id');
  // a GeoJSON bridge for features

  const shps = [];
  const geometryAvailable = geoj.features.map((f: any) => f.geometry.type.toLowerCase());

  if (geometryAvailable.indexOf('linestring') > -1) {
    shps.push({ type: 'line', geom: await shpWriteFromJSON(shpwriteGeoJSON.line(geoj)) });
  }

  if (geometryAvailable.indexOf('point') > -1) {
    shps.push({ type: 'point', geom: await shpWriteFromJSON(shpwriteGeoJSON.point(geoj)) });
  }

  if (geometryAvailable.indexOf('polygon') > -1) {
    const ggg = shpwriteGeoJSON.polygon(geoj);
    shps.push({ type: 'polygon', geom: await shpWriteFromJSON(ggg) });
  }

  const filesArray: any = [];
  const fileNamesArray: any = [];
  shps.forEach((f: any) => {
    const p = f.type + '.';
    const g = f.geom;
    filesArray.push(g.shp.buffer, g.dbf.buffer, g.shx.buffer, g.prj);
    fileNamesArray.push(p + 'shp', p + 'dbf', p + 'shx', p + 'prj');
  })

  zipClass.addFiles(fileNamesArray, filesArray, function () {
    zipClass.getBlobURL()
      .then((blobURL: any) => {
        const dlink = document.createElement('a');
        dlink.download = filename;
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

const convertSHPToGraphics = async (file: any, store: any, mapView: __esri.MapView) => {
  getZipEntries(file, readerCompleteMultiple, store, mapView);
};

export { convertSHPToGraphics, downloadSHP };
