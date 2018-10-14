import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const buttonWithIcon = props => (
    <TouchableOpacity onPress={props.onPress}>
        <View style={styles.container}>
            <View style={[styles.button, {backgroundColor:props.background}, props.style, props.disabled ? styles.disabled : null]}>
                <View style={{marginRight:8,}}><MaterialIcons size={30} name={props.icon} color={props.color} /></View>
                <Text style={[styles.text, {color:props.color}]}>{props.children}</Text>
            </View>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
    },
    button: {
        padding:15,   
        flexDirection:"row",
        marginBottom:10,
        alignItems:"center", 
        borderRadius:50,
        justifyContent:"center", 
    },
    text: {
        fontSize:16,
        fontWeight:"300",

    }
});

export default buttonWithIcon;