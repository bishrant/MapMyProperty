import { Polygon } from 'esri/geometry';
import { geodesicArea  } from 'esri/geometry/geometryEngine';

// Only works with WGS84 (wkid: 4326) and Web Mercator spatial references
const SmallerThanMaxArea = (maxArea : number = 10000, geometry : Polygon, unit : string) => {

    let area:number = geodesicArea(geometry, unit);

    if (area < maxArea)
    {
        return true;
    }

    return false;
}; 

export { SmallerThanMaxArea }