import { createAction, props, union } from '@ngrx/store';
export const addGraphics = createAction('ADD_GRAPHIC', props<any>());
export const removeGraphics = createAction('REMOVE_GRAPHIC', props<any>());
export const updateGraphics = createAction('UPDATE_GRAPHICS', props<any>());
export const removeAllGraphics = createAction('REMOVE_ALL_GRAPHICS');

const all = union({addGraphics, removeGraphics, updateGraphics, removeAllGraphics});

export type Actions = typeof all;
