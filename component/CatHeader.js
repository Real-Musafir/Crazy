import React, { Component } from 'react';
import { View } from 'react-native';
import Menu from "./Menu";
import { Header, SearchBar, Text, Divider } from "react-native-elements";
import CartButton from "./CartButton";
import SearchButton from "./SearchButton";
import ShareButton from "./ShareButton";

class CatHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
            showSearch: false
        }
    }
    cartPress = () => {
        console.log('cart pressed');
    }
    searchPress = () => {
        this.setState({
            showSearch: !this.state.showSearch
        });
    }
    updateSearch = (text) => {
        this.setState({
            searchText: text
        });
    }
    render() {
        const { share } = this.props;
        const searchBarStyle = {
            backgroundColor: "#fff",
            borderTopColor: "#fff",
            borderBottomColor: "#fff",
            paddingBottom: 10,
            paddingTop: 0,
            display: 'flex'
        }
        const searchInputStyle = {
            backgroundColor: "#ebebeb",
            fontSize: 10,
            height: 40
        }

        let headerRight = (
            <View style={{flexDirection: "row"}}>
                <SearchButton action={this.searchPress} />
                <Divider style={{width: 10}} />
                <CartButton action={this.cartPress} />
            </View>
        );
        
        if (share) {
            headerRight = (
                <View style={{flexDirection: "row"}}>
                    <SearchButton action={this.searchPress} />
                    <Divider style={{width: 10}} />
                    <ShareButton />
                    <Divider style={{width: 10}} />
                    <CartButton action={this.cartPress} />
                </View>
            );
        }

        const { searchText } = this.state;

        return(
            <View>
                <View elevation={5} style={{shadowColor: "#000", shadowOffset: {width: 0, height: 3,}, shadowOpacity: 0.9, shadowRadius: 1.00, elevation: 1,}}>
                    <Header
                        containerStyle={{backgroundColor: "#fff", display: "flex", justifyContent: "flex-start"}}
                        leftContainerStyle={{flex: 1}}
                        centerContainerStyle={{flex: 6, alignItems: "stretch"}}
                        rightContainerStyle={{flex:1}}
                        leftComponent={<Menu/>}
                        centerComponent={<Text style={{fontSize: 20}}>{this.props.title??"Categories"}</Text>}
                        rightComponent={headerRight}
                        />
                        {this.state.showSearch &&
                            <View style={{backgroundColor: "#fff", height: 40}}>
                                <SearchBar 
                                    onChangeText={this.updateSearch} 
                                    value={searchText} 
                                    placeholderTextColor="#000" 
                                    placeholder="Search for anything" 
                                    containerStyle={searchBarStyle} 
                                    inputContainerStyle={searchInputStyle}
                                    inputStyle={{fontSize: 15, marginLeft: 2}}
                                    leftIconContainerStyle={{marginRight: 0, paddingRight: 0}} />
                            </View>
                        }
                    </View>
            </View>
        );
    }
}

export default CatHeader;