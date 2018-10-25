import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native';
import HeadingText from './../../components/UI/HeadingText';
import ActionButton from './../../components/UI/ActionButtonCircle';
import LogoTitle from './../../components/UI/LogoTitle';

class Disclaimer extends Component {
    render () {
        return(
            <View style={{flex:1,alignItems:"center",backgroundColor:"#35B5AF", justifyContent:"space-between"}}>
            <View style={{width:"100%"}}>
                 <View style={{width:"100%",alignItems:"center",height:150,}}>
                    <LogoTitle backgroundSize={130} imageSize={110} radius={65} />
                </View>
             <View style={{ paddingLeft:30,paddingTop:20,paddingRight:30}}>
               <HeadingText heading="Disclaimer" style={{color:"white"}}/>
               <Text style={{textAlign:"left", fontSize:13}}>
                    Legal unum Mauris non tempor quam, et lacinia sapien. Mauris accumsan 
                   eros eget libero posuere vulputate. Etiam elit elit, elementum sed 
                   varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia 
                   dui sed, ultricies sapien. Pellentesque orci lectus, consectetur 
                   vel posuere posuere, rutrum eu ipsum. Aliquam eget odio sed ligula 
                   iaculis consequat at eget orci. Mauris molestie sit amet metus 
                   mattis varius. Donec sit amet ligula eget nisi sodales egestas. 
                   Aliquam interdum dolor aliquet dolor sollicitudin fermentum. Donec 
                   congue lorem a molestie bibendum. Etiam nisi ante, consectetur eget 
                   placerat a, tempus a neque. Donec ut elit urna. Etiam venenatis 
                   eleifend urna eget scelerisque. Aliquam in nunc quis dui sollicitudin 
                   ornare ac vitae lectus.
                </Text>
            </View> 
            </View>
            <View style={{backgroundColor:"white", height:80,flex:0,
                        flexDirection:"row", 
                        justifyContent:"center",
                        alignItems:"center", width:"100%"}}>
                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Auth')} >
                    <View>
                    <Text style={{fontSize:18,textAlign:"center"}}>Agree and Continue</Text>
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.btnActionMenu}>
                <ActionButton elevation={5} 
                                size={25}
                                style={{marginRight:5}}
                                color="white" 
                                background="#602A7A" 
                                icon="chevron-right" 
                                onPress={() => this.props.navigation.navigate('Auth')} />
                </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    btnActionMenu: {
        position:"absolute",
        zIndex:10, 
        margin:10,
        right: 0, 
        bottom: 0, 
        padding:10, 
      },
    font:{

    },
});

export default Disclaimer;