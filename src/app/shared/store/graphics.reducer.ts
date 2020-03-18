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
            console.log(action.gids);
            action.gids.forEach(gid => {
            const idx = next.graphics.findIndex(g => {
                    const _gid = JSON.parse(g).attributes.gid;
                    return gid === _gid;
                });
                console.log(idx);
               next.graphics.splice(idx, 1);
            })

            
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
