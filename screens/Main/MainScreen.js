import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, 
    KeyboardAvoidingView, Keyboard, ScrollView, Dimensions } from 'react-native';
import Heading from '../../components/UI/HeadingText';
import ActionButton from '../../components/UI/ActionButtonCircle';
import MainAlertButton from '../../components/UI/MainAlertButtonCircle';
import CustomButton from '../../components/UI/ButtonWithIcon';

class MainScreen extends Component {

    state = {
        navigationOptions:{
                header:null,
            },
        disableAlert:false,
        contactsLoaded: false,
        removeAnim: new Animated.Value(1),
        addAnim: new Animated.Value(0),

        contacts: [
        {key:'1', name: 'John Doe', 
        profileImage:require('../../assets/profile/guyimage.png'),  
        phone:"405-445-6678", email:"doeJ@emailaddress.com", 
        relationship:"relative"},

        {key:'2', name: 'Jane Frazle', 
        profileImage:require('../../assets/profile/girlimage.png'),
        phone:"405-432-111", email:"doeJ@emailaddress.com", 
        relationship:"relative"},

        {key:'3', name: 'Jessica Payne', 
        profileImage:require('../../assets/profile/girlimage2.png'),  
        phone:"555-555-2378", email:"doeJ@emailaddress.com", 
        relationship:"relative"}
        ]
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
        console.log('clicked');
    }

    disableAlertClick = () => {
        const disableAl = this.state.disableAlert;
        this.setState({
            disableAlert: !disableAl
        });
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
                <ScrollView>
                <View style={{alignItems:"center",marginBottom:4,}}>
                    <Heading heading={"In Case of Emergeny, \nPress Alert Button"} style={{textAlign:"center"}} />
                </View>
                <View style={styles.btnAlertDisable}>
                   
                </View>
                <View style={{padding:20,alignItems:"center",justifyContent:"center"}}>
                <MainAlertButton size={80}
                                color="pink" 
                                background="red" 
                                icon="warning" 
                                onpress={(item) => item}
                                disabled={this.state.disableAlert}
                            />
                 </View>
 
                <View>
                <CustomButton icon="alarm" 
                    label={this.state.disableAlert ? "enable" : "disable"} 
                    style={{borderWidth:1,borderRadius:5,borderColor:"lightgrey"}} color="grey" 
                    onPress={this.disableAlertClick}/>
                    <CustomButton icon="group" 
                    label="contacts" 
                    style={{padding:8,borderWidth:1,borderRadius:5,borderColor:"lightgrey"}} color="grey" 
                    onPress={() => this.props.navigation.push('Emergency', {contacts:this.state.contacts})}/></View>
                </ScrollView> 
                <View style={styles.btnActionMenu}>
                    <ActionButton elevation={5} 
                                size={25}
                                color="white" 
                                background="#602A7A" 
                                icon="phone" 
                                onpress={(item) => item} />
                </View>
            </View> 
        );
    }
}

const styles = StyleSheet.create({
    listContainer: {
        position:"relative",
        padding:10,
        flex:1,
        width:"100%",
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
        margin:10,
        marginLeft:0,
        left: 0, 
        top: 10, 
        padding:10,

       
      }
});

export default MainScreen;