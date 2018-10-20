import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, 
    KeyboardAvoidingView, Keyboard, ScrollView, Dimensions } from 'react-native';
import CustomButton from '../../components/UI/ButtonWithIcon';
import ContactList from '../../components/Lists/ContactList';
import ActionButton from '../../components/UI/ActionButtonCircle';
import Heading from '../../components/UI/HeadingText';


class EmergencyContacts extends Component {
    

    state = {
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
        const selectContact = this.props.contacts.find(item => {
            return item.key === key;

        });
    }

    modalClosedHandler = () => {
        this.setState({
          showModal: false
        });
      }

    render () {
        const { params } = this.props.navigation.state;
        let paramContacts = params.contacts;
        return (
 
            <View style={styles.listContainer}>
                <ScrollView>
                <View style={{alignItems:"center",marginBottom:4,}}>
                    <Heading heading="Emergency Contacts" />
                </View>
                <View style={styles.list}>
                        <ContactList contacts={paramContacts} onItemSelected={this.itemSelectedHandler} />
                </View>
                
                </ScrollView>  
                <View style={styles.btnActionMenu}>
                    <ActionButton elevation={5} 
                                size={25}
                                style={{elevation:1}}
                                color="white" 
                                background="#602A7A" 
                                icon="add" 
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
    barcode:{
        position:"absolute",
        top:300,
        right:10,
        width:60,
        height:80,
        zIndex:400,
    },
    barcodeContainer:{
        position:"relative",

    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
      },

      btnActionMenu: {
        position:"absolute",
        elevation:4,
        zIndex:10, 
        right: 0, 
        bottom: 0, 
        padding:10, 
        shadowColor: '#999',
        shadowOpacity: 0.8,
        shadowRadius: 10,
       
      }
});

export default EmergencyContacts;