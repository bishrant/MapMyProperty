import GraphicsLayer from 'arcgis-js-api/layers/GraphicsLayer';
import { Polygon } from 'arcgis-js-api/geometry';
import Graphic from 'arcgis-js-api/Graphic';
import { emptyPoint, redDiamondMarker, redPolygon, hollowPolygon } from './Renderers';

const CreatePolygonGraphicsLayer = (Id: string = 'userGraphicsLayer') => {
    const graphicsLayer = new GraphicsLayer({
        id: Id,
        symbol: hollowPolygon
    });
    return graphicsLayer;
};

export  { CreatePolygonGraphicsLayer };
