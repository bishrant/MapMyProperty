import { Point } from 'esri/geometry';
import { kml } from './lib/kml';
import { convertFeatureCollectionToGraphics } from './FeatureCollectionUtils';
import { createWebMercatorLineFromGraphic, createWebMercatorPointFromGraphic, createWebMercatorPolygonFromGraphic } from './WebMercatorUtils';
import { RGBAObjectToABGR } from './Colors';

const pointGraphicToKML = (gJson: any) => {
  const name = gJson.attributes.geometryType === 'text' ? gJson.attributes.symbol.text : '';
  const _g = createWebMercatorPointFromGraphic(gJson);
  let _KML = '<Placemark>\n';
  _KML += name === '' ? '' : '<name>' + name + '</name>\n';
  _KML += '<Point>\n<coordinates>\n';
  _KML += _g.x.toString() + ',' + _g.y.toString() + ' ';
  _KML += '\n</coordinates>\n</Point>\n</Placemark>\n';
  return _KML;
}

const lineGraphicsToKML = (gJson: any) => {
  const _g = createWebMercatorLineFromGraphic(gJson);
  const color = RGBAObjectToABGR(gJson.attributes.symbol.color);
  const width = gJson.attributes.symbol.width;
  const lineStyle = '<Style><LineStyle><color>' + color + '</color><width>' + width + '</width></LineStyle></Style>';
  let _KML = '<Placemark>\n';
  _KML += name === '' ? '' : '<name>' + name + '</name>\n';
  _KML += '<name>' + name + '</name>' + lineStyle + '\n<LineString>\n<coordinates>\n';
  for (let j = 0; j < _g.paths[0].length; j++) {
    _KML = _KML + _g.paths[0][j].toString() + ' '
  }
  _KML = _KML + '\n</coordinates>\n</LineString>\n</Placemark>\n';
  return _KML;
}

const areaGraphicsToKML = (gJson: any) => {
  const _g = createWebMercatorPolygonFromGraphic(gJson);
  const fillStyle = `<PolyStyle><color>${RGBAObjectToABGR(gJson.attributes.symbol.color)}</color><fill>1</fill></PolyStyle>`;
  const lineStyle = `<LineStyle><color>${RGBAObjectToABGR(gJson.attributes.symbol.outline.color)}</color>
                        <width>${gJson.attributes.symbol.outline.width}</width></LineStyle>`;
  const polygonstyle = `<Style>${lineStyle}${fillStyle}</Style>`;
  let _KML = '';
  for (let i = 0; i < _g.rings.length; i++) {
    _KML += '<Placemark>\n<name>' + name + '</name>' + polygonstyle + '\n<Polygon>\n<tessellate>1</tessellate>\n<outerBoundaryIs>\n<LinearRing>\n<coordinates>\n';
    for (let j1 = 0; j1 < _g.rings[i].length; j1++) {
      const mp2 = new Point(_g.getPoint(i, j1))
      _KML = _KML + mp2.x.toString() + ',' + mp2.y.toString() + ' ';
    }
    _KML += '\n</coordinates>\n</LinearRing>\n</outerBoundaryIs>\n</Polygon>\n</Placemark>\n';
  }
  return _KML;
}

const mergePlacemarksToKML = (placeMarks: any[]) => {
  const KML = '<?xml version="1.0" encoding="UTF-8"?><kml xmlns="http://www.opengis.net/kml/2.2">\n<Document>\n';
  const places = placeMarks.join('\n');
  return KML + places + '\n</Document>\n</kml>';
}

const kmlToGeoJson = (xml: any) => {
  const _xml = new DOMParser().parseFromString(xml, 'text/xml');
  const featureCollection = kml(_xml, { styles: true });
  return convertFeatureCollectionToGraphics(featureCollection);
}

const createKMLForExport = (graphicsArray: any) => {
  const placeMarksArray: any = [];
  graphicsArray.forEach((g: any) => {
    const _gJson = JSON.parse(g);
    switch (_gJson.attributes.geometryType) {
      case 'point':
        placeMarksArray.push(pointGraphicToKML(_gJson));
        break;
      case 'text':
        placeMarksArray.push(pointGraphicToKML(_gJson));
        break;
      case 'polyline':
        placeMarksArray.push(lineGraphicsToKML(_gJson));
        break;
      case 'polygon':
        placeMarksArray.push(areaGraphicsToKML(_gJson));
        break;
      case 'circle':
        placeMarksArray.push(areaGraphicsToKML(_gJson));
        break;
      default:
        break;
    }
  });
  return mergePlacemarksToKML(placeMarksArray);
}

export {
  pointGraphicToKML, mergePlacemarksToKML, lineGraphicsToKML,
  areaGraphicsToKML, kmlToGeoJson, createKMLForExport
};
