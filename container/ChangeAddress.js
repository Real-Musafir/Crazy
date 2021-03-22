import React, { Component, useState } from 'react'
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Switch,
  Dimensions,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import IconFA from 'react-native-vector-icons/FontAwesome'
import { Button } from 'react-native'
import AppButton from '../component/AppButton'
import DropDownPicker from 'react-native-dropdown-picker'
import { Buttons, Colors } from '../styles'
import CloseHeader from '../component/CloseHeader'
import { SafeAreaProvider } from 'react-native-safe-area-context'

class ChangeAddress extends Component {
  state = {
    checked: true,
  }
  render() {
    const windowWidth = Dimensions.get('window').width
    const scrlStyle = {
      backgroundColor: '#fff',
      padding: 10,
    }
    const input = {
      backgroundColor: Colors.lightGray,
      // backgroundColor: "red",
      fontSize: 18,
      marginLeft: 5,
      marginRight: 20,
      marginBottom: 20,
      height: 50,
      padding: 10,
      borderRadius: 10,
    }
    const dropDown = {
      // backgroundColor: Colors.lightGray,
      // backgroundColor: "red",
      fontSize: 18,
      marginLeft: 5,
      marginRight: 20,
      marginBottom: 20,
      height: 50,
      padding: 10,
      // borderRadius: 10,
      borderColor: 'white',
    }
    const selText = {
      color: 'gray',
    }
    const submitBtn = {
      ...Buttons.roundBlue.containerStyle,
      marginBottom: 20,
      marginTop: 10,
    }
    const submitText = {
      ...Buttons.roundBlue.titleStyle,
    }
    return (
      <SafeAreaProvider>
        <View style={{ flex: 0, width: windowWidth }}>
          <CloseHeader
            icon="angle-left"
            navigation={this.props.navigation}
            text="Add address"
          />
        </View>
        <ScrollView style={scrlStyle}>
          <TextInput
            style={input}
            underlineColorAndroid="transparent"
            placeholder="First name"
            placeholderTextColor="gray"
            autoCapitalize="none"
          />
          <TextInput
            style={input}
            underlineColorAndroid="transparent"
            placeholder="Last name"
            placeholderTextColor="gray"
            autoCapitalize="none"
          />
          <TextInput
            style={input}
            underlineColorAndroid="transparent"
            placeholder="Street adress"
            placeholderTextColor="gray"
            autoCapitalize="none"
          />
          <TextInput
            style={input}
            underlineColorAndroid="transparent"
            placeholder="City"
            placeholderTextColor="gray"
            autoCapitalize="none"
          />

          <Text style={selText}>State/Province/Region</Text>
          <DropDownPicker
            style={dropDown}
            items={[
              { label: 'North America', value: 'na', untouchable: true }, // North America
              { label: 'United States', value: 'us', parent: 'na' },
              { label: 'Canada', value: 'canada', parent: 'na' },
              { label: 'Mexico', value: 'mexico', parent: 'na' },

              { label: 'Europe', value: 'eu', untouchable: true }, // Europe
              { label: 'UK', value: 'uk', parent: 'eu' },
              { label: 'Germany', value: 'germany', parent: 'eu' },
              { label: 'Russia', value: 'russia', parent: 'eu' },
            ]}
          />
          <TextInput
            style={input}
            underlineColorAndroid="transparent"
            placeholder="Zip code"
            placeholderTextColor="gray"
            autoCapitalize="none"
          />
          <TextInput
            style={input}
            underlineColorAndroid="transparent"
            placeholder="Phone number"
            placeholderTextColor="gray"
            autoCapitalize="none"
          />
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ marginLeft: 20 }}>Save as primay address</Text>
            <Switch
              marginLeft={180}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={this.statechecked ? '#f5dd4b' : '#f4f3f4'}
              //   backgroundColor="#3e3e3e"
              // onValueChange={toggleSwitch}
              value={this.state.checked}
            />
          </View>

          <View style={{ margin: 15 }}>
            <Button
              type="solid"
              containerStyle={submitBtn}
              titleStyle={submitText}
              title="Add"
            />
          </View>
        </ScrollView>
      </SafeAreaProvider>
    )
  }
}

export default ChangeAddress
