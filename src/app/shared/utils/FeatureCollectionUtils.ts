import { defaultPointSymbol, defaultTextSymbol, defaultLineSymbol, defaultPolygonSymbol } from './DefaultSymbols';
import Point from '@arcgis/core/geometry/Point';
import Graphic from '@arcgis/core/Graphic';
import Polyline from '@arcgis/core/geometry/Polyline';
import Polygon from '@arcgis/core/geometry/Polygon';
import { id } from '../store/todo';
import * as webMercatorUtils from '@arcgis/core/geometry/support/webMercatorUtils';

const createPolygonGraphic = (coordinates: any) => {
  const polygonAttributes: any = {
    id: id(),
    geometryType: 'polygon',
    symbol: defaultPolygonSymbol
  };
  let polygonGeom: any = new Polygon({
    rings: coordinates,
    spatialReference: { wkid: 4326 }
  });
  polygonGeom = webMercatorUtils.geographicToWebMercator(polygonGeom);
  const _polygonGraphicJson: any = new Graphic({
    geometry: polygonGeom,
    attributes: polygonAttributes,
    symbol: defaultPolygonSymbol
  });
  const polygonGraphicJson: any = _polygonGraphicJson.toJSON();
  polygonGraphicJson.symbol = defaultPolygonSymbol;
  polygonGraphicJson.geometry.type = 'polygon';
  return polygonGraphicJson;
}

const convertFeatureCollectionToGraphics = (featureCollection: any) => {
  const graphicArray: any = [];
  featureCollection.features.forEach((f: any) => {
    switch (f.geometry.type.toLowerCase()) {
      case 'point': {
        const attributes: any = {
          id: id(),
          geometryType: 'point',
          symbol: defaultPointSymbol
        };
        const coords: any = f.geometry.coordinates;
        let geom: any = new Point({
          longitude: coords[0],
          latitude: coords[1],
          spatialReference: { wkid: 4326 }
        });
        geom = webMercatorUtils.geographicToWebMercator(geom);
        const _graphicJson = new Graphic({
          geometry: geom,
          attributes: attributes,
          symbol: defaultPointSymbol
        });
        const graphicJson: any = _graphicJson.toJSON();
        graphicJson.symbol = defaultPointSymbol;
        graphicJson.geometry.type = 'point';
        graphicArray.push(JSON.stringify(graphicJson));

        if (typeof f.properties !== 'undefined') {
          if (typeof f.properties.name !== 'undefined' && f.properties.name !== '') {
            const textSymbol = defaultTextSymbol;
            textSymbol.text = f.properties.name;
            graphicJson.attributes = {
              id: id(),
              symbol: textSymbol,
              geometryType: 'text'
            };
            graphicJson.symbol = textSymbol;
            graphicArray.push(JSON.stringify(graphicJson));
          }
        }
        break;
      }

      case 'linestring': {
        const lineAttributes: any = {
          id: id(),
          geometryType: 'polyline',
          symbol: defaultLineSymbol
        };
        let lineGeom: any = new Polyline({
          paths: f.geometry.coordinates,
          spatialReference: { wkid: 4326 }
        });
        lineGeom = webMercatorUtils.geographicToWebMercator(lineGeom);
        const _lineGraphicJson = new Graphic({
          geometry: lineGeom,
          attributes: lineAttributes,
          symbol: defaultLineSymbol
        });
        const lineGraphicJson: any = _lineGraphicJson.toJSON();
        lineGraphicJson.symbol = defaultLineSymbol;
        lineGraphicJson.geometry.type = 'polyline';
        graphicArray.push(JSON.stringify(lineGraphicJson));
        break;
      }

      case 'polygon': {
        const _p = createPolygonGraphic(f.geometry.coordinates)
        graphicArray.push(JSON.stringify(_p));
        break;
      }

      case 'multipolygon': {
        for (let index = 0; index < f.geometry.coordinates.length; index++) {
          const cr = f.geometry.coordinates[index];
          const _p = createPolygonGraphic(cr)
          graphicArray.push(JSON.stringify(_p));
        }
        break;
      }

      default:
        break;
    }
  });
  return graphicArray;
};

export { convertFeatureCollectionToGraphics };
