import React, { Component } from 'react';
import { View, Dimensions, Text, StyleSheet } from 'react-native';
import DefaultInput from './../../components/UI/DefaultInput';
import HeadingText from './../../components/UI/HeadingText';
import CustomButton from './../../components/UI/ButtonWithBackground';

class Signup extends Component  {
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
    
    loginHandler = () => {
        this.props.navigation.navigate('App');
    };
    forgotpasswordHandler = () => {
        this.props.navigation.navigate('Auth');
    };    


    render() {
        return (
            
        <View style={{padding:10, flex:1}}>

            <View>
                <HeadingText />            
            </View>
            <DefaultInput placeholder="Password" label="Email Address" style={styles.textInput} 
                placeholderTextColor="#CCC"
                value={this.state.controls.password.value}
                onChangeText={(val) => this.updateInputState('password', val)}
                touched={this.state.controls.password.touched}
                />
             <View style={[styles.buttons]}>
                    <CustomButton 
                                style={styles.buttonPadding}
                                color="green" 
                                size={16}
                                background="transparent" 
                                onPress={this.forgotPasswordHandler}
                                title="Register"
                              

                        />
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
});

export default Signup;