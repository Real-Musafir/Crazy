import React, { Component } from "react";
import { View } from "react-native";
import Menu from "./Menu";
import Logo from "./Logo";
import { Header, SearchBar } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }
  cartPress = () => {
    console.log("cart presseddddddd");
  };
  updateSearch = (text) => {
    this.setState({
      searchText: text,
    });
  };
  render() {
    const searchBarStyle = {
      backgroundColor: "#fff",
      borderTopColor: "#fff",
      borderBottomColor: "#fff",
      paddingBottom: 10,
      paddingTop: 0,
      display: "flex",
    };
    const searchInputStyle = {
      backgroundColor: "#ebebeb",
      fontSize: 10,
      height: 40,
    };
    const { searchText } = this.state;
    const searchElem = (
      <SearchBar
        onChangeText={this.updateSearch}
        value={searchText}
        placeholderTextColor="#000"
        placeholder="Search for anything"
        containerStyle={searchBarStyle}
        inputContainerStyle={searchInputStyle}
        inputStyle={{ fontSize: 10, marginLeft: 2 }}
        leftIconContainerStyle={{ marginRight: 0, paddingRight: 0 }}
      />
    );
    const cartButton = (
      <Icon
        name="cart-plus"
        size={22}
        iconStyle={{ marginTop: 20 }}
        onPress={this.cartPress}
      />
    );
    return (
      <View>
        <Header
          containerStyle={{
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "flex-start",
          }}
          leftContainerStyle={{ flex: 1 }}
          centerContainerStyle={{ flex: 6, alignItems: "stretch" }}
          rightContainerStyle={{ flex: 1 }}
          leftComponent={<Menu />}
          centerComponent={<Logo />}
          rightComponent={cartButton}
        />
        <View style={{ backgroundColor: "#fff", height: 40 }}>
          <SearchBar
            onChangeText={this.updateSearch}
            value={searchText}
            placeholderTextColor="#000"
            placeholder="Search for anything"
            containerStyle={searchBarStyle}
            inputContainerStyle={searchInputStyle}
            inputStyle={{ fontSize: 15, marginLeft: 2 }}
            leftIconContainerStyle={{ marginRight: 0, paddingRight: 0 }}
          />
        </View>
      </View>
    );
  }
}

export default AppHeader;
