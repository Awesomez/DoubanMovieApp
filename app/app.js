
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

    routerMapper(){
        return (<Home />);
    }
}

module.exports=App;
