import { produce, PatchListener } from 'immer';
import { addGraphics, Actions, removeGraphics } from './graphics.actions';
import { undoRedo } from './ngrx-undo';
import { initialGraphicState } from './graphics.state';

const id = () => Math.random().toString(36).substr(2, 9);

const reducer = (state, action: Actions, listener?: PatchListener) => {
    return produce(
    state, next => {
        switch (action.type) {
        case addGraphics.type:
            next.graphics.push({id: id(), data: action});
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
