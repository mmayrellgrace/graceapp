import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import Contact from '../Items/ContactCard';

const ContactList = (props) => {
    return (
        <FlatList 
            style={styles.listContainer}
            data={props.contacts}//data must be an array
            renderItem={(info) => (
                <Contact 
                color="#602A7A"
                contactName={info.item.name}
                profileImage={info.item.profileImage}
                phone={info.item.phone}
                email={info.item.email}
                onItemPressed={() => props.onItemSelected(info.item.key)} 
                onItemDeleted={() => props.onItemDeleted(info.item.key)}/>
            )}
            />
    );
}

const styles = StyleSheet.create({
    listContainer: {
        width:"100%",
        padding:10,
      },
});

export default ContactList;
