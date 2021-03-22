import React, { Component } from 'react';
import { View, Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class FilterButton extends Component {
    render() {
        const {title, value, action} = this.props;
        return(
            <Pressable style={{marginLeft: 10, marginRight: 10, paddingTop: 10, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: "#e5e5e5", flexDirection: "row", justifyContent: "space-between"}}>
                <Text style={{fontSize: 16, fontWeight: "700"}}>{title}</Text>
                <View style={{flexDirection: "row"}}>
                    <Text style={{fontSize: 16, fontWeight: "600", marginRight: 10}}>{value}</Text>
                    <Icon
                        name="angle-right"
                        size={20}
                        color="#c7c7c7"
                        />
                </View>
            </Pressable>
        );
    }
}

export default FilterButton;