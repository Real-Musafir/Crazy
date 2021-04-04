import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Home from './container/Home'
import Category from './container/Category'
import SingleCategory from './container/SingleCategory'
import SingleProduct from './container/SingleProduct'
import Login from './container/Login'
import Register from './container/Register'
import Cart from './container/Cart'
import Checkout from './container/Checkout'
import ShipAddress from './container/ShipAddress'
import ChangeAddress from './container/ChangeAddress'
import PurchaseHistory from './container/PurchaseHistory'
import OrderDetails from './component/OrderDetails'
import Message from './container/Message'
import SingleMessage from './container/SingleMessage'
import Profile from './container/Profile'
import Seller from './container/Seller'
import ListingSummary from './container/ListingSummary'

const Stack = createStackNavigator()
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerTransparent: true, headerMode: 'none' }}
          />
          <Stack.Screen
            name="Category"
            component={Category}
            options={{ headerTransparent: true, headerMode: 'none' }}
          />
          <Stack.Screen
            name="SingleCategory"
            component={SingleCategory}
            options={{ headerTransparent: true, headerMode: 'none' }}
          />
          <Stack.Screen
            name="SingleProduct"
            component={SingleProduct}
            options={{ headerTransparent: true, headerMode: 'none' }}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{ headerTransparent: true, headerMode: 'none' }}
          />

          <Stack.Screen
            name="Checkout"
            component={Checkout}
            options={{ headerTransparent: true, headerMode: 'none' }}
          />

          <Stack.Screen
            name="ShipAddress"
            component={ShipAddress}
            options={{ headerTransparent: true, headerMode: 'none' }}
          />

          <Stack.Screen
            name="ChangeAddress"
            component={ChangeAddress}
            options={{ headerTransparent: true, headerMode: 'none' }}
          />
          <Stack.Screen
            name="PurchaseHistory"
            component={PurchaseHistory}
            options={{ headerTransparent: true, headerMode: 'none' }}
          />

          <Stack.Screen
            name="OrderDetails"
            component={OrderDetails}
            options={{ headerTransparent: true, headerMode: 'none' }}
          />

          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerTransparent: true, headerMode: 'none' }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerTransparent: true, headerMode: 'none' }}
          />
          <Stack.Screen
            name="Message"
            component={Message}
            options={{ headerTransparent: true, headerMode: 'none' }}
          />
          <Stack.Screen
            name="SingleMessage"
            component={SingleMessage}
            options={{ headerTransparent: true, headerMode: 'none' }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerTransparent: true, headerMode: 'none' }}
          />

          <Stack.Screen
            name="Seller"
            component={Seller}
            options={{ headerTransparent: true, headerMode: 'none' }}
          />
          <Stack.Screen
            name="ListingSummary"
            component={ListingSummary}
            options={{ headerTransparent: true, headerMode: 'none' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
