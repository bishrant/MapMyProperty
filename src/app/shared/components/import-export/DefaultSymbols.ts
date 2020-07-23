const defaultTextSymbol = {
  type: 'text',
  color: { r: 100, g: 20, b: 5, a: 1 },
  text: 'test',
  yoffset: -6,
  font: { size: '18px', family: 'Arial', weight: 'normal', decoration: 'none', style: 'normal' },
  lineWidth: '500px'
};

const defaultPointSymbol: any = {
  type: 'simple-marker',
  size: '12px',
  url: '',
  width: '12px',
  height: '12px',
  style: 'circle',
  contentType: 'image/svg',
  name: 'circle',
  color: { r: 100, g: 20, b: 5, a: 1 }
};
const defaultLineSymbol: any = {
  type: 'simple-line',
  color: { r: 100, g: 20, b: 5, a: 1 },
  style: 'solid',
  width: 2
};

const defaultPolygonSymbol: any = {
  type: 'simple-fill',
  color: { r: 0, g: 0, b: 0, a: 0.5 },
  style: 'solid',
  outline: { color: { r: 100, g: 20, b: 5, a: 1 }, width: 2, style: 'solid' }
};

const getDefaultSymbol: any = (geometryType: string) => {
  return geometryType === 'polygon'
    ? defaultPolygonSymbol
    : geometryType === 'polyline'
      ? defaultLineSymbol
      : defaultPointSymbol;
}

export { defaultTextSymbol, defaultPointSymbol, defaultLineSymbol, defaultPolygonSymbol, getDefaultSymbol }
