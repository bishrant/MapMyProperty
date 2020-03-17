import {createAction, props, union} from '@ngrx/store';

export const addTodo = createAction('Create Todo', props<{ text: string }>());
export const toggleTodo = createAction('Check Todo', props<{ id: string }>());
export const removeTodo = createAction('Remove Todo', props<{ id: string }>());

const all = union({addTodo, toggleTodo, removeTodo});
export type Actions = typeof all;

