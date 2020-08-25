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

const createWebMercatorPolygonFromGraphic = (gJson: any) => {
  return CreateGraphic(new Polygon(gJson.geometry));
}

export { createWebMercatorLineFromGraphic, createWebMercatorPointFromGraphic, createWebMercatorPolygonFromGraphic }
