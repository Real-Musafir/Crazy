import React, { Component } from 'react';
import { View } from 'react-native';
import { Pressable, Dimensions } from "react-native";
import { Text, Button, Image } from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';

class Product extends Component {
    gotoProduct = () => {
        this.props.gotoProduct?.();
    }
    render() {
        const {id, title, image, price, oldPrice, discount, bids, fav} = this.props;
        const theme = this.props.theme ?? "theme-1";
        if (theme == "theme-1") {
            return(
                <Pressable style={{width: 180, paddingLeft: 5, paddingRight: 5}}>
                    <Image style={{width: 180, height: 180}} source={{uri: image}} />
                    <Text>{title}</Text>
                    <Text style={{fontWeight: "bold", fontSize: 18}} >{price}</Text>
                    <View style={{flexDirection: "row"}}>
                        <Text style={{textDecorationLine: "line-through"}}>{oldPrice}</Text>
                        <Text style={{marginLeft: 10}}>{discount}</Text>
                    </View>
                </Pressable>
            );
        } else if (theme == "theme-2") {
            const windowWidth = Dimensions.get('window').width;
            const imageWidth = windowWidth*0.45;
            const infoWidth = windowWidth*0.50;
            let favIcon = <Icon name="heart-outline" size={20} color="#3665f3" />
            if (fav) {
                favIcon = <Icon name="heart" size={20} color="#cc0119" />
            }
            return(
                <View style={{flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap", width: '100%', marginBottom: 10, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: "#e5e5e5"}}>
                    <Image
                        onPress={()=>{this.gotoProduct()}}
                        source={{uri: image}}
                        style={{width: imageWidth, height: 150, borderRadius: 10}}
                    />
                    <View style={{width: infoWidth, paddingLeft: 5}}>
                        <Text style={{fontSize: 15, color: "#13181e", marginBottom: 5}}>{title}</Text>
                        <Text style={{fontWeight: "bold", fontSize: 20, color: "#111820", marginBottom: 3}}>{price}</Text>
                        <View style={{flexDirection: "row"}}>
                            <View style={{width: '70%'}}>
                            {oldPrice != "" && 
                                <View style={{flexDirection: "row"}}>
                                    <Text style={{textDecorationLine: "line-through", marginRight: 7}}>{oldPrice}</Text>
                                    <Text>{discount}</Text>
                                </View>
                            }
                            <Text>{bids}</Text>
                            </View>
                            <View style={{width: '30%'}}>
                                <Button
                                    icon={favIcon}
                                    title=""
                                    buttonStyle={{backgroundColor: "#fff"}}
                                    titleStyle={{color: "#3665f3", marginLeft: 8}}
                                />
                            </View>
                        </View>
                        
                    </View>
                </View>
            )
        } else {
            return(
                <View></View>
            )
        }

        
    }
}

export default Product;