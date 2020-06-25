import { CreatePolygonSymbol, CreatePolylineSymbol, CreatePointSymbol } from './GraphicStyles';
import { CreateCircleWithGeometry, CreateCircleFromPoint, TFSPolygon, TFSPolyline } from './SketchViewModelUitls';
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
  let polygonJSON = graphic.toJSON();
  polygonJSON.symbol = CreatePolygonSymbol(lineProps, fillProps);
  polygonJSON.attributes.symbol = polygonJSON.symbol;
  polygonJSON.toJSON = undefined;
  polygonJSON.geometry = new TFSPolygon({
    rings: graphic.geometry.rings,
    spatialReference: graphic.geometry.spatialReference,
  }).asJSON();
  return polygonJSON;
};



const CreatePolylineFromGraphic = (graphic: any, lineProps: any) => {
  let polylineJSON = graphic.toJSON();
  polylineJSON.symbol = CreatePolylineSymbol(lineProps);
  polylineJSON.attributes.symbol = polylineJSON.symbol;
  polylineJSON.toJSON = undefined;
  polylineJSON.geometry = new TFSPolyline({
    paths: graphic.geometry.paths,
    spatialReference: graphic.geometry.spatialReference,
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
  _g.geometry = CreateCircleFromPoint(evt.graphic.geometry, radius).asJSON();
  _g = CreatePolygonGraphicWithSymbology(_g, lineProps, fillProps);
  _g.attributes.geometryType = 'circle';
  _g.attributes.radius = _g.geometry.radius;
  return _g;
};

const CreatePointFromGraphic = (graphic: any, markerProps: any) => {
  let _g = graphic.toJSON();
  _g.symbol = CreatePointSymbol(markerProps);
  _g.symbol.type = "simple-marker";
  const _id = _g.attributes.id ? _g.attributes.id : id();
  _g.attributes = { id: _id, geometryType: 'point', symbol: _g.symbol };
  _g.geometry.type = 'point';
  return _g;
}

export {
  CreateCircleFromGraphic,
  CreatePolygonFromGraphic,
  CreatePolylineFromGraphic,
  CreatecircleFromPoint,
  CreatePolygonGraphicWithSymbology,
  CreateCircleFromEvent,
  CreatePointFromGraphic
};
