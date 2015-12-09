// 'use strict';

import React, {
    StyleSheet,
    Text,
    TextInput,
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
                    {/*
                    <Text style={styles.title}>
                        {this.props.title}
                    </Text>
                    <Image
                        style={{flex: 1, overflow: 'visible'}}
                        source={{uri: 'http://pickaface.net/includes/themes/clean/img/slide2.png'}}
                    />
                    */}
                    <Image
                        style={{width: 150, height: 117}}
                        source={require('../../../../img/icon_check.jpg')}
                    />
                </View>
                <View style={[styles.border, styles.bottomAlign]}>
                    <View style={styles.bottomContainer}>
                        <View style={styles.inputContainer}>
                            <Text style={styles.title}>
                                USERNAME
                            </Text>
                            <TextInput style={styles.input} />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.title}>
                                PASSWORD
                            </Text>
                            <TextInput style={styles.input}
                                       secureTextEntry={true} />
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={this.onSubmit}
                            style={styles.submit}>
                            <Text style={styles.submitText}>Sign In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={this.onSubmit}
                            style={styles.footerLinkContainer}>
                            <Text style={styles.footerLink}>
                                DON’T HAVE AN ACCOUNT?&nbsp;&nbsp;&nbsp;
                                <Text style={[styles.footerLink, styles.footerLinkHighlight]}>SIGN UP</Text>
                            </Text>
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
        // borderStyle: 'solid',
        // borderWidth: 1,
        // borderColor: 'grey'
    },

    // centered icon
    top: {
        flex: 1,
        borderColor: 'red',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 10,
        fontFamily: 'Avenir-Book',
        color: '#a8a8aa'
    },

    // form
    bottomAlign: {
        flexDirection: 'row',
        borderColor: 'green'
    },
    bottomContainer: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'flex-end',
        margin: 30
    },
    inputContainer: {
        marginBottom: 30,
        borderBottomColor: '#f3f3f4',
        borderBottomWidth: 1
    },
    input: {
        height: 40,
        fontSize: 14,
        fontFamily: 'Avenir-Book',
        color: '#1d1d26'
    },
    submit: {
        height: 55,
        backgroundColor: '#50d2c2'
    },
    submitText: {
        color: 'white',
        fontFamily: 'Avenir-Book',
        fontSize: 15,
        paddingTop: 18,
        textAlign: 'center'
    },
    footerLinkContainer: {
        margin: 0
    },
    footerLink: {
        fontFamily: 'Avenir-Book',
        fontSize: 10,
        color: '#a8a8aa',
        paddingTop: 18,
        textAlign: 'center'
    },
    footerLinkHighlight: {
        color: '#1d1d26'
    }
});
