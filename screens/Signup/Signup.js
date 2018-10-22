import React, { Component } from 'react';
import { View, Dimensions, Text, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import DefaultInput from './../../components/UI/DefaultInput';
import HeadingText from './../../components/UI/HeadingText';
import CustomButton from './../../components/UI/ButtonWithBackground';
import ActionButton from './../../components/UI/ActionButtonCircle';
import { MaterialIcons } from '@expo/vector-icons';

class Signup extends Component  {
    state = {
        step: "one",
        percent: "20%",
        viewMode: Dimensions.get('window').height > 400 ? "portrait" : "landscape",
        controls: {
            email: {
                value: '',
                valid: false,
                validationRules: {
                    isEmail:true,
                }
            },
            password: {
                value: '',
                valid: false,
                validationRules: {
                    minLength:6,
                }
            },
            confirmPassword: {
                value: '',
                valid: false,
                validationRules: {
                    equalTo:'password',
                }
            },
        }
    }

    constructor(props) {
        super(props);
        Dimensions.addEventListener("change", this.updateStyles);
    }
    
    loginHandler = () => {
        this.props.navigation.navigate('App');
    };
    forgotpasswordHandler = () => {
        this.props.navigation.navigate('Auth');
    }; 
    previousStepHandler = () => {
        const currentStep = this.state.step;
        switch (currentStep) {
            case "two":
             this.setState({
                step: "one",
                percent: "20%",
             });
            break;
        case "three":
            this.setState({
                step: "two",
                percent: "50%",
            });
            break;
        case "four":
            this.setState({
                step: "three",
                percent: "75%",
            });
            break;
        }
    } 

    nextStepHandler = () => {
        const currentStep = this.state.step;
        switch (currentStep) {
            case "one":
             this.setState({
                step: "two",
                percent: "50%",
             });
            break;
        case "two":
            this.setState({
                step: "three",
                percent: "75%",
            });
            break;
        case "three":
            this.setState({
                step: "four",
                percent: "85%",
            });
            break;
        case "four":
            this.setState({
                step: "four",
                percent: "100%",
            });
            this.props.navigation.navigate('App');
            break;
        default:
            break;
        }
    }  


    render () {
        let actionButtonLeft = null;
        if (this.state.step != "one") {
            actionButtonLeft = <View style={styles.btnActionMenuLeft}>
                                <ActionButton elevation={5} 
                                                size={25}
                                                style={{marginLeft:5}}
                                                color="white" 
                                                background="#602A7A" 
                                                icon="chevron-left" 
                                                onPress={this.previousStepHandler} />
                            </View>
        }
        return (
            
        <View style={{padding:30, flex:1}}>

            <View>
                <HeadingText heading="Register"  style={{textAlign:"center"}}/>            
            </View>
            <Text style={{color:"#CCC",fontSize:13,marginTop:15,marginLeft:20,}}>Progress</Text>
            <View style={{margin:10,marginBottom:20,marginTop:5,padding:20, borderColor:"#CCC", borderWidth:1, 
                borderRadius:50, backgroundColor:"transparent",
                justifyContent:"center"}}>
               <View style={{borderRadius:10,backgroundColor:"white", width:"100%", height:10}}>
                    <View style={{width:this.state.percent,borderRadius:10,backgroundColor:"#35B5AF", height:10}}></View>
                </View>
            </View>
            <View style={{ borderBottomWidth:1, borderBottomColor:"#CCC"}}></View>
            <View style={{width:"100%",alignItems:"center",flex:1,justifyContent:"flex-start", marginTop:10}}>
                                <View style={{flexDirection:"row", alignItems:"center",marginTop:15}}> 
                                    <MaterialIcons name="person" size={28} color="#CCC" style={{marginRight:10,marginTop:10}} />   
                                    <View style={{flex:1,width:'100%'}}> 
                                    <DefaultInput placeholder="Enter Name" label="Name" style={styles.textInput} 
                                    placeholderTextColor="#CCC"
                                    value={this.state.email}
                                    onChangeText={(val) => this.updateInputState('password', val)}
                                    touched={this.state.controls.password.touched}
                                    />
                                      
                                    </View>
                                 </View>
                                 <View style={{flexDirection:"row", alignItems:"center",marginTop:15}}> 
                                    <MaterialIcons name="email" size={28} color="#CCC" style={{marginRight:10,marginTop:10}} />   
                                    <View style={{flex:1,width:'100%'}}> 
                                    <DefaultInput placeholder="Enter Email Address" label="Email Address" style={styles.textInput} 
                                    placeholderTextColor="#CCC"
                                    value={this.state.email}
                                    onChangeText={(val) => this.updateInputState('password', val)}
                                    touched={this.state.controls.password.touched}
                                    />
                                      
                                    </View>
                                 </View>
                                 <View style={{flexDirection:"row", alignItems:"center", marginTop:15}}> 
                                    <MaterialIcons name="lock" size={28} color="#CCC" style={{marginRight:10,marginTop:10}} />   
                                    <View style={{flex:1,width:'100%'}}> 
                                    <DefaultInput placeholder="Enter Password" label="Password" style={styles.textInput} 
                                    placeholderTextColor="#CCC"
                                    value={this.state.email}
                                    onChangeText={(val) => this.updateInputState('password', val)}
                                    touched={this.state.controls.password.touched}
                                    />
                                      
                                    </View>
                                 </View>

                                 <View style={{flexDirection:"row", alignItems:"center", marginTop:15}}> 
                                    <MaterialIcons name="lock" size={28} color="#CCC" style={{marginRight:10,marginTop:10}} />   
                                    <View style={{flex:1,width:'100%'}}> 
                                    <DefaultInput placeholder="Confirm Password" label="Confirm Password" style={styles.textInput} 
                                    placeholderTextColor="#CCC"
                                    value={this.state.email}
                                    onChangeText={(val) => this.updateInputState('password', val)}
                                    touched={this.state.controls.password.touched}
                                    />
                                      
                                    </View>
                                 </View>
            </View>  
            {actionButtonLeft}
             <View style={styles.btnActionMenu}>
                <ActionButton elevation={5} 
                                size={25}
                                style={{marginRight:5}}
                                color="white" 
                                background="#602A7A" 
                                icon="chevron-right" 
                                onPress={this.nextStepHandler} />
            </View>
        </View>
    )};
        
};

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
    buttonPadding: {
            padding:18,
        },
    buttons: {
            marginTop:5,
        },
    btnActionMenu: {
            position:"absolute",
            zIndex:10, 
            margin:10,
            right: 0, 
            bottom: 0, 
            padding:10, 
          },
     btnActionMenuLeft: {
            position:"absolute",
            zIndex:10, 
            margin:10,
            left: 0, 
            bottom: 0, 
            padding:10, 
          },
});

export default Signup;