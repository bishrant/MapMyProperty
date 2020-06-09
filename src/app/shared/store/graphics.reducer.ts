import { produce, PatchListener } from 'immer';
import { addGraphics, Actions, removeGraphics, updateGraphics } from './graphics.actions';
import { undoRedo } from './ngrx-undo';
import { initialGraphicState } from './graphics.state';
import { removeAllGraphics } from './graphics.actions';

const reducer = (state: any, action: any, listener?: PatchListener): any => {
  // console.log(action);
  return produce(
    state,
    (next) => {
      switch (action.type) {
        case addGraphics.type:
          next.graphics.push(action.graphics);
          return;
        case removeGraphics.type:
          const jj = JSON.parse(JSON.stringify(next.graphics));
          action.ids.forEach((id) => {
            const idx = next.graphics.findIndex((g) => {
              const _id = JSON.parse(g).attributes.id;
              return id === _id;
            });
            jj.splice(idx, 1);
          });
          next.graphics = jj;

          return;
        case updateGraphics.type:
          const _updatedGraphics = JSON.parse(action.graphics);
          const newIds = _updatedGraphics.map((_u) => _u.attributes.id);
          const j = JSON.parse(JSON.stringify(next.graphics));
          for (let i = 0; i < j.length; i++) {
            const n = JSON.parse(j[i]);
            if (newIds.indexOf(n.attributes.id) !== -1) {
              const __u = _updatedGraphics.filter((_u) => _u.attributes.id === n.attributes.id)[0];
              j[i] = JSON.stringify(__u);
            }
          }
          next.graphics = j;
          return;

        case removeAllGraphics.type:
          next.graphics = [];
          return;
        default:
          return;
      }
    },
    listener
  );
};

const undoableReducer = undoRedo({ track: true })(reducer);

const GraphicsReducer = (state = initialGraphicState, action: Actions) => {
  return undoableReducer(state, action);
};

export { GraphicsReducer };
