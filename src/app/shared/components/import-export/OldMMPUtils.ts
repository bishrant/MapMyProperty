import { Polyline } from 'esri/geometry';
import Graphic from 'esri/Graphic';
import { CreatePointFromGraphic, CreatePolygonFromGraphic, CreatePolylineFromGraphic, id } from '../../utils/DrawUtils';
import { getPointSvg } from '../pointcontrol/pointSymbols';


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

const OldPointStyles = {
  esriSMSCircle: 'circle',
  esriSMSCross: 'cross',
  esriSMSDiamond: 'diamond',
  esriSMSSquare: 'square',
  esriSMSTriangle: 'triangle',
  esriSMSX: 'x'
}

const getLineStyle = (outline: any) => {
  const _outline = { color: RGBA(outline.color), style: outline.style, width: outline.width }
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

const RGBA = (c: any) => {
  return { r: c[0], g: c[1], b: c[2], a: c[3] / 255 }
}

const RGBAText = (c: any) => {
  const alpha = c[3] === 0 ? 0.1 : c[3]/255;
  return { r: c[0], g: c[1], b: c[2], a: alpha }
}

const RGBA_Hollow = (c: any) => {
  return { r: c[0], g: c[1], b: c[2], a: 0 }
}

const getFillStyle = (fill: any, isHollow: boolean) => {
  const c = fill.color;
  return { color: isHollow ? RGBA_Hollow(c) : RGBA(c), style: 'solid' };
}

const setAttributes = (_geomType: String) => {
  return { "id": id(), "geometryType": _geomType, "radius": 0 };
}
const createGraphicForPolygon = (p: any, isHollow: boolean) => {
  const pp = Graphic.fromJSON(p);
  pp.attributes = setAttributes('polygon');
  const tt = CreatePolygonFromGraphic(pp,
    getLineStyle(p.symbol.outline),
    getFillStyle(p.symbol, isHollow));
  return tt;
}

const createGraphicForPoint = (pt: any) => {
  const ptGr: Graphic = Graphic.fromJSON(pt);
  ptGr.attributes = { "id": id(), "geometryType": "point" }
  const tt = CreatePointFromGraphic(ptGr, CreatePointSymbol(pt.symbol));
  return tt;
}

const createGraphicForLine = (l: any) => {
  const ll: Graphic = Graphic.fromJSON(l);
  ll.attributes = setAttributes('polyline');
  const lines = new Polyline({
    paths: (l.geometry as any).paths,
    spatialReference: { wkid: l.geometry.spatialReference.wkid }
  });

  ll.geometry = lines;

  const tt = CreatePolylineFromGraphic(ll, getLineStyle(l.symbol));
  return tt;
}

const convertMMPJSONToGraphics = (j: any) => {
  let gArray = [];
  if (j.boundary.length > 0) {
    j.boundary.forEach((p: any) => {
      gArray.push(JSON.stringify(createGraphicForPolygon(p, true)));
    });
  }

  if (j.lines.length > 0) {
    j.lines.forEach((l: any) => {
      gArray.push(JSON.stringify(createGraphicForLine(l)));
    })
  }

  if (j.circle.length > 0) {
    j.circle.forEach((p: any) => {
      gArray.push(JSON.stringify(createGraphicForPolygon(p, true)));
    });
  }

  if (j.labels.length > 0) {
    j.labels.forEach((pt: any) => {
      createTextGraphicJSON(pt);
      gArray.push(JSON.stringify(createTextGraphicJSON(pt)));
    })
  }

  if (j.pointsOfInterest.length > 0) {
    j.pointsOfInterest.forEach((pt: any) => {
      gArray.push(JSON.stringify(createGraphicForPoint(pt)));
    })
  }

  //ranch
  if (j.ranchLabels.length > 0) {
    j.ranchLabels.forEach((pt: any) => {
      gArray.push(JSON.stringify(createTextGraphicJSON(pt)));
    })
  }

  if (j.ranchFeatures.length > 0) {
    j.ranchFeatures.forEach((rf: any) => {
      let gr;
      switch (rf.geometryType) {
        case 'point':
          gr = createGraphicForPoint(rf);
          break;
        case 'polyline':
          gr = createGraphicForLine(rf);
          break;
        case 'polygon':
          gr = createGraphicForPolygon(rf, false);
          break;
        default:
          break;
      }
      gArray.push(JSON.stringify(gr));
    })
  }
  return gArray;
}


const CreatePointSymbol = (symbol) => {
  if (symbol.type === 'esriPMS') {
    const _name = symbol.url.split("images/")[1];
    const name = _name === 'watersource.png' ? 'tint' : 'exclamation-triangle';
    const asp = name === 'tint' ? 0.687 : 1.125;
    const _color = name === 'tint' ? { r: 41, g: 171, b: 226, a: 1 } : { r: 248, g: 206, b: 41, a: 1 };
    const url = getPointSvg(name, _color);
    const size = Math.round(parseInt(symbol.width) * 1.3);
    return {
      type: 'picture-marker',
      size: size + 'px',
      url: url,
      width: size + 'px',
      height: Math.round(size/asp) + 'px',
      style: 'circle',
      contentType: 'image/svg',
      name: name,
      color: _color
    }
  } else {
    const size = symbol.size;
    const style = OldPointStyles[symbol.style];
    const color = (typeof symbol.color === 'undefined') ? RGBA(symbol.outline.color) : RGBA(symbol.color);
    return {
      type: 'simple-marker',
      size: size + 'px',
      url: '',
      width: size + 'px',
      height: size + 'px',
      style: style,
      contentType: 'image/svg',
      name: style,
      color: color
    }
  }

};

const createTextGraphicJSON = (labelJSON: any) => {
  const symbol: any = CreateTextSymbolForLabels(labelJSON.symbol);
  const t =
  {
    geometry: {
      x: labelJSON.geometry.x,
      y: labelJSON.geometry.y,
      spatialReference: labelJSON.geometry.spatialReference,
      type: 'point'
    },
    symbol: symbol,
    attributes: {
      geometryType: 'text',
      id: id(),
      parentId: 0,
      readonly: false,
      symbol: symbol
    }

  };
  return t;
}

const CreateTextSymbolForLabels = (symbol: any) => {
  return {
    type: "text",
    color: RGBAText(symbol.color),
    xoffset: 3,
    yoffset: 3,
    font: {
      size: (parseInt(symbol.font.size) === NaN) ? '12px' : Math.round(parseInt(symbol.font.size) * 1.33) + 'px',
      family: 'Arial', //symbol.font.family,
      weight: symbol.font.weight,
      style: symbol.font.style,
      decoration: symbol.font.decoration,

    },
    text: symbol.text,
    lineWidth: '500px',

  }
}

export { convertMMPJSONToGraphics };
