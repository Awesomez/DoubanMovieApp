
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    DrawerLayoutAndroid,ToolbarAndroid,ToastAndroid,
    Dimensions,
    Platform,
    View
} from 'react-native';

var HomePageList = require('./HomePageList').default;
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

var DataSource = require('./DataSource');
var source=new DataSource();

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.onSelectItem=this.onSelectItem.bind(this);
        this.state = {
            item: source.drawerListInit()
        };
    }

    onSelectItem(item) {
        this.refs[REF_DRAWER].closeDrawer();
        this.setState({
            item:item
        });
    }

    render() {
        var item=this.state.item;
        var titleName=APP_NAME+' '+item.name;
        return (
            <DrawerLayoutAndroid
                ref={REF_DRAWER}
                drawerWidth={SCREEN_WIDTH-DRAWER_WIDTH_LEFT}
                drawerPosition={DrawerLayoutAndroid.positions.left}
                renderNavigationView={() => this.renderDrawer()}>
                <ToolbarAndroid
                    title={titleName}
                    titleColor="white"
                    style={styles.toolbar}
                    actions={toolbarActions}
                    onIconClicked={() => this.refs[REF_DRAWER].openDrawer()}
                    onActionSelected={this.onActionSelected} />
                <HomePageList theme={item} style={{flex: 1, width: SCREEN_WIDTH}} navigator={this.props.navigator}  tabLabel="HomePageList" />
            </DrawerLayoutAndroid>
        );
    }

    renderDrawer() {
        return (<Drawer navigator={this.props.navigator} onSelectItem={this.onSelectItem} />);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FAFAFA',
    },
    toolbar: {
        backgroundColor: '#30925C',
        height: 56,
    },
});
