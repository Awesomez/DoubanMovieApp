
import React, { Component } from 'react';
import {
  StyleSheet, Text, Navigator, View
} from 'react-native';

var Home=require('./Home').default;

class App extends Component {
    render() {
        var initialRoute={name:'home'};
        return (
            <Navigator
                initialRoute={initialRoute}
                renderScene={this.routerMapper}
                configureScene = {(route) => Navigator.SceneConfigs.FloatFromRight}
            />
        );
    }

    routerMapper(action,navigator){
        if(action.name==='home'){
            return (<Home navigator={navigator} />);
        }else if(action.name==='detail'){
            return (<View navigator={navigator}>
                <Text>detail</Text>
            </View>);
        }
    }
}

module.exports=App;
