import React, { Component } from 'react';
import { View, Image, Text, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class ModalAddContact extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 30 }}>Modal Add Contact</Text>
          <Button
            onPress={() => this.props.navigation.goBack()}
            title="Dismiss"
          />
        </View>
      );
    }
  }

  export default ModalAddContact;