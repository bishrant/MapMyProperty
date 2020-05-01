import MapView from 'arcgis-js-api/views/MapView';
import SketchViewModel from 'arcgis-js-api/widgets/Sketch/SketchViewModel';
import { emptyPoint, hollowPolygon, bluePolygon } from '../../shared/maputils/Renderers';

const SetupSketchViewModel = (graphicsLayer: any, mapView: MapView): __esri.SketchViewModel => {
  return new SketchViewModel({
    view: mapView,
    layer: graphicsLayer,
    pointSymbol: emptyPoint,
    polygonSymbol: bluePolygon.symbol,
    updateOnGraphicClick: true,
    defaultUpdateOptions: {
      enableRotation: false,
      enableScaling: false,
    },
    // toggleToolOnClick: false
  });
};

export { SetupSketchViewModel };
