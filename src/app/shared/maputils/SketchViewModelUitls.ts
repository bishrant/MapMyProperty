import MapView from 'arcgis-js-api/views/MapView';
import SketchViewModel from 'arcgis-js-api/widgets/Sketch/SketchViewModel';
import { emptyPoint, hollowPolygon, bluePolygon } from '../../shared/maputils/Renderers';
import Circle from 'esri/geometry/Circle';
import geometryEngine from 'esri/geometry/geometryEngine';
import Acccessor from 'esri/core/Accessor';
import { subclass, declared } from 'esri/core/accessorSupport/decorators';

@subclass('esri.geometry.Circle')
class Circles extends declared(Circle) {
  public toJS() {
    const cc = this.toJSON();
    cc.centroid = this.centroid;
    cc.extent = this.extent;
    cc.type = this.type;
    cc.new = Math.random();
    return cc;
  }
}




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
      mode: 'click',
    },
    // toggleToolOnClick: false
  });
};

const CircleToJSON = (geom: any) => {

  const properties = ['type', 'geodesic', 'numberOfPoints', 'radius', ]
}

const CreateCircleWithGeometry = (originalGraphic: any, radius: number) => {
  // calculate area to get the radius
  const _area = geometryEngine.planarArea(originalGraphic.geometry, 'square-miles');
  const _areaKM = geometryEngine.planarArea(originalGraphic.geometry, 'square-kilometers');
  const polygonRadius = Math.sqrt(_area / Math.PI);
  const _polygonRadiusKM = Math.sqrt(_areaKM / Math.PI);
  const rr = Math.round((polygonRadius + Number.EPSILON) * 10 / 10)
  // radius = typeof radius === 'undefined' ? 10 : radius;
  // if (Math.abs(radius - polygonRadius) > 2) {
  //   radius = polygonRadius;
  // }
  const c = new Circles({
    center: originalGraphic.geometry.centroid,
    radius: rr,
    radiusUnit: 'miles',
  });
  return c;
};

const CreateCircleFromPoint = (pointGeom: any, radius: number) => {
  const c=  new Circle({
    center: pointGeom,
    radius: radius,
    radiusUnit: 'miles',
  });
  return c;
};
export { SetupSketchViewModel, CreateCircleWithGeometry, CreateCircleFromPoint };
