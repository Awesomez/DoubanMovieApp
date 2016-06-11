
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    DrawerLayoutAndroid,
    Dimensions,
    TouchableHighlight,
    TouchableNativeFeedback,
    Platform,
    View
} from 'react-native';

export default class Drawer extends Component {
    render() {
        //https://developers.douban.com/wiki/?title=movie_v2
        var menuList=['正在热映','即将上映','Top250','口碑榜','北美票房榜','新片榜'];
        var TouchableElement = TouchableHighlight;
        if (Platform.OS === 'android') {
            TouchableElement = TouchableNativeFeedback;
        }
        return (
            <View style={styles.container}>
                <Text style={{margin: 10,color:'#fff',fontSize: 15, textAlign: 'center'}}>我是导航功能栏标题</Text>
                {
                    menuList.map(function (v,k){
                        return (
                            <Text key={k} style={{marginTop: 10,marginLeft:20,color:'#fff',fontSize: 15, textAlign: 'left'}}>{v}</Text>)
                    })
                }
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3E9CE9'
    },
    toolbar: {
        backgroundColor: '#00a2ed',
        height: 56
    }
});
