import React, { Component } from 'react';
import { View, Text, Image, Button, TextInput, StyleSheet, 
    ImageBackground, Dimensions, Platform, KeyboardAvoidingView, 
    Keyboard, TouchableWithoutFeedback } from 'react-native';
import DefaultInput from '../../components/UI/DefaultInput';
import HeadingText from '../../components/UI/HeadingText';
import CustomButton from '../../components/UI/ButtonWithBackground';
import Logo from '../../assets/Logo-Grace.png';
import validate from '../utils/validation';

class LoginScreen extends Component {
static navigatorStyle ={
    navBarBackgroundColor: '#16325C',
}


state = {
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

componentWillUnmount() {
    Dimensions.removeEventListener("change", this.updateStyles);
}

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

    }

    this.setState(prevState => {
        return {
            controls: {
                ...prevState.controls,
                confirmPassword: {
                    ...prevState.controls.confirmPassword,
                    valid: key === 'password' ? validate(
                        prevState.controls.confirmPassword.value, 
                        prevState.controls.confirmPassword.validationRules, 
                        connectedValue
                    ) : prevState.controls.confirmPassword.valid
                },
                [key]: {
                    ...prevState.controls[key],
                    value: value,
                    valid: validate(value, prevState.controls[key].validationRules, connectedValue),
                    touched: true,
                }
            },
           
        };
    });
}

updateStyles = (dims) => {
    this.setState({
        viewMode: dims.window.height > 500 ? "portrait" : "landscape",
    });
}

loginHandler = () => {
    const authData = {
        email: this.state.controls.email.value,
        password: this.state.controls.password.value
    }
    this.props.onLogin(authData);
}

    render() {
        let heading = null;
        if(this.state.viewMode === "portrait") {
            heading = (
                        <View style={{width:"40%",marginBottom:40,}}>
                            <Image source={Logo} style={{width:163, height:50}}/> 
                        </View>);
        }

        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                {heading}
                <View style={{width:"100%"}}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.inputContainer}>
                        <View style={[styles.inputContainerInd, {flexDirection:"row", alignItems:"center"}]}> 
                            <Icon name="person" color="white" size={28} style={styles.icon} />   
                            <DefaultInput placeholder="Username" style={styles.textInput} placeholderTextColor="white"
                                value={this.state.controls.email.value}
                                onChangeText={(val) => this.updateInputState('email', val)}
                                valid={this.state.controls.email.valid}
                                touched={this.state.controls.email.touched}
                                autoCorrect={false}
                                autoCapitalize="none"
                                keyboardType="email-address"

                                />
                        </View>
                        <View style={[this.state.viewMode === "portrait" ? styles.portraitPW : styles.landscapePW, styles.inputContainerInd] }>
                            <View style={[this.state.viewMode === "portrait" ? styles.portraitPWinput : styles.landscapePWinput, styles.inputContainer ]}>
                                <View style={{flexDirection:"row", alignItems:"center"}}> 
                                    <Icon name="lock" color="white" size={28} style={styles.icon} /> 
                                    <DefaultInput placeholder="Password" style={styles.textInput} 
                                    placeholderTextColor="white"
                                    value={this.state.controls.password.value}
                                    onChangeText={(val) => this.updateInputState('password', val)}
                                    valid={this.state.controls.password.valid}
                                    touched={this.state.controls.password.touched}
                                    secureTextEntry
                                    />
                                </View>
                            </View>     
                        </View>
                        <View style={[this.state.viewMode === "portrait" ? styles.portraitPW : styles.landscapePW, styles.inputContainerInd] }>
                            <View style={[this.state.viewMode === "portrait" ? styles.portraitPWinput : styles.landscapePWinput, styles.inputContainer ]}>
                                <View style={{flexDirection:"row", alignItems:"center"}}> 
                                    <Icon name="lock" color="white" size={28} style={styles.icon} /> 
                                    <DefaultInput placeholder="Confirm Password" style={styles.textInput} 
                                    placeholderTextColor="white"
                                    value={this.state.controls.confirmPassword.value}
                                    onChangeText={(val) => this.updateInputState('confirmPassword', val)}
                                    valid={this.state.controls.confirmPassword.valid}
                                    touched={this.state.controls.confirmPassword.touched}
                                    secureTextEntry
                                    />
                                </View>
                            </View>
                                
                        </View>
                    </View>
                    </TouchableWithoutFeedback>   
                    <View style={styles.buttons}>
                        <CustomButton 
                                style={styles.buttonPadding}
                                color="white" 
                                background="#0095C8" 
                                onPress={this.loginHandler}
                                title="Sign In"
                                disabled={
                                    !this.state.controls.email.valid ||
                                    !this.state.controls.password.valid ||
                                    !this.state.controls.confirmPassword.valid
                                }
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }   
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    direction: {
        flexDirection: Dimensions.get('window').height > 500 ? "column" : "row",
    },
    inputContainerInd: {
        width:"100%",
        marginBottom:14,
        borderBottomWidth:1,
        borderBottomColor:"#CCC", 
    },
    inputContainer: {
        width:"100%",
    },
    headingInverse: {
        color:"white",
        marginBottom:10,
    },
    buttonContainer: {
        width:"70%",
        alignItems:"center",
    },
    buttonPadding: {
        padding:18,
    },
    buttons: {
        width:"100%",
        marginTop:5,
    },
    backgroundImage: {
        flex:1,
        width:"100%",
    },
    landscapePW: {
        flexDirection:"row",
        justifyContent:"space-between"
    },
    portraitPW: {
        flexDirection:"column",
        justifyContent:"flex-start"
    },
    landscapePWinput: {
        width:"47%",
    },
    portraintPWinput: {
        width:"100%",
    },
    icon: {
        marginLeft:"20%",
        marginRight:5,
    },
    textInput: {
        width:"70%",
        borderColor:"transparent",
        color:"white",
        padding:13,
        backgroundColor:"transparent",
    },
});

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (authData) => dispatch(tryAuth(authData)), 
    };
}

export default LoginScreen;


{/* 
         <View style={this.state.viewMode === "portrait" ? styles.portraitPWinput : styles.landscapePWinput }>
                            <DefaultInput placeholder="Confirm Password" />
        </View>
    
    <View style={styles.buttons}>
                        <ButtonCustom 
                            color="#0070D2" 
                            background="#EEE" 
                            onPress={this.switchHandler}
                            title="Register"
                        />
 </View> */}