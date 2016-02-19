/**
 * Define action methods to update state.
 * @module shared/actions/mapActions
 */
import * as types from './actionTypes';

export function updateMap(id) {
    return {
        type: types.MAP_UPDATE,
        id
    };
}
