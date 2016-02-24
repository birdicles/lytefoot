/**
 * Define action methods to update state.
 * @module shared/actions/menuActions
 */
import * as types from './actionTypes';

export function updateMenu(id) {
    return {
        type: types.MAINMENU_UPDATE,
        id
    };
}
