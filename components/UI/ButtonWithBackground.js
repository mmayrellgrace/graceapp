import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const buttonWithBackground = props => (
    <TouchableOpacity onPress={props.onPress}>
        <View style={[styles.button, {backgroundColor:props.background}, props.style, props.disabled ? styles.disabled : null]}>
            <Text style={[styles.text, props.buttonText, { color:props.color, fontSize:props.size, 
                                        fontWeight:props.weight,
                                        }]}>{props.title}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        padding:12,
        width:"100%",
        borderRadius:50,
    },
    text: {
        textAlign:"center",
        fontSize:14,
    },
   /* disabled: {
        opacity:.4,
        backgroundColor:'#999',
    }*/
});

export default buttonWithBackground;