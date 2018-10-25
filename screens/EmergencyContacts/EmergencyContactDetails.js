import React, { Component } from 'react';
import { View, Image, Text, Button, TouchableOpacity, KeyboardAvoidingView, StyleSheet, ScrollView } from 'react-native';
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
      contact:{
        name:'',
        email:'',
        phone:'',
        relationship:'',
        image:'',
      },
  } 
  
  updateInputState = (key, value) => {
    
    this.setState(prevState => {
        return {
            contact: {
                [key]: value
                }
        };
    });
}

updateContactHandler = () => {
    this.props.navigation.goBack();
}

  render() {
    const { params } = this.props.navigation.state;
    let paramContact = params.contact;
      return (
        <KeyboardAvoidingView style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', backgroundColor:"white", padding:20, }} behavior="padding" >
          <ScrollView style={{width:"100%"}}>
           <View style={{alignItems:"center",marginBottom:4,borderBottomWidth:1, borderBottomColor:"#CCC", width:"100%"}}>
               <HeadingText heading={"Update Details"} style={{textAlign:"center"}} />
           </View>
           <View style={{flexDirection:"row", alignItems:"center", marginTop:15}}> 
                <MaterialIcons name="person" size={28} color="#CCC" style={{marginRight:10,marginTop:10}} />   
                <View style={{flex:1,width:'100%'}}> 
                <DefaultInput placeholder={paramContact.name} label="Name" style={styles.textInput} 
                placeholderTextColor="#CCC"
                value={this.state.contact.name}
                onChangeText={(val) => this.updateInputState('name', val)}
                //touched={this.state.controls.password.touched}
                
                />
                  
                </View>
            </View>
            <View style={{flexDirection:"row", alignItems:"center", marginTop:15}}> 
                <MaterialIcons name="phone" size={28} color="#CCC" style={{marginRight:10,marginTop:10}} />   
                <View style={{flex:1,width:'100%'}}> 
                <DefaultInput placeholder={paramContact.phone} label="Phone" style={styles.textInput} 
                placeholderTextColor="#CCC"
                value={this.state.contact.phone}
                onChangeText={(val) => this.updateInputState('phone', val)}
                //touched={this.state.controls.password.touched}
                
                />
                  
                </View>
            </View>
            <View style={{flexDirection:"row", alignItems:"center", marginTop:15}}> 
                <MaterialIcons name="email" size={28} color="#CCC" style={{marginRight:10,marginTop:10}} />   
                <View style={{flex:1,width:'100%'}}> 
                <DefaultInput placeholder={paramContact.email} label="Email" style={styles.textInput} 
                placeholderTextColor="#CCC"
                value={this.state.contact.email}
                onChangeText={(val) => this.updateInputState('email', val)}
                //touched={this.state.controls.password.touched}
                
                />
                  
                </View>
            </View>
            <View style={{flexDirection:"row", alignItems:"center", marginTop:15}}> 
                <MaterialIcons name="group" size={28} color="#CCC" style={{marginRight:10,marginTop:10}} />   
                <View style={{flex:1,width:'100%'}}> 
                <DefaultInput placeholder="Relationship to you" label="Relationship" style={styles.textInput} 
                placeholderTextColor="#CCC"
                value={this.state.contact.relationship}
                onChangeText={(val) => this.updateInputState('relationship', val)}
                //touched={this.state.controls.password.touched}
                
                />
                  
                </View>
            </View>
            
                    <View style={[styles.buttons, {flex:1, width:"100%",marginTop:25, minWidth:250}]}>
                        <CustomButton 
                                style={styles.buttonPadding}
                                color="white" 
                                size={14}
                                background="#602A7A" 
                                onPress={this.updateContactHandler}
                                title="Update Emergency Contact"
                               /*disabled={
                                    !this.state.controls.email.valid ||
                                    !this.state.controls.password.valid ||
                                    !this.state.controls.confirmPassword.valid
                                }*/
                        />
                    </View>
                    </ScrollView>
        </KeyboardAvoidingView>
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