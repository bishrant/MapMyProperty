const RGBToHex = rgba => {
  let r = rgba[0].toString(16);
  let g = rgba[1].toString(16);
  let b = rgba[2].toString(16);

  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;

  return "#" + r + g + b;
};

const HexToRGB  = (hex) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null;
}

const HexToRGBA = (hex, alpha) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
      a: alpha/100
      }
    : null;
};
const HexToRGBAArray = (hex, alpha) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? "rgba("+parseInt(result[1], 16) + "," +parseInt(result[2], 16)+  ","+ parseInt(result[3], 16) + ","+ alpha / 100 +")"
    : [0,0,0,0];
};
export { RGBToHex, HexToRGB, HexToRGBA, HexToRGBAArray };