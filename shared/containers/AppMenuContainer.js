/**
 * Bind eventful application state to child components.
 * @module shared/containers/AppMenuContainer
 */
import React, { PropTypes, Component }   from 'react-native';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import { assign }             from 'lodash';
import * as menuActions       from '../actions/menuActions';
import * as mapActions        from '../actions/mapActions';
import AppMainMenu            from '../../ios/src/components/AppMainMenu';

class AppMenuContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { state, actions } = this.props;
        return (
            <AppMainMenu
                mainmenu={state.mainmenu}
                map={state.map}
                actions={actions} />
        );
    }

}

AppMenuContainer.defaultProps = {};
AppMenuContainer.propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

export default connect(state => ({
    // connect state property and events to this container
    // default state from designated reducer
    state: state
}), (dispatch) => ({
    // inject actions and dispatch method into this container
    actions: bindActionCreators(assign({}, menuActions, mapActions), dispatch)
})
)(AppMenuContainer);
