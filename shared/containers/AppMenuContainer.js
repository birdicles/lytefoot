/**
 * Bind eventful application state to child components.
 * @module shared/containers/AppMenuContainer
 */
import React, { Component }   from 'react-native';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as menuActions       from '../actions/menuActions';
import AppMainMenu       from '../../ios/src/components/AppMainMenu';

class AppMenuContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { state, actions } = this.props;
        return (
            <AppMainMenu
                mainmenu={state.mainmenu}
                {...actions} />
        );
    }

}

export default connect(state => ({
        // connect state property and events to this container
        // default state from designated reducer
        state: state
    }),
    (dispatch) => ({
        // inject dispatch method into this container
        actions: bindActionCreators(menuActions, dispatch)
    })
)(AppMenuContainer);
