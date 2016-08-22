import React from "react";
import {
    Text,
    ScrollView,
    View,
    StyleSheet,
    Dimensions,
    Image,
    TouchableHighlight
} from "react-native";

import Footer from "../components/Footer";
import Helper from "../Helper";
import config from "../config";

class BiblePage extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            booksList : [
                {
                    title : "Book 1",
                    chaptersCount : 10
                },
                {
                    title : "Book 2",
                    chaptersCount : 23
                }
                //,
                //{
                //    title : "Book 3",
                //    chaptersCount : 33
                //},
                //{
                //    title : "Book 4",
                //    chaptersCount : 24
                //},
                //{
                //    title : "Book 5",
                //    chaptersCount : 45
                //}
            ]
        };
    }

    _onClosePress(){
        Helper.navigator.replace(config.route.homePage);
    }

    _onAbrPress(){
        console.log("_onAbrPress");
    }
//
//<View style={styles.container}>
//<View style={styles.bgImageWrapper}>
//<Image source={require("../../img/background-dark-pink.png")} style={styles.bgImage} />
//</View>
//
//<View style={styles.topContainer}>
//<Text style={styles.selectedChapterTitle}>Hey</Text>
//<TouchableHighlight style={styles.closeContainer} onPress={this._onClosePress.bind(this)}>
//<Image source={require("../../img/x-icon.png")} style={styles.close}/>
//</TouchableHighlight>
//</View>
//
//<ScrollView>
//<View style={styles.booksListContainer}>
//<View style={styles.booksListChaptersContainer}>
//{
//    this.state.booksList.map( (item, index) => {
//        return (
//            <View style={styles.bookContainer} key={index}>
//                <View>
//                    <Text>{item.title}</Text>
//                </View>
//                <View style={styles.chaptersContainer}>
//                    { (() => {
//                        let chapters = [];
//                        for( let i = 0 ; i < item.chaptersCount ; i++ ){
//                            chapters.push(
//                                <View key={i} style={styles.chapterItem}>
//                                    <Text style={styles.chapterItemText}> { i + 1 } </Text>
//                                </View>
//                            );
//                        }
//
//                        return chapters;
//                    })()}
//                </View>
//            </View>
//        )
//    } )
//}
//</View>
//</View>
//</ScrollView>
//<View style={styles.booksListAbrContainer}>
//    <TouchableHighlight style={styles.booksListAbr} onPress={this._onAbrPress.bind(this)}>
//        <Text>Hey</Text>
//    </TouchableHighlight>
//</View>
//<Footer />
//</View>
    render(){
        return (


                <View style={styles.c1}>
                    <View style={styles.c1inside}>

                    </View>
                </View>



        );
    }
}

const topMenuHeight = 30,
    bookContainerMargin = 10,
    bookContainerRadius = 3,
    chapterSize = 50;

const styles = StyleSheet.create({

    c1 : {
        position: "relative",
        width: 150,
        height: 150,
        overflow: "hidden"
    },

    c1inside : {
        position: "absolute",
        left:-200,
        top:-200,
        borderRadius: 150,
        width:150,
        height:150,
        borderWidth: 200,
        borderColor: "red",
        borderStyle: "solid"
    },

    container: {
        flex: 1,
        backgroundColor: "blue"
    },

    bgImageWrapper: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },

    bgImage: {
        flex: 1,
        resizeMode: "stretch",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },

    topContainer : {
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        height: topMenuHeight,
        backgroundColor: "red",
        //width: 100
    },

    closeContainer : {
        backgroundColor: "black"
    },

    close : {
        height : topMenuHeight,
        width : topMenuHeight
    },

    selectedChapterTitle : {
        flex : 1,
        marginTop: 5,
        color : "white",
        justifyContent: "center",
        textAlign: 'center',
    },

    bookContainer : {
        //backgroundColor : "white",
        margin: bookContainerMargin,
        marginTop: bookContainerMargin / 2,
        marginBottom: bookContainerMargin / 2,
        borderRadius : bookContainerRadius,
    },

    chaptersContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
        
    },

    chapterItem : {
        justifyContent: "center",
        width: chapterSize,
        height: chapterSize,
        borderRadius : chapterSize / 2,
        //backgroundColor: "red",
        backgroundColor: 'transparent',



        //color: '#eee'

    },

    chapterItemText : {
        textAlign: "center",
        color: "red"
    },

    booksListContainer : {
        //flex : 1,
        //alignItems: "center",
        //justifyContent: 'space-between',
        //flexDirection: "row"

    },

    booksListChaptersContainer : {
        //flex: 1,
        //flexDirection: "row"
    },

    booksListAbrContainer : {
        width : 40,
        position: "absolute"
    },

    booksListAbr : {

    }
});

export default BiblePage;