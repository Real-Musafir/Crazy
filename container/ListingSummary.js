import React, { Component } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Switch,
} from 'react-native'
import { Button, Divider } from 'react-native-elements'
import CloseHeader from '../component/CloseHeader'
import CartItem from '../component/CartItem'
import { Buttons, Colors } from '../styles'
import Icon from 'react-native-vector-icons/FontAwesome'

class ListingSummary extends Component {
  state = {
    checked: true,
  }
  render() {
    const windowWidth = Dimensions.get('window').width
    const scrlStyle = {
      backgroundColor: '#fff',
      padding: 15,
    }
    const dataRow = {
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
    const title = {
      fontSize: 22,
      fontWeight: 'bold',
    }
    const prvPhotos = {
      flexDirection: 'row',
      backgroundColor: '#E0FFFF',
      marginTop: 20,
      padding: 15,
      marginBottom: 20,
    }
    const prvIcon = {
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: 'blue',
    }
    const photoAdd = {
      height: 220,
      borderWidth: 2,
      borderColor: Colors.lightGray,
      marginBottom: 30,
    }
    const photoAddCenter = {
      width: 60,
      height: 60,
      borderRadius: 35,
      backgroundColor: 'blue',
      marginTop: 70,
      marginLeft: 170,
    }
    const dataRow2 = {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 280,
      marginBottom: 15,
    }
    const prefView = {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 15,
    }
    const donatePart = {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 15,
      marginBottom: 10,
    }
    const donateView = {
      borderBottomWidth: 2,
      borderTopWidth: 2,
      marginTop: 20,
      borderColor: Colors.lightGray,
      marginBottom: 20,
    }
    const titleList = {
      fontSize: 25,
      fontWeight: 'bold',
      marginLeft: 100,
      marginBottom: 10,
    }
    const footer = {
      height: 150,
      backgroundColor: 'gray',
    }
    return (
      <SafeAreaProvider>
        <View style={{ flex: 0, width: windowWidth }}>
          <CloseHeader
            icon="angle-left"
            navigation={this.props.navigation}
            text="Listing Summary"
          />
        </View>
        <ScrollView style={scrlStyle}>
          <View style={dataRow}>
            <Text style={title}>Photos</Text>
            <Icon
              style={{ marginTop: 5, marginRight: 10, color: 'gray' }}
              name="pencil"
              size={25}
            />
          </View>
          <View style={prvPhotos}>
            <View style={prvIcon}>
              <Icon
                style={{ marginTop: 2, marginLeft: 7, color: 'white' }}
                name="exclamation"
                size={15}
              />
            </View>
            <Text style={{ fontSize: 15, marginLeft: 15 }}>
              Please provide photos for your item
            </Text>
          </View>
          <View style={photoAdd}>
            <View style={photoAddCenter}>
              <Icon
                style={{ marginTop: 15, marginLeft: 18, color: 'white' }}
                name="plus"
                size={30}
              />
            </View>
          </View>
          <View style={dataRow}>
            <View style={{ flexDirection: 'row' }}>
              <Icon
                style={{ marginTop: 2, color: '#00FF7F' }}
                name="check-circle"
                size={30}
              />
              <View style={{ marginLeft: 15 }}>
                <Text style={title}>Title</Text>
              </View>
            </View>
            <Icon
              style={{ marginRight: 10, color: 'gray' }}
              name="pencil"
              size={25}
            />
          </View>
          <Text style={{ fontSize: 20, marginTop: 15, marginBottom: 30 }}>
            Tea towels
          </Text>
          <View style={dataRow}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={title}>Item specifics</Text>
            </View>
            <Icon
              style={{ marginRight: 10, color: 'gray' }}
              name="pencil"
              size={25}
            />
          </View>
          <View style={prvPhotos}>
            <View style={prvIcon}>
              <Icon
                style={{ marginTop: 2, marginLeft: 7, color: 'white' }}
                name="exclamation"
                size={15}
              />
            </View>
            <Text style={{ fontSize: 15, marginLeft: 15 }}>
              Additional spacifics are required:{' '}
              <Text style={{ fontWeight: 'bold' }}>
                Brand, Colour, Material
              </Text>
            </Text>
          </View>
          <View style={dataRow2}>
            <Text style={{ fontSize: 16, color: 'gray' }}>Condition</Text>
            <Text style={{ fontSize: 16 }}>New with tags</Text>
          </View>
          <View style={dataRow2}>
            <Text style={{ fontSize: 16, color: 'gray' }}>Set Includes</Text>
            <Text style={{ fontSize: 16, marginRight: 30 }}>Tea Towel</Text>
          </View>
          <View style={dataRow2}>
            <Text style={{ fontSize: 16, color: 'gray' }}>Room</Text>
            <Text style={{ fontSize: 16, marginRight: 47 }}>Kitchen</Text>
          </View>
          <View style={dataRow}>
            <View style={{ flexDirection: 'row' }}>
              <Icon
                style={{ marginTop: 2, color: '#00FF7F' }}
                name="check-circle"
                size={30}
              />
              <View style={{ marginLeft: 15 }}>
                <Text style={title}>Category</Text>
              </View>
            </View>
            <Icon
              style={{ marginRight: 10, color: 'gray' }}
              name="pencil"
              size={25}
            />
          </View>
          <Text style={{ marginTop: 10, color: 'gray', marginBottom: 20 }}>
            Home, Furniture & Diy > Cookware, Dining & Bar > Kitchen Linen &
            Textiles > Tea Towels/Dishclots
          </Text>
          <View style={dataRow}>
            <View style={{ flexDirection: 'row' }}>
              <Icon
                style={{ marginTop: 2, color: '#00FF7F' }}
                name="check-circle"
                size={30}
              />
              <View style={{ marginLeft: 15 }}>
                <Text style={title}>Description</Text>
              </View>
            </View>
            <Icon
              style={{ marginRight: 10, color: 'gray' }}
              name="pencil"
              size={25}
            />
          </View>
          <Text style={{ marginTop: 10, color: 'gray', marginBottom: 20 }}>
            Tea towels, Condition is "new with tags". Dispatched with Royal Mail
            2nd Class
          </Text>

          <View style={{ marginBottom: 20 }}>
            <View style={dataRow}>
              <View style={{ flexDirection: 'row' }}>
                <Icon
                  style={{ marginTop: 2, color: '#00FF7F' }}
                  name="check-circle"
                  size={30}
                />
                <View style={{ marginLeft: 15 }}>
                  <Text style={title}>Pricing</Text>
                </View>
              </View>
              <Icon
                style={{ marginRight: 10, color: 'gray' }}
                name="pencil"
                size={25}
              />
            </View>
            <Text style={{ color: '#00FF7F', marginTop: 10 }}>Recommended</Text>
            <View style={dataRow}>
              <View style={{ width: 200 }}>
                <Text style={title}>7-day auction</Text>
                <Text style={{ color: 'gray' }}>
                  Successful auction had an average starging bid of $1.50
                </Text>
              </View>
              <View style={{ marginRight: 30 }}>
                <Text>Starting bid</Text>
                <Text style={title}>$1.50</Text>
                <Text style={{ color: 'gray' }}>Avg sale price</Text>
              </View>
            </View>
          </View>
          <View style={{ marginBottom: 20 }}>
            <View style={dataRow}>
              <View style={{ flexDirection: 'row' }}>
                <Icon
                  style={{ marginTop: 2, color: '#00FF7F' }}
                  name="check-circle"
                  size={30}
                />
                <View style={{ marginLeft: 15 }}>
                  <Text style={title}>Delivery</Text>
                </View>
              </View>
              <Icon
                style={{ marginRight: 10, color: 'gray' }}
                name="pencil"
                size={25}
              />
            </View>
            <Text style={{ color: '#00FF7F', marginTop: 10 }}>Recommended</Text>
            <View style={dataRow}>
              <View style={{ width: 200 }}>
                <Text style={title}>Royal Mail 2nd Class</Text>
                <Text style={{ color: 'gray' }}>
                  Max. 1kg{'\n'}Max. 45 x 35 x 16 com{'\n'}2-3 business days
                </Text>
              </View>
              <View style={{ marginRight: 30 }}>
                <Text>Buyer pays</Text>
                <Text style={title}>$3.20</Text>
              </View>
            </View>
          </View>
          <View style={dataRow}>
            <View style={{ flexDirection: 'row' }}>
              <Icon
                style={{ marginTop: 2, color: '#00FF7F' }}
                name="check-circle"
                size={30}
              />
              <View style={{ marginLeft: 15 }}>
                <Text style={title}>Preferences</Text>
              </View>
            </View>
            <Icon
              style={{ marginRight: 10, color: 'gray' }}
              name="pencil"
              size={25}
            />
          </View>
          <View style={prefView}>
            <Text style={{ color: 'gray' }}>Payment Methods </Text>
            <View style={{ width: 200 }}>
              <Text>PayPal</Text>
              <Text style={{ color: 'gray' }}>mrskatiecooke@gmail.com</Text>
            </View>
          </View>
          <View style={prefView}>
            <Text style={{ color: 'gray' }}>Handling Time </Text>

            <View>
              <Text style={{ width: 200 }}>2 Business Days</Text>
            </View>
          </View>
          <View style={prefView}>
            <Text style={{ color: 'gray' }}>Item Location</Text>
            <View style={{ width: 200 }}>
              <Text>United Kingdom, SR2 HH</Text>
              <Text style={{ color: 'gray' }}>(Sunderland)</Text>
            </View>
          </View>
          <View style={prefView}>
            <Text style={{ color: 'gray' }}>Return policy </Text>

            <View>
              <Text style={{ width: 200 }}>No returns accepted</Text>
            </View>
          </View>

          <View style={donateView}>
            <View style={donatePart}>
              <Text>Donate a portion to charity</Text>
              <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={this.statechecked ? '#f5dd4b' : '#f4f3f4'}
                value={this.state.checked}
              />
            </View>
            <Text style={{ marginBottom: 15 }}>
              You'll get a credit on basic selling fees for sold items
            </Text>
          </View>
          <Text style={titleList}>List it for free</Text>
          <Text style={{ fontSize: 17, color: 'gray', marginBottom: 15 }}>
            If your item sells, you will be charged a final value fee based on
            the total cost to the buyer, including postage.
          </Text>
          <Text style={{ fontSize: 17, color: 'gray', marginBottom: 15 }}>
            By selecting List with displayed fees, you agree to pay the above
            fees, accept the CayZilla User Agreement, Payments Terms of Use and
            Marketing Terms of Service, acknowledge reading the User Privacy
            Notice and assume full responsibility for the item offered and the
            conetent of you listing
          </Text>
          <View style={{ width: 380, marginBottom: 10 }}>
            <Button
              buttonStyle={{ borderRadius: 20 }}
              title="List with displayed fees"
            />
          </View>
          <View style={{ width: 380, marginBottom: 10 }}>
            <Button buttonStyle={{ borderRadius: 20 }} title="Preview" />
          </View>
          <View style={{ width: 380, marginBottom: 20 }}>
            <Button buttonStyle={{ borderRadius: 20 }} title="Save for later" />
          </View>

          <View style={footer}>
            <Text style={{ fontSize: 15, padding: 30, color: 'blue' }}>
              User Agreement
            </Text>
            <Text style={{ marginLeft: 30, fontSize: 15, color: 'blue' }}>
              Payments Terms of Use
            </Text>
          </View>

          <Text style={{ marginBottom: 36 }}></Text>
        </ScrollView>
      </SafeAreaProvider>
    )
  }
}

export default ListingSummary
