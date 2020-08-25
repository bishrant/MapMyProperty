import GraphicsLayer from 'esri/layers/GraphicsLayer';

const CreateSensAreasGL = (id: string, opacity: number) => {
  const graphicsLayer = new GraphicsLayer({
    id: id,
    opacity: opacity
  });
  return graphicsLayer;
};

export { CreateSensAreasGL };
