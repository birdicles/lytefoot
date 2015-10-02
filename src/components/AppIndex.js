// 'use strict';

import React, {
    NavigatorIOS,
    ListView,
    PixelRatio,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';
import LoginView from './views/LoginView';
import SignupView from './views/SignupView';

const viewLib = {
    login: LoginView,
    signup: SignupView
};

export default class AppIndex extends React.Component {

    /*eslint-disable */
    /*eslint-enable */

    // lifecycle methods
    componentWillReceiveProps(props) {}

    constructor(props) {
        super(props);

        console.log('AppIndex.js: constructor: props:', props);
        // Operations usually carried out in componentWillMount go here

        // bind method to component instance
        this.handler = this.handler.bind(this);

        const sectionIDs = Object.keys(props.views);
        const rows = sectionIDs.map(id => {
            props.views[id].id = id;
            return props.views[id];
        });
        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        }).cloneWithRows(rows); // array of objects

        // set initial state
        this.state = {dataSource};
    }

    // for es6 subclassing syntax, bind handler to component scope in constructor
    handler(e) {}

    render() {
        // TODO - ROUTE AFTER AUTHENTICATION CHECK (USE FB AUTH?)
        // just a simple list nav for now

        // <ListView
        //     style={styles.container}
        //     dataSource={this.state.dataSource}
        //     renderRow={row => this.renderRow(row)}
        // />

        return (
            <NavigatorIOS
                itemWrapperStyle={styles.navWrap}
                style={styles.nav}
                navigationBarHidden={true}
                initialRoute={{
                    title: 'Login View',
                    component: LoginView,
                    passProps: { fakeProps: false }
                }}
            />
        );
    }

    renderRow(row) {
        return (
            <View style={styles.row}>
                <TouchableHighlight
                    underlayColor='#f7f7f7'
                    onPress={() => this.selectRow(row)}>
                    <Text style={styles.rowTitle}>
                        {row.title}
                    </Text>
                    </TouchableHighlight>
                <View style={styles.rowDivider} />
            </View>
        );
    }

    selectRow(view) {
        console.log('AppIndex.js: selectRow: view:', view);
        this.props.navigator.push({
            title: view.title,
            component: viewLib[view.id],
            passProps: {view}
        });
    }

}

// es7 class props would fix all of this ugly :(
// AppIndex.defaultProps = {};

AppIndex.propTypes = {
    navigator: React.PropTypes.object.isRequired,
    views: React.PropTypes.object.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    rowTitle: {
        padding: 14,
        fontSize: 16,
        color: '#333'
    },
    rowDivider: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 1 / PixelRatio.get(),
        backgroundColor: '#ddd'
    },

    navWrap: {
        flex: 1
    },
    nav: {
        flex: 1
    }
});
