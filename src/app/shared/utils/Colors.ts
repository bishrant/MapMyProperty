const RGBToHex = (rgba: any) => {
  let r = rgba[0].toString(16);
  let g = rgba[1].toString(16);
  let b = rgba[2].toString(16);

  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;

  return "#" + r + g + b;
};

const HexToRGB  = (hex: any) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null;
}

const HexToRGBA = (hex: any, alpha: any) => {
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
const HexToRGBAArray = (hex: any, alpha: any) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? "rgba("+parseInt(result[1], 16) + "," +parseInt(result[2], 16)+  ","+ parseInt(result[3], 16) + ","+ alpha / 100 +")"
    : [0,0,0,0];
};

function RGBAToHexA(color: any) {
  let r = color.r.toString(16);
  let g = color.g.toString(16);
  let b = color.b.toString(16);
  let a = Math.round(color.a * 255).toString(16);

  if (r.length == 1) r = '0' + r;
  if (g.length == 1) g = '0' + g;
  if (b.length == 1) b = '0' + b;
  if (a.length == 1) a = '0' + a;

  return '#' + r + g + b + a;
}

function RGBAObjectToABGR(color: any) {
  let r = color.r.toString(16);
  let g = color.g.toString(16);
  let b = color.b.toString(16);
  let a = (color.a * 255).toString(16).substring(0, 2);

  if (r.length == 1) r = '0' + r;
  if (g.length == 1) g = '0' + g;
  if (b.length == 1) b = '0' + b;

  return a+b+g+r;
}

function RGBObjectToHexA(color: any) {
  let r = color.r.toString(16);
  let g = color.g.toString(16);
  let b = color.b.toString(16);
  let a = (color.a * 255).toString(16).substring(0, 2);

  if (r.length == 1) r = '0' + r;
  if (g.length == 1) g = '0' + g;
  if (b.length == 1) b = '0' + b;

  return '#' + r + g + b + a;
}
function RGBObjectToHex(color: any) {
  let r = color.r.toString(16);
  let g = color.g.toString(16);
  let b = color.b.toString(16);
 
  if (r.length == 1) r = '0' + r;
  if (g.length == 1) g = '0' + g;
  if (b.length == 1) b = '0' + b;
  
  return '#' + r + g + b;
}

export { RGBToHex, HexToRGB, HexToRGBA, HexToRGBAArray, RGBAToHexA, RGBObjectToHex, RGBObjectToHexA, RGBAObjectToABGR };