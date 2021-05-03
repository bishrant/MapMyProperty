import Polyline from '@arcgis/core/geometry/Polyline';
import Point from '@arcgis/core/geometry/Point';
import Polygon from '@arcgis/core/geometry/Polygon';
import webMercatorUtils = require('@arcgis/core/geometry/support/webMercatorUtils');

const CreateGraphic = (geom: any) => {
  return webMercatorUtils.webMercatorToGeographic(geom) as any;
}
const createWebMercatorLineFromGraphic = (gJson: any) => {
  return CreateGraphic(new Polyline(gJson.geometry));
}

const createWebMercatorPointFromGraphic = (gJson: any) => {
  return CreateGraphic(new Point(gJson.geometry));
}

function fixRingOrder (polygon: Polygon) {
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
