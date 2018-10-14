import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, 
    KeyboardAvoidingView, Keyboard, ScrollView, Dimensions } from 'react-native';
import CustomButton from '../../components/UI/ButtonWithIcon';
import ContactList from '../../components/Lists/ContactList';
import DefaultInput from '../../components/UI/DefaultInput';
import Heading from '../../components/UI/HeadingText';
import LoginScreen from '../Login/LoginScreen';
import ActionButton from '../../components/UI/ActionButtonCircle';
import MainAlertButton from '../../components/UI/MainAlertButtonCircle';
import EmergencyContacts from '../EmergencyContacts/EmergencyContacts';

class MainScreen extends Component {

    state = {
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

    onNavigatorEvent = event => {
        if(event.type === "NavBarButtonPress") {
            if (event.id === "drawerToggle") {
               
            }
        }
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
    itemPressed = () => {}

    itemSelectedHandler = key => {
        const selPlace = this.props.contacts.find(item => {
            return item.key === key;
        });
    }

    itemSelectedHandlerNew = key => {
        const selPlace = this.props.placesNew.find(item => {
            return item.key === key;
        });
    }


    render () {

        return (

            <View style={styles.listContainer}>
                <ScrollView>
                <LoginScreen />
                <View style={{alignItems:"center",marginBottom:4,}}>
                    <Heading heading="Emergency Contacts" />
                </View>
                <View style={{padding:20,alignItems:"center",justifyContent:"center"}}>
               <MainAlertButton size={50}
                                color="pink" 
                                background="red" 
                                icon="alert" 
                                onpress={(item) => item}
                                />
                        </View>
                <EmergencyContacts contacts={this.state.contacts} />
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
        backgroundColor:"#E8E8E8",
        flex:1,
        width:"100%",
        justifyContent:"space-between",
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

       
      }
});

export default MainScreen;