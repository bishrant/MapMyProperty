import webMercatorUtils = require('esri/geometry/support/webMercatorUtils');
import geodesicUtils = require('esri/geometry/support/geodesicUtils');
import Point = require('esri/geometry/Point');

const CreateTextSymbolForLabels = (parent: any) => {
  let x = 0;
  let y = 0;
  if (parent.geometry.type === 'polyline') {
    const _pths = (parent.geometry as any).paths[0];
    const pt1 = webMercatorUtils.xyToLngLat(_pths[0][0], _pths[0][1]);
    const pt2 = webMercatorUtils.xyToLngLat(_pths[1][0], _pths[1][1]);
    const goj = geodesicUtils.geodesicDistance(
      new Point({ x: pt1[0], y: pt1[1] }),
      new Point({ x: pt2[0], y: pt2[1] }))
    // const _bearing = CalculateBearing([pt1[0], pt1[1]], [pt2[0], pt2[1]]);
    if (goj.azimuth < 0) {
      const _abs = Math.abs(goj.azimuth);
      if (_abs < 90) {
        x = 5;
        y = -20;
      } else {
        x = 5;
        y = 10;
      }
    } else {
      if (goj.azimuth <= 90) {
        x = -5;
        y = -10;
      } else if (goj.azimuth <= 180) {
        x = -5;
        y = 10;
      }
    }
  }

  return {
    type: 'text',
    color: (parent.geometry.type === 'polyline')
      ? parent.attributes.symbol.color
      : parent.attributes.symbol.outline.color,
    text: '0',
    xoffset: x,
    yoffset: y,
    font: {
      decoration: 'none',
      family: 'Arial',
      size: '18px',
      style: 'normal',
      weight: 'normal'
    }
  }
}

export { CreateTextSymbolForLabels };
