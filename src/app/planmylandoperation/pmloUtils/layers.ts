import GraphicsLayer from 'esri/layers/GraphicsLayer';

const CreateSensAreasGL = (Id: string = 'sensAreasGL') => {
    const graphicsLayer = new GraphicsLayer({
      id: Id
    });
    return graphicsLayer;
  };

  export {CreateSensAreasGL};