import MapView from 'arcgis-js-api/views/MapView';
import SketchViewModel from 'arcgis-js-api/widgets/Sketch/SketchViewModel';
import { emptyPoint, hollowPolygon, bluePolygon } from '../../shared/maputils/Renderers';
import Circle from 'esri/geometry/Circle';
import geometryEngine from 'esri/geometry/geometryEngine';

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
    defaultCreateOptions: {
      mode: 'hybrid',
    },
    // toggleToolOnClick: false
  });
};

const CreateCircleWithGeometry = (originalGraphic: any, radius: number) => {
  // calculate area to get the radius
  const _area = geometryEngine.planarArea(originalGraphic.geometry, 'square-miles');
  const _areaKM = geometryEngine.planarArea(originalGraphic.geometry, 'square-kilometers');
  const polygonRadius = Math.sqrt(_area / Math.PI);
  const _polygonRadiusKM = Math.sqrt(_areaKM / Math.PI);
  radius = typeof radius === 'undefined' ? 10 : radius;
  if (Math.abs(radius - polygonRadius) > 2) {
    radius = polygonRadius;
  }
  return new Circle({
    center: originalGraphic.geometry.centroid,
    radius: radius,
    radiusUnit: 'miles',
  });
};

export { SetupSketchViewModel, CreateCircleWithGeometry };
