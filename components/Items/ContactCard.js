import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { white } from 'ansi-colors';

const Contact = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View elevation={5} style={[styles.listItem, {position:'relative',height:180, marginTop:20,}]}>
            <View elevation={2} style={{position:'absolute',
                                        marginTop:-20,                                         shadowColor: "#333333",
                                        shadowOpacity: 0.2,
                                        shadowRadius: 4,
                                        shadowOffset: {
                                        height: 0,
                                        width: 0
                                        }}}>
                <Image style={styles.profileImage} resizeMode="cover" source={props.profileImage} />
            </View>
            <View style={styles.textContainer}>
                <Text style={[styles.listText, {marginBottom:2,marginTop:8,textAlign:'center'}]}>{props.contactName.toUpperCase()}</Text>
                <Text style={[styles.text, {color:"#999",marginBottom:8,fontSize:13,textAlign:'center'}]}>{props.phone}</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:"center",
                            backgroundColor:"#f6f6f6",
                            borderBottomLeftRadius:6,borderBottomRightRadius:6}}>
                    <View style={[styles.iconTextContainer, ]}> 
                        <TouchableOpacity onPress={props.onPressTest}>
                        <View style={styles.buttonContainer}>
                        <View style={{marginRight:4,}}>
                            <MaterialIcons size={14} name="error" color={props.color} />
                        </View>
                        <Text style={[styles.text, {color:props.color}]}>test alert</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                   
                    <View style={[styles.iconTextContainer, {justifyContent:"flex-end",}]}> 
                        <TouchableOpacity onPress={props.onPressDelete}>
                        <View style={styles.buttonContainer}>
                        <View style={{marginRight:4,}}>
                            <MaterialIcons size={14} name="delete" color={props.color} />
                        </View>
                        <Text style={[styles.text, {color:props.color}]}>delete</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        paddingTop:10,
        marginBottom:10,
        backgroundColor:"#FFF",
        flexDirection:"column",
        alignItems:"center",
        borderRadius:5,
        shadowColor: "#333333",
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: {
        height: 0,
        width: 0
        }
    },
    profileImage: {
        width:120,
        height:120,
        overflow:'hidden',
        borderRadius:60,
        borderWidth:5,
        borderColor:'white',

    },
    listText: {
        color:"#35B5AF",
        fontSize:20,
        textAlign:'center',
    },
    textContainer:{
        flex:1,
        flexDirection:"column", 
        justifyContent:"flex-end"
    },
    iconTextContainer:{
        width:"50%",
        padding:5,
        flexDirection:"row",
    },
    buttonContainer:{
        flexDirection:"row",
        alignItems:"center", 
        padding:2,
    },
    text: {
        color:'#999',
        fontSize:14,
        lineHeight:12,
        fontWeight:"300",

    }
});

export default Contact;