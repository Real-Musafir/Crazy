import React, { Component } from 'react'
import { View, Dimensions, Text, StyleSheet, Image } from 'react-native'
import { Button } from 'react-native-elements'
import AppButton from './AppButton'
import NumericInput from 'react-native-numeric-input'
import { Typography, Buttons, Colors } from '../styles'

class CartItem extends Component {
  render() {
    const { seller, image, title, price, qty, status } = this.props
    const windowWidth = Dimensions.get('window').width
    const titleStyle = {
      ...Typography.subTitle,
      marginBottom: 5,
    }
    const fullView = {
      borderBottomColor: Colors.lightGray,
      borderBottomWidth: 1,
      paddingBottom: 10,
      marginBottom: 10,
    }
    const imageContainer = {
      width: windowWidth * 0.3,
      height: windowWidth * 0.3,
      backgroundColor: Colors.lightGray,
      borderRadius: 10,
      paddingRight: 10,
      justifyContent: 'center',
    }
    const imgInfoCont = {
      flexDirection: 'row',
      paddingTop: 10,
      paddingBottom: 10,
    }
    const imgStyle = {
      width: windowWidth * 0.3,
      height: windowWidth * 0.25,
    }
    const TitlePriceView = {
      paddingLeft: 20,
      width: windowWidth * 0.7,
    }
    const statusStyle = {
      color: Colors.blue,
      fontSize: 17,
    }
    const priceStyle = {
      ...Typography.subTitle,
    }
    const saveBtnCont = {
      ...Buttons.textLink.buttonStyle,
    }
    const saveBtnTitle = {
      ...Buttons.textLink.titleStyle,
    }
    const footerView = {
      marginTop: 10,
      flexDirection: 'row',
      alignItems: 'center',
    }
    const footerButtons = {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }
    return (
      <View style={fullView}>
        <Text style={titleStyle}>Seller {seller}</Text>
        <View style={imgInfoCont}>
          <View style={imageContainer}>
            <Image style={imgStyle} source={{ uri: image }} />
          </View>
          <View style={TitlePriceView}>
            <Text style={styles.ProductTitle}>{title}</Text>
            <Text style={statusStyle}>{status}</Text>
            <Text style={priceStyle}>US {price}</Text>
            <Text>+US $62.82</Text>
          </View>
        </View>
        <View style={footerView}>
          <NumericInput
            initValue={qty}
            minValue={1}
            totalHeight={30}
            onChange={(value) => console.log(value)}
          />
          <View style={footerButtons}>
            <Button
              type="clear"
              containerStyle={saveBtnCont}
              titleStyle={saveBtnTitle}
              title="Save For Later"
            />
            <Button
              type="clear"
              containerStyle={saveBtnCont}
              titleStyle={saveBtnTitle}
              title="Remove"
            />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  FullView: {
    marginTop: 20,
    borderBottomWidth: 2,
    borderBottomColor: 'lightgray',
  },
  ImgTitlePriceCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Img: {
    width: 85,
    height: 65,
    // padding: 10,
    // margin: 10,
    marginTop: 18,
    backgroundColor: 'black',
    padding: 10,
    alignItems: 'center',
  },
  TitlePriceView: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
  },
  ProductTitle: {
    fontFamily: 'sans-serif',
    fontSize: 18,
  },
  ProductPrice: {
    marginLeft: 4,
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 18,
  },
  FooterView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  FooterButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export default CartItem
