import React from 'react';
import { StyleSheet, Button, Text, View, AsyncStorage } from 'react-native';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import MainScreen from './screens/Main/MainScreen';
import { Font } from 'expo';

import ForgotPasswordScreen from './screens/Login/ForgotPassword';
import AuthLoadingScreen from './screens/Auth/AuthLoadingScreen';
import EmergencyContacts from './screens/EmergencyContacts/EmergencyContacts';


class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}


const AppStack = createStackNavigator({ Main: MainScreen, Emergency: EmergencyContacts, });
const AuthStack = createStackNavigator({ Login: SignInScreen, });

const styles = StyleSheet.create({
  container: {
      flex:1,
      alignItems:"center",
      justifyContent:"center",
  },
});

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);
