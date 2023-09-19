import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/NotesContext'
import { Feather, FontAwesome } from '@expo/vector-icons'

const IndexScreen = ({ navigation }) => {

    //We destructure the objects from the context reducer we will use in this component
    const { state, deleteNote, getNotes } = useContext(Context);

    //We call getNotes only once, hence the empty array of useEffect
    useEffect(() => {
        getNotes()
        //every time IndexScreen is on focus, we will execute this callback function
        const listener = navigation.addListener('didFocus', ()=> {
            getNotes()
        })

        //This return function inside useEffect will trigger when this component is unmounted
        return () => {
            //We will use this to clear any listener
            listener.remove()
        }
    }, [])

    return (
            <View>
                <FlatList
                    data={state}
                    keyExtractor={(note) => note.title}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                                <View style={styles.row}>
                                    <View style={styles.iconContainer}>
                                        <FontAwesome style={styles.icon} name="sticky-note" size={20} />
                                    </View>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <TouchableOpacity onPress={() => deleteNote(item.id)}>
                                        <Feather style={styles.icon} name='trash' />
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
    );
};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="plus" size={30} />
            </TouchableOpacity>
        ),
    };
}

const styles = StyleSheet.create({
    row: {
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical: 20,
        paddingHorizontal:10,
        borderTopWidth:1,
        borderColor:'grey'
    },
    iconContainer: {

    },
    title: {
        flex: 3,
        marginStart: 16,
        marginEnd: 16,
        fontSize:18,
    },
    icon: {
        flex: 1,
        fontSize: 24,
    }
});

export default IndexScreen;