const isMapViewActive = (): boolean => {
  const _isESRI = document.activeElement.className.includes('esri-view-surface');
  if (_isESRI) {
    return document.activeElement.firstChild instanceof HTMLCanvasElement
  }
  return false;
};

export { isMapViewActive }
