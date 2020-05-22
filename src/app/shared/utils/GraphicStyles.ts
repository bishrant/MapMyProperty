import { HexToRGBA, HexToRGBAArray } from './Colors';

const LineStyles = {
  esriSLSSolid: 'solid',
  esriSLSDash: 'dash',
  esriSLSShortDot: 'short-dot',
  esriSLSDot: 'dot',
  esriSLSDashDot: 'dash-dot',
  esriSLSShortDashDotDot: 'short-dash-dot-dot',
  esriSLSLongDash: 'long-dash',
  esriSLSLongDashDot: 'long-dash-dot',
  esriSLSShortDash: 'short-dash',
  // esriSLSDashDotDot: "dash-dot-dot",
  esriSLSShortDashDot: 'short-dash-dot',
  esriSLSNull: 'none'
};

const CheckIfColorIsHollow = (RGBAarray) => {
  if (RGBAarray.length === 4) {
    return RGBAarray.filter(c => c === 0).length === 4;
  } else {
    throw new Error('RGBA Expected');
  }
}

const CheckIfColorIsHollowRGBA = (c) => {
  return c.r === 0 && c.a === 0 && c.g === 0 && c.b === 0;
}
const CreatePolygonSymbol = (outline: any, fill: any) => {
  // console.log(outline, fill)
    return {
      type: 'simple-fill',
      color: fill.color,
      style: fill.style,
      outline: {
        color: outline.color ? outline.color : 'transparent',
        width: outline.width,
        style: outline.style,
      },
    };
}

const CreateLineSymbol = (outline: any) => {
  return {
      type: 'simple-line',
      color: outline.color,
      width: outline.width,
      style: outline.style,
      cap: 'round',
      join: 'round'
    };
}

const ColorSwatch = [
  null,
  '#c1800b',
  '#ffffff',
  '#000105',
  '#3e6158',
  '#3f7a89',
  '#96c582',
  '#b7d5c4',
  '#bcd6e7',
  '#7c90c1',
  '#9d8594',
  '#dad0d8',
  '#4b4fce',
  '#4e0a77',
  '#a367b5',
  '#ee3e6d',
  '#d63d62',
  '#c6a670',
  '#f46600',
  '#cf0500',
  '#efabbd',
  '#8e0622',
  '#f0b89a',
  '#f0ca68',
  '#62382f',
  '#c97545'
];
export {
  LineStyles,
  ColorSwatch,
  CheckIfColorIsHollow,
  CreateLineSymbol,
  CreatePolygonSymbol,
  CheckIfColorIsHollowRGBA,
};
