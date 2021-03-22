import React, { Component } from 'react'
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
} from 'react-native'
import AppButton from '../component/AppButton'
import CartItem from '../component/CartItem'
import FilterButton from '../component/FilterButton'
import PurchaseItem from '../component/PurchaseItem'
import CloseHeader from '../component/CloseHeader'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Typography, Buttons, Colors } from '../styles'
import { Button, Overlay } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5'
class PurchaseHistory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showBar: false,
      showBox: false,
    }
  }
  doneMethod = () => {
    this.setState({
      showBar: true,
    })
  }
  saveMethod = () => {
    this.setState({
      showBar: false,
    })
  }
  showCheckBox = () => {
    console.log(this.state.showBox)
    this.setState({
      showBox: true,
    })
  }
  chancleShowBox = () => {
    this.setState({
      showBox: false,
    })
  }
  gotoOrderDetails = () => {
    this.props.navigation.navigate('OrderDetails')
  }
  render() {
    const windowWidth = Dimensions.get('window').width
    const scrlStyle = {
      backgroundColor: '#fff',
    }
    const rawData = {
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
    const saveBtnTitle = {
      ...Buttons.textLink.titleStyle,
    }
    const saveBtnCont = {
      ...Buttons.textLink.buttonStyle,
    }

    const messageInput = {
      backgroundColor: Colors.lightGray,
      borderRadious: 10,
      marginTop: 10,
      borderBottomWidth: 0,
      height: 70,
      overflow: 'hidden',
      marginBottom: 10,
    }
    const messageBtnTitle = {
      ...Buttons.roundBlue.titleStyle,
    }
    const refineView = {
      margin: 10,
    }
    const refineText = {
      color: Colors.gray,
      fontSize: 20,
    }
    const yearStyle = {
      color: Colors.gray,
      marginBottom: 10,
      borderBottomWidth: 1,
      borderColor: Colors.lightGray,
    }
    const ordStatus = {
      color: Colors.gray,
      fontWeight: 'bold',
      marginTop: 10,
      borderColor: Colors.lightGray,
      marginBottom: 15,
    }
    const allStyle = { color: 'blue', marginBottom: 10 }
    const unpaid = {
      borderBottomWidth: 1,
      borderColor: Colors.lightGray,
    }
    const unpaidTex = {
      marginTop: 15,
      marginBottom: 15,
      color: Colors.gray,
    }
    const paidOrder = {
      marginTop: 20,
      borderBottomWidth: 1,
      borderColor: Colors.lightGray,
    }
    const paidOrderText = {
      color: Colors.gray,
      fontWeight: 'bold',
      marginBottom: 15,
    }
    const cancelItem = {
      borderBottomWidth: 1,
      borderColor: Colors.lightGray,
      marginTop: 10,
    }
    const cancelItemText = {
      color: Colors.gray,
      marginBottom: 18,
      marginTop: 13,
    }
    const doneButton = {
      marginLeft: 250,
    }
    const cancalBtn = {
      marginLeft: 300,
    }
    const items = [
      {
        orderStatus: 'SHIPPED',
        image: 'http://cayzilla.polbd.com/images/products/1.jpg',
        title: 'Brita Standard Replacement Filters for Pitchers',
        price: '$192.12',
        qty: '1',
        shippingCost: '+GBP 0.79 \nLeave feedback',
        date: 'Jan 20, 2021',
      },
      {
        orderStatus: 'SHIPPED',
        image: 'http://cayzilla.polbd.com/images/products/2.jpg',
        title: 'Libbey Mixologist 9-Piece Cocktail Set',
        price: '$31.99',
        qty: '2',
        shippingCost: 'Free Shipping \nLeave feedback',
        date: 'Jan 20, 2021',
      },
      {
        orderStatus: '',
        image: 'http://cayzilla.polbd.com/images/products/3.jpg',
        title: 'Homemory Realistic and Bright Flickering Bulb ',
        price: '$10.99',
        qty: '1',
        shippingCost: '+Shipping',
        date: 'Jan 20, 2021',
      },
    ]
    return (
      <SafeAreaProvider>
        <ScrollView style={scrlStyle}>
          {!this.state.showBox ? (
            <View>
              <View style={{ flex: 0, width: windowWidth }}>
                <CloseHeader
                  icon="angle-left"
                  navigation={this.props.navigation}
                  text="Purches History"
                />
              </View>
              <View style={rawData}>
                <Button
                  type="clear"
                  containerStyle={saveBtnCont}
                  titleStyle={saveBtnTitle}
                  title="Find"
                />
                <View style={rawData}>
                  <Button
                    onPress={() => {
                      this.showCheckBox()
                    }}
                    type="clear"
                    containerStyle={saveBtnCont}
                    titleStyle={saveBtnTitle}
                    title="Edit"
                  />
                  <Button
                    onPress={() => {
                      this.doneMethod()
                    }}
                    type="clear"
                    containerStyle={saveBtnCont}
                    titleStyle={saveBtnTitle}
                    title="Refine"
                  />
                </View>
              </View>
            </View>
          ) : (
            <View>
              <View style={{ flex: 0, width: windowWidth }}>
                <CloseHeader
                  icon="angle-left"
                  navigation={this.props.navigation}
                  text="Cancel Edit"
                />
              </View>
              <Button
                onPress={() => {
                  this.chancleShowBox()
                }}
                type="clear"
                containerStyle={cancalBtn}
                titleStyle={saveBtnTitle}
                title="Cancel"
              />
            </View>
          )}

          <Overlay isVisible={this.state.showBar} fullScreen={true}>
            <View>
              <ScrollView style={scrlStyle}>
                <View style={refineView}>
                  <View style={rawData}>
                    <Text style={refineText}>Refine</Text>
                    <Button
                      onPress={() => {
                        this.saveMethod()
                      }}
                      type="clear"
                      containerStyle={doneButton}
                      titleStyle={saveBtnTitle}
                      title="Done"
                    />
                  </View>

                  <View style={yearStyle}>
                    <Text style={{ marginBottom: 15 }}>2021 (1)</Text>
                  </View>
                  <View style={yearStyle}>
                    <Text style={{ marginBottom: 15 }}>2020 (7)</Text>
                  </View>
                  <View style={yearStyle}>
                    <Text style={{ marginBottom: 15 }}>2019 (0)</Text>
                  </View>
                  <Text style={ordStatus}>ORDER STATUS</Text>
                  <View
                    style={{
                      borderBottomColor: Colors.lightGray,
                      borderBottomWidth: 2,
                    }}
                  >
                    <View style={rawData}>
                      <Text style={allStyle}>All(8)</Text>
                      <Icon name="angle-right" />
                    </View>
                  </View>
                  <View style={unpaid}>
                    <Text style={unpaidTex}>Unpaid items(0)</Text>
                  </View>
                  <View style={unpaid}>
                    <Text style={unpaidTex}>Unpaid invoices(0)</Text>
                  </View>
                  <View style={paidOrder}>
                    <Text style={paidOrderText}>Paid Orders (8)</Text>
                  </View>
                  <View style={cancelItem}>
                    <Text style={cancelItemText}>Canceled items(0)</Text>
                  </View>
                  <View style={cancelItem}>
                    <Text style={cancelItemText}>Canceled Invoices(0)</Text>
                  </View>
                  <View style={cancelItem}>
                    <Text style={cancelItemText}>Returns and Cancellation</Text>
                  </View>
                </View>
              </ScrollView>
            </View>
            <Button
              onPress={() => {
                this.saveMethod()
              }}
              type="clear"
              containerStyle={saveBtnCont}
              titleStyle={saveBtnTitle}
              title="Reset"
            />
          </Overlay>
          <View>
            {items.map((item, index) => (
              <PurchaseItem
                key={index}
                orderStatus={item.orderStatus}
                image={item.image}
                title={item.title}
                shippingCost={item.shippingCost}
                date={item.date}
                showBox={this.state.showBox}
                gotoOrderDetails={() => {
                  this.gotoOrderDetails()
                }}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaProvider>
    )
  }
}

export default PurchaseHistory
