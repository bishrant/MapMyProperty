import Polyline from 'esri/geometry/Polyline';
import Point from 'esri/geometry/Point';
import Polygon from 'esri/geometry/Polygon';
import webMercatorUtils = require('esri/geometry/support/webMercatorUtils');

const CreateGraphic = (geom: any) => {

  return webMercatorUtils.webMercatorToGeographic(geom) as any;
}
const createWebMercatorLineFromGraphic = (gJson: any) => {
  return CreateGraphic(new Polyline(gJson.geometry));
}

const createWebMercatorPointFromGraphic = (gJson: any) => {
  return CreateGraphic(new Point(gJson.geometry));
}

function fixRingOrder(polygon: Polygon) {
  const nr = [];
  polygon.rings.forEach(r => {
      if (!polygon.isClockwise(r)) {
          nr.push(r.reverse());
      } else {
          nr.push(r);
      }
  });
  polygon.rings = nr.slice();
  return polygon;
}

const createWebMercatorPolygonFromGraphic = (gJson: any) => {
  const polygon = new Polygon(gJson.geometry);
  const newPolygon = fixRingOrder(polygon);
  return CreateGraphic(newPolygon);
}

export { createWebMercatorLineFromGraphic, createWebMercatorPointFromGraphic, createWebMercatorPolygonFromGraphic }
