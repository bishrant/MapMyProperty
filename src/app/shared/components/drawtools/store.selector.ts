import { AppState, GraphicsState } from './../../store/graphics.state';
import { createSelector } from '@ngrx/store';

export const selectFeature = (state: AppState) => state.app;

export const selectGraphicsArray = createSelector(selectFeature, (state: GraphicsState) => state.graphics);
