
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    DrawerLayoutAndroid,
    View
} from 'react-native';

class Home extends Component {
    render() {
        var navigationView = (
            <View style={{flex: 1, backgroundColor: 'green'}}>
                <Text style={{margin: 10,color:'#fff',fontSize: 15, textAlign: 'center'}}>我是导航功能栏标题</Text>
                <Text style={{marginTop: 10,marginLeft:20,color:'#fff',fontSize: 15, textAlign: 'left'}}>1.功能1</Text>
                <Text style={{marginTop: 10,marginLeft:20,color:'#fff',fontSize: 15, textAlign: 'left'}}>2.功能2</Text>
            </View>
        );
        return (
            <DrawerLayoutAndroid
                drawerWidth={150}
                drawerPosition={DrawerLayoutAndroid.positions.left}
                renderNavigationView={() => navigationView}>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>DoubanMovieApp</Text>
                </View>
            </DrawerLayoutAndroid>
        );
    }
}


module.exports=Home;
