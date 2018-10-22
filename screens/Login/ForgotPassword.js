import React, { Component } from 'react';
import { View, Dimensions, Text, StyleSheet } from 'react-native';
import DefaultInput from './../../components/UI/DefaultInput';
import HeadingText from './../../components/UI/HeadingText';
import CustomButton from './../../components/UI/ButtonWithBackground';
import LogoTitle from './../../components/UI/LogoTitle';

class ForgotPassword extends Component  {
    static navigationOptions = {
        headerTitle: <LogoTitle backgroundSize={90} imageSize={75} radius={45} />,
    };
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
    
    forgotpasswordHandler = () => {
        this.props.navigation.goBack();
    };    


    render() {
        return (
        
        <View style={{padding:30, flex:1}}>
            <View>
                <HeadingText heading="Forgot Password"  style={{textAlign:"center"}}/>            
            </View>
            <View style={{marginTop:25}}>
                <DefaultInput placeholder="Password" label="Email Address" style={[styles.textInput]} 
                    placeholderTextColor="#CCC"
                    value={this.state.controls.password.value}
                    onChangeText={(val) => this.updateInputState('password', val)}
                    touched={this.state.controls.password.touched}
                    />
                    <View style={[styles.buttons, {marginTop:8}]}>
                        <CustomButton 
                                style={styles.buttonPadding}
                                color="white" 
                                size={14}
                                background="#35B5AF" 
                                onPress={this.forgotpasswordHandler}
                                title="Send Password Reset"
                               /*disabled={
                                    !this.state.controls.email.valid ||
                                    !this.state.controls.password.valid ||
                                    !this.state.controls.confirmPassword.valid
                                }*/
                        />
                    </View>
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
            padding:14,
        },
    buttons: {
            marginTop:5,
        },
});


export default ForgotPassword;