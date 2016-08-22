import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from "react-native";

class SliderButton extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            textStyle : {
                color: activeColor
            }
        }
    }

    _onPressButton(){
        this.props.onClick.call();
    }

    _onShowUnderlay(){
        this.setState({ textStyle : {
            color: "white"
        }});
    }

    _onHideUnderlay(){
        this.setState({ textStyle : {
            color: activeColor
        }});
    }

    render(){
        return (
            <TouchableHighlight
                onShowUnderlay={this._onShowUnderlay.bind(this)}
                onHideUnderlay={this._onHideUnderlay.bind(this)}
                underlayColor="red"
                onPress={this._onPressButton.bind(this)}
                style={ styles.container }>
                <Text style={ [ styles.text, this.state.textStyle ] }>
                    {this.props.text}
                </Text>
            </TouchableHighlight >
        );
    }
}

const activeColor = "red",
    borderRadius = 5,
    sideMargin = 40
    topBottomPadding = 5;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',

        borderColor : activeColor,
        borderWidth: 2,
        borderTopLeftRadius : borderRadius,
        borderTopRightRadius : borderRadius,
        borderBottomLeftRadius : borderRadius,
        borderBottomRightRadius : borderRadius,
        marginLeft: sideMargin,
        marginRight: sideMargin,
        paddingTop: topBottomPadding,
        paddingBottom : topBottomPadding
    },

    text : {
        borderColor : activeColor
    }
});

export default SliderButton;