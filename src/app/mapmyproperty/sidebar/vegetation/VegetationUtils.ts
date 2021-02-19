import FeatureLayer from 'esri/layers/FeatureLayer';
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

const GetVegLabelInfo = (): any => {
  return [{
    // autocasts as new LabelClass()
    symbol: {
      type: 'text', // autocasts as new TextSymbol()
      color: 'black',
      font: { // autocast as new Font()
        size: 12
      }
    },
    labelExpressionInfo: {
      expression: '$feature.VegID'
    }
  }];
}

const CreateVegRenderer = (graphics): any => {
  const hexSet = new Set();
  const uniqueInfos = [];
  for (let i = 0; i < graphics.length; i++) {
    const hex = getVegetationBackgroundColor(graphics[i]);
    const hexOriginal = graphics[i].attributes.HEXColor;
    if (!hexSet.has(hex)) {
      hexSet.add(hex);
      uniqueInfos.push({ value: hexOriginal, symbol: { type: 'simple-fill', color: hex } })
    }
  }
  return {
    type: 'unique-value',
    field: 'HEXColor',
    uniqueValueInfos: uniqueInfos
  }
}

const CreateHatch = (rotationAngle: number): any => {
  return {
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
    rotation: rotationAngle,
    separation: 5
  }
}

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
        CreateHatch(45),
        CreateHatch(135),
        {
          type: 'CIMSolidFill',
          enable: true,
          color: getVegetationBackgroundColor(veg) as any
        }
        ]
      }
    }
  })
};

const CreateVegetationFeatureLayer = (vegetationData: any[]): __esri.FeatureLayer => {
  const _graphics = vegetationData[0].value.features.map(f => {
    f.symbol = getVegetationSymbol(f);
    return f;
  });

  const fLayer = new FeatureLayer({
    source: _graphics,
    objectIdField: 'FID',
    fields: [{
      name: 'FID',
      type: 'oid'
    }, {
      name: 'VegID',
      type: 'integer'
    },
    {
      name: 'HEXColor',
      type: 'string'
    }],
    popupTemplate: { content: '{FID} Test' },
    renderer: CreateVegRenderer(_graphics),
    labelingInfo: GetVegLabelInfo()
  })
  return fLayer;
}

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

export {
  GetVegLabelInfo, CreateVegRenderer, CreateVegetationFeatureLayer,
  GetVegetationTextSymbol, getVegetationBackgroundColor,
  getVegetationSymbol, getVegetationHighlightSymbol
}
