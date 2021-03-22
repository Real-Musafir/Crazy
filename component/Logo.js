import React, { Component } from 'react';
import { View } from 'react-native';
import {Image} from "react-native-elements";

const Logo = () => {
        return (
            <View style={{}}>
                <Image style={{width:100, height: 26}} source={require('../assets/images/logo.png')} />
            </View>
        );
}

export default Logo;