/**
 * Transform action/trigger into state.
 * @module shared/reducers/map
 */
import * as types from '../actions/actionTypes';

 const initialState = {
    region: {
        latitude: 0,
        longitude: 0
    }
};

export default function map(state = initialState, action = {}) {
    switch (action.type) {
        case types.MAP_UPDATE:
            return {
                ...state,
                view: action.id
            };
        default:
            return state;
    }
}
