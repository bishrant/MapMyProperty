import { createAction, props, union } from '@ngrx/store';
export const addGraphics = createAction('ADD_GRAPHIC', props<{payload: any}>());
export const removeGraphics = createAction('REMOVE_GRAPHIC', props<any>());
export const updateGraphics = createAction('UPDATE_GRAPHICS', props<any>());

const all = union({addGraphics, removeGraphics, updateGraphics});

export type Actions = typeof all;
