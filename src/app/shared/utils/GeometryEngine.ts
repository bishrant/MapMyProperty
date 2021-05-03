import Collection from '@arcgis/core/core/Collection';
import { Polygon, Point, Polyline } from '@arcgis/core/geometry';
import { geodesicArea, equals, geodesicLength } from '@arcgis/core/geometry/geometryEngine';
import Graphic from '@arcgis/core/Graphic';

// Only works with WGS84 (wkid: 4326) and Web Mercator spatial references
const GreaterThanMaxArea = (geometry : any, maxArea : number = 10000, unit : any) => {
  const area:number = geodesicArea(geometry, unit);

  if (area > maxArea) {
    return true;
  }

  return false;
};

const AreGraphicsEqual = (existing: any, updated: any) => {
  let geomEqual = false;
  switch (existing.geometry.type) {
    case 'point':
      geomEqual = equals(Point.fromJSON(existing.geometry), Point.fromJSON(updated.geometry));
      break;

    case 'polygon':
      geomEqual = equals(Polygon.fromJSON(existing.geometry), Polygon.fromJSON(updated.geometry));
      break;
    case 'polyline':
      geomEqual = equals(Polyline.fromJSON(existing.geometry), Polyline.fromJSON(updated.geometry));
      break;

    default:
      break;
  }

  const a1 = existing.attributes;
  const a2 = updated.attributes;
  let attribEqual = false;
  if (Object.keys(a1).length === Object.keys(a2).length) {
    for (const key in a1) {
      if (a1[key] === a2[key]) {
        continue;
      } else {
        attribEqual = false;
        break;
      }
    }
  } else {
    attribEqual = false;
  }

  return geomEqual && attribEqual;
}

const GetFeaturesLength = (graphics: Collection<Graphic>) => {
  const reducer = (accumulator, currentValue) => accumulator + geodesicLength(currentValue.geometry, 'feet');
  return graphics.reduce(reducer, 0);
};

const GetFeaturesAreaAcres = (graphics: Collection<Graphic>) => {
  const reducer = (accumulator, currentValue) => accumulator + geodesicArea(currentValue.geometry, 'acres');
  return graphics.reduce(reducer, 0);
};

const ConvertSquareMetersToAcres = (sqmt:number) => {
  return sqmt * 0.00024710538146717;
};

export { GreaterThanMaxArea, AreGraphicsEqual, GetFeaturesLength, GetFeaturesAreaAcres, ConvertSquareMetersToAcres }
