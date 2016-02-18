import { StyleSheet } from 'react-native';


// problem here is need unique IDs for every class - cannot nest objects
// TODO - USE REACT-NATIVE-CSS INSTEAD
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    menu: {
        flex: 1,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 0,
        left: 0
    },
    frontView: {
        flex: 1,
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: 'transparent'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'transparent'
    }
});
