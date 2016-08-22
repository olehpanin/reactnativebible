import React from "react"
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from "react-native";

import SliderButton from "./SliderButton";

class Slider extends React.Component{


    render(){
        return (
            <View bounces={true} style={styles.slider}>
                <View style={styles.title}>
                    <Text style={styles.centerText}>{this.props.sliderTitle}</Text>
                </View>
                <View style={styles.body}>
                    <View>
                        <Text style={[styles.centerText, styles.name]}>{this.props.chapterName}</Text>
                    </View>
                    <View>
                        <Text style={[styles.centerText, styles.text]}>{this.props.chapterText}</Text>
                    </View>
                    <SliderButton text="Go To Verse" onClick={this.props.onButtonClick}/>
                </View>
            </View>
        );
    }
}

const backgroundColor = "white",
    borderRadius = 10;

const styles = StyleSheet.create({
    title : {
        borderBottomColor: "gray",
        borderBottomWidth: 0.5,
        height: 25
    },

    name : {
        marginTop: 5,
        marginBottom: 10
    },

    centerText : {
        textAlign:'center',
    },

    text : {
        marginBottom: 10
    },

    body : {
        padding: 10,
    },

    slider : {
        backgroundColor : backgroundColor,
        margin: 10,
        borderTopLeftRadius : borderRadius,
        borderTopRightRadius : borderRadius,
        borderBottomLeftRadius : borderRadius,
        borderBottomRightRadius : borderRadius,
        borderWidth: 3,
        borderColor: backgroundColor,
    }
});

export default Slider;