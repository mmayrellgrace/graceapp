import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
const DefaultInput = props => {
   let labelContent = null
   if(props.label) {
       labelContent = <Text style={[styles.label, props.color, {marginLeft:4,}]}>{props.label}</Text>;
   } 
   return (
    <View>
        {labelContent}
        <TextInput 
            underlineColorAndroid="transparent"
            {...props}
            style={[styles.textInputs, props.style, ]} 
        />
    </View>
);
}
//!props.valid && props.touched ? styles.inValid : null

const styles = StyleSheet.create({
    textInputs: {
        width:"100%",
        padding:8,
        borderColor:"#eee",
        borderWidth:1,
        marginTop:5,
        marginBottom:5,
        backgroundColor:"white",
        color:"grey",
        borderRadius:6,
    },
    inValid: {
        color:"red"
    },
    label: {
       // fontFamily:"RobotoSlab-Regular",
        fontSize:13,
        fontWeight:'bold',
        color:'#35B5AF',
    }
});

export default DefaultInput;