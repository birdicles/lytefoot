import React, {
    // StyleSheet,
    PropTypes,
    Component
} from 'react-native';
import Menu from './nav/Menu';
import SideMenu from './nav/SideMenu';
import LoginView from './views/LoginView';
import SignupView from './views/SignupView';
import WalkView from './views/WalkComponentView';

const componentMap = {
    login: {
        MyComponent: LoginView,
        propsKey: 'mainmenu'
    },
    signup: {
        MyComponent: SignupView,
        propsKey: 'mainmenu'
    },
    walk: {
        MyComponent: WalkView,
        propsKey: 'map'
    }
};

export default class AppMainMenu extends Component {

    // TODO - CHANGE SIDE MENU TRIGGER TO ICON CLICK

    constructor(props) {
        super(props);

        // construct menu items from passed in config
        const sectionIDs = Object.keys(this.props.mainmenu)
            .filter(prop => prop !== 'view');
        const rows = sectionIDs.map(id => {
            this.props.mainmenu[id].id = id;
            return this.props.mainmenu[id];
        });

        this.state = {
            touchToClose: false,
            rows: rows,
            currentView: this.props.mainmenu.view
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

    getView() {
        let props = this.props;
        let viewId = props.mainmenu.view;
        let viewProps = props.mainmenu[viewId];
        let { MyComponent, propsKey } = componentMap[viewId];
        return (
            <MyComponent
                {...viewProps}
                {...props[propsKey]}
                {...props.actions} />
        );
    }

    render() {
        // TODO - ROUTE AFTER AUTHENTICATION CHECK (USE FB AUTH?)
        const menu = (
            <Menu
                mainmenu={this.props}
                rows={this.state.rows}
                onViewSelect={this.props.actions.updateMenu}
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

// es7 class props would fix all of this ugly :(
AppMainMenu.defaultProps = {};
AppMainMenu.propTypes = {
    mainmenu: PropTypes.object.isRequired,
    map: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};
