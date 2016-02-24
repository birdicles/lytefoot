// https://github.com/lelandrichardson/react-native-maps
import React, {
    Component,
    PropTypes,
    StyleSheet
} from 'react-native';
import MapView from 'react-native-maps';

// const earthRadius = 6271.3929; // in km
// const targetRadius = 1; // in km
// const radiusInRad = targetRadius / earthRadius;

export default class MapComponent extends Component {

    /*eslint-disable */
    /*eslint-enable */

    /*
     * TODOS
     * - map
     *   - drop custom marker at start and finish
     *   - draw route as location changes
     *     - get location (add points to array)
     *     - on location update (spoof for testing)
     * - stats display
     *   - accumulate total distance (running total on interval)
     *   - accumulate duration
     *   - calculate speed
     * - nav
     *   - stop, start, pause
     */


    constructor(props) {
        super(props);

        console.log('MapComponent.js: props:', props);
        // let bounds = this.setBounds(37.3657553);

        // this.state = {
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
        // };
    }

    componentWillReceiveProps(props) {}

    componentDidMount() {
        // navigator.geolocation.getCurrentPosition(
        //     (position) => {
        //         let initialPosition = position;
        //         console.log('MapComponent.js: initialPosition:', initialPosition);
        //         this.setState(initialPosition);
        //     },
        //     (error) => alert(error.message),
        //     {
        //         enableHighAccuracy: true,
        //         timeout: 20000,
        //         maximumAge: 1000
        //     }
        // );

        // this.watchID = navigator.geolocation.watchPosition((position) => {
        //     console.log('MapComponent.js: position:', position);
        //     let lastPosition = JSON.stringify(position);
        //     // this.setState({lastPosition});
        // });
    }

    componentWillUnmount() {
        // navigator.geolocation.clearWatch(this.watchID);
    }

    onRegionChange(region) {
        // console.log('MapComponent.js: onRegionChange: region:', region);
    }

    // setBounds(lat) {
    //     // TODO - CALCULATE ASPECT RATIO
    //     let aspectRatio = 1.8;
    //     let longitudeDelta = this.rad2deg(radiusInRad / Math.cos(this.deg2rad(lat)));
    //     let latitudeDelta = aspectRatio * this.rad2deg(radiusInRad);

    //     return {
    //         latd: latitudeDelta,
    //         lngd: longitudeDelta
    //     };
    // }

    // rad2deg(r) {
    //     return r * (180 / Math.PI);
    // }

    // deg2rad(d) {
    //     return d * (Math.PI / 180);
    // }

    startOverlay() {}

    updateOverlay() {}

    render() {
        // let bounds = this.setBounds(37.3657553);
        // TODO - CHECK FOR STATE CHANGE
        if(this.props.isRunning) console.log('MapComponent.js: start this byotch');
        return (
            <MapView
                initialRegion={this.props.initialRegion}
                onRegionChange={this.onRegionChange}
                style={styles.map}
                region={this.props.region}
            />
        );
    }

}

MapComponent.defaultProps = {
    initialRegion: { // sunnyvale, byotch!
        latitude: 37.3657553,
        longitude: -122.026385,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    },
    isRunning: false
};

MapComponent.propTypes = {
    initialRegion: PropTypes.object.isRequired,
    region: PropTypes.object,
    isRunning: PropTypes.bool
};

const styles = StyleSheet.create({
    map: {
        height: 450,
        margin: 20,
        borderWidth: 1,
        borderColor: '#666'
    }
});
