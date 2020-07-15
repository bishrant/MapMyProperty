import webMercatorUtils = require("esri/geometry/support/webMercatorUtils")
import { Point, Polyline, Polygon } from 'esri/geometry';
import Graphic = require('esri/Graphic');
import { RGBAObjectToABGR } from '../../utils/Colors';

const pointGraphicToKML = (gJson: any) => {
    var name = gJson.attributes.text ? gJson.attributes.text : "";
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
    var lineStyle = '<Style><LineStyle><color>'+color+'</color><width>'+width+'</width></LineStyle></Style>';
    var _KML = "<Placemark>\n";
    _KML += name === "" ? "" : "<name>" + name + "</name>\n";
    _KML += "<name>"+name+"</name>"+lineStyle+"\n<LineString>\n<coordinates>\n";
    for (var j = 0; j < _g.paths[0].length; j++) {
        _KML = _KML + _g.paths[0][j].toString() + " "
    }
    _KML = _KML + "\n</coordinates>\n</LineString>\n</Placemark>\n";
    return _KML;
}

const areaGraphicsToKML= (gJson: any) => {
    const geom = new Polygon(gJson.geometry);
    const g = new Graphic({
      geometry: geom,
      attributes: gJson.attributes,
      symbol: gJson.attributes.symbol
    });
    const fillStyle = `<PolyStyle><color>${RGBAObjectToABGR(gJson.attributes.symbol.color)}</color><fill>1</fill></PolyStyle>`;
    const lineStyle = `<Style><LineStyle><color>${RGBAObjectToABGR(gJson.attributes.symbol.outline.color)}</color>
                        <width>${gJson.attributes.symbol.outline.width}</width></LineStyle></Style>`;
    var polygonstyle = `<Style>${lineStyle}${fillStyle}</Style>`;
    var _g = webMercatorUtils.webMercatorToGeographic(g.geometry) as any;
    let _KML = '';
    for (var i = 0; i < _g.rings.length; i++) {
        _KML += "<Placemark>\n<name>"+name+"</name>"+polygonstyle+"\n<Polygon>\n<tessellate>1</tessellate>\n<outerBoundaryIs>\n<LinearRing>\n<coordinates>\n";
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

export { pointGraphicToKML, mergePlacemarksToKML, lineGraphicsToKML, areaGraphicsToKML };

// var zipfile;
//             var polygonstyle='<Style><LineStyle><color>ff0000ff</color></LineStyle><PolyStyle><color>ff0000ff</color><fill>0</fill></PolyStyle></Style>';
//             var lineStyle = '<Style><LineStyle><color>ffff00ff</color></LineStyle></Style>';


//             function areaGraphicsToKML(graphic, name) {
//                 name = "Area"
//                 var poly = webMercatorUtils.webMercatorToGeographic(graphic.geometry);
//                 var _KML ="";
//                 for (var i2 = 0; i2 < poly.rings.length; i2++) {
//                     _KML += "<Placemark>\n<name>"+name+"</name>"+polygonstyle+"\n<Polygon>\n<tessellate>1</tessellate>\n<outerBoundaryIs>\n<LinearRing>\n<coordinates>\n";
//                     for (var j1 = 0; j1 < poly.rings[i2].length; j1++) {
//                         var mp2 = new Point(poly.getPoint(i2, j1))
//                         _KML = _KML + mp2.x.toString() + "," + mp2.y.toString() + " ";
//                     }
//                     _KML += "\n</coordinates>\n</LinearRing>\n</outerBoundaryIs>\n</Polygon>\n</Placemark>\n";
//                 }
//                 return _KML;
//             }
//             function lineGraphicsToKML(graphic, name) {
//                 name = "Lines"
//                 var geographicGeometry = webMercatorUtils.webMercatorToGeographic(graphic.geometry);
//                 var _KML ="";
//                 _KML = _KML + "<Placemark>\n<name>"+name+"</name>"+lineStyle+"\n<LineString>\n<coordinates>\n";
//                 for (var j = 0; j < geographicGeometry.paths[0].length; j++) {
//                     _KML = _KML + geographicGeometry.paths[0][j].toString() + " "
//                 }
//                 _KML = _KML + "\n</coordinates>\n</LineString>\n</Placemark>\n";
//                 return _KML;
//             }
//             function ranchGraphicsToKML(graphic) {
//                 var name = graphic.attributes.id.split("ranchToolBtn")[1];
//                 var gType = graphic.geometry.type.toLowerCase();
//                 return  gType === "point" ? pointGraphicsToKML(graphic, name) : 
//                 gType === "polygon" ? areaGraphicsToKML(graphic, name) : 
//                 gType === "polyline" ? lineGraphicsToKML(graphic, name) : "";
//             }
//             if (radiobuttonclicked == "shp") { exportToShapefile()  }
//             if (radiobuttonclicked == "kml") {
//                 var KML = '<?xml version="1.0" encoding="UTF-8"?>\n<kml xmlns="http://www.opengis.net/kml/2.2" xmlns:gx="http://www.google.com/kml/ext/2.2" xmlns:kml="http://www.opengis.net/kml/2.2" xmlns:atom="http://www.w3.org/2005/Atom">\n<Document>';
//                 if (pointsgraphicslayer.graphics.length > 0) {
//                     KML += '\n<Folder><name>Point Features</name>\n'
//                     for (var i = 0; i < pointsgraphicslayer.graphics.length; i++) {
//                         KML += pointGraphicsToKML(pointsgraphicslayer.graphics[i]);
//                     }
//                     KML = KML + "</Folder>";
//                 }
//                 if (ranchGraphicsLayer.graphics.length > 0) {
//                     KML += '\n<Folder><name>Ranch Features</name>\n'
//                     for (var i = 0; i < ranchGraphicsLayer.graphics.length; i++) {
//                         KML += ranchGraphicsToKML(ranchGraphicsLayer.graphics[i]);
//                     }
//                     KML = KML + "</Folder>";
//                 }
//                 if (linesgraphicslayer.graphics.length > 0) {
//                     KML += '\n<Folder><name>Line Features</name>\n'
//                     for (var i = 0; i < linesgraphicslayer.graphics.length; i++) {
//                         KML += lineGraphicsToKML(linesgraphicslayer.graphics[i]);
//                     }
//                     KML = KML + "</Folder>";
//                 }
//                 if ((areasgraphicslayer.graphics.length > 0 )) {
//                     KML += '\n<Folder><name>Area Features</name>\n'
//                     for (i = 0; i < areasgraphicslayer.graphics.length; i++) {
//                         KML += areaGraphicsToKML(areasgraphicslayer.graphics[i]);
//                     }
//                     KML = KML + "</Folder>";
//                 }
//                 if (circlegraphicslayer.graphics.length > 0) {
//                     KML += '\n<Folder><name>Circle Features</name>\n'
//                     for (i = 0; i < circlegraphicslayer.graphics.length; i++) {
//                         KML += areaGraphicsToKML(circlegraphicslayer.graphics[i]);
//                     }
//                     KML = KML + "</Folder>";
//                 }
//                 KML = KML + "\n</Document>\n</kml>";
//                 var kmlBlob = new Blob([KML], {type: 'text/html;charset=utf-8'});
//                 saveAs(kmlBlob, "MapMyProperty_KML.kml");
//             }
//             function exportToShapefile() {
//                 var boundariesitemsGraphics = [];
//                 var linesitemsGraphics = [];
//                 var pointsitemsGraphics = [];
//                 if (pointsgraphicslayer.graphics.length > 0) {
//                     for (i = 0; i < pointsgraphicslayer.graphics.length; i++) {
//                         pointorder = 0
//                         graphicChecked = pointsgraphicslayer.graphics[i];
//                         if (graphicChecked.attributes == null) {
//                             _featureId = "drawPointOfInterest"
//                             _uniqueId = "draw_" + Date.now() + '' + Math.floor(Math.random() * 100)
//                              // pointorder + 10 was the only way I could get for the order to stay at zero
//                             pointsgraphicslayer.graphics[i].attributes = {
//                                 id: _featureId, uniqueId: _uniqueId, order:  pointorder + 10
//                             };
//                         }
//                         }
//                     pointsgraphicslayer.graphics.forEach(function(p) {
//                         pointsitemsGraphics.push(p);
//                     })
//                 }
//                 if (linesgraphicslayer.graphics.length > 0) {
//                     linesgraphicslayer.graphics.forEach(function(l) {
//                         linesitemsGraphics.push(l);
//                     })
//                 }
//                 if (areasgraphicslayer.graphics.length > 0) {
//                     areasgraphicslayer.graphics.forEach(function(a) {
//                         boundariesitemsGraphics.push(a);
//                     })
//                 }
//                 if (circlegraphicslayer.graphics.length > 0) {
//                     circlegraphicslayer.graphics.forEach(function (a) {
//                         boundariesitemsGraphics.push(a);
//                     })
//                 }
//                 if (ranchGraphicsLayer.graphics.length > 0) {
//                     for (var ranchId = 0; ranchId < ranchGraphicsLayer.graphics.length; ranchId++) {
//                         var ranch = ranchGraphicsLayer.graphics[ranchId];
//                         switch (ranch.geometry.type) {
//                             case "point":
//                                 pointsitemsGraphics.push(ranch);
//                                 break;
//                             case "polyline":
//                                 linesitemsGraphics.push(ranch);
//                                 break;
//                             case "polygon":
//                                 boundariesitemsGraphics.push(ranch);
//                                 break;
//                             default:
//                                 break;
//                         }
//                     }
//                 }
//                 if (boundariesitemsGraphics.length > 0) {
//                     coordSystem = 'PROJCS["WGS_1984_Web_Mercator_Auxiliary_Sphere", GEOGCS["GCS_WGS_1984", DATUM["D_WGS_1984", SPHEROID["WGS_1984", 6378137.0, 298.257223563]], PRIMEM["Greenwich", 0.0], UNIT["Degree", 0.0174532925199433]], PROJECTION["Mercator_Auxiliary_Sphere"], PARAMETER["False_Easting", 0.0], PARAMETER["False_Northing", 0.0], PARAMETER["Central_Meridian", 0.0], PARAMETER["Standard_Parallel_1", 0.0], PARAMETER["Auxiliary_Sphere_Type", 0.0], UNIT["Meter", 1.0]]';
//                     var zip = new JSZip();
//                     var outputObject = window.JS2Shapefile.createShapeFiles(boundariesitemsGraphics, 'UTF8', coordSystem);
//                     for (var createdFile in outputObject) {
//                         if (outputObject[createdFile]['successful']) {
//                             for (var fileInShape in outputObject[createdFile]['shapefile']) {
//                                 zip.file(outputObject[createdFile]['shapefile'][fileInShape]['name'], outputObject[createdFile]['shapefile'][fileInShape]['blob']);
//                             }
//                         }
//                     }
//                     zip.generateAsync({ type: "arraybuffer" })
//                         .then(function (arraybuffer) {
//                            var areablob = new Blob([arraybuffer], {
//                                 'type': 'application/zip'
//                             });
//                             zipfile.file('MapMyProperty_SHP_Areas.zip', areablob);

//                         });
//                 }
//                 if (pointsitemsGraphics.length > 0) {
//                     coordSystem = 'PROJCS["WGS_1984_Web_Mercator_Auxiliary_Sphere", GEOGCS["GCS_WGS_1984", DATUM["D_WGS_1984", SPHEROID["WGS_1984", 6378137.0, 298.257223563]], PRIMEM["Greenwich", 0.0], UNIT["Degree", 0.0174532925199433]], PROJECTION["Mercator_Auxiliary_Sphere"], PARAMETER["False_Easting", 0.0], PARAMETER["False_Northing", 0.0], PARAMETER["Central_Meridian", 0.0], PARAMETER["Standard_Parallel_1", 0.0], PARAMETER["Auxiliary_Sphere_Type", 0.0], UNIT["Meter", 1.0]]';
//                     var zip = new JSZip();
//                     var outputObject = window.JS2Shapefile.createShapeFiles(pointsitemsGraphics, 'UTF8', coordSystem);
//                     for (var createdFile in outputObject) {
//                         if (outputObject[createdFile]['successful']) {
//                             for (var fileInShape in outputObject[createdFile]['shapefile']) {
//                                 zip.file(outputObject[createdFile]['shapefile'][fileInShape]['name'], outputObject[createdFile]['shapefile'][fileInShape]['blob']);
//                             }
//                         }
//                     }

//                     zip.generateAsync({ type: "arraybuffer" })
//                         .then(function (arraybuffer) {
//                            var pointblob = new Blob([arraybuffer], {
//                                 'type': 'application/zip'
//                             });
//                             zipfile.file('MapMyProperty_SHP_Points.zip', pointblob);

//                         });
//                 }
//                 if (linesitemsGraphics.length > 0) {
//                     coordSystem = 'PROJCS["WGS_1984_Web_Mercator_Auxiliary_Sphere", GEOGCS["GCS_WGS_1984", DATUM["D_WGS_1984", SPHEROID["WGS_1984", 6378137.0, 298.257223563]], PRIMEM["Greenwich", 0.0], UNIT["Degree", 0.0174532925199433]], PROJECTION["Mercator_Auxiliary_Sphere"], PARAMETER["False_Easting", 0.0], PARAMETER["False_Northing", 0.0], PARAMETER["Central_Meridian", 0.0], PARAMETER["Standard_Parallel_1", 0.0], PARAMETER["Auxiliary_Sphere_Type", 0.0], UNIT["Meter", 1.0]]';
//                     var zip = new JSZip();
//                     var outputObject = window.JS2Shapefile.createShapeFiles(linesitemsGraphics, 'UTF8', coordSystem);
//                     for (var createdFile in outputObject) {
//                         if (outputObject[createdFile]['successful']) {
//                             for (var fileInShape in outputObject[createdFile]['shapefile']) {
//                                 zip.file(outputObject[createdFile]['shapefile'][fileInShape]['name'], outputObject[createdFile]['shapefile'][fileInShape]['blob']);
//                             }
//                         }
//                     }
//                     zip.generateAsync({ type: "arraybuffer" })
//                         .then(function (arraybuffer) {
//                            var lineblob = new Blob([arraybuffer], {
//                                 'type': 'application/zip'
//                             });
//                             zipfile.file('MapMyProperty_SHP_Lines.zip', lineblob);
//                         });
//                 }
//                 var timeout = setTimeout(function () {
//                     _generateZipFile(zipfile, "MapMyProperty_SHP.zip");
//                 }, 200);
//             }
//             function areaGraphicsToGPX(feature) {
//                 var gpxgeographicGeometry = webMercatorUtils.webMercatorToGeographic(feature.geometry);
//                 var gpxpoly = new Polygon(gpxgeographicGeometry);
//                 var _gpx = '';
//                 for (var gpxi2 = 0; gpxi2 < gpxpoly.rings.length; gpxi2++) {
//                     _gpx = _gpx + '<trk>\n<name>area</name><number>1</number>\n<trkseg>\n';
//                     for (var gpxi1 = 0; gpxi1 < gpxpoly.rings.length; gpxi1++) {
//                         for (gpxj = 0; gpxj < gpxpoly.rings[gpxi1].length; gpxj++) {
//                             var gpxmp = new Point(gpxpoly.getPoint(gpxi1, gpxj))
//                             _gpx = _gpx + '<trkpt lat="' + gpxmp.y.toString() + '" lon="' + gpxmp.x.toString() + '"/>\n';
//                         }
//                     }
//                     _gpx += '</trkseg>\n</trk>\n';
//             }
//             return _gpx;
//             }

//             function pointGraphicsToGPX(feature) {
//                 var gpxgeographicGeometry = webMercatorUtils.webMercatorToGeographic(feature.geometry);
//                 return '<wpt lat="' + gpxgeographicGeometry.y.toString() + '" lon="' + gpxgeographicGeometry.x.toString() + '"></wpt><name>pt</name>\n';
//             }

//             function lineGraphicsToGPX(feature) {
//                var _gpx = '<trk>\n<name>Line</name>\n<trkseg>\n';
//                 var gpxgeographicGeometry = webMercatorUtils.webMercatorToGeographic(feature.geometry);
//                 for (var j = 0; j < gpxgeographicGeometry.paths[0].length; j++) {
//                     var gpxpointx = gpxgeographicGeometry.paths[0][j][0]
//                     var gpxpointy = gpxgeographicGeometry.paths[0][j][1]
//                     _gpx = _gpx + '<trkpt lat="' + gpxpointy.toString() + '" lon="' + gpxpointx.toString() + '"/>\n';
//                 }
//                 _gpx += '</trkseg>\n</trk>\n';
//                 return _gpx;
//             }

//             if (radiobuttonclicked === "gpx") {
//                 var GPX = '<?xml version="1.0" encoding="UTF-8"?>\n<gpx version="1.1" creator="TexasForestInfo.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.topografix.com/GPX/1/1" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">\n<name>MMP</name>';
//                 if (ranchGraphicsLayer.graphics.length > 0) {
//                     for (var ranchId = 0; ranchId < ranchGraphicsLayer.graphics.length; ranchId++) {
//                         var ranch = ranchGraphicsLayer.graphics[ranchId];
//                         switch (ranch.geometry.type) {
//                             case "point":
//                                 GPX += pointGraphicsToGPX(ranch);
//                                 break;
//                             case "polyline":
//                                 GPX += lineGraphicsToGPX(ranch);
//                                 break;
//                             case "polygon":
//                                 GPX += areaGraphicsToGPX(ranch);
//                                 break;
//                             default:
//                                 break;
//                         }
//                     }
//                 }
//                 if (areasgraphicslayer.graphics.length > 0) {
//                     for (var i = 0; i < areasgraphicslayer.graphics.length; i++) {
//                         GPX += areaGraphicsToGPX(areasgraphicslayer.graphics[i]);
//                     }
//                 }
//                 if (linesgraphicslayer.graphics.length > 0) {
//                     for (var i = 0; i < linesgraphicslayer.graphics.length; i++) {
//                         GPX += lineGraphicsToGPX(linesgraphicslayer.graphics[i]);
//                     }
//                 }
//                 if (pointsgraphicslayer.graphics.length > 0) {
//                     for (var i = 0; i < pointsgraphicslayer.graphics.length; i++) {
//                         GPX += pointGraphicsToGPX(pointsgraphicslayer.graphics[i]);
//                     }
//                 }

//                 GPX +=" </gpx>";
//                 var gpxBlob = new Blob([GPX], {type: 'text/html;charset=utf-8'});
//                 saveAs(gpxBlob, "MapMyProperty_GPX.gpx");
//             }
//         },

