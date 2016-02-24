/**
 * Transform action/trigger into state.
 * @module shared/reducers/mainmenu
 */
import * as types from '../actions/actionTypes';
import ViewConfig from '../data/viewConfig'; // TODO - ditch this temporary config?

 const initialState = {
    view: 'walk',
    ...ViewConfig
};

export default function mainmenu(state = initialState, action = {}) {
    switch (action.type) {
        case types.MAINMENU_UPDATE:
            return {
                ...state,
                view: action.id
            };
        default:
            return state;
    }
}
