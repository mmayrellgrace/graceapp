import React, { Component } from 'react';
import { View, Image, Text, Button, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

class ModalShare extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent:"space-between",paddingTop:23,backgroundColor:"#b676c3"  }}>
            <View style={{flex:1,alignItems:"center",justifyContent:"flex-start",}}>
            <View>
                <ImageBackground source={require('../../assets/shareBG.png')} resizeMode="cover"
                            style={{justifyContent:"center",alignItems:"center", height:340,width:450}}>
                    <View style={{maxWidth:200}}>
                    <Text style={{color:"white", fontSize:25, textAlign:"center"}}>Everyone can use a
                    helping hand</Text>
                    </View>
                </ImageBackground>
              </View>
              <View style={{ width:"100%", minWidth:"100%",height:70,backgroundColor:"#a058b0", flexDirection:"column"}}>
                <View style={{flex:1, width:"100%", alignItems:"center", justifyContent:"center"}}>
                    <View style={{width:"100%",minWidth:"95%",flexDirection:"row",maxWidth:400,justifyContent:"space-around",paddingLeft:"5%",alignItems:"center", marginTop:10, opacity:.8}}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <Ionicons 
                                        color="white" 
                                        size={30}
                                        name="logo-facebook"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <Ionicons 
                                        color="white" 
                                        size={30}
                                        name="logo-twitter" 
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <Ionicons 
                                        color="white" 
                                        size={30}
                                        name="logo-instagram"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <Ionicons 
                                        color="white" 
                                        size={30}
                                        name="logo-google" 
                                />
                            </TouchableOpacity>
                        </View>
                </View>
            </View>
                <View style={{flex:2,maxWidth:250, paddingTop:40}}>
                    <Text style={{ fontSize: 20, lineHeight:30, color:"white", textAlign:"center" }}>
                        Share The Grace App with your friends and family to help us
        make a difference in young lives</Text>
                </View>
            </View>
          <View>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <View style={{alignItems:"center",justifyContent:"flex-end",borderRadius:20,borderWidth:1,borderColor:"white", padding:10}}>
                        <View style={[styles.buttons, {flexDirection:"row",alignItems:"center"}]}>
                            <MaterialIcons 
                                    color="white" 
                                    size={20}
                                    name="close" 
                            />
                            <Text style={{fontSize:16, color:"white"}}>close</Text>
                        </View>
                        </View>
             </TouchableOpacity> 
          </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    buttonPadding: {
        padding:18,
    },
    buttons:{}
});

  export default ModalShare;