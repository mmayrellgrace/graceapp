import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ForgotPassword = props => (
    <Text {...props} style={[styles.mainText, props.style]}>{props.children}</Text>
);

const styles = StyleSheet.create({
    mainText: {
        fontSize:12,
        color:"#bbb",
    },
});


export default ForgotPassword;