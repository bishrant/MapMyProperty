import { geodesicArea, geodesicLength } from '@arcgis/core/geometry/geometryEngine';
import Graphic from '@arcgis/core/Graphic';

const createAreaLabels = (graphic: Graphic) => {
  const area = geodesicArea(graphic.geometry as any, 'acres');
  if (area < 0.1) {
    return numberWithCommas(Math.round(area * 100) / 100) + ' acres';
  }
  if (area > 1000) {
    return numberWithCommas(Math.round(area)) + ' acres';
  }
  return numberWithCommas(Math.round(area * 10) / 10) + ' acres';
}

function numberWithCommas (x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const createDistanceLabels = (graphic: Graphic) => {
  let unit: any = 'miles';
  let length = geodesicLength(graphic.geometry, unit);
  if (length < 3) {
    unit = 'feet';
    length = geodesicLength(graphic.geometry, unit);
    return numberWithCommas(Math.round(length * 10) / 10) + ' ' + unit;
  }
  return numberWithCommas(Math.round(length * 100) / 100) + ' ' + unit;
}

export { createAreaLabels, createDistanceLabels };
