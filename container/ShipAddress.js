import React, { Component } from 'react'
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import IconFA from 'react-native-vector-icons/FontAwesome'
import { Dimensions } from 'react-native'
import AppButton from '../component/AppButton'
import CloseHeader from '../component/CloseHeader'
import CartItem from '../component/CartItem'
import { Buttons, Colors } from '../styles'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { CheckBox, Button } from 'react-native-elements'

class ShipAddress extends Component {
  gotoChangeAddress = () => {
    this.props.navigation.navigate('ChangeAddress')
    console.log('This is Change address')
  }
  state = {
    checked: true,
  }
  render() {
    const windowWidth = Dimensions.get('window').width
    const scrlStyle = {
      backgroundColor: '#fff',
      padding: 10,
    }
    const PrSipAd = {
      marginLeft: 60,
      marginRight: 100,
      borderWidth: 0.5,
      height: 40,
      backgroundColor: Colors.lightGray,
      borderRadius: 5,
    }
    const PrSipAdTx = {
      fontSize: 18,
      padding: 5,
    }
    const icn = {
      marginLeft: 20,
      fontSize: 15,
      marginTop: 20,
    }
    const saveBtnTitle = {
      ...Buttons.textLink.titleStyle,
    }
    const saveBtnCont = {
      ...Buttons.textLink.buttonStyle,
    }

    return (
      <SafeAreaProvider>
        <View style={{ flex: 0, width: windowWidth }}>
          <CloseHeader
            icon="angle-left"
            navigation={this.props.navigation}
            text="Ship to"
          />
        </View>
        <ScrollView style={scrlStyle}>
          <View style={PrSipAd}>
            <Text style={PrSipAdTx}>Primary Shipping Address</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 30 }}>
            <CheckBox
              style={icn}
              checked={this.state.checked}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
            <Text>
              Zahid Habib {'\n'}C&B Para, Darsana Bus Stand {'\n'}Darsana {'\n'}
              Chaudanga 7221 {'\n'}Bangladesh {'\n'}017xxxxxx
            </Text>
            <View style={{ marginLeft: 80 }}>
              <Icon style={icn} name={'ellipsis-v'} />
            </View>
          </View>
          <View style={{ marginLeft: 200, marginTop: 30 }}>
            <Button
              onPress={() => {
                this.gotoChangeAddress()
              }}
              type="clear"
              containerStyle={saveBtnCont}
              titleStyle={saveBtnTitle}
              title="Add a new address"
            />
          </View>
        </ScrollView>
      </SafeAreaProvider>
    )
  }
}

export default ShipAddress
