import React, { Component, useState } from 'react'
import { View, ScrollView, Text, StyleSheet } from 'react-native'
import AppButton from './AppButton'
import { CheckBox, colors, Button, Image } from 'react-native-elements'
import { Typography, Buttons, Colors } from '../styles'

class PurchaseItem extends Component {
  state = {
    checked: true,
  }
  gotoOrderDetails = () => {
    console.log('got Order details')
    this.props.gotoOrderDetails?.()
  }

  render() {
    const {
      orderStatus,
      image,
      title,
      shippingCost,
      date,
      showBox,
    } = this.props
    const ImgTitlePriceCont = {
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
    const checkBoxView = {
      height: 10,
      marginTop: 80,
    }
    const Img = {
      width: 120,
      height: 160,
      padding: 30,
      marginTop: 5,
      marginRight: 10,
      marginLeft: 5,
    }
    const productTitle = {
      fontSize: 17,
      marginBottom: 5,
    }
    const ShipTitleView = {
      flex: 1,
      justifyContent: 'center',
      marginLeft: 10,
    }
    const rawData = {
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
    const footerViewBtn = {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: 40,
      marginRight: 50,
      marginTop: 10,
    }
    const gbpStyle = {
      ...Typography.subTitle,
    }
    const textColor = {
      color: Colors.gray,
    }
    const dateS = {
      marginTop: 25,
      color: Colors.gray,
    }
    const saveBtnTitle = {
      ...Buttons.textLink.titleStyle,
    }
    const saveBtnCont = {
      ...Buttons.textLink.buttonStyle,
    }
    const fullView = {
      marginBottom: 10,
      borderBottomWidth: 2,
      borderBottomColor: Colors.lightGray,
      padding: 5,
    }
    return (
      <View style={fullView}>
        <View style={ImgTitlePriceCont}>
          {showBox && (
            <View style={checkBoxView}>
              <CheckBox checked={this.state.checked} />
            </View>
          )}

          <Image
            onPress={() => {
              this.gotoOrderDetails()
            }}
            style={Img}
            source={{ uri: image }}
          />
          <View style={ShipTitleView}>
            <Text style={{ fontSize: 20 }}>{orderStatus}</Text>
            <Text style={productTitle}>{title}</Text>
            <View style={rawData}>
              <View>
                <Text style={gbpStyle}>GBP 5.26</Text>
                <Text style={textColor}>{shippingCost}</Text>
              </View>
              <Text style={dateS}>{date}</Text>
            </View>
          </View>
        </View>
        <View style={footerViewBtn}>
          <Button
            type="clear"
            containerStyle={saveBtnCont}
            titleStyle={saveBtnTitle}
            title="TRACK PACKAGE"
          />
          <Button
            type="clear"
            containerStyle={saveBtnCont}
            titleStyle={saveBtnTitle}
            title="BUY AGAIN"
          />
        </View>
      </View>
    )
  }
}

export default PurchaseItem
