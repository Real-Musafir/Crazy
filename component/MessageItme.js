import React, { Component } from 'react'
import { View, ScrollView, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Button, Text } from 'react-native-elements'
import { Typography, Buttons, Colors } from '../styles'
class MessageItem extends Component {
  gotoSingleMessage = () => {
    console.log('This is message item')
    this.props.gotoSingleMessage?.()
  }
  render() {
    const { message } = this.props
    const logoS = {
      height: 80,
      width: 80,
      backgroundColor: Colors.lightGray,
      borderRadius: 40,
      marginBottom: 20,
    }
    const rowData = {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: 2,
      borderBottomColor: Colors.lightGray,
      marginBottom: 20,
    }
    const msgContainer = {
      width: 210,
      marginTop: 5,
    }
    const imgS = {
      flex: 1,
      width: 60,
      height: 60,
      resizeMode: 'contain',
      marginLeft: 10,
    }
    return (
      <View style={rowData}>
        <View style={logoS}>
          <Image style={imgS} source={require('../assets/images/logo.png')} />
        </View>
        <View style={msgContainer}>
          <Text style={{ fontSize: 15 }}>CayZill</Text>
          <Text
            onPress={() => {
              this.gotoSingleMessage()
            }}
          >
            {message}
          </Text>
        </View>
        <View style={{ marginRight: 5 }}>
          <Text style={{ color: Colors.gray }}>14 mar</Text>
          <Icon style={{ marginLeft: 18 }} name="flag-checkered" size={22} />
        </View>
      </View>
    )
  }
}

export default MessageItem
