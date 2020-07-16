import webMercatorUtils = require("esri/geometry/support/webMercatorUtils")
import { Point, Polyline, Polygon } from 'esri/geometry';
import  Graphic = require('esri/Graphic');
import { RGBAObjectToABGR } from '../../utils/Colors';
import { kml } from './kml';
import { convertFeatureCollectionToGraphics } from './FeatureCollectionUtils';

const pointGraphicToKML = (gJson: any) => {
    var name = gJson.attributes.geometryType === 'text' ? gJson.attributes.symbol.text : "";
    const geom = new Point(gJson.geometry);
    const g = new Graphic({
        geometry: geom,
        attributes: gJson.attributes,
        symbol: gJson.attributes.symbol
    });
    var _g = webMercatorUtils.webMercatorToGeographic(g.geometry) as any;
    var _KML = "<Placemark>\n";

    _KML += name === "" ? "" : "<name>" + name + "</name>\n";
    _KML += "<Point>\n<coordinates>\n";
    _KML += _g.x.toString() + "," + _g.y.toString() + " ";
    _KML += "\n</coordinates>\n</Point>\n</Placemark>\n";
    return _KML;
}

const lineGraphicsToKML = (gJson: any) => {
    const geom = new Polyline(gJson.geometry);
    const g = new Graphic({
        geometry: geom,
        attributes: gJson.attributes,
        symbol: gJson.attributes.symbol
    });
    var _g = webMercatorUtils.webMercatorToGeographic(g.geometry) as any;
    var color = RGBAObjectToABGR(gJson.attributes.symbol.color);
    var width = gJson.attributes.symbol.width;
    var lineStyle = '<Style><LineStyle><color>' + color + '</color><width>' + width + '</width></LineStyle></Style>';
    var _KML = "<Placemark>\n";
    _KML += name === "" ? "" : "<name>" + name + "</name>\n";
    _KML += "<name>" + name + "</name>" + lineStyle + "\n<LineString>\n<coordinates>\n";
    for (var j = 0; j < _g.paths[0].length; j++) {
        _KML = _KML + _g.paths[0][j].toString() + " "
    }
    _KML = _KML + "\n</coordinates>\n</LineString>\n</Placemark>\n";
    return _KML;
}

const areaGraphicsToKML = (gJson: any) => {
    const geom = new Polygon(gJson.geometry);
    const g = new Graphic({
        geometry: geom,
        attributes: gJson.attributes,
        symbol: gJson.attributes.symbol
    });
    const fillStyle = `<PolyStyle><color>${RGBAObjectToABGR(gJson.attributes.symbol.color)}</color><fill>1</fill></PolyStyle>`;
    const lineStyle = `<LineStyle><color>${RGBAObjectToABGR(gJson.attributes.symbol.outline.color)}</color>
                        <width>${gJson.attributes.symbol.outline.width}</width></LineStyle>`;
    var polygonstyle = `<Style>${lineStyle}${fillStyle}</Style>`;
    var _g = webMercatorUtils.webMercatorToGeographic(g.geometry) as any;
    let _KML = '';
    for (var i = 0; i < _g.rings.length; i++) {
        _KML += "<Placemark>\n<name>" + name + "</name>" + polygonstyle + "\n<Polygon>\n<tessellate>1</tessellate>\n<outerBoundaryIs>\n<LinearRing>\n<coordinates>\n";
        for (var j1 = 0; j1 < _g.rings[i].length; j1++) {
            var mp2 = new Point(_g.getPoint(i, j1))
            _KML = _KML + mp2.x.toString() + "," + mp2.y.toString() + " ";
        }
        _KML += "\n</coordinates>\n</LinearRing>\n</outerBoundaryIs>\n</Polygon>\n</Placemark>\n";
    }
    return _KML;
}

const mergePlacemarksToKML = (placeMarks: any[]) => {
    var KML = '<?xml version="1.0" encoding="UTF-8"?><kml xmlns="http://www.opengis.net/kml/2.2">\n<Document>\n';
    var places = placeMarks.join("\n");
    return KML + places + "\n</Document>\n</kml>";
}

const kmlToGeoJson = (xml: any) => {
    const _xml = new DOMParser().parseFromString(xml, "text/xml");
    const featureCollection = kml(_xml, { styles: true });
    return convertFeatureCollectionToGraphics(featureCollection); 
}

export { pointGraphicToKML, mergePlacemarksToKML, lineGraphicsToKML, areaGraphicsToKML, kmlToGeoJson };
