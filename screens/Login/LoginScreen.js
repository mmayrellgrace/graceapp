
  import React, { Component } from 'react';
  import { View, Text, StyleSheet, TouchableOpacity, Animated, 
      KeyboardAvoidingView, Keyboard, Image, TouchableWithoutFeedback, AsyncStorage, ScrollView, Dimensions } from 'react-native';
  import CustomButton from '../../components/UI/ButtonWithBackground';
  import DefaultInput from '../../components/UI/DefaultInput';
  import Heading from '../../components/UI/HeadingText';
 import { MaterialIcons } from '@expo/vector-icons';
  import Logo from '../../assets/Logo-Grace.png';

  class LoginScreen extends Component {
    
    state = {
        navigationOptions:{
            header:null,
        },
        viewMode: Dimensions.get('window').height > 800 ? "portrait" : "landscape",
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
    
      // Fetch the token from storage then navigate to our appropriate place
      _bootstrapAsync = () => {
        //const userToken = await AsyncStorage.getItem('userToken');
            this.props.navigation.navigate('App');//userToken ? 'App' : 'Auth');
      };
    
componentWillUnmount() {
    Dimensions.removeEventListener("change", this.updateStyles);
}

_signInAsync = async () => {
    //await AsyncStorage.setItem('userToken', 'abc');
    
};

loginHandler = () => {
    this.props.navigation.navigate('App');
    /*pass options if inputs where updated otherwise pass props of user*/
};
signupHandler = () => {
    this.props.navigation.push('Signup');
    /*include options to capture inputs*/
};
forgotpasswordHandler = () => {
    this.props.navigation.push('ForgotPassword');
};

updateInputState = (key, value) => {
    let connectedValue = {};
    if(this.state.controls[key].validationRules.equalTo) {
        const equalControl = this.state.controls[key].validationRules.equalTo;
        const equalValue = this.state.controls[equalControl].value;

        connectedValue = {
            ...connectedValue,
            equalTo: equalValue
        };
    }
    if(key === 'password') {
        connectedValue = {
            ...connectedValue,
            equalTo: value
        };

    };


    this.setState(prevState => {
        return {
            controls: {
                ...prevState.controls,
                /*confirmPassword: {
                    ...prevState.controls.confirmPassword,
                    valid: key === 'password' ? validate(
                        prevState.controls.confirmPassword.value, 
                        prevState.controls.confirmPassword.validationRules, 
                        connectedValue
                    ) : prevState.controls.confirmPassword.valid
                },*/
                [key]: {
                    ...prevState.controls[key],
                    value: value,
                    //valid: validate(value, prevState.controls[key].validationRules, connectedValue),
                    touched: true,
                }
            },
           
        };
    });
}
    render() {

        let logoImage = <View style={{alignItems:"center",marginBottom:4,}}>
                            <Heading heading="Login" />
                        </View>;
        if(this.state.viewMode === "portrait") {
                    logoImage = (
                        <View style={{width:"100%",alignItems:"center"}}>
                            <Image source={Logo} resizeMode="contain" style={{width:140, height:120}}/> 
                        </View>);
        }
        return (
            <ScrollView>

            <View style={[styles.container, {justifyContent:"space-around",}]}>
                {logoImage}
                <View>
                <KeyboardAvoidingView behavior="padding">
               
                <View style={{width:"100%",flex:1,justifyContent:"center"}}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{width:"100%",alignItems:"center",flex:1,}}>
                        <View style={[this.state.viewMode === "portrait" ? styles.portraitPW : styles.landscapePW, styles.inputContainerInd] }>
                             <View style={[this.state.viewMode === "portrait" ? styles.portraitPWinput : styles.landscapePWinput, styles.inputContainer ]}>
                                <View style={{flexDirection:"row", alignItems:"center"}}> 
                                    <MaterialIcons name="person" size={28} style={styles.icon} />   
                                    <View style={{flex:1,width:'100%'}}> 
                                    <DefaultInput placeholder="Username" style={styles.textInput} 
                                        placeholderTextColor="#CCC"
                                        value={this.state.controls.email.value}
                                        onChangeText={(val) => this.updateInputState('email', val)}
                                       // valid={this.state.controls.email.valid}
                                        touched={this.state.controls.email.touched}
                                        autoCorrect={false}
                                        autoCapitalize="none"
                                        keyboardType="email-address"

                                        />
                                        </View>
                                    </View>
                            </View>
                        </View>
                        <View style={[this.state.viewMode === "portrait" ? styles.portraitPW : styles.landscapePW, styles.inputContainerInd] }>
                            <View style={[this.state.viewMode === "portrait" ? styles.portraitPWinput : styles.landscapePWinput, styles.inputContainer ]}>
                                <View style={{flexDirection:"row", alignItems:"center"}}> 
                                    <MaterialIcons name="lock" size={28} style={styles.icon} /> 
                                    <View style={{flex:1,width:'100%'}}> 
                                    <DefaultInput placeholder="Password" style={styles.textInput} 
                                    placeholderTextColor="#CCC"
                                    value={this.state.controls.password.value}
                                    onChangeText={(val) => this.updateInputState('password', val)}
                                    //valid={this.state.controls.password.valid}
                                    touched={this.state.controls.password.touched}
                                    secureTextEntry
                                    />
                                    </View>
                                </View>
                            </View>     
                        </View>
                        <View style={[this.state.viewMode === "portrait" ? styles.portraitPW : styles.landscapePW, styles.inputContainerInd] }>
                            <View style={[this.state.viewMode === "portrait" ? styles.portraitPWinput : styles.landscapePWinput, styles.inputContainer ]}>
                                <View style={{flex:1, flexDirection:"row", alignItems:"center"}}> 
                                    <MaterialIcons name="lock" size={28} style={styles.icon} /> 
                                    <View style={{flex:1,width:'100%'}}> 
                                    <DefaultInput placeholder="Confirm Password" style={styles.textInput} 
                                    placeholderTextColor="#CCC"
                                    value={this.state.controls.confirmPassword.value}
                                    onChangeText={(val) => this.updateInputState('confirmPassword', val)}
                                    //valid={this.state.controls.confirmPassword.valid}
                                    touched={this.state.controls.confirmPassword.touched}
                                    secureTextEntry
                                    />
                                    </View>
                                </View>
                            </View>
                                
                        </View>
                        </View>
                    </TouchableWithoutFeedback>   
                    <View style={styles.buttons}>
                        <CustomButton 
                                style={styles.buttonPadding}
                                color="white" 
                                size={14}
                                background="#602A7A" 
                                onPress={this.loginHandler}
                                title="Sign In"
                               /*disabled={
                                    !this.state.controls.email.valid ||
                                    !this.state.controls.password.valid ||
                                    !this.state.controls.confirmPassword.valid
                                }*/
                        />
                    </View>
                    <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:"center"}}>
                    <View style={[styles.buttons]}>
                        <CustomButton 
                                style={styles.linkText}
                                buttonText={{textDecorationLine:"underline",textDecorationStyle:"solid",textDecorationColor:"white"}}
                                color="white" 
                                size={13}
                                background="transparent" 
                                onPress={this.signupHandler}
                                title="Register"
                              

                        />
                    </View>
                    <View style={[styles.buttons]}>
                        <CustomButton 
                                style={styles.linkText}
                                buttonText={{textDecorationLine:"underline",textDecorationStyle:"solid",textDecorationColor:"white"}}
                                color="white" 
                                size={13}
                                background="transparent" 
                                onPress={this.forgotpasswordHandler}
                                title="Forgot Password"
                        />
                    </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
                 </View>

            </View> 
           </ScrollView>
        );
    }

  }

  const styles = StyleSheet.create({
    direction: {
        flexDirection: Dimensions.get('window').height > 500 ? "column" : "row",
    },

    container: {
        paddingLeft:30,
        paddingRight:30,
    },
    inputContainerInd: {
        width:"100%",
        marginBottom:10,
    },
    inputContainer: {
        width:"100%",
        flex:1,
        backgroundColor:'white',
        borderRadius:7,
        borderColor:'#DDD',
        borderWidth:1,
    },
    buttonContainer: {
        width:"70%",
        alignItems:"center",
    },
    buttonPadding: {
        padding:18,
    },
    buttons: {
        marginTop:5,
    },
    landscapePW: {
        flexDirection:"row",
        justifyContent:"space-between"
    },
    linkText: {
        marginTop:5,
    },
    portraitPW: {
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
    },
    landscapePWinput: {
        width:"47%",
    },
    portraintPWinput: {
        width:"100%",
    },
    icon: {
        color:'#e6e6e6',
        paddingTop:4,
        paddingLeft:3,
    },
    textInput: {
        width:"100%",
        color:"#CCC",
        paddingTop:12,
        paddingBottom:12,
        borderColor:"transparent",
        backgroundColor:"transparent",
    },
    textInputNormal: {
        width:"100%",
        borderColor:"#CCC",
        color:"#CCC",
        padding:13,
    },
});

  export default LoginScreen;