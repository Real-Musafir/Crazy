import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Menu extends Component {
    render() {
        return(
            <View style={{flex: 1}}>
                <Icon
                    name='bars'
                    size={22}
                    iconStyle={{marginTop:20}} />
            </View>
        );
    }
}

export default Menu;