import GraphicsLayer from 'arcgis-js-api/layers/GraphicsLayer';

const CreateSensAreasGL = (Id: string = 'sensAreasGL') => {
    const graphicsLayer = new GraphicsLayer({
      id: Id
    });
    return graphicsLayer;
  };

  export {CreateSensAreasGL};