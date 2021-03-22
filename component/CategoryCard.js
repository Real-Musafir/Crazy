import React, { Component } from 'react';
import { Pressable, Dimensions } from "react-native";
import { Text, Image } from "react-native-elements";

class CategoryCard extends Component {
    borderRadius = 0;
    pressableStyle = {};

    clickAction = () => {
        this.props.action?.();
    }

    render() {
        const {id, title, image} = this.props;
        const type = this.props.type ?? "round";
        const cols = this.props.cols ?? 3;
        const borderBottom = this.props.borderBottom ?? false;
        const width = 100/cols+"%";
        const windowWidth = Dimensions.get('window').width;
        const imageWidth = windowWidth/cols-10;

        if (type == "round") {
            this.borderRadius = 100;
        } else if (type == "square") {
            this.borderRadius = 5;
        } else {
            this.borderRadius = 0;
        }

        if (borderBottom) {
            this.pressableStyle = {
                width:width, 
                paddingLeft: 5, 
                paddingRight: 5, 
                marginBottom: 20, 
                marginTop: 10,
                borderBottomWidth: 2,
                borderBottomColor: "#e5e5e5",
                paddingBottom: 15
            }
        } else {
            this.pressableStyle = {
                width:width, 
                paddingLeft: 5, 
                paddingRight: 5, 
                marginBottom: 20, 
                marginTop: 10
            }
        }

        return(
            <Pressable onPress={() => {this.clickAction()}} style={this.pressableStyle}>
                <Image 
                    style={{
                        width: '100%', 
                        height: '100%',
                        resizeMode: "cover",
                    }} 
                    containerStyle={{
                        borderRadius: this.borderRadius,
                        borderWidth:5,
                        height: imageWidth,
                        borderColor:"#f2f2f2"
                    }}
                    source={{uri: image}} />
                <Text style={{textAlign:"center", fontSize: 17, marginTop: 5}}>{title}</Text>
            </Pressable>
        );
    }
}

export default CategoryCard;