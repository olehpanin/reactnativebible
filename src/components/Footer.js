import React from "react";
import {
    View,
    TouchableHighlight,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    Animated
} from "react-native";

import config from "../config"
import Helper from "../Helper";

class Footer extends React.Component{

    toggleAnimationTime = 100;

    constructor(props){
        super(props);

        this.state = {
            menuStyle : {
                //opacity : 1,
                //height : 0
                height : new Animated.Value(0)
            }
        };

        this.menuToggleValue = false;
        this._onMenuItemPress = this._onMenuItemPress.bind(this);

        console.log( Helper.route );
    }

    _onMenuPress(){
        let animationToValue;

        if( this.menuToggleValue ){
            animationToValue = 0;
        } else {
            animationToValue = menuItemHeight * 2;
        }

        Animated.timing(
            this.state.menuStyle.height,
            {
                toValue: animationToValue,
                duration: this.toggleAnimationTime
            }
        ).start();

        this.menuToggleValue = !this.menuToggleValue;
    }

    _onMenuItemPress(routeObj){
        //console.log( "this.props.navigator: ", this.props.navigator );
        Helper.navigator.replace(routeObj);
    }

    _onVersePress(){
        console.log("_onVersePress");
    }

    render(){
        return (
            <View style={ styles.mainContainer }>
                <Animated.View style={ [ this.state.menuStyle, styles.menuContainer ] }>
                    <TouchableHighlight onPress={this._onMenuItemPress.bind(this, config.route.homePage)}>
                        <Text style={ styles.menuItem }>Home</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this._onMenuItemPress.bind(this, config.route.biblePage)}>
                        <Text style={ styles.menuItem }>My Bible</Text>
                    </TouchableHighlight>
                </Animated.View>
                <View style={styles.bottomContainer}>
                    <TouchableHighlight style={styles.menuButtonContainer} onPress={this._onMenuPress.bind(this)}>
                        <Image source={require("../../img/hamburger-icon.png")} style={styles.menuButton}/>
                    </TouchableHighlight>

                    <Image source={require("../../img/search-icon.png")} style={styles.search}/>

                    <TouchableHighlight style={ styles.verseContainer } onPress={this._onVersePress.bind(this)}>
                        <Text style={ styles.verse }>NT</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const menuButtonSize = 20,
    menuButtonMargin = 5,
    menuItemHeight = 40,
    containerSize = menuButtonSize + menuButtonMargin * 2;

let screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({

    mainContainer : {
        backgroundColor : "black"
        //backgroundColor:'rgba(128,128,128,0.1)'
        //backgroundColor : "white",
        //height : screenHeight,
        //opacity : 0.9
        //flex : 1
        //height : menuButtonSize * 2
    },

    menuItem : {
        color: "white",
        marginLeft : 15,
        marginTop : 5,
        height : menuItemHeight
    },

    menuContainer : {
        backgroundColor : "red",
        flex : 1
    },

    menuButtonContainer :{
        width : containerSize,
        height : containerSize
    },

    menuButton : {
        width : menuButtonSize,
        height : menuButtonSize,
        marginLeft: menuButtonMargin,
        marginTop: menuButtonMargin,
        marginBottom: menuButtonMargin
    },

    search : {
        width : menuButtonSize,
        height : menuButtonSize,
        marginRight: menuButtonMargin,
        marginTop: menuButtonMargin
    },

    bottomContainer : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: containerSize
    },

    verseContainer : {
        //width : 0
    },

    verse : {
        width : containerSize,
        height : containerSize,
        backgroundColor: "red",
        color: "white",
        padding: menuButtonMargin

    }
});

export default Footer;