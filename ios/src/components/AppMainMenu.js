import React, {
    // StyleSheet,
    PropTypes,
    Component
} from 'react-native';
import Menu from './nav/Menu';
import SideMenu from './nav/SideMenu';
import LoginView from './views/LoginView';
import SignupView from './views/SignupView';
import MapView from './views/MapComponentView';

const componentMap = {
    login: {
        MyComponent: LoginView,
        propsKey: 'mainmenu'
    },
    signup: {
        MyComponent: SignupView,
        propsKey: 'mainmenu'
    },
    map: {
        MyComponent: MapView,
        propsKey: 'map'
    }
};

export default class AppMainMenu extends Component {

    constructor(props) {
        super(props);

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
        // TODO - select appropriate actions or group them all together
        return (
            <MyComponent
                {...viewProps}
                {...props[propsKey]}
                actions={props.updateMap}
                onViewSelect={props.update} />
        );
    }

    render() {
        // TODO - ROUTE AFTER AUTHENTICATION CHECK (USE FB AUTH?)
        const menu = (
            <Menu
                mainmenu={this.props}
                rows={this.state.rows}
                onViewSelect={this.props.update}
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
    update: PropTypes.func.isRequired
};
