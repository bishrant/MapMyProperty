import {geodesicArea, geodesicLength} from 'arcgis-js-api/geometry/geometryEngine';
import Graphic from 'esri/Graphic';

const createAreaLabels = (graphic: Graphic) => {
  const area = geodesicArea(graphic.geometry, 'acres');
  return Math.round(area*100)/100 + " acres";
}

const createDistanceLabels = (graphic: Graphic) => {
  const area = geodesicLength(graphic.geometry, 'miles');
  return Math.round(area*100)/100 + " miles";
}

export {createAreaLabels, createDistanceLabels};
