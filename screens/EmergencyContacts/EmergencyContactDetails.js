import React, { Component } from 'react';
import { View, Image, Text, Button, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import DefaultInput from './../../components/UI/DefaultInput';
import HeadingText from './../../components/UI/HeadingText';
import CustomButton from './../../components/UI/ButtonWithBackground';
import LogoTitle from '../../components/UI/LogoTitle';

class EmergencyContactDetails extends Component {


    static navigationOptions = {
        title:"Contact Details",
        //headerTitle: <LogoTitle backgroundSize={80} imageSize={65} radius={40} />,
        headerStyle: {
          backgroundColor: '#602A7A',
        },
        headerTintColor: '#fff',
      };

  state = {
      email:{
        value:'',
      },
  }  
  addContactHandler = () => {
    return;
  }
  render() {
    const { params } = this.props.navigation.state;
    let paramContact = params.contact;
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', backgroundColor:"white", padding:20, }}>
           <View style={{alignItems:"center",marginTop:25,marginBottom:4,borderBottomWidth:1, borderBottomColor:"#CCC", padding:5, margin:5,width:"100%"}}>
               <HeadingText heading={"Update Details"} style={{textAlign:"center"}} />
           </View>
           <ScrollView style={{width:"100%"}}>
           <View style={{flexDirection:"row", alignItems:"center", marginTop:15}}> 
                <MaterialIcons name="person" size={28} color="#CCC" style={{marginRight:10,marginTop:10}} />   
                <View style={{flex:1,width:'100%'}}> 
                <DefaultInput placeholder={paramContact.name} label="Name" style={styles.textInput} 
                placeholderTextColor="#CCC"
                value={paramContact.name}
                //onChangeText={(val) => this.updateInputState('password', val)}
                //touched={this.state.controls.password.touched}
                
                />
                  
                </View>
            </View>
            <View style={{flexDirection:"row", alignItems:"center", marginTop:15}}> 
                <MaterialIcons name="phone" size={28} color="#CCC" style={{marginRight:10,marginTop:10}} />   
                <View style={{flex:1,width:'100%'}}> 
                <DefaultInput placeholder={paramContact.phone} label="Phone" style={styles.textInput} 
                placeholderTextColor="#CCC"
                value={paramContact.phone}
                //onChangeText={(val) => this.updateInputState('password', val)}
                //touched={this.state.controls.password.touched}
                
                />
                  
                </View>
            </View>
            <View style={{flexDirection:"row", alignItems:"center", marginTop:15}}> 
                <MaterialIcons name="email" size={28} color="#CCC" style={{marginRight:10,marginTop:10}} />   
                <View style={{flex:1,width:'100%'}}> 
                <DefaultInput placeholder={paramContact.email} label="Email" style={styles.textInput} 
                placeholderTextColor="#CCC"
                value={paramContact.email}
                //onChangeText={(val) => this.updateInputState('password', val)}
                //touched={this.state.controls.password.touched}
                
                />
                  
                </View>
            </View>
            <View style={{flexDirection:"row", alignItems:"center", marginTop:15}}> 
                <MaterialIcons name="group" size={28} color="#CCC" style={{marginRight:10,marginTop:10}} />   
                <View style={{flex:1,width:'100%'}}> 
                <DefaultInput placeholder="Relationship to you" label="Relationship" style={styles.textInput} 
                placeholderTextColor="#CCC"
                value={this.state.email.value}
                //onChangeText={(val) => this.updateInputState('password', val)}
                //touched={this.state.controls.password.touched}
                
                />
                  
                </View>
            </View>
            
                    </ScrollView>
                    <View style={[styles.buttons, {flex:1, width:"100%",marginTop:25, minWidth:250}]}>
                        <CustomButton 
                                style={styles.buttonPadding}
                                color="white" 
                                size={14}
                                background="#602A7A" 
                                onPress={this.addContactHandler}
                                title="Update Emergency Contact"
                               /*disabled={
                                    !this.state.controls.email.valid ||
                                    !this.state.controls.password.valid ||
                                    !this.state.controls.confirmPassword.valid
                                }*/
                        />
                    </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    mainText: {
        fontSize:12,
        color:"#bbb",
    },
    textInput: {
            width:"100%",
            borderColor:"#CCC",
            color:"#CCC",
            padding:13,
        },
        textInputNone: {
            width:"100%",
            color:"#CCC",
            paddingTop:12,
            paddingBottom:12,
            borderColor:"transparent",
            backgroundColor:"transparent",
        },
        inputContainer: {
            width:"100%",
            flex:1,
            backgroundColor:'white',
            borderRadius:7,
            borderColor:'#DDD',
            borderWidth:1,
        },
    buttonPadding: {
            padding:18,
        },
    buttons: {
            marginTop:5,
        },
});

  export default EmergencyContactDetails;