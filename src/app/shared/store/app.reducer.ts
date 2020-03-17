import * as App from './app.state';
import {Actions, addTodo, toggleTodo, removeTodo} from './app.actions';
import {produce, PatchListener} from 'immer';
import {undoRedo} from './ngrx-undo';
import {id} from './todo';

const reducer = (state, action: Actions, listener?: PatchListener) =>
  produce(state, next => {
    switch (action.type) {
      case addTodo.type:
        next.todos.push({id: id(), text: action.text, checked: false});
        return;
      case toggleTodo.type:
        const todo = next.todos.find(t => t.id === action.id);
        todo.checked = !todo.checked;
        return;
      case removeTodo.type:
        next.todos.splice(next.todos.findIndex(t => t.id === action.id), 1);
        return;
      default:
        return;
    }
}, listener);

const undoableReducer = undoRedo({
  track: true
})(reducer);

export function appReducer(state = App.initial, action: Actions) {
  return undoableReducer(state, action);
}
