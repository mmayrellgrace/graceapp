import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

//import Icon from 'react-native-vector-icons/MaterialIcons';

const actionButton = props => (
    <TouchableOpacity onPress={props.onPress}>
        <View style={styles.container}>
            <View style={[styles.button, {backgroundColor:props.background}, props.style, props.disabled ? styles.disabled : null]}>
                <MaterialIcons size={props.size} name={props.icon} color={props.color} />
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
        borderRadius:100, 
        elevation:3,
        width:200,
        height:200,
    },
});

export default actionButton;