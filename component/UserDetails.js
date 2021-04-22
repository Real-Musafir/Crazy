import React, { Component } from 'react'
import { View, ScrollView, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Button, Text } from 'react-native-elements'
import { Typography, Buttons, Colors } from '../styles'
import CartButton from './CartButton'

class UserDetails extends Component {
  gotoSettings = () => {
    this.props.navigation.navigate('Settings')
  }
  render() {
    const scrlStyle = {
      backgroundColor: '#fff',
      // padding: 15,
    }
    const headerPart = {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 20,
    }
    const userIconView = {
      width: 60,
      height: 60,
      backgroundColor: '#C0C0C0',
      borderRadius: 40,
      alignItems: 'center',
      justifyContent: 'center',
    }
    const userTitle = {
      ...Typography.subTitle,
      marginLeft: 15,
    }
    const rawData = {
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
    const middleLine = {
      width: 2,
      height: 30,
      backgroundColor: Colors.lightGray,
    }
    const badge = {
      width: 25,
      height: 22,
      backgroundColor: 'red',
      borderRadius: 10,
      paddingBottom: 5,
      paddingBottom: 10,
      // alignSelf: 'flex-first',
      position: 'absolute',
      marginLeft: 30,
    }
    const badgeText = {
      textAlign: 'center',
      color: 'white',
    }
    const cartView = {
      alignSelf: 'flex-end',
      marginTop: 20,
      flexDirection: 'row',
      marginRight: 20,
    }
    const bodyPart = {
      borderTopWidth: 2,
      // borderBottomWidth: 2,
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 15,
      borderColor: Colors.lightGray,
    }
    const bodyText = {
      ...Typography.title,
    }
    return (
      <SafeAreaProvider>
        <ScrollView style={scrlStyle}>
          <View style={{ padding: 15 }}>
            <View style={cartView}>
              <Icon
                style={{ padding: 2, marginLeft: 10 }}
                name="cart-plus"
                size={30}
              />
              <View style={badge}>
                <Text style={badgeText}>1</Text>
              </View>
            </View>
            <View style={headerPart}>
              <View style={userIconView}>
                <Icon
                  style={{ color: 'gray' }}
                  name="user"
                  size={32}
                  iconStyle={{ marginTop: 20 }}
                  onPress={this.cartAction}
                />
              </View>
              <View>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={userTitle}>Kaco8454</Text>
                  <Icon
                    style={{ color: '#A9A9A9', padding: 2, marginLeft: 10 }}
                    name="long-arrow-right"
                    size={23}
                    // iconStyle={{ marginTop: 20 }}
                  />
                </View>
                <Text style={{ marginLeft: 15, color: 'gray' }}>
                  Member since 2020
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft: 20,
                marginRight: 20,
              }}
            >
              <View style={rawData}>
                <Icon
                  onPress={this.gotoSettings}
                  style={{ color: '#A9A9A9', padding: 2, marginLeft: 10 }}
                  name="cog"
                  size={35}
                  // iconStyle={{ marginTop: 20 }}
                />
                <Text style={{ fontSize: 18, padding: 6, marginLeft: 10 }}>
                  Settings
                </Text>
              </View>
              <View style={middleLine}></View>
              <View style={rawData}>
                <View style={{ flexDirection: 'row' }}>
                  <Icon
                    style={{ color: '#A9A9A9', padding: 2, marginLeft: 10 }}
                    name="envelope"
                    size={30}
                  />
                  <View style={badge}>
                    <Text style={badgeText}>9</Text>
                  </View>
                </View>

                <Text style={{ fontSize: 18, padding: 6, marginLeft: 10 }}>
                  Messages
                </Text>
              </View>
            </View>
          </View>
          <View style={bodyPart}>
            <Text style={bodyText}>Watching</Text>
            <Icon style={{ color: '#A9A9A9' }} name="angle-right" size={30} />
          </View>
          <View style={bodyPart}>
            <View>
              <Text style={bodyText}>Saved</Text>
              <Text style={{ color: 'grey' }}>Searches, sellers, feed</Text>
            </View>
            <Icon style={{ color: '#A9A9A9' }} name="angle-right" size={30} />
          </View>
          <View style={bodyPart}>
            <Text style={bodyText}>Buy again</Text>
            <Icon style={{ color: '#A9A9A9' }} name="angle-right" size={30} />
          </View>
          <View style={bodyPart}>
            <Text style={bodyText}>Purchases</Text>
            <Icon style={{ color: '#A9A9A9' }} name="angle-right" size={30} />
          </View>
          <View style={bodyPart}>
            <Text style={bodyText}>Bids and offers</Text>
            <Icon style={{ color: '#A9A9A9' }} name="angle-right" size={30} />
          </View>
          <View style={bodyPart}>
            <Text style={bodyText}>Selling</Text>
            <Icon style={{ color: '#A9A9A9' }} name="angle-right" size={30} />
          </View>
          <View style={bodyPart}>
            <Text style={bodyText}>Payments</Text>
            <Icon style={{ color: '#A9A9A9' }} name="angle-right" size={30} />
          </View>
          <View style={bodyPart}>
            <Text style={bodyText}>Help</Text>
            <Icon style={{ color: '#A9A9A9' }} name="angle-right" size={30} />
          </View>
        </ScrollView>
      </SafeAreaProvider>
    )
  }
}

export default UserDetails
