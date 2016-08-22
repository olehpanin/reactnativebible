import React from "react";
import {
    Text,
    View,
    StyleSheet,
    ScrollView
} from "react-native";
import Footer from "../components/Footer"


class ChapterPage extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <ScrollView>

                </ScrollView>
                <Footer/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "gray"
    }
});

export default ChapterPage;