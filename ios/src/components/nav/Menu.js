/**
 * Define the persistent menu (revealed by hamburger button at some point)
 */
import React, {
    StyleSheet,
    ScrollView,
    View,
    Image,
    Text,
    Component,
    TouchableOpacity
} from 'react-native';
import Dimensions from 'Dimensions';

const window = Dimensions.get('window');
const uri = 'http://pickaface.net/includes/themes/clean/img/slide2.png';

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        width: window.width,
        height: window.height,
        backgroundColor: '#50d2c2',
        padding: 20
    },
    avatarContainer: {
        marginBottom: 20,
        marginTop: 20
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: '#e6e6e6',
        flex: 1
    },
    name: {
        position: 'absolute',
        fontWeight: 'bold',
        left: 70,
        top: 20
    },
    item: {
        fontSize: 14,
        fontWeight: '300',
        fontFamily: 'Avenir-Book',
        paddingTop: 5
    }
});

export default class Menu extends Component {

    constructor(props) {
        super(props);
    }

    onItemClick(param) {
        return function onItemClick() {
            // console.log('Menu.js: onItemClick: param:', param);
            this.props.onViewSelect(param);
        }.bind(this);
    }

    render() {
        return (
            <ScrollView style={styles.menu}>
                <View style={styles.avatarContainer}>
                    <Image
                        style={styles.avatar}
                        source={{uri}}
                    />
                    <Text style={styles.name}>View Menu</Text>
                </View>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={this.onItemClick('login')}
                >
                    <Text style={styles.item}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={this.onItemClick('signup')}
                >
                    <Text style={styles.item}>Sign Up</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

Menu.propTypes = {
    navigator: React.PropTypes.object.isRequired,
    onViewSelect: React.PropTypes.func
};

Menu.defaultProps = {
    onViewSelect() {}
};
