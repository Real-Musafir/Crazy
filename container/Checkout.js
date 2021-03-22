import React, { Component } from 'react'
import { Button } from 'react-native'
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native'
import AppButton from '../component/AppButton'
import Icon from 'react-native-vector-icons/FontAwesome5'
import CartItem from '../component/CartItem'
import { CheckBox } from 'react-native-elements'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import CloseHeader from '../component/CloseHeader'
import { Buttons, Colors } from '../styles'

class Checkout extends Component {
  state = {
    checked: true,
  }
  gotoShipAddress = () => {
    this.props.navigation.navigate('ShipAddress')
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
      marginBottom: 20,
    }
    const dataRow = {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    }
    const PostageView = {
      flex: 1,
      justifyContent: 'center',
      marginLeft: 10,
      marginBottom: 10,
    }
    const msgView = {
      borderBottomColor: Colors.lightGray,
      borderTopColor: Colors.lightGray,
      borderBottomWidth: 1,
      borderTopWidth: 1,
      padding: 10,
      marginBottom: 20,
    }
    const postAddress = {
      marginRight: 43,
      fontSize: 10,
    }
    const selctPayment = {
      marginRight: 112,
      // marginLeft: 33,
      fontSize: 8,
      marginTop: 2,
      color: 'red',
    }
    const payIcon = {
      marginRight: 10,
      fontSize: 20,
      marginTop: 2,
    }
    const VoucerIcon = {
      fontSize: 20,
      marginRight: 4,
      marginRight: 10,
    }
    const checkoutFooter = {
      marginTop: 10,
      paddingTop: 15,
      borderBottomColor: Colors.lightGray,
      borderTopColor: Colors.lightGray,
      borderBottomWidth: 1,
      borderTopWidth: 1,
    }
    const submitBtn = {
      ...Buttons.roundBlue.containerStyle,
      marginBottom: 30,
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
            text="Checkout"
          />
        </View>
        <ScrollView style={scrlStyle}>
          {items.map((item, index) => (
            <View>
              <CartItem
                key={index}
                seller={item.seller}
                image={item.image}
                title={item.title}
                price={item.price}
                qty={item.qty}
                status={''}
              />
              <View style={dataRow}>
                <View style={{ height: 10 }}>
                  <CheckBox
                    checked={this.state.checked}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                  />
                </View>
                <View style={PostageView}>
                  <Text style={{ fontSize: 15, marginLeft: 45 }}>Postage</Text>
                  <Text style={{ marginLeft: 45 }}>
                    Estimated delivery Mon 22 Mar {'\n'}Other courier(3to5 days){' '}
                    {'\n'}Free
                  </Text>
                </View>
              </View>
              <View style={msgView}>
                <View style={dataRow}>
                  <Text>Message to seller</Text>
                  <Icon style={{ fontSize: 20 }} name={'angle-right'} />
                </View>
              </View>
            </View>
          ))}

          <View>
            <View style={dataRow}>
              <Text>Post to</Text>
              <Text style={postAddress}>
                Zahid Habib {'\n'}C&B Para, Darsana Bus Stand {'\n'}Darsana{' '}
                {'\n'}Chaudanga 7221 {'\n'}Bangladesh {'\n'}017xxxxxx
              </Text>
              <Icon
                onPress={() => {
                  this.gotoShipAddress()
                }}
                style={{ marginRight: 12, fontSize: 20, marginTop: 15 }}
                name={'angle-right'}
              />
            </View>
          </View>

          <View style={dataRow}>
            <Text>Pay with</Text>
            <Text style={selctPayment}>Select payment option</Text>
            <Icon style={payIcon} name={'angle-right'} />
          </View>

          <View style={dataRow}>
            <Text>Add vouchers</Text>
            <Icon style={VoucerIcon} name={'angle-right'} />
          </View>
          <View style={checkoutFooter}>
            <View style={dataRow}>
              <Text>Items{'(2)'}</Text>
              <Text>US $120.20</Text>
            </View>
            <View style={dataRow}>
              <Text>Postage</Text>
              <Text>US $100.20</Text>
            </View>
          </View>
          <View style={dataRow}>
            <Text style={{ fontSize: 15 }}>Order total</Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>US $220.40</Text>
          </View>
          <View style={{ marginBottom: 20 }}>
            <Button
              type="solid"
              containerStyle={submitBtn}
              titleStyle={submitText}
              title="Go To Checkout"
            />
          </View>
        </ScrollView>
      </SafeAreaProvider>
    )
  }
}

export default Checkout
