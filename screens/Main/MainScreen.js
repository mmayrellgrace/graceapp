import React, { Component } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, Animated, 
    KeyboardAvoidingView, Button, Keyboard, ScrollView, Dimensions, Linking } from 'react-native';
import Heading from '../../components/UI/HeadingText';
import ActionButton from '../../components/UI/ActionButtonCircle';
import MainAlertButton from '../../components/UI/MainAlertButtonCircle';
import CustomButton from '../../components/UI/ButtonWithIcon';
import LogoTitle from '../../components/UI/LogoTitle';
class Logout extends Component{
    state: {}
    constructor(props){
        super(props);
    }
    onLogout = () => {
        this.props.navigation.navigate('Auth');
    }

    render() {
        return (
            <CustomButton
              onPress={this.onLogout}
              icon="refresh"
              color="#fff"
            />
        )
    }
}
class MainScreen extends Component {
    static navigationOptions = {
        headerTitle: <LogoTitle backgroundSize={80} imageSize={65} radius={40} />,
        headerStyle: {
          backgroundColor: '#602A7A',
        },
        headerTintColor: '#fff',
      };
    state = {
        disableAlert:false,
        contactsLoaded: false,
        removeAnim: new Animated.Value(1),
        addAnim: new Animated.Value(0),
    };

    constructor (props) {
        super(props);
    }

    contactsLoadedHandler = () => {
            Animated.timing(this.state.addAnim, {
                toValue:1,
                duration:300,
                useNativeDriver: true
            }).start();
    }

    contactsSearchHandler = () => {
        Animated.timing(this.state.removeAnim, {
            toValue:0,
            duration:400,
            useNativeDriver: true
        }).start(() => {
            this.setState({
                contactsLoaded: true
            });
            this.contactsLoadedHandler();
        });
    }

    emergencyContactsGo = () => {
        this.props.navigation.push('Emergency', {
            contacts:this.state.contacts,
        });
    }

    openModalShare = () => {
        this.props.navigation.navigate('ModalShare');
    }
    openModalPhone = () => {
        this.props.navigation.navigate('ModalPhone');
    }

    openModalAlert = () => {
        this.props.navigation.navigate('ModalAlert');
    }

    disableAlertClick = () => {
        const disableAl = this.state.disableAlert;
        this.setState({
            disableAlert: !disableAl
        });
    }

    phoneCall =()=>{
        const url='tel://+9723390423'
        Linking.openURL(url)
    }


    render () {
        
        const { navigate } = this.props.navigation;
        let alertButton =  <MainAlertButton size={80}
                                color="pink" 
                                background="red" 
                                icon="warning" 
                                onpress={(item) => item}
                                disabled={this.state.disableAlert}
                            />;
        if(this.state.disableAlert) {
            alertButton = (
                <MainAlertButton size={80}
                color="lightgrey" 
                background="#DDD" 
                icon="warning" 
                onpress={(item) => item}
                disabled={true}
                />
            );
        }
        return (

            <View style={styles.listContainer}>
                 <View style={styles.btnAlertDisable}>
                    <View style={{flexDirection:"row",left:-10}}>
                    <CustomButton 
                        icon={this.state.disableAlert ? "add-alert" : "notifications-off"} 
                        label={this.state.disableAlert ? "enable" : "disable"} 
                        style={{borderColor:"#CCC", borderBottomWidth:1, borderRightWidth:1,borderRadius:0}} 
                        color={this.state.disableAlert ? "#35B5AF" : "grey"} 

                        onPress={this.disableAlertClick}/>
                    
                    </View>
                </View>
                <View style={styles.btnAlertLogout}>
                    <View style={{flexDirection:"row",left:0}}>
                    <CustomButton 
                        icon="arrow-back"
                        color="#DDD" 
                        background="transparent"
                        onPress={() => this.props.navigation.navigate('Auth')}/>
                    
                    </View>
                </View>
                <View style={{alignItems:"center",marginBottom:4,}}>
                    <Heading heading={"In Case of Emergeny, \nPress Alert Button"} style={{textAlign:"center"}} />
                </View>
                <View style={{padding:20,alignItems:"center",justifyContent:"center"}}>
                <MainAlertButton size={65}
                                color="pink" 
                                background="red" 
                                icon={this.state.disableAlert ? "notifications-off" : "add-alert"} 
                                onPress={this.openModalAlert}
                                disabled={this.state.disableAlert}
                            />
                 </View>
                 
            <View>
              
            </View>

                <View style={styles.btnActionMenu}>
                <View style={{flexDirection:"row"}}>
                <ActionButton elevation={5} 
                                size={20}
                                style={{marginRight:30}}
                                color="white" 
                                background="#602A7A" 
                                icon="share" 
                                onPress={this.openModalShare} />
                <ActionButton elevation={5} 
                                size={20}
                                style={{marginRight:30}}
                                color="white" 
                                background="#602A7A" 
                                icon="group" 
                                onPress={this.emergencyContactsGo} />
                <ActionButton elevation={5} 
                                size={25}
                                color="white" 
                                background="#602A7A" 
                                icon="phone" 
                                onPress={this.openModalPhone} />
                </View>
                </View>
            </View> 
        );
    }
}

const styles = StyleSheet.create({
    listContainer: {
        backgroundColor:"white",
        position:"relative",
        paddingLeft:10,
        paddingRight:10,
        flex:1,
        justifyContent:"center",
    },
    list:{
        flex:1,
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
      },

      btnActionMenu: {
        position:"absolute",
        zIndex:10, 
        margin:10,
        right: 0, 
        bottom: 0, 
        padding:10, 
      },
      btnAlertDisable: {
        position:"absolute",
        zIndex:10, 
        marginLeft:0,
        left: 0, 
        top: 0, 
        paddingTop:0,      
      },
      btnAlertLogout: {
        position:"absolute",
        zIndex:10, 
        marginLeft:0,
        left: 0, 
        bottom: 0, 
        paddingTop:10,      
      }

});

export default MainScreen;