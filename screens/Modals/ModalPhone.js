import React, { Component } from 'react';
import { View, Image, Text, Button, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class ModalPhone extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', backgroundColor:"#454444" }}>
          <View style={{paddingTop:100}}>
            <Text style={{ textAlign:"center", color:"white", lineHeight:30, fontSize: 24 }}>Emergency Hotline</Text>
            <Text style={{ textAlign:"center", color:"white", fontSize: 16 }}>888-888-8888</Text>
            <Text style={{ textAlign:"center", color:"white", fontSize: 14 }}>Dialing...</Text>
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Image
            source={require('../../assets/buttonGroup.png')} resizeMode="contain"
            style={{width:300,height:300}}
            title="Dismiss"
          />
          </TouchableOpacity>
        </View>
      );
    }
  }

  export default ModalPhone;