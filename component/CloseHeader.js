import React, { Component } from 'react'
import { Header, Button, Text } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5'

class CloseHeader extends Component {
  closeClick = () => {
    this.props.navigation?.goBack()
  }
  render() {
    const { text } = this.props

    return (
      <Header
        containerStyle={{
          backgroundColor: '#fff',
          display: 'flex',
          justifyContent: 'flex-start',
          borderBottomColor: 'rgba(42,42,42,.1)',
          borderBottomWidth: 1,
        }}
        leftContainerStyle={{ flex: 0 }}
        centerContainerStyle={{ flex: 6, alignItems: 'stretch' }}
        rightContainerStyle={{ flex: 1 }}
        leftComponent={
          <Button
            onPress={() => {
              this.closeClick()
            }}
            containerStyle={{ marginRight: 10 }}
            buttonStyle={{ padding: 4, margin: 0 }}
            type="clear"
            icon={<Icon name="times" size={22} color="#2a2a2a" />}
          />
        }
        centerComponent={<Text style={{ fontSize: 20 }}>{text}</Text>}
        rightComponent={<Text></Text>}
      />
    )
  }
}

export default CloseHeader
