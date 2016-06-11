
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    DrawerLayoutAndroid,
    Dimensions,
    TouchableNativeFeedback,
    Platform,
    ToastAndroid,
    Navigator,
    View
} from 'react-native';

export default class Drawer extends Component {
    render() {
        //https://developers.douban.com/wiki/?title=movie_v2
        var menuList=['正在热映','即将上映','Top250','口碑榜','北美票房榜','新片榜'];
        var TouchableElement = TouchableNativeFeedback;
        return (
            <View style={styles.container}>
                <TouchableNativeFeedback onPress={this._pressButton.bind(this)}>
                    <View>
                        <Text style={{margin: 10,color:'#fff',fontSize: 15, textAlign: 'center'}}>我是导航功能栏标题</Text>
                    </View>
                </TouchableNativeFeedback>
                {
                    menuList.map(function (v,k){
                        return (
                            <TouchableElement key={k}>
                                <View >
                            <Text  style={{marginTop: 10,marginLeft:20,color:'#fff',fontSize: 15, textAlign: 'left'}}>
                                {v}
                            </Text></View>
                            </TouchableElement>
                        )
                    })
                }
            </View>
        );
    }

    _pressButton() {
        ToastAndroid.show('hahadd', ToastAndroid.SHORT);
        const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'Detail'
            })
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00a2ed'
    }
});
