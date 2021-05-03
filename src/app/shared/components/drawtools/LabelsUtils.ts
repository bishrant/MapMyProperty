import Point from '@arcgis/core/geometry/Point';
import Graphic from '@arcgis/core/Graphic';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import MapView from '@arcgis/core/views/MapView';
import { CreateTextSymbolForLabels } from './DrawToolUtils';

const syncLabelsToGeometry = (polygonGraphicsLayer: GraphicsLayer, geomLabelsGraphicsLayer: GraphicsLayer, mapView: MapView, textService: any) => {
  const labels = [];
  if (polygonGraphicsLayer.graphics.length < 1) {
    geomLabelsGraphicsLayer.removeAll();
    return;
  }

  polygonGraphicsLayer.graphics.forEach((parent: Graphic) => {
    let anchorPt: Point;
    if (!['polygon', 'polyline'].includes(parent.geometry.type)) return;

    if (parent.geometry.type === 'polygon') {
      anchorPt = (parent.geometry as any).centroid;
    } else {
      const firstPt = (parent.geometry as any).paths[0][0];

      anchorPt = new Point({
        x: firstPt[0],
        y: firstPt[1],
        spatialReference: parent.geometry.spatialReference
      });
    }
    // need to check if the user has deleted the graphic themselves
    // check if the graphics with that parent id already exists
    const specificLabels = geomLabelsGraphicsLayer.graphics.filter(
      (gg) => gg.attributes.parentId === parent.attributes.id
    );

    if (specificLabels.length < 1) {
      const _symbol = CreateTextSymbolForLabels(parent);
      const a = textService.creatGeomLabelGraphic(anchorPt, _symbol, parent);
      labels.push(a);
    } else {
      // check if it was previously deleted
      const _specific = specificLabels.getItemAt(0);
      if (typeof _specific.geometry === 'undefined') {
        labels.push(_specific);
      } else {
        const a = textService.creatGeomLabelGraphic(anchorPt, _specific.attributes.symbol, parent);
        if ((a.geometry as any).latitude === (_specific.geometry as any).latitude && (a.geometry as any).longitude === (_specific.geometry as any).longitude) {
          if (a.symbol.text === (_specific.symbol as any).text) {
            labels.push(_specific);
          } else {
            labels.push(a);
          }
        } else {
          labels.push(a);
        }
      }
    }
  });

  geomLabelsGraphicsLayer.removeAll();
  geomLabelsGraphicsLayer.addMany(labels);
};

export { syncLabelsToGeometry };
