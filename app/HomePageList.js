'use strict';
import React, { Component } from 'react';
import {
    StyleSheet, Text, Navigator, View,ListView,Image,ProgressBarAndroid,TouchableNativeFeedback,ToastAndroid
} from 'react-native';

export default class HomePageList extends Component {
    constructor(props) {
        super(props);

        var dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2
        });

        this.state = {
            isLoaded: false,
            dataSource: dataSource
        };
    }

    //componentDidMount方法方法只会在组件完成加载的时候调用一次
    componentDidMount() {
        this.fetchData(this.props.theme.api);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            isLoaded:false,
        });
        this.fetchData(nextProps.theme.api);
    }

    render() {
        if(!this.state.isLoaded){
            return this.renderLoadingView();
        }
        return (
            <ListView
                initialListSize={6}
                dataSource={this.state.dataSource}
                renderRow={this.renderMovie}
            />
        );
    }

    fetchData(api){
        fetch(api)
            .then((response) => response.json())
            .catch((error)=>{
                this.setState({
                    dataSource:null,
                    isLoaded:false
                });
                console.warn(error);
            })
            .then((responseData) => {
                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(responseData.subjects),
                    isLoaded:true
                });
            }).done();
    }

    renderMovie(movie: Object){
        var itemTitle=movie.title?movie.title:null;
        var itemTitleEng=movie.original_title?movie.original_title:null;
        var itemImgSmall=(movie.images.small!== undefined)?movie.images.small:null;

        return (
            <TouchableNativeFeedback >
            <View style={styles.movieRow}>
                <Image
                    source={{uri: itemImgSmall}}
                    style={styles.movieImage} />
                <View style={styles.movieBox}>
                    <Text style={styles.movieTitle}>{itemTitle}-{itemTitleEng}</Text>
                    <Text style={styles.movieStar}>{movie.rating.average}({movie.rating.stars})</Text>
                </View>
            </View>
            </TouchableNativeFeedback>
        );
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <ProgressBarAndroid color="green" styleAttr="Inverse"  />
                <Text>
                    Loading movies...
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    movieRow: {
        flex: 1,
        flexDirection: 'row',
        padding: 10
    },
    movieImage: {
        height: 80,
        width: 56
    },
    movieBox: {
        flex: 1,
        marginLeft: 10,
    },
    movieTitle: {
        fontSize: 16,
        fontWeight: '500',
    },
    movieStar: {
        color:'red',
        fontSize: 14
    },
});
