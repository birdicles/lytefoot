import React, {
    Component,
    PropTypes,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import MapComponent from './MapComponent';

export default class WalkComponentView extends Component {

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
        // this.state = {};
    }

    componentWillReceiveProps(props) {}

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    // spoofMovement() {
    //     this.cnt = 0;
    //     this.int = setInterval(function() {
    //         this.cnt++;
    //         if(this.cnt > 10) {
    //             clearInterval(this.int);
    //         }
    //         this.setState({
    //             coords: {
    //                 latitude: this.state.coords.latitude + 10,
    //                 longitude: this.state.coords.longitude + 10
    //             }
    //         });
    //     }.bind(this), 500);
    // }

    render() {
        // console.log('WalkComponentView.js: this.props:', this.props);
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    {this.props.title}
                </Text>
                <MapComponent
                    region={this.props.region}
                    isRunning={this.props.isRunning}
                    isPaused={this.props.isPaused} />
                <TouchableOpacity onPress={this.props.startMap}>
                    <Text style={styles.item}>Play</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.togglePauseMap}>
                    <Text style={styles.item}>Pause</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.stopMap}>
                    <Text style={styles.item}>Stop</Text>
                </TouchableOpacity>
            </View>
        );
    }

}

WalkComponentView.defaultProps = {};
WalkComponentView.propTypes = {
    id: PropTypes.string,
    items: PropTypes.array,
    title: PropTypes.string.isRequired,
    region: PropTypes.object,
    updateMap: PropTypes.func.isRequired,
    startMap: PropTypes.func.isRequired
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
    item: {
        fontSize: 14,
        fontWeight: '300',
        fontFamily: 'Avenir-Book',
        paddingTop: 5
    }
});
