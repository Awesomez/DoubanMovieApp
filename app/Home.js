
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    DrawerLayoutAndroid,
    Dimensions,
    Platform,
    View
} from 'react-native';

var MovieInTheaters = require('./MovieInTheaters').default;
var Drawer = require('./Drawer').default;

var SCREEN_WIDTH=Dimensions.get('window').width;
var DRAWER_WIDTH_LEFT=56;

export default class Home extends Component {
    render() {
        return (
            <DrawerLayoutAndroid
                drawerWidth={SCREEN_WIDTH-DRAWER_WIDTH_LEFT}
                drawerPosition={DrawerLayoutAndroid.positions.left}
                renderNavigationView={() => this.renderDrawer()}>
                <MovieInTheaters style={{flex: 1, width: SCREEN_WIDTH}} navigator={this.props.navigator}  tabLabel="MovieInTheaters" />
            </DrawerLayoutAndroid>
        );
    }

    renderDrawer() {
        return (<Drawer />);
    }
}
