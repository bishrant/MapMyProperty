import { Polygon, Polyline } from '@arcgis/core/geometry';
import Graphic from '@arcgis/core/Graphic';
import { CreatePolygonSymbol, CreatePolylineSymbol } from './GraphicStyles';
import { CreateCircleWithGeometry, TFSPolygon, TFSPolyline, CreateTFSCircleFromPoint } from './SketchViewModelUitls';
const id = (): string => Math.random().toString(36).substr(2, 9);

const CreateCircleFromGraphic = (graphic: any, lineProps: any, fillProps: any) => {
  let circleJSON = graphic.toJSON();
  circleJSON = CreatePolygonGraphicWithSymbology(circleJSON, lineProps, fillProps);
  circleJSON.toJSON = undefined;
  circleJSON.geometry = CreateCircleWithGeometry(graphic).asJSON();
  circleJSON.attributes.radius = circleJSON.geometry.radius;
  return circleJSON;
};

const CreatePolygonGraphicWithSymbology = (graphic: any, lineProps: any, fillProps: any) => {
  const _symbol = CreatePolygonSymbol(lineProps, fillProps);
  graphic.symbol = _symbol;
  graphic.symbol.outline.color = _symbol.outline.color;
  graphic.attributes.symbol = _symbol;
  return graphic;
};

const CreatePolygonFromGraphic = (graphic: any, lineProps: any, fillProps: any) => {
  const polygonJSON = graphic.toJSON();
  polygonJSON.symbol = CreatePolygonSymbol(lineProps, fillProps);
  polygonJSON.attributes.symbol = polygonJSON.symbol;
  polygonJSON.toJSON = undefined;
  polygonJSON.geometry = new TFSPolygon({
    rings: graphic.geometry.rings,
    spatialReference: graphic.geometry.spatialReference
  }).asJSON();
  return polygonJSON;
};

const CreatePolylineFromGraphic = (graphic: any, lineProps: any) => {
  const polylineJSON = graphic.toJSON();
  polylineJSON.symbol = CreatePolylineSymbol(lineProps);
  polylineJSON.attributes.symbol = polylineJSON.symbol;
  polylineJSON.toJSON = undefined;
  polylineJSON.geometry = new TFSPolyline({
    paths: graphic.geometry.paths,
    spatialReference: graphic.geometry.spatialReference
  }).asJSON();
  return polylineJSON;
};

const CreateCircleFromEvent = (evt: any, lineProps: any, fillProps: any) => {
  let _g = evt.graphic.toJSON();
  _g.attributes = { id: id(), symbol: _g.symbol, geometryType: evt.tool, radius: 0 };
  _g.geometry = CreateCircleWithGeometry(evt.graphic).asJSON();
  _g = CreatePolygonGraphicWithSymbology(_g, lineProps, fillProps);
  _g.attributes.radius = _g.geometry.radius;
  return _g;
};

const CreatecircleFromPoint = (evt: any, radius: number, lineProps: any, fillProps: any) => {
  let _g = evt.graphic.toJSON();
  _g.attributes = { id: id(), symbol: _g.symbol, geometryType: evt.tool, radius: 0 };
  _g.geometry = CreateTFSCircleFromPoint(evt.graphic.geometry, radius).asJSON();
  _g = CreatePolygonGraphicWithSymbology(_g, lineProps, fillProps);
  _g.attributes.geometryType = 'circle';
  _g.attributes.radius = _g.geometry.radius;
  return _g;
};

const CreateCircleFromCentroid = (graphic: Graphic, radius: number, lineProps: any, fillProps: any) => {
  let _g = new Graphic().toJSON();
  const _centroid = (graphic.geometry as any).centroid;
  const _id = graphic.attributes.id;
  const _symbol = CreatePolygonSymbol(lineProps, fillProps);

  _g.geometry = CreateTFSCircleFromPoint(_centroid, radius).asJSON();
  _g.attributes = { id: _id, symbol: _symbol, geometryType: 'circle', radius: radius };
  _g = CreatePolygonGraphicWithSymbology(_g, lineProps, fillProps);
  _g.attributes.geometryType = 'circle';
  _g.attributes.radius = (_g.geometry as any).radius;
  return _g;
};

const CreatePointFromGraphic = (graphic: any, markerProps: any) => {
  const _g = graphic.toJSON();
  _g.symbol = markerProps;
  const _id = _g.attributes.id ? _g.attributes.id : id();
  _g.attributes = { id: _id, geometryType: 'point', symbol: _g.symbol };
  _g.geometry.type = 'point';
  return _g;
}

const GetGraphicsForExtentUsingString = (jsonStr: string) => {
  const jsn = JSON.parse(jsonStr);
  const _graphics = jsn.map(j => {
    const f = JSON.parse(j);
    f.symbol = undefined;
    const gg = Graphic.fromJSON(f);
    if (f.attributes.geometryType === 'circle') {
      gg.geometry = new Polygon({
        rings: f.geometry.rings,
        spatialReference: { wkid: f.geometry.spatialReference.wkid }
      });
    }
    if (f.attributes.geometryType === 'polyline') {
      gg.geometry = new Polyline({
        paths: f.geometry.paths,
        spatialReference: { wkid: f.geometry.spatialReference.wkid }
      })
    }
    return gg;
  });
  return _graphics;
}

export {
  id,
  CreateCircleFromGraphic,
  CreatePolygonFromGraphic,
  CreatePolylineFromGraphic,
  CreatecircleFromPoint,
  CreatePolygonGraphicWithSymbology,
  CreateCircleFromEvent,
  CreatePointFromGraphic,
  GetGraphicsForExtentUsingString,
  CreateCircleFromCentroid
};
