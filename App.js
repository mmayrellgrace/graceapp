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
import EmergencyContactDetails from './screens/EmergencyContacts/EmergencyContactDetails';
import ModalShare from './screens/Modals/ModalShare';
import ModalPhone from './screens/Modals/ModalPhone';
import ModalAddContact from './screens/Modals/ModalAddContact';
import LogoTitle from './components/UI/LogoTitle';
import ModalAlert from './screens/Modals/ModalAlert';

const AppStack = createStackNavigator({ Main: MainScreen, Emergency: EmergencyContacts, EmergencyDetails: EmergencyContactDetails });
const RegisterStack = createStackNavigator({other: MainScreen});
const AuthStack = createStackNavigator(
    { Login:LoginScreen, 
      Signup: SignupScreen, 
      ForgotPassword: ForgotPasswordScreen 
    },
    {
      initialRouteName: 'Login',
      navigationOptions: {
        headerTitle: <LogoTitle backgroundSize={110} imageSize={90} radius={55} />,
        headerStyle: {
          backgroundColor: '#602A7A',
        },
        headerTintColor: '#fff',
      },
    }
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: AppStack,
    },
    ModalShare: {
      screen: ModalShare,
    },
    ModalPhone: {
      screen: ModalPhone,
    },
    ModalAlert: {
      screen: ModalAlert,
    },
    ModalAddContact: {
      screen: ModalAddContact,
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);



export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: RootStack,
    Auth: AuthStack,
    other: RegisterStack,
  },
  {
    initialRouteName: 'Auth',
  },
);