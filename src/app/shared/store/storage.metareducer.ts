import { ActionReducer, MetaReducer } from '@ngrx/store';
import { Action} from '@ngrx/store';

function setSavedState(state: any, localStorageKey: string) {
  localStorage.setItem(localStorageKey, JSON.stringify(state));
}
function getSavedState(): any {
  return JSON.parse(localStorage.getItem(localStorageKey));
}
//keys from state which we'd like to save
const stateKeys = ['graphics'];
// the key for the local storage
const localStorageKey = '__mmp_storage__';

function storage(reducer: ActionReducer<any>): ActionReducer<any>{
  let onInit = true;
  return function (state, action) {
    let nextState = reducer(state, action);

    if (onInit) {
      onInit = false;
    } else {
      // nextState = state;
      console.log(state);
      setSavedState(nextState, localStorageKey);
    }
    // need to filter
    return reducer(nextState, action);
  }
}

const metaReducers: MetaReducer<any>[] = [storage];

export {metaReducers, getSavedState}
