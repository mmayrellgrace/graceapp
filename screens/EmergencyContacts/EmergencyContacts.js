import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, 
    KeyboardAvoidingView, Keyboard, ScrollView, Dimensions } from 'react-native';
import CustomButton from '../../components/UI/ButtonWithIcon';
import ContactList from '../../components/Lists/ContactList';
import ActionButton from '../../components/UI/ActionButtonCircle';
import Heading from '../../components/UI/HeadingText';
import EmergencyContactDetails from './EmergencyContactDetails';
import LogoTitle from '../../components/UI/LogoTitle';


class EmergencyContacts extends Component {

    static navigationOptions = {
        title:"Emergency Contacts",
        //headerTitle: <LogoTitle backgroundSize={80} imageSize={65} radius={40} />,
        headerStyle: {
          backgroundColor: '#602A7A',
        },
        headerTintColor: '#fff',
      }; 

    state = {
        contactsLoaded: false,
        removeAnim: new Animated.Value(1),
        addAnim: new Animated.Value(0),
        name:'',
        email:'',
        phone:'',
        image:'',
        relatioship:'',
        warning:null,
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
            toValue:1,
            duration:400,
            useNativeDriver: true
        }).start(() => {
            this.setState({
                contactsLoaded: true
            });
            this.contactsLoadedHandler();
        });
    }

    itemSelectedHandler = key => {
        const selectedContact = this.state.contacts.find(item => {
            return item.key === key;
        });
        
        this.props.navigation.navigate('EmergencyDetails', {
            contact: selectedContact
        });
    }

    itemDeletedHandler = key => {
        const deleteContact = this.state.contacts.filter(item => {
            return item.key !== key;
        });
        this.setState({
            contacts: deleteContact
        })
    }

    modalClosedHandler = () => {
        this.setState({
          showModal: false
        });
      }

      openModalAddContact = () => {
        this.props.navigation.navigate('ModalAddContact', {
            'addNewContact': this.addNewContact.bind(this)
        });
    }

    addNewContact = () => {
        if (this.state.name !== "" && this.state.email !== "" && this.state.phone !== '') {
          const newContact = {
            key: Math.floor((Math.random() * 1000000) + 1),
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            realtionship: this.state.relationship,
            image: require('../../assets/profile/guyimage2.png')
          };
          this.setState(prevState => ({
            contacts: [newContact, ...prevState.contacts],
            name: "",
            email:"",
            phone:""
          }));
        } else {
            this.setState({
                warning:"please fill out name, email, phone before adding"
            });
        }
      }


    render () {
        const { params } = this.props.navigation.state;
        let paramContacts = params.contacts;
        return (
 
            <View style={styles.listContainer}>
                    <View style={styles.list}>
                        <ContactList contacts={this.state.contacts} onItemSelected={this.itemSelectedHandler} onItemDeleted={this.itemDeletedHandler} />
                    </View>
                <View style={styles.btnActionMenu}>
                    <ActionButton elevation={5} 
                                size={25}
                                style={{elevation:1}}
                                color="white" 
                                background="#602A7A" 
                                icon="add" 
                                onPress={this.openModalAddContact} />
                </View>

            </View> 
        );
    }
}

const styles = StyleSheet.create({
    listContainer: {
        position:"relative",
        padding:10,
        paddingTop:0,
        backgroundColor:"#FFF",
        flex:1,
        width:"100%",
        justifyContent:"space-between",
    },
    list:{
        flex:1,
    },
    btnActionMenu: {
        position:"absolute",
        zIndex:10, 
        margin:10,
        right: 0, 
        bottom: 0, 
        padding:10, 
      },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
      },
});

export default EmergencyContacts;