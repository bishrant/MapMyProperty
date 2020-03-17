import { produce, PatchListener } from 'immer';
import { addGraphics, Actions, removeGraphics } from './graphics.actions';
import { undoRedo } from './ngrx-undo';
import { initialGraphicState } from './graphics.state';

const id = (): string => Math.random().toString(36).substr(2, 9);

const reducer = (state: any, action: any, listener?: PatchListener) : any => {
    console.log(action);
    return produce(
    state, next => {
        switch (action.type) {
        case addGraphics.type:
            // action.payload.attributes = {id: id()};
            // console.log()
            // const graphicJson = action.payload.toJSON();
            // console.log(graphicJson);
            next.graphics.push(action.payload);
            return;
        case removeGraphics.type:
            next.graphics.splice(next.graphics.findIndex(t => t.id === action.id), 1);
            return;
        default:
            return;
    }
}, listener);
};

const undoableReducer = undoRedo({track: true})(reducer);

const GraphicsReducer = (state = initialGraphicState, action: Actions) => {
    return undoableReducer(state, action);
};

export {GraphicsReducer};
