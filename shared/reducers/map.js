/**
 * Transform action/trigger into state.
 * @module shared/reducers/map
 */
import * as types from '../actions/actionTypes';

const initialState = {};
let isPaused;

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
        case types.MAP_TOGGLE_PAUSE:
            isPaused = !isPaused;
            return {
                ...state,
                isPaused
            };
        case types.MAP_STOP:
            return {
                ...state,
                isRunning: false
            };
        default:
            return state;
    }
}
