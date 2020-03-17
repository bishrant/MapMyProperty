import MapView from 'arcgis-js-api/views/MapView';
import SketchViewModel from 'arcgis-js-api/widgets/Sketch/SketchViewModel';
import Point from 'arcgis-js-api/geometry/Point';
import { redPolygon, emptyPoint, hollowPolygon } from './Renderers';

const SetupSketchViewModel = (graphicsLayer: any, mapView: MapView): __esri.SketchViewModel => {
    return new SketchViewModel({
        view: mapView,
        layer: graphicsLayer,
        pointSymbol: emptyPoint,
        polygonSymbol: hollowPolygon.symbol,
        updateOnGraphicClick: true
    });
};

export {SetupSketchViewModel};
