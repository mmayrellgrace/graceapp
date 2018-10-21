import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

class LogoTitle extends Component {
    constructor (props) {
        super(props);
    }
    render() {
      return (
        <View style={{backgroundColor:"white", borderRadius:this.props.radius, width:this.props.backgroundSize, height:this.props.backgroundSize, alignItems:"center", justifyContent:"center"}}>
            <Image
            source={require('../../assets/Logo-Grace.png')}
            style={{ width: this.props.imageSize, height: this.props.imageSize }}
            />
        </View>
      );
    }
  }

  export default LogoTitle;