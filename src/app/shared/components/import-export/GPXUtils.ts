import webMercatorUtils from 'esri/geometry/support/webMercatorUtils'
import { Point } from 'esri/geometry'
import { createWebMercatorPolygonFromGraphic } from './sharedUtils'

const areaGraphicsToGPX = (gJson: any) => {
  const _g = createWebMercatorPolygonFromGraphic(gJson);
  let _gpx = '';
  for (let gpxi2 = 0; gpxi2 < _g.rings.length; gpxi2++) {
    _gpx = _gpx + '<trk>\n<name>area</name><number>1</number>\n<trkseg>\n'
    for (let gpxi1 = 0; gpxi1 < _g.rings.length; gpxi1++) {
      for (let gpxj = 0; gpxj < _g.rings[gpxi1].length; gpxj++) {
        const gpxmp = new Point(_g.getPoint(gpxi1, gpxj))
        _gpx = _gpx + '<trkpt lat="' + gpxmp.y.toString() + '" lon="' + gpxmp.x.toString() + '"/>\n'
      }
    }
    _gpx += '</trkseg>\n</trk>\n'
  }
  return _gpx
}

const pointGraphicsToGPX = (feature: any) => {
  const gpxgeographicGeometry = webMercatorUtils.webMercatorToGeographic(feature.geometry) as any
  return '<wpt lat="' + gpxgeographicGeometry.y.toString() + '" lon="' + gpxgeographicGeometry.x.toString() + '"></wpt><name>pt</name>\n'
}

const lineGraphicsToGPX = (feature: any) => {
  let _gpx = '<trk>\n<name>Line</name>\n<trkseg>\n'
  const gpxgeographicGeometry: any = webMercatorUtils.webMercatorToGeographic(feature.geometry)
  for (let j = 0; j < gpxgeographicGeometry.paths[0].length; j++) {
    const gpxpointx = gpxgeographicGeometry.paths[0][j][0]
    const gpxpointy = gpxgeographicGeometry.paths[0][j][1]
    _gpx = _gpx + '<trkpt lat="' + gpxpointy.toString() + '" lon="' + gpxpointx.toString() + '"/>\n'
  }
  _gpx += '</trkseg>\n</trk>\n'
  return _gpx
}

const mergeWayPtsToGPX = (waypts: any) => {
  const GPX = '<?xml version="1.0" encoding="UTF-8"?>\n<gpx version="1.1" creator="TexasForestInfo.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.topografix.com/GPX/1/1" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">\n<name>MMP</name>'
  const places = waypts.join('\n')
  return GPX + places + ' </gpx>'
}

const createGPXForExport = (graphicsArray: any) => {
  const placeMarksArray: any = []
  graphicsArray.forEach((g: any) => {
    const _gJson = JSON.parse(g)
    switch (_gJson.attributes.geometryType) {
      case 'point':
        placeMarksArray.push(pointGraphicsToGPX(_gJson))
        break;

      case 'polyline':
        placeMarksArray.push(lineGraphicsToGPX(_gJson))
        break;
      case 'polygon':
        placeMarksArray.push(areaGraphicsToGPX(_gJson))
        break;
      case 'circle':
        placeMarksArray.push(areaGraphicsToGPX(_gJson))
        break;
      default:
        break
    }
  })
  return mergeWayPtsToGPX(placeMarksArray)
}

export { areaGraphicsToGPX, pointGraphicsToGPX, lineGraphicsToGPX, createGPXForExport }
