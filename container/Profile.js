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
import { Button, Divider, Rating } from 'react-native-elements'
import CloseHeader from '../component/CloseHeader'
import CartItem from '../component/CartItem'
import { Buttons, Colors } from '../styles'
import AppButton from '../component/AppButton'
import Product from '../component/Product'
import Icon from 'react-native-vector-icons/FontAwesome5'

class Profile extends Component {
  render() {
    const products = [
      {
        image:
          'https://images-na.ssl-images-amazon.com/images/I/710IXp7YhyL._AC_SX522_.jpg',
        title:
          'Brita Standard Replacement Filters for Pitchers and Dispensers, 3 Count, White',
        price: '$132.12',
        oldPrice: '$190',
        discount: '12% off',
      },
      {
        image:
          'https://images-na.ssl-images-amazon.com/images/I/81BIw-Txa9L._AC_SX569_.jpg',
        title: 'Libbey Mixologist 9-Piece Cocktail Set',
        price: '$31.99',
        oldPrice: '$39.99',
        discount: '20% off',
      },
      {
        image:
          'https://images-na.ssl-images-amazon.com/images/I/51aJaF1EDhL._AC_SX569_.jpg',
        title:
          'Homemory Realistic and Bright Flickering Bulb Battery Operated Flameless LED Tea Light',
        price: '$10.99',
      },
    ]

    const windowWidth = Dimensions.get('window').width
    const scrlStyle = {
      backgroundColor: '#fff',
      padding: 10,
    }
    const logoS = {
      height: 75,
      width: 80,
      backgroundColor: Colors.lightGray,
      borderRadius: 40,
      marginBottom: 20,
    }
    const imgS = {
      flex: 1,
      width: 60,
      height: 60,
      resizeMode: 'contain',
      marginLeft: 10,
    }
    const headText = {
      fontSize: 18,
    }
    const itmForSale = {
      flexDirection: 'row',
      marginTop: 20,
    }
    const detailed = {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 15,
    }
    const rawData = {
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
    const month = {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
      marginLeft: 140,
    }
    const positiveFeedBack = {
      width: 20,
      height: 20,
      backgroundColor: '#32CD32',
      borderRadius: 10,
      marginBottom: 15,
    }
    const Neutral = {
      width: 20,
      height: 20,
      backgroundColor: 'gray',
      borderRadius: 10,
      marginBottom: 15,
    }
    const Negative = {
      width: 20,
      height: 20,
      backgroundColor: '#CD5C5C',
      borderRadius: 10,
      marginBottom: 15,
    }
    const feedBack = { flexDirection: 'row', justifyContent: 'space-between' }
    return (
      <SafeAreaProvider>
        <View style={{ flex: 0, width: windowWidth }}>
          <CloseHeader
            icon="angle-left"
            navigation={this.props.navigation}
            text="Profile"
          />
        </View>
        <ScrollView style={scrlStyle}>
          <View style={{ flexDirection: 'row', marginBottom: 20 }}>
            <View style={logoS}>
              <Image
                style={imgS}
                source={require('../assets/images/logo.png')}
              />
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={headText}>mobileextraltd</Text>
              <Text style={headText}>
                (623020){' '}
                <Icon style={{ marginLeft: 18 }} name="star" size={15} /> 98%
                positive feedback
              </Text>
              <Text style={headText}>Member Since: 2011</Text>
              <Text style={headText}>Location: UK</Text>
            </View>
          </View>
          <AppButton title="Visit store" icon="" theme="outline" />
          <View style={itmForSale}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
              Items for sale
            </Text>
            <Icon style={{ fontSize: 15, padding: 8 }} name={'arrow-right'} />
          </View>
          <View style={{ marginBottom: 20 }}>
            <ScrollView
              horizontal={true}
              centerContent={true}
              style={{
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 5,
                paddingRight: 5,
              }}
            >
              {products.map((product, index) => (
                <Product
                  key={index}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  oldPrice={''}
                  discount={''}
                />
              ))}
            </ScrollView>
          </View>
          <Text style={detailed}>Detailed seller ratings</Text>
          <View style={rawData}>
            <Text style={{ color: 'gray', marginTop: 5 }}>
              Item as described
            </Text>
            <Rating
              type="custom"
              ratingCount={5}
              readonly
              imageSize={20}
              minValue={4}
              ratingColor="#000"
              style={{ borderColor: '#000', marginRight: 15 }}
            />
            <Text style={{ color: 'gray', marginTop: 5, marginRight: 30 }}>
              (23105)
            </Text>
          </View>
          <View style={rawData}>
            <Text style={{ color: 'gray', marginTop: 5 }}>Communication</Text>

            <Rating
              type="custom"
              ratingCount={5}
              readonly
              imageSize={20}
              minValue={4}
              ratingColor="#000"
              style={{ borderColor: '#000' }}
            />
            <Text style={{ color: 'gray', marginTop: 5, marginRight: 30 }}>
              (23105)
            </Text>
          </View>
          <View style={rawData}>
            <Text style={{ color: 'gray', marginTop: 5 }}>Shipping time</Text>
            <Rating
              type="custom"
              ratingCount={5}
              readonly
              imageSize={20}
              minValue={4}
              ratingColor="#000"
              style={{ borderColor: '#000', marginLeft: 12 }}
            />
            <Text style={{ color: 'gray', marginTop: 5, marginRight: 30 }}>
              (23105)
            </Text>
          </View>
          <View style={rawData}>
            <Text style={{ color: 'gray', marginTop: 5 }}>
              Shipping charges
            </Text>
            <Rating
              type="custom"
              ratingCount={5}
              readonly
              imageSize={20}
              minValue={4}
              ratingColor="#000"
              style={{ borderColor: '#000', marginRight: 10 }}
            />
            <Text style={{ color: 'gray', marginTop: 5, marginRight: 30 }}>
              (23105)
            </Text>
          </View>
          <View style={itmForSale}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
              Recent feedback ratings
            </Text>
            <Icon style={{ fontSize: 15, padding: 8 }} name={'arrow-right'} />
          </View>
          <View style={month}>
            <Text>1 mo.</Text>
            <Text>6 mo.</Text>
            <Text>12 mo.</Text>
          </View>

          <View style={feedBack}>
            <View style={{ flexDirection: 'row' }}>
              <View style={positiveFeedBack}>
                <Text style={{ marginLeft: 6, color: 'white' }}>+</Text>
              </View>
              <Text style={{ marginLeft: 6 }}>Positive</Text>
            </View>
            <Text style={{ color: '#32CD32' }}>1613</Text>
            <Text style={{ color: '#32CD32' }}>121885</Text>
            <Text style={{ color: '#32CD32' }}>27077</Text>
          </View>
          <View style={feedBack}>
            <View style={{ flexDirection: 'row' }}>
              <View style={Neutral}>
                <Text style={{ marginLeft: 6, color: 'white' }}>0</Text>
              </View>
              <Text style={{ marginLeft: 6 }}>Neutral</Text>
            </View>

            <Text>26</Text>
            <Text>121885</Text>
            <Text>27077</Text>
          </View>
          <View style={feedBack}>
            <View style={{ flexDirection: 'row' }}>
              <View style={Negative}>
                <Text style={{ marginLeft: 8, color: 'white' }}>-</Text>
              </View>
              <Text style={{ marginLeft: 6 }}>Negative</Text>
            </View>

            <Text style={{ marginRight: 25, color: 'red' }}>26</Text>
            <Text style={{ marginRight: 30, color: 'red' }}>207</Text>
            <Text style={{ marginRight: 0, color: 'red' }}>555</Text>
          </View>
        </ScrollView>
        <View style={{ margin: 12 }}>
          <Button title="Solid Button" />
        </View>
      </SafeAreaProvider>
    )
  }
}

export default Profile
