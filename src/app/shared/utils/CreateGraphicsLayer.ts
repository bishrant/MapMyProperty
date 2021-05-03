import Graphic from '@arcgis/core/Graphic';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';

const CreatePolygonGraphicsLayer = (Id: string = 'userGraphicsLayer') => {
  const graphicsLayer = new GraphicsLayer({
    id: Id
  });
  return graphicsLayer;
};

const CreateTextGraphicsLayer = (Id: string = 'userTextGraphicsLayer') => {
  return new GraphicsLayer({
    id: Id
  });
};

// Gets the polygon graphics from a given graphics layer
const GetPolygonGraphics = (gl:GraphicsLayer) => {
  return gl.graphics.filter((g) => g.geometry.type === 'polygon');
};

const FindGraphicById = (gl:GraphicsLayer, id:string) => {
  return gl.graphics.find((g:Graphic) => g.attributes.id === id);
}

export { CreatePolygonGraphicsLayer, CreateTextGraphicsLayer, GetPolygonGraphics, FindGraphicById };
