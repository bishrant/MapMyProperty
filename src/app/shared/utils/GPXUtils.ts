import { Point } from '@arcgis/core/geometry'
import {
  createWebMercatorPolygonFromGraphic, createWebMercatorLineFromGraphic,
  createWebMercatorPointFromGraphic
} from './WebMercatorUtils'
import { gpx } from './lib/gpx';
import { convertFeatureCollectionToGraphics } from './FeatureCollectionUtils';

const areaGraphicsToGPX = (gJson: any, name: string = 'area') => {
  const _g = createWebMercatorPolygonFromGraphic(gJson);
  let _gpx = '';
  for (let gpxi2 = 0; gpxi2 < _g.rings.length; gpxi2++) {
    _gpx = _gpx + `<trk>\n<name>${name}</name><number>1</number>\n<trkseg>\n`
    for (let gpxi1 = 0; gpxi1 < _g.rings.length; gpxi1++) {
      for (let gpxj = 0; gpxj < _g.rings[gpxi1].length; gpxj++) {
        const gpxmp = new Point(_g.getPoint(gpxi1, gpxj))
        _gpx = _gpx + `<trkpt lat="${gpxmp.y}" lon="${gpxmp.x}"/>\n`;
      }
    }
    _gpx += '</trkseg>\n</trk>\n'
  }
  return _gpx
}

const pointGraphicsToGPX = (gJson: any, name:string = null) => {
  const _g = createWebMercatorPointFromGraphic(gJson);
  if (name) {
    return `<wpt lat="${_g.y}" lon="${_g.x}"><name>${name}</name></wpt>\n`;
  } else {
    return `<wpt lat="${_g.y}" lon="${_g.x}"><name>pt</name></wpt>\n`;
  }
};

const textGraphicsToGPX = (gJson: any) => {
  const _g = createWebMercatorPointFromGraphic(gJson);
  return `<wpt lat="${_g.y}" lon="${_g.x}"><name>${gJson.attributes.symbol.text}</name></wpt>\n`;
};

const lineGraphicsToGPX = (gJson: any) => {
  const _g = createWebMercatorLineFromGraphic(gJson);
  let _gpx = '<trk>\n<name>Line</name>\n<trkseg>\n';
  for (let j = 0; j < _g.paths[0].length; j++) {
    const x = _g.paths[0][j][0];
    const y = _g.paths[0][j][1];
    _gpx = _gpx + `<trkpt lat="${y}" lon="${x}"/>\n`;
  }
  _gpx += '</trkseg>\n</trk>\n';
  return _gpx;
};

const mergeWayPtsToGPX = (waypts: any) => {
  const GPX = `<?xml version="1.0" encoding="UTF-8"?>\n<gpx version="1.1" creator="TexasForestInfo.com"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.topografix.com/GPX/1/1"
  xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">\n`;
  const places = waypts.join('\n');
  return GPX + places + ' </gpx>';
}

const gpxToGeoJson = (xml: any) => {
  const _xml = new DOMParser().parseFromString(xml, 'text/xml');
  const featureCollection = gpx(_xml, { styles: true });
  return convertFeatureCollectionToGraphics(featureCollection);
};

const createGPXForExport = (graphicsArray: any, isFromPlotTool:boolean = false) => {
  const placeMarksArray: any = []
  graphicsArray.forEach((g: any) => {
    const _gJson = JSON.parse(g)
    if (isFromPlotTool === false) {
      switch (_gJson.attributes.geometryType) {
        case 'text':
          placeMarksArray.push(textGraphicsToGPX(_gJson));
          break;
        case 'point':
          placeMarksArray.push(pointGraphicsToGPX(_gJson));
          break;
        case 'polyline':
          placeMarksArray.push(lineGraphicsToGPX(_gJson));
          break;
        case 'polygon':
          placeMarksArray.push(areaGraphicsToGPX(_gJson));
          break;
        case 'circle':
          placeMarksArray.push(areaGraphicsToGPX(_gJson, 'circle'));
          break;
        default:
          break;
      }
    } else {
      placeMarksArray.push(pointGraphicsToGPX(_gJson, _gJson.attributes.plotName));
    }
  })
  return mergeWayPtsToGPX(placeMarksArray)
}

export {
  gpxToGeoJson, areaGraphicsToGPX,
  pointGraphicsToGPX,
  lineGraphicsToGPX,
  createGPXForExport
};
