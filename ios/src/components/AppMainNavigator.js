/**
 * NOT EVEN USING THIS RIGHT NOW! HA!
 * Component wrapper for Navigator routes.
 * @module ios/src/containers/AppMainNavigator
 */
import React, { Navigator, StyleSheet, Component } from 'react-native';
import AppMainMenu from './AppMainMenu';

export default class AppMainNavigator extends Component {

    constructor(props) {
        super(props);
    }

    getCurrentProps() {
        return this.props;
    }

    render() {
        // TODO - need to trigger state update in children here!
        return (
            <Navigator
                ref='nav'
                config={this.props}
                navigationBarHidden={true}
                style={styles.container}
                initialRoute={{
                    name: 'View Nav',
                    index: 0,
                    component: AppMainMenu
                }}
                renderScene={(route, navigator) => {
                    // count the number of func calls
                    console.log(route, navigator);
                    if (route.component) {
                        return React.createElement(route.component, navigator);
                    }
                    /*
                        <AppMainMenu
                            configure={{props}}
                            name={route.name}
                            configureScene={() => {
                                return Navigator.SceneConfigs.FloatFromRight;
                            }}
                            onForward={() => {
                                let nextIndex = route.index + 1;
                                navigator.push({
                                    name: 'Scene ' + nextIndex,
                                    index: nextIndex
                                });
                            }}
                            onBack={() => {
                                if (route.index > 0) {
                                    navigator.pop();
                                }
                            }}
                        />
                    */
                }}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});
