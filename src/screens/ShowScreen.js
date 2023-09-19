import React, { useContext } from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import { Context } from '../context/NotesContext'
import { EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {

    const { state } = useContext(Context)

    const note = state.find((note) => note.id === navigation.getParam('id'))

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{note.title}</Text>
            <Text style={styles.content}>{note.content}</Text>
        </View>
    )
}

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id')})}>
                <EvilIcons name="pencil" size={35} />
            </TouchableOpacity>
        ),
    };
}

const styles = StyleSheet.create({
    container: {
        fontSize:18,
        borderWidth:0.5,
        borderColor:'grey',
        borderRadius:6,
        marginBottom: 15,
        padding: 5,
        margin: 5,
    },
    title: {
        fontSize:20,
        marginBottom: 10,
        marginLeft: 5,
    },
    content:{
        fontSize:16,
        marginBottom: 10,
        marginLeft: 5,
    }
})

export default ShowScreen