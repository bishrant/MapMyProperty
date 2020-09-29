import GraphicsLayer from 'arcgis-js-api/layers/GraphicsLayer';
import { hollowPolygon } from './Renderers';

const CreatePolygonGraphicsLayer = (Id: string = 'userGraphicsLayer') => {
  const graphicsLayer = new GraphicsLayer({
    id: Id,
    symbol: hollowPolygon
  });
  return graphicsLayer;
};

const CreateTextGraphicsLayer = (Id: string = 'userTextGraphicsLayer') => {
  return new GraphicsLayer({
    id: Id
  });
};

// Gets the polygon graphics from a given graphics layer
const GetPolygonGraphics = (gl:__esri.GraphicsLayer) => {
  const polygonGraphics  = gl.graphics.map((g:any) => {
    return g.geometry.type === 'polygon';
  });
  return polygonGraphics;
};

export { CreatePolygonGraphicsLayer, CreateTextGraphicsLayer, GetPolygonGraphics };
