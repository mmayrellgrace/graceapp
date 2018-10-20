import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

//import Icon from 'react-native-vector-icons/MaterialIcons';

const actionButton = props => (
    <TouchableOpacity onPress={props.onPress}>
        <View style={styles.container}>
            <View style={[styles.button, {backgroundColor:props.background}, props.style, props.disabled ? styles.disabled : null]}>
                <MaterialIcons size={props.size} name={props.icon} color={props.disabled ? styles.disabledIcon : props.color} />
            </View>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
    },
    button: {  
        alignItems:"center", 
        justifyContent:"center",

        elevation:3,
        width:250,
        height:250,
        borderRadius:125, 
    },
    disabledIcon: {
        color:"#CCC",
    },
    disabled: {
        backgroundColor:"#DDD",
    }
});

export default actionButton;