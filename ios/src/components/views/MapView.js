// 'use strict';

import React, { Component, PropTypes, StyleSheet, Text, View } from 'react-native';

export default class MapView extends Component {

    /*eslint-disable */
    /*eslint-enable */

    // lifecycle methods
    componentWillReceiveProps(props) {}

    constructor(props) {
        super(props);

        console.log('MapView.js: constructor: props:', props);
        // Operations usually carried out in componentWillMount go here

        // bind method to component instance
        this.handler = this.handler.bind(this);

        // set initial state
        this.state = {};
    }

    // for es6 subclassing syntax, bind handler to component scope in constructor
    handler(e) {}

    render() {
        // TODO - add button and navigate to another view
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    {this.props.title}
                </Text>
            </View>
        );
    }

}

// es7 class props would fix all of this ugly :(
// MapView.defaultProps = {};

MapView.propTypes = {
    title: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green'
    },
    title: {
        padding: 50,
        fontSize: 16,
        color: '#333'
    }
});
