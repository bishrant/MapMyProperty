export interface Gstate {
  graphics: any[];
  canUndo: boolean;
  canRedo: boolean;
}

export interface GraphicsState {
  app: Gstate;
}
export const initialGraphicState: Gstate = {
  graphics: [],
  canUndo: false,
  canRedo: false
};
