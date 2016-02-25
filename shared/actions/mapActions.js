/**
 * Define action methods to update state.
 * @module shared/actions/mapActions
 */
import * as types from './actionTypes';

export function updateMap(region) {
    return {
        type: types.MAP_UPDATE_LOCATION,
        region
    };
}

export function startMap() {
    return {
        type: types.MAP_START
    };
}

export function togglePauseMap() {
    return {
        type: types.MAP_TOGGLE_PAUSE
    };
}

export function stopMap() {
    return {
        type: types.MAP_STOP
    };
}
