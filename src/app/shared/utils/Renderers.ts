const redPolygon = {
  type: 'simple',
  symbol: {
    type: 'simple-fill',
    color: 'transparent',
    style: 'solid',
    outline: {
      color: 'red',
      width: 2
    }
  }
};

const bluePolygon = {
  type: 'simple',
  symbol: {
    type: 'simple-fill',
    color: 'transparent',
    style: 'solid',
    outline: {
      color: 'blue',
      width: 2
    }
  }
};

const hollowPolygon = {
  type: 'simple',
  symbol: {
    type: 'simple-fill',
    color: 'transparent',
    style: 'solid',
    outline: {
      color: 'transparent',
      width: 2
    }
  }
};

const emptyPoint = {
  type: 'simple-marker',
  style: 'square',
  color: '#8A2BE2',
  size: '0px'
};

const redDiamondMarker = {
  type: 'simple-marker',
  style: 'diamond',
  size: 6,
  color: [255, 0, 0],
  outline: {
    color: [50, 50, 50],
    width: 1
  }
};

export { redPolygon, emptyPoint, redDiamondMarker, hollowPolygon, bluePolygon };
