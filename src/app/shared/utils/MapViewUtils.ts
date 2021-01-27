import { isMapViewActive } from '../ScreenUtils';

const ListenToKeyboard = (graphicsElement: any, mapElement: any, renderer: any) => {
  return renderer.listen(mapElement.nativeElement, 'keydown', (e: KeyboardEvent) => {
    if (!isMapViewActive()) return;
    const key = e.key.toLowerCase();
    if ((e.ctrlKey && key === 'z') || (e.metaKey && key === 'z')) graphicsElement.undo();
    if ((e.ctrlKey && key === 'y') || (e.metaKey && key === 'y')) graphicsElement.redo();
    if (key === 'delete' || key === 'backspace') graphicsElement.delete();
  });
}

export { ListenToKeyboard }
