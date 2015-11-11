'use strict';

import React, {
    NavigatorIOS,
    StyleSheet,
    Text,
    View,
    Component
} from 'react-native';
import AppIndex from './AppIndex';
import ViewConfig from '../data/viewConfig';

export default class App extends Component {

    render() {
        return (
            <NavigatorIOS
                navigationBarHidden={true}
                style={styles.container}
                initialRoute={{
                    title: 'View Nav',
                    component: AppIndex,
                    passProps: {
                        views: ViewConfig
                    }
                }}
            />
        );
    }

}

// why style this component? flash?
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});
