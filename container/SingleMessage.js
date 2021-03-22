import React, { Component } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native'
import CloseHeader from '../component/CloseHeader'
import { Buttons, Colors } from '../styles'

class SingleMessage extends Component {
  render() {
    const windowWidth = Dimensions.get('window').width
    const scrlStyle = {
      backgroundColor: '#fff',
      padding: 10,
    }
    const headMsg = {
      fontSize: 18,
      marginBottom: 16,
    }
    const frmView = {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderTopWidth: 1,
      borderTopColor: Colors.lightGray,
      borderBottomWidth: 1,
      borderBottomColor: Colors.lightGray,
      height: 60,
      marginBottom: 15,
    }
    const imgS = {
      flex: 1,
      width: 160,
      height: 60,
      resizeMode: 'contain',
      marginLeft: 10,
      marginBottom: 20,
    }
    const bdyMsg = {
      fontSize: 35,
      color: Colors.gray,
      width: 320,
      marginLeft: 10,
      marginBottom: 15,
    }
    const bdy = {
      borderBottomWidth: 3,
      borderBottomColor: Colors.lightGray,
      marginBottom: 15,
    }
    const lastView = {
      marginLeft: 10,
      marginBottom: 20,
    }
    return (
      <SafeAreaProvider>
        <View style={{ flex: 0, width: windowWidth }}>
          <CloseHeader
            icon="angle-left"
            navigation={this.props.navigation}
            text="Messages"
          />
        </View>
        <ScrollView style={scrlStyle}>
          <Text style={headMsg}>New sign-in activity on your ebay account</Text>
          <View style={frmView}>
            <Text style={{ marginTop: 15, fontWeight: 'bold', fontSize: 15 }}>
              From: &emsp; cayZilla
            </Text>
            <Text style={{ color: Colors.gray, marginTop: 15 }}>5:58 AM</Text>
          </View>
          <Image style={imgS} source={require('../assets/images/logo.png')} />
          <View style={bdy}>
            <Text style={bdyMsg}>
              New sign-in activity on your ebay account
            </Text>
          </View>
          <View style={lastView}>
            <Text style={{ color: Colors.gray }}>Hello Katie</Text>
          </View>

          <View style={lastView}>
            <Text style={{ color: Colors.gray }}>
              We noticed recent sign-in activety on you account
            </Text>
          </View>

          <View style={lastView}>
            <Text style={{ color: Colors.gray }}>Signed in since</Text>
            <Text style={{ fontWeight: 'bold' }}>Mar 13, 2021 3:58 PM PST</Text>
          </View>
          <View style={lastView}>
            <Text style={{ color: Colors.gray }}>Device</Text>
            <Text style={{ fontWeight: 'bold' }}>Android(CayZilla app)</Text>
          </View>
          <View style={lastView}>
            <Text style={{ color: Colors.gray }}>Approximate location</Text>
          </View>
        </ScrollView>
      </SafeAreaProvider>
    )
  }
}

export default SingleMessage
