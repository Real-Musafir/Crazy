import React, { Component } from 'react'
import { View, ScrollView, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Button, Text } from 'react-native-elements'
import AppButton from '../component/AppButton'
import { Typography, Buttons, Colors } from '../styles'
import {
  Avatar,
  Badge,
  withBadge,
  Header,
  SearchBar,
} from 'react-native-elements'
import Menu from '../component/Menu'
import Logo from '../component/Logo'
import MessageItem from '../component/MessageItme'

class Message extends Component {
  gotoSingleMessage = () => {
    this.props.navigation.navigate('SingleMessage')
    console.log('This is message')
  }
  render() {
    const messages = [
      {
        message: 'New sign-in activity on your ebay account',
        seen: 'false',
      },
      {
        message: 'Leave Feedback for your eBay',
        seen: 'true',
      },
      {
        message: "it's easy to make extra cash",
        seen: 'false',
      },
      {
        message: 'New sign-in activity on your ebay account',
        seen: 'false',
      },
      {
        message: 'Leave Feedback for your eBay',
        seen: 'true',
      },
      {
        message: "it's easy to make extra cash",
        seen: 'false',
      },
    ]
    const scrlStyle = {
      backgroundColor: '#fff',
      marginTop: 20,
      padding: 10,
    }
    const headItm = {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: 2,
      borderBottomColor: Colors.lightGray,
      marginTop: 10,
    }
    const cartButton = (
      <Icon name="cart-plus" size={22} iconStyle={{ marginTop: 20 }} />
    )
    const msgTxt = {
      fontSize: 25,
      fontWeight: 'bold',
      color: Colors.gray,
    }
    const headButton = {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 120,
      marginLeft: 250,
      marginTop: 10,
      marginBottom: 20,
    }
    const saveBtnTitle = {
      ...Buttons.textLink.titleStyle,
    }
    const saveBtnCont = {
      ...Buttons.textLink.buttonStyle,
    }

    return (
      <SafeAreaProvider>
        <ScrollView style={scrlStyle}>
          <Header
            containerStyle={{
              backgroundColor: '#fff',
              display: 'flex',
              justifyContent: 'flex-start',
            }}
            leftContainerStyle={{ flex: 1 }}
            centerContainerStyle={{ flex: 6, alignItems: 'stretch' }}
            rightContainerStyle={{ flex: 1 }}
            leftComponent={<Menu />}
            centerComponent={<Text style={msgTxt}>Message</Text>}
            rightComponent={cartButton}
          />
          <View style={headItm}>
            <View style={{ flexDirection: 'row' }}>
              <AppButton title="Inbox" theme="link2" />
              <Badge
                containerStyle={{ position: 'absolute', right: -6 }}
                status=""
                value={5}
                textStyle={{ color: '#000000' }}
              />
            </View>
            <AppButton title="Sent" theme="link2" />
            <AppButton title="My folder" theme="link2" />
            <AppButton title="Archive" theme="link2" />
          </View>
          <View style={headButton}>
            <Button
              type="clear"
              containerStyle={saveBtnCont}
              titleStyle={saveBtnTitle}
              title="Edit"
            />
            <Button
              type="clear"
              containerStyle={saveBtnCont}
              titleStyle={saveBtnTitle}
              title="Filter"
            />
          </View>
          <View>
            {messages.map((message, index) => (
              <MessageItem
                key={index}
                message={message.message}
                gotoSingleMessage={() => {
                  this.gotoSingleMessage()
                }}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaProvider>
    )
  }
}

export default Message
