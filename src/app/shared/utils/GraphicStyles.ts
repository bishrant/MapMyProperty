const LineStyles = [
  'none',
  'solid',
  'dash',
  'short-dot',
  'dot',
  'dash-dot',
  'short-dash-dot-dot',
  'long-dash',
  'long-dash-dot',
  'short-dash',
  'short-dash-dot'
]

const FillStyles = [
  'none',
  'solid',
  'forward-diagonal',
  'backward-diagonal',
  'cross',
  'diagonal-cross',
];

const CheckIfColorIsHollow = (RGBAarray: any) => {
  if (RGBAarray.length === 4) {
    return RGBAarray.filter((c: any) => c === 0).length === 4;
  } else {
    throw new Error('RGBA Expected');
  }
}

const CheckIfColorIsHollowRGBA = (c: any) => {
  return c.r === 0 && c.a === 0 && c.g === 0 && c.b === 0;
}
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

const CreatePointSymbol = (markerProps: any) => {
  return {
    type: 'simple-marker',
    size: markerProps.size,
    style: markerProps.style,
    color: markerProps.color
  }
}

const CreatePolylineSymbol = (outline: any) => {
  return {
    type: 'simple-line',
    color: outline.color,
    style: outline.style,
    width: outline.width
  };
};

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


export {
  LineStyles,
  FillStyles,
  CheckIfColorIsHollow,
  CreateLineSymbol,
  CreatePolygonSymbol,
  CheckIfColorIsHollowRGBA,
  CreatePolylineSymbol,
  CreatePointSymbol
};
