const RGBToHex = rgba => {
  let r = rgba[0].toString(16);
  let g = rgba[1].toString(16);
  let b = rgba[2].toString(16);

  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;

  return "#" + r + g + b;
};

export { RGBToHex };