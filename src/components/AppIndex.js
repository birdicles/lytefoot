// 'use strict';

import React, {
    PixelRatio,
    StyleSheet
} from 'react-native';
import Menu from './nav/Menu';
import SideMenu from './nav/SideMenu';
import LoginView from './views/LoginView';
import SignupView from './views/SignupView';

export default class AppIndex extends React.Component {

    /*eslint-disable */
    /*eslint-enable */

    // lifecycle methods
    componentWillReceiveProps(props) {}

    constructor(props) {
        super(props);
        console.log('AppIndex.js: constructor: props:', props);

        // Operations usually carried out in componentWillMount go here

        const sectionIDs = Object.keys(props.views);
        const rows = sectionIDs.map(id => {
            props.views[id].id = id;
            return props.views[id];
        });

        // set initial state
        this.state = {
            touchToClose: false,
            rows: rows,
            currentView: 'login'
        };
    }

    handleOpenWithTouchToClose() {
        this.setState({
            touchToClose: true
        });
    }

    handleChange(isOpen) {
        if (!isOpen) {
            this.setState({
                touchToClose: false
            });
        }
    }

    // TODO - implement some flavor of flux store instead of this shit
    handleViewSelect(viewId) {
        this.setState({
            currentView: viewId
        });
    }

    getView() {
        let viewId = this.state.currentView;
        let props = this.props.views[viewId];
        switch(viewId) {
            case 'login':
                return <LoginView {...props} onViewSelect={this.handleViewSelect.bind(this)} />;
            case 'signup':
                return <SignupView {...props} onViewSelect={this.handleViewSelect.bind(this)} />;
            default:
                return <LoginView {...props} onViewSelect={this.handleViewSelect.bind(this)} />;
        }
    }

    render() {
        // TODO - ROUTE AFTER AUTHENTICATION CHECK (USE FB AUTH?)
        const menu = (
            <Menu
                navigator={this.props.navigator}
                onViewSelect={this.handleViewSelect.bind(this)}
            />
        );

        return (
            <SideMenu
                menu={menu}
                touchToClose={this.state.touchToClose}
                onChange={this.handleChange.bind(this)}
            >
                {this.getView()}
            </SideMenu>
        );
    }
}

// es7 class props would fix all of this ugly :(
// AppIndex.defaultProps = {};

AppIndex.propTypes = {
    navigator: React.PropTypes.object.isRequired,
    views: React.PropTypes.object.isRequired
};

// const styles = StyleSheet.create({
//     container: {
//         flex: 1
//     },
//     rowTitle: {
//         padding: 14,
//         fontSize: 16,
//         color: '#333'
//     },
//     rowDivider: {
//         position: 'absolute',
//         left: 0,
//         right: 0,
//         bottom: 0,
//         height: 1 / PixelRatio.get(),
//         backgroundColor: '#ddd'
//     }
// });
