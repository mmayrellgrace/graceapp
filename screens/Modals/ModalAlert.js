import React, { Component } from 'react';
import { View, Image, Text, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class ModalAlert extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 30 }}>Alert Sent!</Text>
          <Text style={{ fontSize: 20, marginTop:20 }}>Add example message here</Text>
          <Button
            onPress={() => this.props.navigation.goBack()}
            title="Dismiss"
          />
        </View>
      );
    }
  }

  export default ModalAlert;