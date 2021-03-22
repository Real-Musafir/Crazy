import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class ShareButton extends Component {
    cartAction = () => {
        this.props.action?.();
    }
    render() {
        return(
            <Icon
                name='share-alt'
                size={22}
                iconStyle={{marginTop:20}}
                onPress={this.cartAction} />
        );
    }
}

export default ShareButton;