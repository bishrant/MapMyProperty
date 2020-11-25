import Graphic from 'esri/Graphic';
import { SimpleLineSymbol } from 'esri/symbols';
import { addGraphics } from '../../store/graphics.actions';
import { CreatePolygonFromGraphic, CreatePolygonGraphicWithSymbology, id } from '../../utils/DrawUtils';


var lineStyles = ["dash", "dash-dot", "dot", "long-dash", "long-dash-dot", "long-dash-dot-dot", "none", "short-dash", "short-dash-dot", "short-dash-dot-dot", "short-dot", "solid"];
const OldlineStyles = {
  esriSLSDash: "dash",
  esriSLSDashDotDot: "long-dash-dot-dot",
  esriSLSDashDot: "dash-dot",
  esriSLSDot: "dot",
  esriSLSLongDash: "long-dash",
  esriSLSLongDashDot: "long-dash-dot",
  esriSLSNull: "none",
  esriSLSShortDash: "short-dash",
  esriSLSShortDashDot: "short-dash-dot",
  esriSLSShortDashDotDot: "short-dash-dot-dot",
  esriSLSShortDot: "short-dot",
  esriSLSSolid: "solid"
};
const getLineStyle = (outline: any) => {
  const _outline = { color: outline.color, style: outline.style, width: outline.width }
  if (!(lineStyles.includes(outline.style))) {
    const _oldStyle = OldlineStyles[outline.style];
    if (typeof _oldStyle === undefined) {
      _outline.style = 'solid'
    } else {
      _outline.style = _oldStyle;
    }
  }
  return _outline;
}

const getFillStyle = (fill: any) => {
  const c = fill.color;
  return {color: {r: c[0], g: c[1], b: c[2], a: 1-c[3]/255}, style: 'solid'}
}

const setAttributes = (graphic) => {
  return { "id": id(), "geometryType": "polygon", "radius": 0 };
}

const convertMMPJSONToGraphics = (json: any, mapView: __esri.MapView, store: any) => {
  let gArray = [];
  let j = { "boundary": [{ "symbol": { "color": [255, 255, 0, 255], "outline": { "color": [255, 255, 0, 255], "width": 3, "type": "esriSLS", "style": "esriSLSSolid", "marker": null }, "type": "esriSFS", "style": "esriSFSNull" }, "geometry": { "rings": [[[-11149383.210050084, 3901277.595113831], [-11078449.647801459, 3803438.198908832], [-11110247.451568084, 3755741.493258895], [-11220316.772298709, 3744734.5611858326], [-11149383.210050084, 3901277.595113831]]], "spatialReference": { "wkid": 102100 } }, "geometryType": "polygon", "attributes": { "area": "2,020,484.6", "id": "drawArea", "uniqueId": "draw_160632019482226" } }], "lines": [{ "symbol": { "color": [255, 255, 0, 255], "width": 3, "type": "esriSLS", "style": "esriSLSSolid", "marker": null }, "geometry": { "paths": [[[-11028306.957246397, 3895162.6328510186], [-11034421.91950921, 3678692.968747458]]], "spatialReference": { "wkid": 102100 } }, "geometryType": "polyline", "attributes": { "distance": "113.45", "id": "drawLine", "uniqueId": "draw_160632019953058" } }], "circle": [], "pointsOfInterest": [], "labels": [], "ranchFeatures": [], "ranchLabels": [], "formParams": { "ranchName": "", "ranchCounty": "", "ownerInput": "", "ownerPhone": "", "managerInput": "", "managerPhone": "", "email": "", "wmp": [], "ltp": [], "kshp": [], "pnr": [] } };
  if (j.boundary.length > 0) {

    j.boundary.forEach((p: any) => {
      const pp = Graphic.fromJSON(p);
      pp.attributes = setAttributes(pp);

      let tt = CreatePolygonFromGraphic(pp,
        getLineStyle(p.symbol.outline),
        getFillStyle(p.symbol));
      console.log(tt);
      gArray.push(JSON.stringify(tt));
    });

  }
  if (j.lines.length > 0) {

  }
  if (j.circle.length > 0) {
    // create circle

  }
  if (j.pointsOfInterest.length > 0) {

  }

  setTimeout(() => {
    store.dispatch(addGraphics({ graphics: gArray }));
  }, 100);

  console.log(gArray);
  return gArray;

}

export { convertMMPJSONToGraphics };


const CreatePolygonSymbol = (outline: any, fill: any) => {
  return {
    type: 'simple-fill',
    color: fill.color,
    style: fill.style,
    outline: {
      color: outline.color ? outline.color : 'transparent',
      width: outline.width,
      style: outline.style
    }
  };
}
