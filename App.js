import React, { Component } from 'react';


import {createStackNavigator} from "react-navigation";
// import LoginScreen from './src/LoginScreen';
import RegisterScreen from './src/RegisterScreen';
import HomeScreen from './src/components/HomeScreen';


const Stack = createStackNavigator();
const RootStack = () => {
    return (
        <Stack.Navigator initialRouteName="RegisterScreen">
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            {/* <Stack.Screen name="LoginScreen" component={LoginScreen} /> */}
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </Stack.Navigator>
    );
};



const App = () => {
    return (
        <NavigationContainer>
            <RootStack />
        </ NavigationContainer>
    );
};

export default App;