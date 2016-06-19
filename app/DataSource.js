'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,ToastAndroid,
    Dimensions,
    Platform,
    View
} from 'react-native';

const API_MOVIE_DETAI='https://api.douban.com/v2/movie/subject/';

//https://developers.douban.com/wiki/?title=movie_v2
const API_IN_THEATERS='https://api.douban.com/v2/movie/in_theaters';
const API_US_BOX='https://api.douban.com/v2/movie/us_box';
const API_WEEKLY='https://api.douban.com/v2/movie/weekly';
const API_COMING_SOON='https://api.douban.com/v2/movie/coming_soon';
const API_NEW_MOVIES='https://api.douban.com/v2/movie/new_movies';
const API_TOP250='https://api.douban.com/v2/movie/top250';


const KEY_IN_THEATERS='key_in_theaters';
const KEY_US_BOX='key_us_box';
const KEY_WEEKLY='key_weekly';
const KEY_COMING_SOON='key_coming_soon';
const KEY_NEW_MOVIES='key_new_movies';
const KEY_TOP250='key_top250';

class DataSource {
    drawerList(){
        return [
            this.drawerModel('正在热映',KEY_IN_THEATERS,API_IN_THEATERS),
            //this.drawerModel('北美票房榜',KEY_US_BOX,API_US_BOX),
            //this.drawerModel('口碑榜',KEY_WEEKLY,API_WEEKLY),
            this.drawerModel('即将上映',KEY_COMING_SOON,API_COMING_SOON),
            this.drawerModel('Top250',KEY_TOP250,API_TOP250),
            //this.drawerModel('新片榜',KEY_NEW_MOVIES,API_NEW_MOVIES)
        ];
    }

    drawerListInit(){
        return this.drawerList()[0];
    }

    drawerModel (name,key,api) {
        return {name,key,api};
    }

    getMovieDetail(movieId){
        var url=API_MOVIE_DETAI + movieId;
        return this.theFetch(url);
    }

    theFetch (reqUrl: string) {
        console.log('reqUrl', reqUrl);
        return new Promise((resolve, reject) => {
            fetch(reqUrl)
                .then((response) => response.json())
                .then((responseData) => {
                    //console.log(responseData);
                    resolve(responseData);
                })
                .catch((error) => {
                    console.error(error);
                    resolve(null);
                });
        });
    }

}

module.exports = DataSource;
