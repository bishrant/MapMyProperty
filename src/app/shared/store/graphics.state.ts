export interface GraphicsState {
  graphics: any[];
  canUndo: boolean;
  canRedo: boolean;
}

export interface AppState {
  app: GraphicsState;
}
export const initialGraphicState: GraphicsState = {
  graphics: [],
  canUndo: false,
  canRedo: false
};
