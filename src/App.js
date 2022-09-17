//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './components/HomeScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import ProductScreen from './components/Product';
import ProductDetail from './components/DetailProduct';
import Blog from './components/Blog';
import Cart from './components/CartItem';
// import ProfileScreen from './views/Profile';
import Profile1 from './views/Profile1';
import CartScreen from './components/cart';
import SetAddress from './views/SetAddress';
import OrderScreen from './views/OrderScreen';
import PaymentScreen from './views/PaymentScreen';


const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();



const tab1={
  tabBarLabel:'Home',
  tabBarIcon: 
 ({focused})=>(
    <Image
      style={{
        height:28,
        width:28,
      }}
      resizeMode="contain"
      source={
        focused
        ?
        require('./imgs/home_select.png')
        :require('./imgs/home.png')
      }
      // source={
      //   focused
      //   ?require('./imgs/ic_profile_select@2x.png'
      //     )
      //    :require("./imgs/ic_profile@2x.png")
      // }
      />
  ),
};

const tab2={
  tabBarLabel:'Product',
  tabBarIcon:({focused})=>(
    <Image

      style={{
        height:28,
        width:28,
      }}
      resizeMode="contain"
      source={
        focused
        ?
        require('./imgs/product_select.png')
        :require('./imgs/product.png')
      }
      />
  ),
};

const tab3={
  tabBarLabel:'Profile',
  tabBarIcon:({focused})=>(
    <Image

      style={{
        height:28,
        width:28,
      }}
      resizeMode="contain"
      source={
        focused
        ?
        require('./imgs/profile_select.png')
        :require('./imgs/profile.png')
      }
      />
  ),
};

const TabScreens = (props) => {
  return (
  <Tab.Navigator screenOptions={{
    headerShown: false
  }} initialRouteName="Blog">
    <Stack.Screen name="Blog" component={Blog} options={tab1}/>
    <Stack.Screen name="ProductScreen" component={ProductScreen} options={tab2}/>
    <Stack.Screen name="Profile1" component={Profile1} options={tab3}/>
  </Tab.Navigator >
  );
};

const RootStack = props => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }} initialRouteName="LoginScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Blog" component={Blog} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />

      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />

      <Stack.Screen name="TabScreens" component={TabScreens} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />

      {/* <Stack.Screen name="Cart" component={Cart} /> */}
      <Stack.Screen name="Cart" component={CartScreen} />

      {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      <Stack.Screen name="Profile1" component={Profile1} />

      <Stack.Screen name="SetAddress" component={SetAddress} />

      <Stack.Screen name="OrderScreen" component={OrderScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />



      

      

    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      {/* <TabScreens /> */}
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
