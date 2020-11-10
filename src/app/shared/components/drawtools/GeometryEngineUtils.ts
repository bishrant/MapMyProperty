import {geodesicArea} from 'arcgis-js-api/geometry/geometryEngine';
import Graphic from 'esri/Graphic';

const createAreaLabels = (graphic: Graphic) => {
  const area = geodesicArea(graphic.geometry, 'acres');
  console.log(area);

  return Math.round(area*100)/100 + " acres";
}

export {createAreaLabels};
