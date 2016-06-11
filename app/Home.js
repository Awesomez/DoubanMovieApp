
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    DrawerLayoutAndroid,ToolbarAndroid,
    Dimensions,
    Platform,
    View
} from 'react-native';

var MovieInTheaters = require('./MovieInTheaters').default;
var Drawer = require('./Drawer').default;

const SCREEN_WIDTH=Dimensions.get('window').width;
const DRAWER_WIDTH_LEFT=56;
const DRAWER_REF = 'drawer';
const APP_NAME='豆瓣电影';

const toolbarActions = [
    {title: 'Search', show: 'never'},
    {title: 'Test', show: 'never'},
    {title: 'Setting', show: 'never'},
];

export default class Home extends Component {
    render() {
        return (
            <DrawerLayoutAndroid
                ref={DRAWER_REF}
                drawerWidth={SCREEN_WIDTH-DRAWER_WIDTH_LEFT}
                drawerPosition={DrawerLayoutAndroid.positions.left}
                renderNavigationView={() => this.renderDrawer()}>
                <ToolbarAndroid
                    title={APP_NAME}
                    titleColor="white"
                    style={styles.toolbar}
                    actions={toolbarActions}
                    onIconClicked={() => this.refs[DRAWER_REF].openDrawer()}
                    onActionSelected={this.onActionSelected} />
                <MovieInTheaters style={{flex: 1, width: SCREEN_WIDTH}} navigator={this.props.navigator}  tabLabel="MovieInTheaters" />
            </DrawerLayoutAndroid>
        );
    }

    renderDrawer() {
        return (<Drawer />);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FAFAFA',
    },
    toolbar: {
        backgroundColor: '#00a2ed',
        height: 56,
    },
});
