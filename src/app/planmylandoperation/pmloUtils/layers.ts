import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';

const CreateGL = (id: string, opacity: number) => {
  const graphicsLayer = new GraphicsLayer({
    id: id,
    opacity: opacity
  });
  return graphicsLayer;
};

export { CreateGL };
