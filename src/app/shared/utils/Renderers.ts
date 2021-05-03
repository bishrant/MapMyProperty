const redPolygon: any = {
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

const bluePolygon: any = {
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

const hollowPolygon: any = {
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

const emptyPoint: any = {
  type: 'simple-marker',
  style: 'square',
  color: '#8A2BE2',
  size: '0px'
};

const redDiamondMarker: any = {
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
