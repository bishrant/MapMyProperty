import CIMSymbol from 'esri/symbols/CIMSymbol';

const getVegetationBackgroundColor = (veg: any) => {
  const _h: string = veg.attributes.HEXColor;
  if (_h.length >= 7) {
    return '#' + _h.slice(2, _h.length)
  }
  return _h;
}

const getVegetationSymbol = (veg: any) => {
  return {
    type: 'simple-fill', // autocasts as new SimpleFillSymbol()
    color: getVegetationBackgroundColor(veg),
    style: 'solid',
    outline: { // autocasts as new SimpleLineSymbol()
      color: 'white',
      width: 1
    }
  }
};

const getVegetationHighlightSymbol = (veg: any) => {
  return new CIMSymbol({
    data: {
      type: 'CIMSymbolReference',
      symbol: {
        type: 'CIMPolygonSymbol',
        symbolLayers: [{
          type: 'CIMSolidStroke',
          width: 1,
          color: [5, 252, 240, 255]
        },

        {
        // light blue hatch fill
          type: 'CIMHatchFill',
          enable: true,
          lineSymbol: {
            type: 'CIMLineSymbol', // CIM line symbol that makes up the line inside the hatch fill
            symbolLayers: [{
              type: 'CIMSolidStroke',

              enable: true,
              width: 1,
              color: [0, 0, 0, 150]
            }]
          },
          rotation: 45, // rotation of the lines
          separation: 5 // distance between lines in hatch fill
        },

        {
        // light blue hatch fill
          type: 'CIMHatchFill',
          enable: true,
          lineSymbol: {
            type: 'CIMLineSymbol', // CIM line symbol that makes up the line inside the hatch fill
            symbolLayers: [{
              type: 'CIMSolidStroke',
              enable: true,
              width: 1,
              color: [0, 0, 0, 150]
            }]
          },
          rotation: 135, // rotation of the lines
          separation: 5 // distance between lines in hatch fill
        },

        {
        // solid blue fill background
          type: 'CIMSolidFill',
          enable: true,
          color: getVegetationBackgroundColor(veg) as any
        }
        ]
      }
    }
  })
};

const GetVegetationTextSymbol: any = (text: string, alpha: number) => {
  return {
    type: 'text',
    text: text,
    color: { r: 0, g: 0, b: 0, a: alpha },
    font: {
      size: '12px',
      family: 'arial',
      weight: 'bold'
    }
  };
};

export { GetVegetationTextSymbol, getVegetationBackgroundColor, getVegetationSymbol, getVegetationHighlightSymbol }
