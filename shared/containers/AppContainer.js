/**
 * Compose reducers into state and pass into application container.
 * @module shared/containers/AppContainer
 */
import React, { Component } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider }     from 'react-redux';
import thunk            from 'redux-thunk';
import * as reducers    from '../reducers';
import AppMenuContainer from './AppMenuContainer';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <AppMenuContainer />
            </Provider>
        );
    }

}
