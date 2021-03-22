import React, { Component } from 'react'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5'

class AppButton extends Component {
  buttonAction = () => {
    this.props.action?.()
  }
  render() {
    const { title, icon, theme, action } = this.props
    if (theme == 'solid') {
      return (
        <Button
          icon={<Icon name={icon} size={15} color="#3665f3" />}
          title={title}
          onPress={this.buttonAction}
          containerStyle={{ marginLeft: 5, marginRight: 5 }}
          buttonStyle={{ backgroundColor: '#f1f1f1', borderRadius: 20 }}
          titleStyle={{ color: '#3665f3', paddingLeft: 5, paddingRight: 5 }}
        />
      )
    } else if (theme == 'outline') {
      return (
        <Button
          title={title}
          type="outline"
          onPress={this.buttonAction}
          containerStyle={{ marginLeft: 5, marginRight: 5 }}
          buttonStyle={{ borderRadius: 20, borderWidth: 1 }}
          titleStyle={{ color: '#3665f3', paddingLeft: 15, paddingRight: 15 }}
        />
      )
    } else if (theme == 'link') {
      return (
        <Button
          title={title}
          type="clear"
          iconRight
          icon={
            <Icon
              name={icon}
              size={18}
              color="#131720"
              style={{ paddingTop: 5 }}
            />
          }
          containerStyle={{ marginLeft: 5, marginRight: 5 }}
          buttonStyle={{}}
          onPress={this.buttonAction}
          titleStyle={{
            color: '#131720',
            paddingLeft: 0,
            paddingRight: 15,
            fontSize: 18,
          }}
        />
      )
    } else if (theme == 'link2') {
      return (
        <Button
          title={title}
          type="clear"
          iconRight
          icon={
            <Icon
              name={icon}
              size={18}
              color="#131720"
              style={{ paddingTop: 5 }}
            />
          }
          containerStyle={{ marginLeft: 5, marginRight: 0 }}
          buttonStyle={{}}
          onPress={this.buttonAction}
          titleStyle={{
            color: 'gray',
            paddingLeft: 0,
            paddingRight: 0,
            fontSize: 18,
          }}
        />
      )
    } else {
      return (
        <Button
          icon={<Icon name={icon} size={15} color="#3665f3" />}
          title={title}
          onPress={this.buttonAction}
          containerStyle={{ marginLeft: 10, marginRight: 5 }}
          buttonStyle={{ backgroundColor: '#f1f1f1', borderRadius: 20 }}
          titleStyle={{ color: '#3665f3', paddingLeft: 5, paddingRight: 5 }}
        />
      )
    }
  }
}

export default AppButton
