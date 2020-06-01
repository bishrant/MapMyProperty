import GraphicsLayer from 'arcgis-js-api/layers/GraphicsLayer';
import { hollowPolygon } from './Renderers';

const CreatePolygonGraphicsLayer = (Id: string = 'userGraphicsLayer') => {
  const graphicsLayer = new GraphicsLayer({
    id: Id,
    symbol: hollowPolygon,
  });
  return graphicsLayer;
};

export { CreatePolygonGraphicsLayer };
