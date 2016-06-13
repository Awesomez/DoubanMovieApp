'use strict';
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
    ListView,
    TouchableElement,
    View
} from 'react-native';

var DataSource = require('./DataSource');
var data=new DataSource();

export default class Drawer extends Component {
    constructor(props) {
        super(props);

        this.renderRow=this.renderRow.bind(this);

        var ds=new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let responseData=data.drawerList();
        if(responseData){
            this.state = {
                dataSource: ds.cloneWithRows(responseData)
            };
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableNativeFeedback onPress={this._pressButton.bind(this)}>
                    <View>
                        <Text style={{margin: 10,color:'#fff',fontSize: 15, textAlign: 'center'}}>我是导航功能栏标题</Text>
                    </View>
                </TouchableNativeFeedback>
                <ListView
                    initialListSize={10}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        );
    }

    renderRow(rowData: Object, sectionID: number, rowID: number,highlightRow) {
        return (
            <TouchableNativeFeedback
                onPress={() => this.props.onSelectItem(rowData)} >
                    <View style={styles.rowLine}>
                        <Text style={styles.rowText}>
                            {rowData.name}
                        </Text>
                    </View>
            </TouchableNativeFeedback>
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
    },
    rowLine: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    rowText: {
        color:'#fff',
        fontSize: 16,
        marginLeft: 16,
    },
});


