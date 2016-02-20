// https://facebook.github.io/react-native/docs/mapview.html#content
import React, {
    Component,
    PropTypes,
    StyleSheet,
    MapView,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class MapComponentView extends Component {

    /*eslint-disable */
    /*eslint-enable */

    constructor(props) {
        super(props);

        this.state = {
            coords: {
                latitude: -100,
                longitude: -122
            }
            // overlays: [{
            //     coordinates: [
            //         {
            //             latitude: 0,
            //             longitude: 0
            //         },
            //         {
            //             latitude: 100,
            //             longitude: 100
            //         }
            //     ],
            //     lineWidth: 5,
            //     strokeColor: '#ff0000',
            //     // fillColor: [styles.map.borderColor],
            //     id: 'default'
            // }]
        };
    }

    componentWillReceiveProps(props) {}

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                let initialPosition = position;
                console.log('MapComponentView.js: initialPosition:', initialPosition);
                // this.setState(initialPosition);
            },
            (error) => alert(error.message),
            {
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 1000
            }
        );

        // this.watchID = navigator.geolocation.watchPosition((position) => {
        //     let lastPosition = JSON.stringify(position);
        //     this.setState({lastPosition});
        // });
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }



    onStopClick() {}

    onPauseClick() {}

    onPlayClick() {}

    // WRAP MAP COMPONENT WITH:
    // - startOverlay
    // - updateOverlay

    render() {
        console.log('MapComponentView.js: this.state.coords:', this.state.coords);
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    {this.props.title}
                </Text>
                <MapView
                    style={styles.map}
                    region={this.state.coords}
                    overlays={this.state.overlays}
                />
                <TouchableOpacity onPress={this.onStopClick}>
                    <Text style={styles.item}>Stop</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onPauseClick}>
                    <Text style={styles.item}>Pause</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onPlayClick}>
                    <Text style={styles.item}>Play</Text>
                </TouchableOpacity>
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
    },
    item: {
        fontSize: 14,
        fontWeight: '300',
        fontFamily: 'Avenir-Book',
        paddingTop: 5
    }
});
