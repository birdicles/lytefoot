// 'use strict';

import React, {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity
} from 'react-native';

export default class LoginView extends React.Component {

    /*eslint-disable */
    /*eslint-enable */

    // lifecycle methods
    componentWillReceiveProps(props) {}

    constructor(props) {
        super(props);

        console.log('LoginView.js: constructor: props:', props);
        // Operations usually carried out in componentWillMount go here

        // bind method to component instance
        this.onSubmit = this.onSubmit.bind(this);

        // set initial state
        this.state = {};
    }

    // for es6 subclassing syntax, bind handler to component scope in constructor
    onSubmit(e) {
        // this.props.navigator.push({
        //     title: 'Sign Up',
        //     component: SignupView
        // });
        this.props.onViewSelect('signup');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.border, styles.top]}>
                    <Text style={styles.title}>
                        {this.props.title}
                    </Text>
                    <Image
                        style={{flex: 1, overflow: 'visible'}}
                        source={{uri: 'http://pickaface.net/includes/themes/clean/img/slide2.png'}}
                    />
                    <Image
                        style={{width: 400, height: 400}}
                        source={require('image!login-check')}
                    />
                </View>
                <View style={[styles.border, styles.bottomAlign]}>
                    <View style={styles.bottomContainer}>
                        <Text style={styles.title}>
                            Second
                        </Text>
                        <Text style={styles.title}>
                            Third
                        </Text>
                        <Text style={styles.title}>
                            Fourth
                        </Text>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={this.onSubmit}
                            style={styles.submit}>
                            <Text style={styles.submitText}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

}

// es7 class props would fix all of this ugly :(
// LoginView.defaultProps = {};

LoginView.propTypes = {
    title: React.PropTypes.string.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white'
    },

    // generic
    border: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'grey'
    },

    // centered icon
    top: {
        flex: 1,
        borderColor: 'red',
        backgroundColor: 'lightblue'
    },
    title: {
        padding: 14,
        fontSize: 16,
        color: '#333'
    },

    // form
    bottomAlign: {
        flexDirection: 'row',
        borderColor: 'green'
    },
    bottomContainer: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'flex-end'
    },
    submit: {
        height: 55,
        margin: 30,
        backgroundColor: '#50d2c2'
    },
    submitText: {
        color: 'white',
        // TODO - ADD CUSTOM FONT
        // fontFamily: 'AvenirBook',
        fontSize: 15,
        paddingTop: 18,
        textAlign: 'center'
    }
});
