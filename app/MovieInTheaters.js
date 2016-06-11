'use strict';
import React, { Component } from 'react';
import {
    StyleSheet, Text, Navigator, View,ListView,Image,ProgressBarAndroid,TouchableNativeFeedback,ToastAndroid
} from 'react-native';

const API_MOVIE_IN_THEATERS="https://api.douban.com/v2/movie/in_theaters";

export default class MovieInTheaters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            api: API_MOVIE_IN_THEATERS,
            isLoaded: false,
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        };
    }

    //componentDidMount方法方法只会在组件完成加载的时候调用一次
    componentDidMount() {
        ToastAndroid.show('Welcome', ToastAndroid.SHORT);
        this.fetchData();
    }

    render() {
        if(!this.state.isLoaded){
            return this.renderLoadingView();
        }
        return (
            <ListView
                initialListSize={10}
                dataSource={this.state.dataSource}
                renderRow={this.renderMovie}
            />
        );
    }

    fetchData(){
        fetch(this.state.api)
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
        return (
            <TouchableNativeFeedback >
            <View style={styles.movieRow}>
                <Image
                    source={{uri: movie.images.small}}
                    style={styles.movieImage} />
                <View style={styles.movieBox}>
                    <Text style={styles.movieTitle}>{movie.title}-{movie.original_title}</Text>
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
