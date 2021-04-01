import React, { Component } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native'
import { Button, Divider } from 'react-native-elements'
import CloseHeader from '../component/CloseHeader'
import CartItem from '../component/CartItem'
import { Buttons, Colors } from '../styles'
import Icon from 'react-native-vector-icons/FontAwesome'

class Seller extends Component {
  render() {
    const windowWidth = Dimensions.get('window').width
    const scrlStyle = {
      backgroundColor: '#fff',
      padding: 10,
    }
    const dataRow = {
      flexDirection: 'row',
      // justifyContent: 'space-between',
      marginBottom: 25,
    }
    const title = {
      marginTop: 25,
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 20,
    }
    const logoS = {
      height: 55,
      width: 55,
      backgroundColor: Colors.lightGray,
      borderRadius: 30,
      marginBottom: 20,
    }
    const imgS = {
      marginLeft: 20,
      marginTop: 8,
      fontSize: 25,
      color: Colors.blue,
      fontWeight: 'bold',
    }
    const subTitle = {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 15,
    }
    const listingView = {
      height: 350,
      width: 250,
      backgroundColor: '#FF7F50',
      marginBottom: 20,
      borderRadius: 15,
      marginRight: 20,
    }
    const lstTitle = {
      padding: 15,
      fontSize: 20,
      fontWeight: 'bold',
      color: '#35332E',
    }
    const promPart = {
      height: 140,
      width: 300,
      backgroundColor: Colors.lightGray,
      borderRadius: 10,
      flexDirection: 'row',
      marginRight: 20,
    }
    const avilable = {
      width: 90,
      height: 90,
      borderWidth: 4,
      marginTop: 30,
      borderRadius: 45,
      borderColor: '#00FF7F',
    }
    const faqPart = {
      padding: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
    const faqTxt = { width: 220, fontSize: 14, fontWeight: 'bold' }
    const avilableTxt = { marginLeft: 13, marginTop: 30, color: 'gray' }
    return (
      <SafeAreaProvider>
        <View style={{ flex: 0, width: windowWidth }}>
          <CloseHeader
            icon="angle-left"
            navigation={this.props.navigation}
            text="Seller"
          />
        </View>
        <ScrollView style={scrlStyle}>
          <ImageBackground
            source={require('../assets/images/Seller.jpg')}
            style={{ width: 400, height: 250 }}
          >
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                // justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
                marginLeft: 5,
                marginRight: 170,
              }}
            >
              <Text
                style={{ fontSize: 27, fontWeight: 'bold', color: 'white' }}
              >
                List for free in{'\n'}most categories,{'\n'}pay only when
                {'\n'}
                you sell
              </Text>
            </View>
          </ImageBackground>
          <Text style={title}>The basics</Text>
          <View style={dataRow}>
            <View style={logoS}>
              <Text style={imgS}>1</Text>
            </View>
            <View style={{ marginLeft: 15 }}>
              <Text style={subTitle}>List your item for free</Text>
              <Text style={{ color: 'gray', fontSize: 15 }}>
                You have 1,000 free listings per month. You'll only pay any
                optional upgrades you choose, and a final value fee when you
                item sells
              </Text>
            </View>
          </View>
          <View style={dataRow}>
            <View style={logoS}>
              <Text style={imgS}>2</Text>
            </View>
            <View style={{ marginLeft: 15 }}>
              <Text style={subTitle}>Sell with ease</Text>
              <Text style={{ color: 'gray', fontSize: 15 }}>
                As you list, well help you bdescribe, photograph, price, and
                post your item. Having millions of buyers means listing can sell
                quickly
              </Text>
            </View>
          </View>
          <View style={dataRow}>
            <View style={logoS}>
              <Text style={imgS}>3</Text>
            </View>
            <View style={{ marginLeft: 15 }}>
              <Text style={subTitle}>We've got you covered</Text>
              <Text style={{ color: 'gray', fontSize: 15 }}>
                As a seller on eBay, you're protected by policies, monitoring
                and a 24/7 customer service team
              </Text>
            </View>
          </View>
          <Text style={title}>Tips for listing</Text>
          <ScrollView
            horizontal={true}
            centerContent={true}
            style={{
              paddingBottom: 10,
              paddingLeft: 5,
              paddingRight: 5,
            }}
          >
            <View style={listingView}>
              <Text style={lstTitle}>Taking high quality photos</Text>
              <Text style={{ padding: 15 }}>
                No Expensive camera? Use your smartphone, Out app has tools that
                help you clean up your image and add a wihte background. When
                shooting, rememner to choose a well-lit place,, take photos from
                a various angles, and capture blemishes to help the buyer avoid
                sunrises
              </Text>
            </View>
            <View style={listingView}>
              <Text style={lstTitle}>Taking high quality photos</Text>
              <Text style={{ padding: 15 }}>
                No Expensive camera? Use your smartphone, Out app has tools that
                help you clean up your image and add a wihte background. When
                shooting, rememner to choose a well-lit place,, take photos from
                a various angles, and capture blemishes to help the buyer avoid
                sunrises
              </Text>
            </View>
            <View style={listingView}>
              <Text style={lstTitle}>Taking high quality photos</Text>
              <Text style={{ padding: 15 }}>
                No Expensive camera? Use your smartphone, Out app has tools that
                help you clean up your image and add a wihte background. When
                shooting, rememner to choose a well-lit place,, take photos from
                a various angles, and capture blemishes to help the buyer avoid
                sunrises
              </Text>
            </View>
          </ScrollView>
          <Text style={title}>Promotions</Text>

          <ScrollView
            horizontal={true}
            centerContent={true}
            style={{
              paddingBottom: 10,
              paddingLeft: 5,
              paddingRight: 5,
            }}
          >
            <View style={promPart}>
              <View>
                <Text style={{ padding: 20, width: 200 }}>
                  Collection services at the same price as drop of services
                </Text>
                <Text style={{ marginLeft: 20, fontSize: 15 }}>
                  Mar 3 -Mar 31
                </Text>
              </View>
              <View style={avilable}>
                <Text style={avilableTxt}>Available</Text>
              </View>
            </View>
            <View style={promPart}>
              <View>
                <Text style={{ padding: 20, width: 200 }}>
                  Collection services at the same price as drop of services
                </Text>
                <Text style={{ marginLeft: 20, fontSize: 15 }}>
                  Mar 3 -Mar 31
                </Text>
              </View>
              <View style={avilable}>
                <Text style={avilableTxt}>Available</Text>
              </View>
            </View>
            <View style={promPart}>
              <View>
                <Text style={{ padding: 20, width: 200 }}>
                  Collection services at the same price as drop of services
                </Text>
                <Text style={{ marginLeft: 20, fontSize: 15 }}>
                  Mar 3 -Mar 31
                </Text>
              </View>
              <View style={avilable}>
                <Text style={avilableTxt}>Available</Text>
              </View>
            </View>
          </ScrollView>
          <Text style={title}>FAQ</Text>
          <View style={faqPart}>
            <Text style={faqTxt}>How much does it cost to sell on eBat?</Text>
            <Icon name="angle-down" size={22} onPress={this.cartAction} />
          </View>
          <View style={faqPart}>
            <Text style={faqTxt}>What's the best way to send my item?</Text>
            <Icon name="angle-down" size={22} onPress={this.cartAction} />
          </View>
          <View style={faqPart}>
            <Text style={faqTxt}>Can i sell locally on eBay?</Text>
            <Icon name="angle-down" size={22} onPress={this.cartAction} />
          </View>
          <View style={faqPart}>
            <Text style={faqTxt}>How much will it cost to post my item?</Text>
            <Icon name="angle-down" size={22} onPress={this.cartAction} />
          </View>
          <View style={faqPart}>
            <Text style={faqTxt}>How will the buyer pay for my item?</Text>
            <Icon name="angle-down" size={22} onPress={this.cartAction} />
          </View>
          <View style={faqPart}>
            <Text style={faqTxt}>How should I choose my listing price?</Text>
            <Icon name="angle-down" size={22} onPress={this.cartAction} />
          </View>
          <View style={faqPart}>
            <Text style={faqTxt}>How does eBay protect sellers?</Text>
            <Icon name="angle-down" size={22} onPress={this.cartAction} />
          </View>
          <View style={faqPart}>
            <Text style={faqTxt}>What can I sell on eBay?</Text>
            <Icon name="angle-down" size={22} onPress={this.cartAction} />
          </View>
          <View style={faqPart}>
            <Text style={faqTxt}>How do I create an account?</Text>
            <Icon name="angle-down" size={22} onPress={this.cartAction} />
          </View>
        </ScrollView>
        <View style={{ margin: 20 }}>
          <Button title="List an item" />
        </View>
      </SafeAreaProvider>
    )
  }
}

export default Seller
