import React, { Component } from 'react';
import { View, Image, Text, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomButton from '../../components/UI/ButtonWithBackground';

class ModalAlert extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 30 }}>Alert Sent!</Text>

          <CustomButton
            background="white"
            style={{borderWidth:2,borderColor:"#CCC"}}
            color="blue"
            onPress={() => this.props.navigation.goBack()}
            title="Close"
          />
        </View>
      );
    }
  }

  export default ModalAlert;