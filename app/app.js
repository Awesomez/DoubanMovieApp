
import React, { Component } from 'react';
import {
  StyleSheet, Text, Navigator, View,StatusBar
} from 'react-native';

var Home=require('./Home').default;

class App extends Component {
    render() {
        var initialRoute={name:'home'};
        return (
            <View style={styles.container}>
                <StatusBar
                    translucent={false}
                    backgroundColor="rgba(0, 0, 0, 0.1)"
                    barStyle="light-content"
                />
                <Navigator
                    initialRoute={initialRoute}
                    renderScene={this.routerMapper}
                    configureScene={(route) => Navigator.SceneConfigs.FloatFromRight}
                />
            </View>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

module.exports=App;
