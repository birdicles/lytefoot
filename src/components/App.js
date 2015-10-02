import React, {
    NavigatorIOS,
    StyleSheet
} from 'react-native';
import AppIndex   from './AppIndex';
import ViewConfig from '../data/viewconfig';

export default class App extends React.Component {
    render() {
        return (
            <NavigatorIOS
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
