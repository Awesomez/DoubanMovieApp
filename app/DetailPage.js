
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    DrawerLayoutAndroid,ToolbarAndroid,ToastAndroid,
    Dimensions,
    Platform,
    View
} from 'react-native';

const SCREEN_WIDTH=Dimensions.get('window').width;
const DRAWER_WIDTH_LEFT=56;
const REF_DRAWER = 'ref_drawer';
const APP_NAME='豆瓣电影';

const toolbarActions = [
    {title: 'Search', show: 'never'},
    {title: 'Test', show: 'never'},
    {title: 'Setting', show: 'never'},
];

var DataSource = require('./DataSource');
var source=new DataSource();

export default class DetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: source.drawerListInit()
        };
    }

    render() {
        return (
            <View>
                <Text>detail page</Text>
            </View>
        );
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
