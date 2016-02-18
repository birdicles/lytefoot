import AppDispatcher    from '../dispatcher/dispatcher';
import Constants        from '../constants/constants';
import EventEmitter     from 'EventEmitter';
import merge            from 'merge';
import Cookies          from 'react-native-cookies';

// user props
let _chocolateCookie = { user: {}, token: {} };
debugger;
// let _isLocal = window.document.location.href.indexOf('localhost') > -1;

// state props
let _content = {
    [Constants.SEL_LOGIN]: {
        title: 'Enter the Dojo',
        desc: 'Login and Prosper',
        formTitle: 'Login',
        showLegal: false
    },
    [Constants.SEL_REG]: {
        title: 'You\'re Almost There',
        desc: 'Complete the form to download Epoch™',
        formTitle: 'Register',
        showLegal: false
    },
    [Constants.SEL_FORGOT]: {
        title: 'Enter the Dojo',
        desc: 'Login and Prosper',
        formTitle: 'Reset Password',
        showLegal: false
    },
    [Constants.SEL_RESET]: {
        title: 'Enter the Dojo',
        desc: 'Login and Prosper',
        formTitle: 'Reset Password',
        showLegal: false
    }
};

let _state = updateState(Constants.SEL_LOGIN);

function updateState(key) {
    return {
        selection: key,
        title: _content[key].title,
        desc: _content[key].desc,
        formTitle: _content[key].formTitle,
        showLegal: _content[key].showLegal
    };
}

function updateMainState(flag) {
    return { isAccount: flag };
}

// Merge our store with Node's Event Emitter
let LoginStore = merge(EventEmitter.prototype, {

    getState() {
        return _state;
    },

    getCookie() {
        return JSON.parse(Cookies.get('adcade_info') || '{}');
    },

    updateCookie(data) {
        _chocolateCookie = merge(this.getCookie(), data);
        let opts = { expires: 259200 };
        if (!_isLocal) {
            opts.domain = '.adcade.com';
        }
        Cookies.set('adcade_info', JSON.stringify(_chocolateCookie), opts);
    },

    removeCookie() {
        Cookies.expire('adcade_info');
    },

    emitChange() {
        this.emit('change');
    },

    addChangeListener(callback) {
        this.on('change', callback);
    },

    removeChangeListener(callback) {
        this.removeListener('change', callback);
    }

});

// Register dispatcher callback
AppDispatcher.register((payload) => {
    let action = payload.action;

    switch (action.actionType) {
        case Constants.SET_STATE:
            _state = updateState(action.key);
            break;

        default:
            return true;
    }

    // If action was acted upon, emit change event
    LoginStore.emitChange();

    return true;
});

export default LoginStore;
