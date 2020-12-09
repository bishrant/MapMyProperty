import { geodesicArea, geodesicLength, planarArea } from 'arcgis-js-api/geometry/geometryEngine';
import Graphic from 'esri/Graphic';

const createAreaLabels = (graphic: Graphic) => {
  const area1 = planarArea(graphic.geometry, 'acres');
  const area = geodesicArea(graphic.geometry, 'acres');
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
  let unit = 'miles';
  let length = geodesicLength(graphic.geometry, unit);
  if (length < 3) {
    unit = 'feet';
    length = geodesicLength(graphic.geometry, unit);
    return numberWithCommas(Math.round(length * 10) / 10) + ' ' + unit;
  }
  return numberWithCommas(Math.round(length * 100) / 100) + ' ' + unit;
}

export { createAreaLabels, createDistanceLabels };
