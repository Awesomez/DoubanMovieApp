
import React, { Component } from 'react';
import {
  StyleSheet, Text, Navigator, View,StatusBar
} from 'react-native';

var Home=require('./Home').default;

class App extends Component {
    render() {
        var initialRoute={name: 'Home'};
        return (
            <View style={styles.container}>
                <StatusBar
                    translucent={false}
                    //backgroundColor="rgba(0, 0, 0, 0.1)"
                    backgroundColor="#00a2ed"
                    barStyle="light-content"
                />
                <Navigator
                    initialRoute={initialRoute}
                    renderScene={this.routerMapper}
                    configureScene={(route) => Navigator.SceneConfigs.FadeAndroid}
                />
            </View>
        );
    }
    
    routerMapper(route,navigator){
        if(route.name==='Home'){
            return (<Home {...route.params} navigator={navigator}/>);
        }else if(route.name==='Detail'){
            return (<View navigator={navigator}>
                <Text>detail</Text>
            </View>);
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

module.exports=App;
