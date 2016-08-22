import React from 'react';

import {
    Text,
    StyleSheet
} from "react-native";

class Greeting extends React.Component{
    render(){
        return (
            <Text style={[ styles.text, styles.redColor ]}>Hello {this.props.name}!</Text>
        );
    }
}

const styles = StyleSheet.create({
    text : {
        fontSize : 16,
        width: 32,
        height: 20
    },
    redColor : {
        color : 'red'
    }
});

export default Greeting;