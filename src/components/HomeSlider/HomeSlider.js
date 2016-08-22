import React from "react";
import {
    Text,
    View,
    StyleSheet
} from "react-native";

import Swiper from "react-native-swiper";
import Slider from "./Slider";
import config from "../../config"
import Helper from "../../Helper";

class HomeSlider extends React.Component{
    goToVerse(){
        //this.props.navigator.jumpTo(config.route.chapterPage);
        Helper.navigator.replace(config.route.chapterPage);
    }

    render(){
        return (
            <Swiper showsPagination={false} loop={false} height={220} style={styles.mainContainer}>
                <Slider sliderTitle="Verse of the day"
                        chapterName="Ephesians 3:17"
                        chapterText="so that Christ may dwell in your hearts through faith. And I pray that you, being rooted and established in love,"
                        onButtonClick={this.goToVerse.bind(this)}
                />
                <Slider sliderTitle="Last view passage"
                        chapterName="Ephesians 3:17"
                        chapterText="so that Christ may dwell in your hearts through faith. And I pray that you, being rooted and established in love,"
                        onButtonClick={this.goToVerse.bind(this)}
                />
            </Swiper>
        );
    }
}

const sliderHeight = 40;

const styles = StyleSheet.create({
    mainContainer : {
        height : sliderHeight
    }
});

export default HomeSlider;


