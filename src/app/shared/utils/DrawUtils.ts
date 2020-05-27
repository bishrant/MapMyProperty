import { CreatePolygonSymbol } from './GraphicStyles';
import { CreateCircleWithGeometry, CreateCircleFromPoint } from './SketchViewModelUitls';
const id = (): string => Math.random().toString(36).substr(2, 9);

const CreateCircleFromGraphic = (graphic: any, lineProps: any, fillProps: any) => {
  let circleJSON = graphic.toJSON();
  circleJSON = CreatePolygonGraphicWithSymbology(circleJSON, lineProps, fillProps);
  circleJSON.toJSON = undefined;
  circleJSON.geometry = CreateCircleWithGeometry(graphic).asJSON();
  circleJSON.attributes.radius = circleJSON.geometry.radius;
  return [circleJSON];
};

const CreatePolygonGraphicWithSymbology = (graphic: any, lineProps: any, fillProps: any) => {
  const _symbol = CreatePolygonSymbol(lineProps, fillProps);
  graphic.symbol = _symbol;
  graphic.symbol.outline.color = _symbol.outline.color;
  graphic.attributes.symbol = _symbol;
  return graphic;
};

const CreateCircleFromEvent = (evt: any, lineProps: any, fillProps: any) => {
  let _g = evt.graphic.toJSON();
  _g.attributes = { gid: id(), symbol: _g.symbol, geometryType: evt.tool, radius: 0 };
  _g.geometry = CreateCircleWithGeometry(evt.graphic).asJSON();
  _g = CreatePolygonGraphicWithSymbology(_g, lineProps, fillProps);
  _g.attributes.radius = _g.geometry.radius;
  return _g;
};

const CreatecircleFromPoint = (evt: any, radius: number, lineProps: any, fillProps: any) => {
  let _g = evt.graphic.toJSON();
  _g.attributes = { gid: id(), symbol: _g.symbol, geometryType: evt.tool, radius: 0 };
  _g.geometry = CreateCircleFromPoint(evt.graphic.geometry, radius).asJSON();
  _g = CreatePolygonGraphicWithSymbology(_g, lineProps, fillProps);
  _g.attributes.geometryType = 'circle';
  _g.attributes.radius = _g.geometry.radius;
  return _g;
};
export { CreateCircleFromGraphic, CreatecircleFromPoint, CreatePolygonGraphicWithSymbology, CreateCircleFromEvent };
