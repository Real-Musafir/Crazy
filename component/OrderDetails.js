import React, { Component } from 'react'
import { View, ScrollView, Text, Dimensions, Image } from 'react-native'
import AppButton from './AppButton'
import AppHeader from './AppHeader'
import Product from './Product'
import CategoryCard from './CategoryCard'
import CloseHeader from '../component/CloseHeader'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Typography, Buttons, Colors } from '../styles'
import StepIndicator from 'react-native-step-indicator'
import { Button } from 'react-native-elements'

class OrderDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPosition: 2,
    }
  }

  render() {
    const labels = ['Paid \n Jan 20', 'Shipped \n Jan 20', 'Delivery']
    const windowWidth = Dimensions.get('window').width
    const scrlStyle = {
      backgroundColor: '#fff',
      padding: 15,
    }
    const dataRow = {
      flexDirection: 'row',
      // justifyContent: 'space-between',
      marginTop: 5,
      marginBottom: 5,
    }
    const dataRow2 = {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: Colors.lightGray,
      height: 120,
    }
    const infoText = {
      color: Colors.gray,
    }

    const deliveryInfo = {
      ...Typography.subTitle,
      marginTop: 10,
      marginBottom: 10,
    }
    const customStyles = {
      stepIndicatorSize: 35,
      currentStepIndicatorSize: 40,
      separatorStrokeWidth: 2,
      currentStepStrokeWidth: 3,
      stepStrokeCurrentColor: 'green',
      stepStrokeFinishedColor: '#fe7013',
      stepStrokeUnFinishedColor: '#aaaaaa',
      separatorUnFinishedColor: '#aaaaaa',
      stepIndicatorLabelFontSize: 13,
      stepIndicatorLabelUnFinishedColor: 'red',
      labelColor: '#999999',
      labelSize: 15,
      currentStepLabelColor: Colors.gray,
      currentStepLabelWeight: 'bold',
    }

    const itmInf = {
      marginTop: 10,
      marginBottom: 15,
    }
    const itmInfTxt = {
      ...Typography.subTitle,
      fontSize: 18,
    }
    const infBox = {
      borderColor: Colors.lightGray,
      borderWidth: 1,
      borderRadius: 10,
    }
    const imgStyle = {
      width: windowWidth * 0.2,
      height: windowWidth * 0.15,
      marginTop: 10,
    }

    const itmInfView = { width: 200, marginRight: 50 }
    const itmInfText = {
      color: Colors.gray,
      fontSize: 18,
    }

    const dataRow3 = {
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 60,
      marginLeft: 20,
      marginRight: 20,
    }
    const saveBtnTitle = {
      ...Buttons.textLink.titleStyle,
      color: Colors.blue,
      marginTop: 8,
    }
    const saveBtnCont = {
      ...Buttons.textLink.buttonStyle,
    }

    const trck = {
      marginTop: 20,
      marginBottom: 15,
      borderBottomWidth: 1,
      height: 60,
      borderBottomColor: Colors.lightGray,
    }
    const trckBtn = {
      marginBottom: 25,
    }

    const shipAddress = { marginTop: 10, color: Colors.gray }
    const pymentInf = {
      marginTop: 20,
      borderTopWidth: 1,
      borderTopColor: Colors.lightGray,
      borderBottomWidth: 1,
      borderBottomColor: Colors.lightGray,
      marginBottom: 15,
    }
    const paymentMethod = {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    }

    const footRow = {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 5,
    }

    const orderTotal = {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
    }

    const orderTotalText = {
      color: Colors.gray,
      fontSize: 18,
    }

    return (
      <SafeAreaProvider>
        <CloseHeader
          icon="angle-left"
          navigation={this.props.navigation}
          text="Order details"
        />
        <ScrollView style={scrlStyle}>
          <View style={dataRow}>
            <Text style={infoText}>Time placed</Text>
            <Text style={{ marginLeft: 70 }}>Jan 20, 2021 at 3:21 Pm</Text>
          </View>
          <View style={dataRow}>
            <Text style={infoText}>Order number</Text>
            <Text style={{ marginLeft: 60 }}>15-06437-71118</Text>
          </View>
          <View style={dataRow}>
            <Text style={infoText}>Total</Text>
            <Text style={{ marginLeft: 118 }}>GBP 3.64 (1 item)</Text>
          </View>
          <View style={dataRow}>
            <Text style={infoText}>Sold by</Text>
            <Text style={{ marginLeft: 104, color: 'blue' }}>
              blingstudi_77
            </Text>
          </View>

          <Text style={deliveryInfo}>Delivery info</Text>
          <Text style={{ color: 'green', fontSize: 15, fontWeight: 'bold' }}>
            Arriving by fri, feb 19, 2021
          </Text>
          <View style={{ marginTop: 15 }}>
            <StepIndicator
              stepCount={3}
              customStyles={customStyles}
              currentPosition={this.state.currentPosition}
              labels={labels}
            />
          </View>

          <View style={itmInf}>
            <Text style={itmInfTxt}>Item info</Text>
            <View style={infBox}>
              <View style={dataRow2}>
                <Image
                  style={imgStyle}
                  source={{
                    uri: 'http://cayzilla.polbd.com/images/products/1.jpg',
                  }}
                />
                <View style={itmInfView}>
                  <Text style={itmInfText}>
                    Tripod adapter Cell Phone Holer Mount Adapter for
                  </Text>
                  <Text style={{ ...Typography.subTitle, marginTop: 5 }}>
                    GBP 2.24
                  </Text>
                </View>
              </View>
              <View style={dataRow3}>
                <View
                  style={{
                    borderRightWidth: 1,
                    borderRightColor: Colors.lightGray,
                    marginLeft: 10,
                  }}
                >
                  <Button
                    type="clear"
                    containerStyle={(saveBtnCont, { marginRight: 20 })}
                    titleStyle={saveBtnTitle}
                    title="Leave feedback"
                  />
                </View>

                <Button
                  type="clear"
                  containerStyle={saveBtnCont}
                  titleStyle={saveBtnTitle}
                  title="More actions..."
                />
              </View>
            </View>
          </View>
          <Text style={itmInfTxt}>Tracking details</Text>
          <View style={dataRow}>
            <Text style={{ color: Colors.gray }}>Carrier</Text>
            <Text style={{ marginLeft: 70, width: 180 }}>
              Economy SpeedPak from China/Hong/Twaiwan
            </Text>
          </View>
          <View style={dataRow}>
            <Text style={{ color: Colors.gray }}>Number</Text>
            <Text style={{ marginLeft: 60 }}>
              EEE10012868394890001030003C0N
            </Text>
          </View>
          <View style={trck}>
            <AppButton
              style={trckBtn}
              title="Track package"
              icon=""
              theme="outline"
            />
          </View>
          <Text style={itmInfTxt}>Shipping address</Text>
          <Text style={shipAddress}>
            Katie Cooke {'\n'}31 Ludlow Road{'\n'}Sunderland, Tyne and Ware Sr2
            9HH{'\n'}United Kingdom
          </Text>

          <View style={pymentInf}>
            <View style={{ marginTop: 20, marginBottom: 20 }}>
              <Text style={itmInfTxt}>Payment info</Text>
            </View>

            <View style={paymentMethod}>
              <Image source={require('../assets/images/paypal.png')} />
              <Text>shahadath@gmail.com</Text>
              <View>
                <Text style={{ marginLeft: 53 }}>GBP 3.64</Text>
                <Text style={{ color: Colors.gray }}>Jan 20 al 3:21 PM</Text>
              </View>
            </View>
          </View>
          <View style={{ marginBottom: 40 }}>
            <View style={footRow}>
              <Text style={{ color: Colors.gray }}>1 itme</Text>
              <Text>GBP 2.24</Text>
            </View>
            <View style={footRow}>
              <Text style={{ color: Colors.gray }}>Shipping</Text>
              <Text>GBP 0.79</Text>
            </View>
            <View style={footRow}>
              <Text style={{ color: Colors.gray }}>Tax</Text>
              <View
                style={{
                  borderBottomWidth: 1,
                  width: 150,
                  borderBottomColor: Colors.lightGray,
                }}
              >
                <Text style={{ marginLeft: 91, marginBottom: 5 }}>
                  GBP 0.61
                </Text>
              </View>
            </View>
            <View style={orderTotal}>
              <Text style={orderTotalText}>Order total</Text>
              <Text style={{ fontSize: 18 }}>GBP 3.64</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaProvider>
    )
  }
}

export default OrderDetails
