// https://facebook.github.io/react-native/docs/mapview.html#content
import React, { Component, PropTypes, StyleSheet, MapView, Text, View } from 'react-native';

export default class MapComponentView extends Component {

    /*eslint-disable */
    /*eslint-enable */

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(props) {}

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    {this.props.title}
                </Text>
                <MapView
                    style={styles.map}
                    region={this.props.region}
                />
            </View>
        );
    }

}

MapComponentView.defaultProps = {};
MapComponentView.propTypes = {
    title: PropTypes.string.isRequired,
    region: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6e6e6'
    },
    title: {
        padding: 50,
        fontSize: 16,
        color: '#333'
    },
    map: {
        height: 450,
        margin: 20,
        borderWidth: 1,
        borderColor: '#666'
    }
});
