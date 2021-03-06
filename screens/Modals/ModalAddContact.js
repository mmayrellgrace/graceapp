import React, { Component } from 'react';
import { View, Image, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import DefaultInput from './../../components/UI/DefaultInput';
import HeadingText from './../../components/UI/HeadingText';
import CustomButton from './../../components/UI/ButtonWithBackground';

class ModalAddContact extends Component {
  state = {
      email:{
        value:'',
      },
  }  
  addContactHandler = () => {
    return;
  }
  render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around', backgroundColor:"white", padding:30, }}>
           <View style={{alignItems:"center",marginTop:25,marginBottom:4,}}>
               <HeadingText heading={"Add Emergency Contact"} style={{textAlign:"center"}} />
           </View>
           <View style={{ borderBottomWidth:1, borderBottomColor:"#CCC", padding:10, margin:10,width:"100%"}}></View>
           <View style={{flexDirection:"row", alignItems:"center", marginTop:15}}> 
                <MaterialIcons name="person" size={28} color="#CCC" style={{marginRight:10,marginTop:10}} />   
                <View style={{flex:1,width:'100%'}}> 
                <DefaultInput placeholder="Enter Name" label="Name" style={styles.textInput} 
                placeholderTextColor="#CCC"
                value={this.state.email}
                //onChangeText={(val) => this.updateInputState('password', val)}
                //touched={this.state.controls.password.touched}
                
                />
                  
                </View>
            </View>
            <View style={{flexDirection:"row", alignItems:"center", marginTop:15}}> 
                <MaterialIcons name="phone" size={28} color="#CCC" style={{marginRight:10,marginTop:10}} />   
                <View style={{flex:1,width:'100%'}}> 
                <DefaultInput placeholder="Enter Phone" label="Phone" style={styles.textInput} 
                placeholderTextColor="#CCC"
                value={this.state.email}
                //onChangeText={(val) => this.updateInputState('password', val)}
                //touched={this.state.controls.password.touched}
                
                />
                  
                </View>
            </View>
            <View style={{flexDirection:"row", alignItems:"center", marginTop:15}}> 
                <MaterialIcons name="email" size={28} color="#CCC" style={{marginRight:10,marginTop:10}} />   
                <View style={{flex:1,width:'100%'}}> 
                <DefaultInput placeholder="Enter Email" label="Email" style={styles.textInput} 
                placeholderTextColor="#CCC"
                value={this.state.email}
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
                value={this.state.email}
                //onChangeText={(val) => this.updateInputState('password', val)}
                //touched={this.state.controls.password.touched}
                
                />
                  
                </View>
            </View>
            <View style={[styles.buttons, {flex:1, marginTop:25, minWidth:250}]}>
                        <CustomButton 
                                style={styles.buttonPadding}
                                color="white" 
                                size={14}
                                background="#602A7A" 
                                onPress={this.addContactHandler}
                                title="Add Emergency Contact"
                               /*disabled={
                                    !this.state.controls.email.valid ||
                                    !this.state.controls.password.valid ||
                                    !this.state.controls.confirmPassword.valid
                                }*/
                        />
                    </View>
            <View>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <View style={{alignItems:"center",justifyContent:"flex-end",borderRadius:20,borderWidth:1,borderColor:"grey", padding:10}}>
                        <View style={[styles.buttons, {flexDirection:"row",alignItems:"center"}]}>
                            <MaterialIcons 
                                    color="grey" 
                                    size={20}
                                    name="close" 
                            />
                            <Text style={{fontSize:16, color:"grey"}}>close</Text>
                        </View>
                        </View>
              </TouchableOpacity> 
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

  export default ModalAddContact;