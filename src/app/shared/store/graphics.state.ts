export interface Gstate {
  graphics: any[];
  canUndo: boolean;
  canRedo: boolean;
}

export interface GraphicsState {
  app: Gstate;
}
export const initialGraphicState: Gstate = {
  graphics: [{id: 1, data: 'test'}],
  canUndo: false,
  canRedo: false
};
