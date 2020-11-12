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
    if (g.geometry.type === 'polygon')
    {
      return g;
    }    
  });
  return polygonGraphics;
};

const FindGraphicById = (gl:__esri.GraphicsLayer, id:string) => {
  debugger
  return gl.graphics.find((g:__esri.Graphic) => g.attributes.id === id);
}

export { CreatePolygonGraphicsLayer, CreateTextGraphicsLayer, GetPolygonGraphics, FindGraphicById };
