import React, { Component } from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class CartButton extends Component {
  cartAction = () => {
    this.props.action?.()
  }
  render() {
    return (
      <Icon
        name="cart-plus"
        size={22}
        iconStyle={{ marginTop: 20 }}
        onPress={this.cartAction}
      />
    )
  }
}

export default CartButton
