import MapView from 'arcgis-js-api/views/MapView';
import SketchViewModel from 'arcgis-js-api/widgets/Sketch/SketchViewModel';
import { emptyPoint, bluePolygon } from './Renderers';
import Circle from 'esri/geometry/Circle';
import {planarArea} from 'esri/geometry/geometryEngine';
import { subclass } from 'esri/core/accessorSupport/decorators';
import { Polygon, Polyline } from 'esri/geometry';

@subclass('esri.geometry.Circle')
class TFSCircle extends Circle {
  public asJSON() {
    const cc = this.toJSON();
    cc.centroid = this.centroid;
    cc.extent = this.extent;
    cc.type = this.type;
    cc.radius = this.radius;
    cc.spatialReference = this.spatialReference;
    // need to reset toJSON method so that it doesnot interfer with JSON.stringify
    cc.toJSON = undefined;
    return cc;
  }
}

@subclass('esri.geometry.Polygon')
class TFSPolygon extends Polygon {
  public asJSON() {
    const cc = this.toJSON();
    cc.extent = this.extent;
    cc.type = this.type;
    cc.spatialReference = this.spatialReference;
    cc.rings = this.rings;
    cc.hasM = this.hasM;
    cc.hasZ = this.hasZ;
    cc.toJSON = undefined;
    return cc;
  }
}

@subclass('esri.geometry.Polyline')
class TFSPolyline extends Polyline {
  public asJSON() {
    const cc = this.toJSON();
    cc.extent = this.extent;
    cc.type = this.type;
    cc.spatialReference = this.spatialReference;
    cc.paths = this.paths;
   
    cc.toJSON = undefined;
    return cc;
  }
  constructor(props) {
    super(props);
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
  const _area = planarArea(originalGraphic.geometry, 'square-miles');
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
export { SetupSketchViewModel, CreateCircleWithGeometry, CreateCircleFromPoint, TFSPolygon, TFSPolyline };
