/**
 * Transform action/trigger into state.
 * @module shared/reducers/map
 */
import * as types from '../actions/actionTypes';

 const initialState = {};

export default function map(state = initialState, action = {}) {
    switch (action.type) {
        case types.MAP_UPDATE_LOCATION:
            return {
                ...state,
                region: action.region
            };
        case types.MAP_START:
            return {
                ...state,
                isRunning: true
            };
        default:
            return state;
    }
}
