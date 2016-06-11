'use strict';
import React, { Component } from 'react';
import {
    StyleSheet, Text, Navigator, View,ListView,Image
} from 'react-native';

var REQUEST_URL="https://api.douban.com/v2/movie/in_theaters";

export default class MovieInTheaters extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies:null,
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        };
    }

    //componentDidMount方法方法只会在组件完成加载的时候调用一次
    componentDidMount() {
        this.fetchData();
    }

    render() {
        return this.listView();
    }

    fetchData(){
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.subjects)
                });
            }).done();
    }

    listView(){
        return (
            <ListView
                initialListSize={1}
                dataSource={this.state.dataSource}
                renderRow={this.renderMovie}
            />
        );
    }

    renderMovie(movie: Object){
        return (
            <View style={styles.movieRow}>
                <Image
                    source={{uri: movie.images.small}}
                    style={styles.movieImage} />
                <View style={styles.movieBox}>
                    <Text style={styles.movieTitle}>{movie.title}-{movie.original_title}</Text>
                    <Text style={styles.movieStar}>{movie.rating.average}({movie.rating.stars})</Text>
                </View>
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
