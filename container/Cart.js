import React, { Component } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { View, ScrollView, Text, StyleSheet, Dimensions } from 'react-native'
import { Button, Divider } from 'react-native-elements'
import CloseHeader from '../component/CloseHeader'
import CartItem from '../component/CartItem'
import { Buttons, Colors } from '../styles'

class Cart extends Component {
  gotoCheckout = () => {
    this.props.navigation.navigate('Checkout')
    console.log('This is checkout')
  }

  render() {
    const items = [
      {
        seller: 'hard_to_find_treasure',
        image:
          'https://images-na.ssl-images-amazon.com/images/I/710IXp7YhyL._AC_SX522_.jpg',
        title:
          'Brita Standard Replacement Filters for Pitchers and Dispensers, 3 Count, White',
        price: '$192.12',
        qty: '1',
        status: 'new',
      },
      {
        seller: 'madej_52',
        image:
          'https://images-na.ssl-images-amazon.com/images/I/81BIw-Txa9L._AC_SX569_.jpg',
        title: 'Libbey Mixologist 9-Piece Cocktail Set',
        price: '$31.99',
        qty: '2',
        status: 'old',
      },
      {
        seller: 'Al_Shahadath',
        image:
          'https://images-na.ssl-images-amazon.com/images/I/51aJaF1EDhL._AC_SX569_.jpg',
        title:
          'Homemory Realistic and Bright Flickering Bulb Battery Operated Flameless LED Tea Light',
        price: '$10.99',
        qty: '1',
        status: 'new',
      },
    ]
    const windowWidth = Dimensions.get('window').width
    const scrlStyle = {
      backgroundColor: '#fff',
      padding: 10,
    }
    const rawData = {
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
    const dataStyle = {
      fontSize: 16,
      marginBottom: 10,
    }
    const totalStyle = {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    }
    const dividerStyle = {
      backgroundColor: Colors.lightGray,
      height: 2,
      marginBottom: 10,
    }
    const submitBtn = {
      ...Buttons.roundBlue.containerStyle,
      marginBottom: 20,
      marginTop: 10,
    }
    const submitText = {
      ...Buttons.roundBlue.titleStyle,
    }

    return (
      <SafeAreaProvider>
        <View style={{ flex: 0, width: windowWidth }}>
          <CloseHeader
            icon="angle-left"
            navigation={this.props.navigation}
            text="Shopping Cart"
          />
        </View>
        <ScrollView style={scrlStyle}>
          {items.map((item, index) => (
            <CartItem
              key={index}
              seller={item.seller}
              image={item.image}
              title={item.title}
              price={item.price}
              qty={item.qty}
              status={item.status}
            />
          ))}
          <View style={dataRow}>
            <Text style={dataStyle}>Items ({items.length})</Text>
            <Text style={dataStyle}>US $222</Text>
          </View>
          <View style={dataRow}>
            <Text style={dataStyle}>Shipping to 7221</Text>
            <Text style={dataStyle}>US $222</Text>
          </View>
          <Divider style={dividerStyle} />
          <View style={dataRow}>
            <Text style={totalStyle}>Total</Text>
            <Text style={totalStyle}>US $222</Text>
          </View>
          <Button
            onPress={() => {
              this.gotoCheckout()
            }}
            type="solid"
            containerStyle={submitBtn}
            titleStyle={submitText}
            title="Go To Checkout"
          />
        </ScrollView>
      </SafeAreaProvider>
    )
  }
}

export default Cart
