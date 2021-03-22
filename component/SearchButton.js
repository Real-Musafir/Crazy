import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class SearchButton extends Component {
    searchAction = () => {
        this.props.action?.();
    }
    render() {
        return(
            <Icon
                name='search'
                size={22}
                iconStyle={{marginTop:20}}
                onPress={this.searchAction} />
        );
    }
}

export default SearchButton;