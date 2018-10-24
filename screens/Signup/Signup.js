import React, { Component } from 'react';
import { View, Dimensions, Text, StyleSheet, Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native';
import DefaultInput from './../../components/UI/DefaultInput';
import HeadingText from './../../components/UI/HeadingText';
import CustomButton from './../../components/UI/ButtonWithBackground';
import ActionButton from './../../components/UI/ActionButtonCircle';
import { MaterialIcons } from '@expo/vector-icons';
import LogoTitle from './../../components/UI/LogoTitle';

class Signup extends Component  {
    static navigationOptions = {
        title: "Register Account",
       headerTitle: null//<LogoTitle backgroundSize={90} imageSize={75} radius={45} />,
    };
    state = {
        step: "one",
        percent: "20%",
        collegeBoolean:null,
        collegeDorm:null,
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
        //Dimensions.addEventListener("change", this.updateStyles);
    }
    
    loginHandler = () => {
        this.props.navigation.navigate('App');
    };

    onButtonCollegeToggle = () => {
        const collegeBool = this.state.collegeBoolean;
        if(collegeBool === null || collegeBool === false) {
            this.setState({
                collegeBoolean: true
            });
        } else {
            this.setState({
                collegeBoolean:false
            });
        }
      
    }

    onButtonCollegeToggleNo = () => {
        const collegeBool = this.state.collegeBoolean;
        if(collegeBool === null || collegeBool === true) {
            this.setState({
                collegeBoolean: false
            });
        } else {
            this.setState({
                collegeBoolean: true
            });
        }
      
    }

    onButtonCollegeDormToggle = () => {
        const dorm = this.state.collegeDorm;
        if(dorm === null || dorm === false) {
            this.setState({
                collegeDorm: true
            });
        } else {
            this.setState({
                collegeDorm:false
            });
        }
      
    }

    onButtonCollegeDormToggleNo = () => {
        const dorm = this.state.collegeDorm;
        if(dorm === null || dorm === true) {
            this.setState({
                collegeDorm: false
            });
        } else {
            this.setState({
                collegeDorm: true
            });
        }
      
    }

    forgotpasswordHandler = () => {
        this.props.navigation.navigate('Auth');
    }
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
            if(this.state.collegeBoolean === false) {
                this.props.navigation.navigate('App');
            }
            this.setState({
                step: "three",
                percent: "90%",
            });
            break;
        case "three":
            this.setState({
                step: "four",
                percent: "85%",
            });
            this.props.navigation.navigate('App');
            break;
        default:
            break;
        }
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

    render () {
        let actionButtonLeft = null;
        let mainContent = null;
        let collegeDependency = null;
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
        switch(this.state.step) {
            case "one":
            mainContent = 
            <View style={{width:"100%",alignItems:"center",flex:1,justifyContent:"flex-start", marginTop:10}}>
                <View style={{flexDirection:"row", alignItems:"center",marginTop:15}}> 
                <MaterialIcons name="person" size={28} color="#CCC" style={{marginRight:10,marginTop:10}} />   
                <View style={{flex:1,width:'100%'}}> 
                <DefaultInput placeholder="Enter Name" label="Name" style={styles.textInput} 
                placeholderTextColor="#CCC"
                value={this.state.email}
                onChangeText={(val) => this.updateInputState('email', val)}
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
                secureTextEntry
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
                secureTextEntry
                />
                  
                </View>
             </View>
        </View>
        ;
        break;
    case "two":
        mainContent =
            
            <View style={{width:"100%",alignItems:"center",flex:0,justifyContent:"flex-start", marginTop:10}}>
                <Text style={{color:"#35B5AF",textAlign:"center",margin:10,fontSize:18}}>Are you a college student?</Text>
                <View style={[styles.buttons, {marginTop:8, flexDirection:"row", justifyContent:"space-around", maxWidth:200, alignItems:"center"}]}>
                       <View style={{paddingRight:10}}>
                        <CustomButton 
                                style={this.state.collegeBoolean ? styles.buttonCollegeYesActive : styles.buttonCollegeYes }
                                color={this.state.collegeBoolean ? "white" : "#35B5AF" } 
                                size={18}
                                background="transparent" 
                                onPress={this.onButtonCollegeToggle}
                                title="Y"
                               /*disabled={
                                    !this.state.controls.email.valid ||
                                    !this.state.controls.password.valid ||
                                    !this.state.controls.confirmPassword.valid
                                }*/
                        />
                        </View>
                        <View style={{paddingLeft:10}}>
                        <CustomButton 
                                style={this.state.collegeBoolean === null ? styles.buttonCollegeNo : 
                                        this.state.collegeBoolean ? styles.buttonCollegeNo : styles.buttonCollegeNoActive}
                                color={this.state.collegeBoolean === null ? "red" : 
                                    this.state.collegeBoolean ? "red" : "white" } 
                                size={18}
                                background="transparent" 
                                onPress={this.onButtonCollegeToggleNo}
                                title="N"
                               /*disabled={
                                    !this.state.controls.email.valid ||
                                    !this.state.controls.password.valid ||
                                    !this.state.controls.confirmPassword.valid
                                }*/
                        />
                        </View>
                    </View>
            </View>
        ; 
        break;
    case "three":
        mainContent =
            
            <View style={{width:"100%",alignItems:"center",flex:0,justifyContent:"flex-start", marginTop:10}}>
                <Text style={{color:"#35B5AF",textAlign:"center",margin:10,fontSize:18}}>Do you live in a dorm?</Text>
                <View style={[styles.buttons, {marginTop:8, flexDirection:"row", justifyContent:"space-around", maxWidth:200, alignItems:"center"}]}>
                       <View style={{paddingRight:10}}>
                        <CustomButton 
                                style={this.state.collegeDorm ? styles.buttonCollegeYesActive : styles.buttonCollegeYes }
                                color={this.state.collegeDorm ? "white" : "#35B5AF" } 
                                size={18}
                                background="transparent" 
                                onPress={this.onButtonCollegeDormToggle}
                                title="Y"
                               /*disabled={
                                    !this.state.controls.email.valid ||
                                    !this.state.controls.password.valid ||
                                    !this.state.controls.confirmPassword.valid
                                }*/
                        />
                        </View>
                        <View style={{paddingLeft:10}}>
                        <CustomButton 
                                style={this.state.collegeDorm === null ? styles.buttonCollegeNo : 
                                        this.state.collegeDorm ? styles.buttonCollegeNo : styles.buttonCollegeNoActive}
                                color={this.state.collegeDorm === null ? "red" : 
                                    this.state.collegeDorm ? "red" : "white" } 
                                size={18}
                                background="transparent" 
                                onPress={this.onButtonCollegeDormToggleNo}
                                title="N"
                               /*disabled={
                                    !this.state.controls.email.valid ||
                                    !this.state.controls.password.valid ||
                                    !this.state.controls.confirmPassword.valid
                                }*/
                        />
                        </View>
                    </View>
            </View>
        ; 
        break;
    
    }

        if (this.state.step === "two" && this.state.collegeBoolean) {
            collegeDependency = <View style={{width:"100%",alignItems:"center",
                    flex:1,justifyContent:"flex-start", marginTop:10}}>
                                    <Text style={{color:"#35B5AF",textAlign:"center",margin:5,marginTop:20,fontSize:18}}>Add University</Text>
                                    <View style={{flexDirection:"row", alignItems:"center",marginTop:5, padding:3, 
                                                    borderRadius:8, borderWidth:1, borderColor:"#DDD", backgroundColor:"white"}}> 
                                    <MaterialIcons name="search" size={28} color="#CCC" style={{marginRight:10,marginTop:10}} />   
                                        <View style={{flex:1,width:'100%'}}> 
                                        <DefaultInput 
                                        placeholder="Search Universities" 

                                        style={styles.textInputNone} 
                                        background="transparent"
                                        placeholderTextColor="#CCC"
                                        />
                                        </View>
                                    </View>
    </View>;} else if (this.state.step === "two" && this.state.collegeBoolean === false) {
            collegeDependency = <View style={{width:"100%",alignItems:"center",flex:1,justifyContent:"flex-start", marginTop:10}}>
            <View style={{flexDirection:"row", alignItems:"center",marginTop:15}}> 
            <MaterialIcons name="near-me" size={28} color="#CCC" style={{marginRight:10,marginTop:10}} />   
            <View style={{flex:1,width:'100%'}}> 
            <DefaultInput placeholder="Enter Street Address" label="Street Address" style={styles.textInput} 
            placeholderTextColor="#CCC"
            value={this.state.email}
            onChangeText={(val) => this.updateInputState('email', val)}
            touched={this.state.controls.password.touched}
            />
              
            </View>
         </View>
         <View style={{flexDirection:"row", alignItems:"center",marginTop:15}}> 
            <MaterialIcons name="location-on" size={28} color="#CCC" style={{marginRight:10,marginTop:10}} />   
            <View style={{flex:1,width:'100%'}}> 
            <DefaultInput placeholder="Enter City" label="City" style={styles.textInput} 
            placeholderTextColor="#CCC"
            value={this.state.email}
            onChangeText={(val) => this.updateInputState('password', val)}
            touched={this.state.controls.password.touched}
            />
              
            </View>
         </View>
         <View style={{flexDirection:"row", alignItems:"center", marginTop:15}}> 
            <MaterialIcons name="person-pin-circle" size={28} color="#CCC" style={{marginRight:10,marginTop:10}} />   
            <View style={{flex:1,width:'100%'}}> 
            <DefaultInput placeholder="Enter State" label="State" style={styles.textInput} 
            placeholderTextColor="#CCC"
            value={this.state.email}
            onChangeText={(val) => this.updateInputState('password', val)}
            touched={this.state.controls.password.touched}
            secureTextEntry
            />
              
            </View>
         </View>
    </View>;

        } else if (this.state.step === "three" && this.state.collegeDorm) {
            collegeDependency = <View style={{width:"100%",alignItems:"center",flex:1,justifyContent:"flex-start", marginTop:5}}>
            <View style={{flexDirection:"row", alignItems:"center",marginTop:10}}> 
            <MaterialIcons name="directions" size={28} color="#CCC" style={{marginRight:10,marginTop:10}} />   
            <View style={{flex:1,width:'100%'}}> 
            <DefaultInput placeholder="Enter Dorm Name" label="Dorm Name" style={styles.textInput} 
            placeholderTextColor="#CCC"
            value={this.state.email}
            onChangeText={(val) => this.updateInputState('email', val)}
            touched={this.state.controls.password.touched}
            />
              
            </View>
         </View>
         <View style={{flexDirection:"row", alignItems:"center",marginTop:10}}> 
            <MaterialIcons name="near-me" size={28} color="#CCC" style={{marginRight:10,marginTop:10}} />   
            <View style={{flex:1,width:'100%'}}> 
            <DefaultInput placeholder="Enter Street Address" label="Street Address" style={styles.textInput} 
            placeholderTextColor="#CCC"
            value={this.state.email}
            onChangeText={(val) => this.updateInputState('email', val)}
            touched={this.state.controls.password.touched}
            />
              
            </View>
         </View>
         <View style={{flexDirection:"row", alignItems:"center",marginTop:10}}> 
            <MaterialIcons name="location-on" size={28} color="#CCC" style={{marginRight:10,marginTop:10}} />   
            <View style={{flex:1,width:'100%'}}> 
            <DefaultInput placeholder="Enter City" label="City" style={styles.textInput} 
            placeholderTextColor="#CCC"
            value={this.state.email}
            onChangeText={(val) => this.updateInputState('password', val)}
            touched={this.state.controls.password.touched}
            />
              
            </View>
         </View>
         <View style={{flexDirection:"row", alignItems:"center", marginTop:10}}> 
            <MaterialIcons name="person-pin-circle" size={28} color="#CCC" style={{marginRight:10,marginTop:10}} />   
            <View style={{flex:1,width:'100%'}}> 
            <DefaultInput placeholder="Enter State" label="State" style={styles.textInput} 
            placeholderTextColor="#CCC"
            value={this.state.email}
            onChangeText={(val) => this.updateInputState('password', val)}
            touched={this.state.controls.password.touched}
            secureTextEntry
            />
              
            </View>
         </View>
    </View>;
        } else if (this.state.step === "three" && this.state.collegeDorm === false) {
            collegeDependency = <View style={{width:"100%",alignItems:"center",flex:1,justifyContent:"flex-start", marginTop:10}}>
            <View style={{flexDirection:"row", alignItems:"center",marginTop:15}}> 
            <MaterialIcons name="near-me" size={28} color="#CCC" style={{marginRight:10,marginTop:10}} />   
            <View style={{flex:1,width:'100%'}}> 
            <DefaultInput placeholder="Enter Street Address" label="Street Address" style={styles.textInput} 
            placeholderTextColor="#CCC"
            value={this.state.email}
            onChangeText={(val) => this.updateInputState('email', val)}
            touched={this.state.controls.password.touched}
            />
              
            </View>
         </View>
         <View style={{flexDirection:"row", alignItems:"center",marginTop:15}}> 
            <MaterialIcons name="location-on" size={28} color="#CCC" style={{marginRight:10,marginTop:10}} />   
            <View style={{flex:1,width:'100%'}}> 
            <DefaultInput placeholder="Enter City" label="City" style={styles.textInput} 
            placeholderTextColor="#CCC"
            value={this.state.email}
            onChangeText={(val) => this.updateInputState('password', val)}
            touched={this.state.controls.password.touched}
            />
              
            </View>
         </View>
         <View style={{flexDirection:"row", alignItems:"center", marginTop:15}}> 
            <MaterialIcons name="person-pin-circle" size={28} color="#CCC" style={{marginRight:10,marginTop:10}} />   
            <View style={{flex:1,width:'100%'}}> 
            <DefaultInput placeholder="Enter State" label="State" style={styles.textInput} 
            placeholderTextColor="#CCC"
            value={this.state.email}
            onChangeText={(val) => this.updateInputState('password', val)}
            touched={this.state.controls.password.touched}
            secureTextEntry
            />
              
            </View>
         </View>
    </View>;
        }

        return (
            
        <View style={{padding:30, flex:1}}>
            <Text style={{color:"#BBB",fontSize:13,marginTop:15,marginLeft:20,}}>{this.state.percent} Progress</Text>
            <View style={{margin:10,marginBottom:20,marginTop:5,padding:20, borderColor:"#CCC", borderWidth:1, 
                borderRadius:50, backgroundColor:"transparent",
                justifyContent:"center"}}>
               <View style={{borderRadius:10,backgroundColor:"white", width:"100%", height:10}}>
                    <View style={{width:this.state.percent,borderRadius:10,backgroundColor:"#E1A3FF", height:10}}></View>
                </View>
            </View>
            <View style={{ borderBottomWidth:1, borderBottomColor:"#CCC"}}></View>
            <ScrollView style={{width:"100%"}}>
            {mainContent}             
            {collegeDependency}
            </ScrollView>
            {actionButtonLeft}
             <View style={styles.btnActionMenu}>
                <ActionButton elevation={5} 
                                size={25}
                                style={{marginRight:5}}
                                color="white" 
                                background="#602A7A" 
                                icon="chevron-right" 
                                disabled={this.state.step === "two" && this.state.collegeBoolean === null ? true : 
                                        this.state.step === "three" && this.state.collegeDorm === null ? true : false}
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
        buttonCollegeYes: {
            padding:20,
            width:85,
            height:85,
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:"transparent",
            borderColor:"#35B5AF",
            borderWidth:1,
            borderRadius:8,
        },
        buttonCollegeYesActive: {
            padding:20,
            width:85,
            height:85,
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:"#35B5AF",
            borderColor:"#35B5AF",
            borderWidth:1,
            borderRadius:8,
        },
        buttonCollegeNoActive: {
            padding:20,
            width:85,
            height:85,
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:"red",
            borderColor:"red",
            borderWidth:1,
            borderRadius:8,
        },
        buttonCollegeNo: {
  padding:20,
            width:85,
            height:85,
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:"transparent",
            borderColor:"red",
            borderWidth:1,
            borderRadius:8,
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