import React, { Component } from 'react'
import { View, ScrollView, Text } from 'react-native'
import AppButton from '../component/AppButton'
import AppHeader from '../component/AppHeader'
import Product from '../component/Product'
import CategoryCard from '../component/CategoryCard'

class Home extends Component {
  constructor(props) {
    super(props)
  }
  gotoCategory = () => {
    this.props.navigation.navigate('Category')
  }
  gotoPurchaseHistory = () => {
    this.props.navigation.navigate('Profile')
  }
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
    const categories = [
      {
        id: 1,
        title: 'Sneakers',
        image:
          'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg',
      },
      {
        id: 2,
        title: 'Korean beauty',
        image:
          'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg',
      },
      {
        id: 3,
        title: 'Wrist Watch',
        image:
          'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg',
      },
      {
        id: 4,
        title: 'Fishing',
        image:
          'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg',
      },
      {
        id: 5,
        title: 'Collectibles',
        image:
          'https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg',
      },
      {
        id: 6,
        title: 'Smartphones',
        image:
          'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg',
      },
    ]
    return (
      <ScrollView style={{ backgroundColor: '#fff' }}>
        <AppHeader />
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
          <AppButton title="Selling" icon="tag" theme="solid" />
          <AppButton
            action={this.gotoPurchaseHistory}
            title="Deals"
            icon="bolt"
            theme="solid"
          />
          <AppButton
            action={this.gotoCategory}
            title="Categories"
            icon="grip-horizontal"
            theme="solid"
          />
        </ScrollView>
        <Text
          style={{
            textAlign: 'center',
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 30,
            paddingRight: 30,
          }}
        >
          Sign in so we can personalize your CayZilla experience
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 10,
          }}
        >
          <AppButton title="Register" icon="" theme="outline" />
          <AppButton
            action={() => {
              this.props.navigation.navigate('Login')
            }}
            title="Sign in"
            icon=""
            theme="outline"
          />
        </View>
        <View
          style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}
        >
          <AppButton title="Daily Deals" icon="arrow-right" theme="link" />
        </View>
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
              oldPrice={product.oldPrice}
              discount={product.discount}
            />
          ))}
        </ScrollView>
        <Text
          style={{
            color: '#131720',
            fontWeight: 'bold',
            paddingLeft: 10,
            paddingRight: 15,
            fontSize: 18,
          }}
        >
          Explore Popular Categories
        </Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {categories.map((cat, index) => (
            <CategoryCard
              key={index}
              id={cat.id}
              title={cat.title}
              image={cat.image}
            />
          ))}
        </View>
      </ScrollView>
    )
  }
}

export default Home
