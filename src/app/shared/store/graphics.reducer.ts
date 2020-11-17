import { produce, PatchListener } from 'immer';
import { addGraphics, Actions, removeGraphics, updateGraphics, removeAllGraphics } from './graphics.actions';
import { undoRedo } from './ngrx-undo';
import { initialGraphicState } from './graphics.state';
import { ActionReducer } from '@ngrx/store';

const getGraphicsForUpate = (next: any, action: any) => {
  const _updatedGraphics = JSON.parse(action.graphics);
  const newIds = _updatedGraphics.map((_u: any) => _u.attributes.id);
  const j = JSON.parse(JSON.stringify(next.graphics));
  for (let i = 0; i < j.length; i++) {
    const n = JSON.parse(j[i]);
    if (newIds.indexOf(n.attributes.id) !== -1) {
      const __u = _updatedGraphics.filter(
        (_u: any) => _u.attributes.id === n.attributes.id
      )[0];
      j[i] = JSON.stringify(__u);
    }
  }
  return j;
}

const getGraphicsToDelete = (next: any, action: any) => {
  const jj = JSON.parse(JSON.stringify(next.graphics));
  action.ids.forEach((id: any) => {
    const idx = next.graphics.findIndex((g: any) => {
      const _id = JSON.parse(g).attributes.id;
      return id === _id;
    });
    jj.splice(idx, 1);
  });
  return jj;
}

const reducer = (state: any, action: any, listener?: PatchListener): any => {
  return produce(
    state,
    (next) => {
      switch (action.type) {
        case addGraphics.type:
          action.graphics.forEach((g: any) => {
            next.graphics.push(g);
          })
          return;

        case removeGraphics.type:
          next.graphics = getGraphicsToDelete(next, action);
          return;

        case updateGraphics.type:
          next.graphics = getGraphicsForUpate(next, action);
          return;

        case removeAllGraphics.type:
          next.graphics = [];
          break;

        default:
          break;
      }
    },
    listener
  );
};

const undoableReducer = undoRedo({ track: true, maxBufferSize: 32 })(reducer);

const GraphicsReducer = (state = initialGraphicState, action: Actions): ActionReducer<any> => {
  return undoableReducer(state, action);
};

export { GraphicsReducer };
