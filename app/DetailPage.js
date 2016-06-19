
import React, { Component } from 'react';
import {
    StyleSheet,ScrollView,Text, Image,
    DrawerLayoutAndroid,ToolbarAndroid,ToastAndroid,TouchableNativeFeedback,
    Dimensions, Platform, View
} from 'react-native';

var DataSource = require('./DataSource');
var source=new DataSource();

export default class DetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            movie: this.props.movie,
            detail:null
        };
        this.onBackButton=this.onBackButton.bind(this);
    }

    componentDidMount() {
        this.setState({
            isLoading: true,
        });
        this.loadMovieData(this.state.movie.id);
    }

    loadMovieData(movieId){
        source.getMovieDetail(movieId).then(
            (responseData)=>{
                this.setState({
                    detail:responseData,
                    isLoading: false
                });
            }
        );
    }

    render() {
        return (
            this.renderDetail()
        );
    }

    renderDetail(){
        return(
            <View style={styles.container}>
                    <View style={styles.toolbar}>
                        <TouchableNativeFeedback onPress={this.onBackButton}>
                            <View>
                                <Image
                                    style={styles.backButton}
                                    source={require('./images/ic_back.png')}
                                    resizeMode='contain' />
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                <ScrollView style={styles.detailContainer} showsVerticalScrollIndicator={false} >
                    <View style={styles.detailImageBox}>
                        <Image style={styles.detailImage}
                               source={{uri: this.props.movie.images.large}}/>
                        <View style={styles.detailTitleBox}>
                            <Text style={styles.detailTitle}>{this.props.movie.title}</Text>
                            <Text style={styles.detailList}>{this.props.movie.rating.average}分</Text>
                            <Text style={styles.detailList}>({this.props.movie.rating.stars}人评分)</Text>
                            <Text style={styles.detailList}>类型:{this.props.movie.genres.join(" ")}</Text>
                            <Text style={styles.detailList}>演员:{this.arrayToString(this.props.movie.casts)}</Text>
                        </View>
                    </View>
                    <Text style={styles.detailSummaryTitle}>简介</Text>
                    <Text style={styles.detailSummaryContent}>{this.state.detail?this.state.detail.summary:"loading"}</Text>
                </ScrollView>
            </View>
        );
    }

    arrayToString(obj) {
        let actors =[];
        for(var i in obj){
            actors.push(obj[i]['name']);
        }
        return actors.join(' ');
    }

    onBackButton() {
        if (this.props.navigator) {
            this.props.navigator.pop();
        }
    }
}

const styles = StyleSheet.create({
    detailContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    detailImageBox: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#30925C',
    },
    detailImage: {
        height: 160,
        width: 112,
        marginLeft:20,
        marginTop: 15,
        marginBottom: 15,
    },
    detailTitleBox:{
        flex:1,
        marginLeft: 15,
        marginRight: 20,
    },
    detailTitle: {
        fontSize: 16,
        marginTop: 15,
        color:'#fff'
    },
    detailList:{
        color: '#ddd',
        fontSize: 12,
        marginTop:10,
    },
    detailSummaryTitle: {
        color: '#333',
        fontSize: 14,
        marginTop: 10,
        marginLeft: 20,
    },
    detailSummaryContent: {
        color: '#666',
        fontSize: 12,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
    },
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
    toolbar: {
        backgroundColor: '#30925C',
        height: 36,
    },
    backButton: {
        width: 32,
        height: 32,
        marginLeft: 10,
        marginTop:2,
    },

});
