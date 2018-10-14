import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, 
    KeyboardAvoidingView, Keyboard, ScrollView, Dimensions } from 'react-native';
import CustomButton from '../../components/UI/ButtonWithIcon';
import ContactList from '../../components/Lists/ContactList';

class EmergencyContacts extends Component {

    state = {
        contactsLoaded: false,
        removeAnim: new Animated.Value(1),
        addAnim: new Animated.Value(0),
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
    itemPressed = () => {}

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

        return (
            <Animated.View 
            style={{
                opacity:this.state.removeAnim,
                transform: [{

                   scale:this.state.removeAnim.interpolate({
                       inputRange:[0, 1],
                       outputRange: [12, 1],
                   }) 
                }],
                transform: [{
                    translateX: this.state.removeAnim.interpolate({
                        inputRange:[0,1],
                        outputRange:[-400, 0]
                    })
                }]
            }}
        >
            <View style={styles.listContainer}>
                <ScrollView>
                <CustomButton color="#602A7A" style={{padding:2, borderRadius:50,}} onPress={this.contactsSearchHandler}>Add Contact</CustomButton>
                <View style={styles.list}>
                        <ContactList contacts={this.props.contacts} onItemSelected={this.itemSelectedHandler} />
                </View>
                
                </ScrollView>  
                <View style={styles.btnActionMenu}>
          
                </View>
            </View> 
            </Animated.View>
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