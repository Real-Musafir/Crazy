import React, { Component } from "react";
import { View, ScrollView, Text, Pressable } from "react-native";
import { Button, BottomSheet, CheckBox } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Product from "../component/Product";
import Icon from "react-native-vector-icons/FontAwesome5";
import CatHeader from "../component/CatHeader";
import FilterButton from "../component/FilterButton";

class SingleCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSort: false,
      showFilter: false,
    };
  }
  showSort = () => {
    this.setState({
      showSort: true,
    });
  };

  hideSort = () => {
    this.setState({
      showSort: false,
    });
  };

  showFilter = () => {
    this.setState({
      showFilter: true,
    });
  };

  hideFilter = () => {
    this.setState({
      showFilter: false,
    });
  };

  products = [
    {
      id: 1,
      title:
        "Garmin Forerunner 735XT GPS Running Watch w/ Multisport Features - Midnight Blue",
      image: "http://cayzilla.polbd.com/images/products/1.jpg",
      price: "$174.99",
      listPrice: "$449.99",
      discount: "10% off",
      bids: "10 bids",
      fav: true,
    },
    {
      id: 2,
      title:
        "AMD Ryzen 5 3600 6-Core, 12-Thread Unlocked Processor with Wraith Stealth Cooler",
      image: "http://cayzilla.polbd.com/images/products/2.jpg",
      price: "$219.99",
      listPrice: "$449.99",
      discount: "12% off",
      bids: "12 bids",
      fav: false,
    },
    {
      id: 3,
      title:
        "Motorcycle Vacuum Carburetor Synchronizer Carb Sync Gauge Tool Tuner Balancer",
      image: "http://cayzilla.polbd.com/images/products/3.jpg",
      price: "$41.99",
      listPrice: "",
      bids: "1 bid",
      fav: true,
    },
    {
      id: 4,
      title:
        "Tissot Women's T0954173711700 Quickster 42mm MOP Dial Leather Watch",
      image: "http://cayzilla.polbd.com/images/products/4.jpg",
      price: "$129.99",
      listPrice: "$525.00",
      discount: "20% off",
      bids: "42 bids",
      fav: false,
    },
    {
      id: 5,
      title:
        "Vintage New Box Unfired Coleman 295-700G Powerhouse Dual Fuel Lantern",
      image: "http://cayzilla.polbd.com/images/products/5.jpg",
      price: "$99.99",
      listPrice: "",
      bids: "101 bids",
      fav: false,
    },
    {
      id: 6,
      title:
        "1080P 4 inch Dual Lens HD Car DVR Rearview Video Dash Cam Recorder Camera G-Sensor",
      image: "http://cayzilla.polbd.com/images/products/6.jpg",
      price: "$30.99",
      listPrice: "",
      bids: "32 bids",
      fav: false,
    },
  ];
  gotoProduct = (id) => {
    this.props.navigation.navigate("SingleProduct", { prodId: id });
  };
  render() {
    const chkContStyle = {
      backgroundColor: "#fff",
      paddingLeft: 0,
      marginLeft: 0,
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
    };
    const actBtnStyle = {
      paddingTop: 5,
      marginLeft: 7,
      marginRight: 7,
      paddingBottom: 5,
      borderBottomColor: "#e5e5e5",
      borderBottomWidth: 1,
    };
    return (
      <SafeAreaProvider>
        <BottomSheet
          isVisible={this.state.showSort}
          containerStyle={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              paddingTop: 0,
              overflow: "hidden",
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            <View style={{ justifyContent: "center", backgroundColor: "#000" }}>
              <Button
                icon={<Icon name="ellipsis-h" size={20} color="#c7c7c7" />}
                title=""
                onPress={() => {
                  this.hideSort();
                }}
                buttonStyle={{ backgroundColor: "#fff" }}
              />
            </View>
            <Text style={{ fontSize: 26, fontWeight: "bold" }}>Sort</Text>
            <CheckBox
              title="Best Match"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={true}
              containerStyle={chkContStyle}
            />
            <CheckBox
              title="Lowest Price"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={false}
              containerStyle={chkContStyle}
            />
            <CheckBox
              title="Highest Price"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={false}
              containerStyle={chkContStyle}
            />
            <CheckBox
              title="Ending Soonest"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={false}
              containerStyle={chkContStyle}
            />
            <CheckBox
              title="Newly Added"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={false}
              containerStyle={chkContStyle}
            />
          </View>
        </BottomSheet>
        <BottomSheet
          isVisible={this.state.showFilter}
          containerStyle={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              paddingTop: 10,
              overflow: "hidden",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
                borderBottomColor: "#e5e5e5",
                borderBottomWidth: 1,
              }}
            >
              <Button
                icon={<Icon name="times" size={20} color="#2a2a2a" />}
                containerStyle={{ flex: 1 }}
                title=""
                onPress={() => {
                  this.hideFilter();
                }}
                buttonStyle={{ backgroundColor: "#fff" }}
              />
              <Text
                style={{
                  flex: 4,
                  fontWeight: "700",
                  fontSize: 20,
                  textAlign: "center",
                }}
              >
                Filter
              </Text>
              <Button
                type="clear"
                containerStyle={{ flex: 1, backgroundColor: "#fff" }}
                titleStyle={{ color: "#3665f3", backgroundColor: "#fff" }}
                title="Reset"
              />
            </View>
            <FilterButton title="Sort" value="Best Match" />
            <FilterButton title="Buying Format" value="" />
            <FilterButton title="Condition" value="" />
            <FilterButton title="Price" value="" />
            <View
              style={{
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 30,
                paddingRight: 30,
              }}
            >
              <Button title="Filter Now" />
            </View>
          </View>
        </BottomSheet>
        <ScrollView>
          <CatHeader title={this.props.route.params.catTitle} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              backgroundColor: "#fff",
              borderBottomWidth: 2,
              borderBottomColor: "rgba(0,0,0,0.01)",
              borderTopWidth: 2,
              borderTopColor: "rgba(0,0,0,0.01)",
            }}
          >
            <Button
              icon={<Icon name="sort" size={15} color="#3665f3" />}
              title="Sort"
              onPress={() => {
                this.showSort();
              }}
              buttonStyle={{ backgroundColor: "#fff" }}
              titleStyle={{ color: "#3665f3", marginLeft: 8 }}
            />
            <Button
              icon={<Icon name="filter" size={15} color="#3665f3" />}
              title="Filter"
              onPress={() => {
                this.showFilter();
              }}
              buttonStyle={{ backgroundColor: "#fff" }}
              titleStyle={{ color: "#3665f3", marginLeft: 8 }}
            />
          </View>
          <View
            style={{
              paddingLeft: 7,
              paddingRight: 7,
              paddingTop: 10,
              backgroundColor: "#fff",
            }}
          >
            {this.products.map((product, index) => (
              <Product
                key={index}
                title={product.title}
                image={product.image}
                price={product.price}
                oldPrice={product.listPrice}
                bids={product.bids}
                discount={product.discount}
                theme={"theme-2"}
                fav={product.fav}
                id={product.id}
                gotoProduct={() => {
                  this.gotoProduct(product.id);
                }}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaProvider>
    );
  }
}

export default SingleCategory;
