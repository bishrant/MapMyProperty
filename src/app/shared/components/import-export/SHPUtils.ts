import * as shp from 'shpjs';
import { convertFeatureCollectionToGraphics } from './FeatureCollectionUtils';
import { addGraphics } from '../../store/graphics.actions';
declare const zip: any;
zip.workerScriptsPath = 'scripts/';

const getZipEntries = (file: any, callback: any, store: any) => {
  const reader = new zip.BlobReader(file);
  zip.createReader(reader, function (reader: any) {
    callback(reader, file, store);
  });
}

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

const readerComplete = (zipReader: any, file: any, store: any) => {
  zipReader.getEntries(async (entries: any) => {
    const nestedZips = entries.filter((e: any) =>
      /^.*\.(zip)$/gi.test(e.filename)
    );
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
        const _graphics = convertFeatureCollectionToGraphics(
          _featureCollection
        );
        graphicsArray = graphicsArray.concat(_graphics);
        if (i >= nestedZips.length - 1) {
          console.log(graphicsArray);
          store.dispatch(addGraphics({ graphics: graphicsArray }));
        }
        console.log(graphicsArray);
      }
    } else {
      fileToArrayBuffer(file).then((s: any) => {
        // console.log(s);
        const _featureCollection = shp.parseZip(s);
        const _graphicArray = convertFeatureCollectionToGraphics(
          _featureCollection
        );
        store.dispatch(addGraphics({ graphics: _graphicArray }));
      });
    }
  })
}

const convertSHPToGraphics = async (file: any, store: any) => {
  getZipEntries(file, readerComplete, store);
}

export { convertSHPToGraphics };
