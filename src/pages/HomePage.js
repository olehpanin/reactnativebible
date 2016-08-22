import React from "react";
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    Image,
    Dimensions
} from "react-native";

import Greeting from "../../src/components/Greeting.js";
import Footer from "../../src/components/Footer.js";
import HomeSlider from "../../src/components/HomeSlider/HomeSlider";

//<Image source={imageSrc} style={{width: 193, height: 110}}/>
//<Image source={imageSrc} style={{width: 193, height: 110}}/>
//<Image source={imageSrc} style={{width: 193, height: 110}}/>
//<Greeting name="Oleh" />
//    <Greeting name="Diana" />
//    <Text style={styles.welcome}>
//Hello World
//</Text>
//let imageSrc = {
//    uri : "http://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
//};


class HomePage extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.bgImageWrapper}>
                    <Image source={require("../../img/background-mid-blue.png")} style={styles.bgImage} />
                </View>
                <ScrollView>
                    <HomeSlider/>
                </ScrollView>
                <Footer/>
            </View>
        );
    }
}


//justifyContent: 'center',
//    alignItems: 'center',
//    backgroundColor: '#F5FCFF',

const styles = StyleSheet.create({
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
    container: {
        flex: 1
    },
    welcome: {
        //fontSize: 20,
        //textAlign: 'center',
        //margin: 10,
    },
    instructions: {
        //textAlign: 'center',
        //color: '#333333',
        //marginBottom: 5,
    },
});

export default HomePage;