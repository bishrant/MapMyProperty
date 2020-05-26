/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />
import MapView from 'arcgis-js-api/views/MapView';
import SketchViewModel from 'arcgis-js-api/widgets/Sketch/SketchViewModel';
import { emptyPoint, hollowPolygon, bluePolygon } from '../../shared/maputils/Renderers';
import Circle from 'esri/geometry/Circle';
import geometryEngine from 'esri/geometry/geometryEngine';
import Accessor from 'esri/core/Accessor';
import { subclass, declared } from 'esri/core/accessorSupport/decorators';

@subclass('esri.geometry.Circle')
class TFSCircle extends declared(Circle) {
  public asJSON() {
    const cc = this.toJSON();
    cc.centroid = this.centroid;
    cc.extent = this.extent;
    cc.type = this.type;
    cc.radius = this.radius;
    // need to reset toJSON method so that it doesnot interfer with JSON.stringify
    cc.toJSON = undefined;
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

const CreateCircleWithGeometry = (originalGraphic: any) => {
  // calculate area to get the radius
  const _area = geometryEngine.planarArea(originalGraphic.geometry, 'square-miles');
  const polygonRadius = Math.sqrt(_area / Math.PI);
  const rr = Math.round(((polygonRadius + Number.EPSILON) * 10) / 10);
  const c = new TFSCircle({
    center: originalGraphic.geometry.centroid,
    radius: rr,
    radiusUnit: 'miles',
  });
  return c;
};

const CreateCircleFromPoint = (pointGeom: any, radius: number) => {
  const c = new TFSCircle({
    center: pointGeom,
    radius: radius,
    radiusUnit: 'miles',
  });
  return c;
};
export { SetupSketchViewModel, CreateCircleWithGeometry, CreateCircleFromPoint };
