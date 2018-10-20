import React from 'react';
import { StyleSheet, Button, Text, View, AsyncStorage } from 'react-native';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import MainScreen from './screens/Main/MainScreen';
import { Font } from 'expo';
import SignupScreen from './screens/Signup/Signup';
import LoginScreen from './screens/Login/LoginScreen';
import ForgotPasswordScreen from './screens/Login/ForgotPassword';
import AuthLoadingScreen from './screens/Auth/AuthLoadingScreen';
import EmergencyContacts from './screens/EmergencyContacts/EmergencyContacts';

const AppStack = createStackNavigator({ Main: MainScreen, Emergency: EmergencyContacts, });
const RegisterStack = createStackNavigator({other: MainScreen});
const AuthStack = createStackNavigator({ Login:LoginScreen, Signup: SignupScreen, ForgotPassword: ForgotPasswordScreen });



export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
    other: RegisterStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);
