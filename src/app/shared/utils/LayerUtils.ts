const reorderGraphicsLayer = (mapViewMap: Map) => {
  mapViewMap.allLayers.on('change', (evt) => {
    // Pull user graphics layers to the end of the array
    if (evt.added.length > 0) {
      const userGraphicsLayer = mapViewMap.findLayerById('userGraphicsLayer') // evt.added.find(l => l.id === 'userGraphicsLayer');
      const userTextGraphicsLayer = mapViewMap.findLayerById('userTextGraphicsLayer');
      const geomlabels = mapViewMap.findLayerById('geomlabels');
      const generalGraphics = mapViewMap.findLayerById('generalGraphicsLayer');

      if (userGraphicsLayer !== null) mapViewMap.reorder(userGraphicsLayer, mapViewMap.layers.length - 1);
      if (userTextGraphicsLayer !== null) mapViewMap.reorder(userTextGraphicsLayer, mapViewMap.layers.length - 1);
      if (geomlabels !== null) mapViewMap.reorder(geomlabels, mapViewMap.layers.length - 1);
      if (generalGraphics !== null) mapViewMap.reorder(generalGraphics, mapViewMap.layers.length - 1);
    }
  });
};

export { reorderGraphicsLayer }
