
import React, { Component } from 'react';
import {
  StyleSheet, Text, Navigator, View
} from 'react-native';

var Home=require('./Home');

var RouterMapper=function(){
    return (<Home />);
};

class App extends Component {
    render() {
        var initialRoute={name:'home'};
        return (
            <Navigator
                initialRoute={initialRoute}
                renderScene={RouterMapper}
                configureScreen = {(route) => Navigator.SceneConfigs.FloatFromRight}
            />
        );
    }
}

module.exports=App;
