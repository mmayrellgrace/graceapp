import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomButton from '../../components/UI/ButtonWithBackground';
import ActionButton from '../../components/UI/ActionButtonCircle';
import Heading from '../../components/UI/HeadingText';
import DefaultInput from '../../components/UI/DefaultInput';
import { MaterialIcons } from '@expo/vector-icons';

class EmergencyContactDetails extends Component {
    state = {
        email: {
            value:'',
        }
    }
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <View style={{flex:1,}}>
                <View>
                    <View style={{flexDirection:"row", alignItems:"center"}}> 
                        <MaterialIcons name="email" size={20} style={styles.icon} />   
                        
                        <View style={{flex:1,width:'100%'}}> 
                            <DefaultInput 
                            placeholder="Username" 
                            style={styles.textInput}                                                     
                            placeholderTextColor="#CCC"                                                   
                            value={this.state.email.value}                                                 
                            onChangeText={(val) => val}                           
                            autoCorrect={false}
                            autoCapitalize="none"
                            keyboardType="email-address"                                                    
                            />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    mainText: {
        fontSize:12,
        color:"#bbb",
    },
    icon: {
        color:"grey",
    }
});


export default EmergencyContactDetails;