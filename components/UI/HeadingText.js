import React from 'react';
import { Text, StyleSheet } from 'react-native';

const headingText = props => (
    <Text 
        {...props} 
        style={[styles.heading, props.style]}>
        {props.heading}
    </Text>
);

const styles = StyleSheet.create({
    heading: {
        //fontFamily:'RobotoSlab-Regular',
        fontSize:24,
        color: "#35B5AF",
        fontWeight:"300",
        
    }
})

export default headingText;