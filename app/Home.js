
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    DrawerLayoutAndroid,ToolbarAndroid,ToastAndroid,
    Dimensions,
    Platform,
    View
} from 'react-native';

var MovieInTheaters = require('./MovieInTheaters').default;
var Drawer = require('./Drawer').default;

const SCREEN_WIDTH=Dimensions.get('window').width;
const DRAWER_WIDTH_LEFT=56;
const REF_DRAWER = 'ref_drawer';
const APP_NAME='豆瓣电影';

const toolbarActions = [
    {title: 'Search', show: 'never'},
    {title: 'Test', show: 'never'},
    {title: 'Setting', show: 'never'},
];

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme:null
        };
    }

    onSelectTheme(object) {
        this.state = {
            theme:object
        };
        ToastAndroid.show(object.name, ToastAndroid.SHORT);
    }

    render() {
        return (
            <DrawerLayoutAndroid
                ref={REF_DRAWER}
                drawerWidth={SCREEN_WIDTH-DRAWER_WIDTH_LEFT}
                drawerPosition={DrawerLayoutAndroid.positions.left}
                renderNavigationView={() => this.renderDrawer()}>
                <ToolbarAndroid
                    title={APP_NAME}
                    titleColor="white"
                    style={styles.toolbar}
                    actions={toolbarActions}
                    onIconClicked={() => this.refs[REF_DRAWER].openDrawer()}
                    onActionSelected={this.onActionSelected} />
                <MovieInTheaters theme={this.state.theme} style={{flex: 1, width: SCREEN_WIDTH}} navigator={this.props.navigator}  tabLabel="MovieInTheaters" />
            </DrawerLayoutAndroid>
        );
    }

    renderDrawer() {
        return (<Drawer navigator={this.props.navigator} onSelectItem={this.onSelectTheme} />);
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
