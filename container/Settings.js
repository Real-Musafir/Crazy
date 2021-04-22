import React, { Component } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { View, ScrollView, Text, StyleSheet, Dimensions } from 'react-native'
import { Button, Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import CloseHeader from '../component/CloseHeader'
import { Typography, Buttons, Colors } from '../styles'

class Settings extends Component {
  render() {
    const windowWidth = Dimensions.get('window').width
    const scrlStyle = {
      backgroundColor: '#fff',
    }
    const acccontHeader = {
      height: 80,
      backgroundColor: Colors.lightGray,
      padding: 15,
    }
    const accountTitle = {
      ...Typography.subTitle,
      marginTop: 10,
    }
    const commonView = {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: 2,
      paddingBottom: 15,
      paddingTop: 15,
      borderColor: Colors.lightGray,
    }
    const Title = {
      ...Typography.subTitle,
    }
    const subTitle = {
      fontSize: 18,
    }
    const signOut = {
      marginTop: 15,
      marginBottom: 15,
      fontSize: 18,
      color: Colors.blue,
    }
    const angleIconStyle = { alignItems: 'center', flexDirection: 'column' }
    return (
      <SafeAreaProvider>
        <View style={{ flex: 0, width: windowWidth }}>
          <CloseHeader
            icon="angle-left"
            navigation={this.props.navigation}
            text="Settings"
            lastIcon="cart-plus"
          />
        </View>
        <ScrollView style={scrlStyle}>
          <View style={acccontHeader}>
            <Text style={accountTitle}>Account</Text>
          </View>
          <View style={{ padding: 15 }}>
            <View style={commonView}>
              <View>
                <Text style={Title}>Delivery address</Text>
                <Text style={{ color: 'gray' }}>Katie Cooke</Text>
                <Text style={{ color: 'gray' }}>31 Ludlow Road</Text>
                <Text style={{ color: 'gray' }}>
                  Sunderland, Tyne and Wear SR2 9HH
                </Text>
              </View>
              <Icon style={angleIconStyle} name="angle-right" size={30} />
            </View>
            <View style={commonView}>
              <View>
                <Text style={subTitle}>Account info</Text>
              </View>
              <Icon style={angleIconStyle} name="angle-right" size={30} />
            </View>
            <View style={commonView}>
              <View>
                <Text style={subTitle}>Sign in and security</Text>
              </View>
              <Icon style={angleIconStyle} name="angle-right" size={30} />
            </View>
            <View style={commonView}>
              <View>
                <Text style={subTitle}>Notifications</Text>
              </View>
              <Icon style={angleIconStyle} name="angle-right" size={30} />
            </View>
            <View style={commonView}>
              <View>
                <Text style={subTitle}>Measurement and Analytics</Text>
              </View>
              <Icon style={angleIconStyle} name="angle-right" size={30} />
            </View>
            <Text style={signOut}>Sign out</Text>
          </View>
          <View style={acccontHeader}>
            <Text style={accountTitle}>General</Text>
          </View>
          <View style={{ padding: 15 }}>
            <View style={commonView}>
              <View>
                <Text style={subTitle}>Appearance</Text>
              </View>
              <Icon style={angleIconStyle} name="angle-right" size={30} />
            </View>
            <View style={commonView}>
              <View>
                <Text style={subTitle}>Stored photo</Text>
              </View>
              <Icon style={angleIconStyle} name="angle-right" size={30} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaProvider>
    )
  }
}

export default Settings
