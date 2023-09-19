import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button, Dimensions } from "react-native";

const NotesForm = ({ onSubmit, initialValues}) => {

    const [title, setTitle] = useState(initialValues.title)
    const [content, setContent] = useState(initialValues.content)

    return(
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput style={styles.titleInputBox} value={title} onChangeText={(text) => setTitle(text)}/>
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput
                style={styles.contentInputBox}
                value={content} onChangeText={(text) => setContent(text)}
                multiline = {true}/>
            <Button
                title='Submit'
                onPress={() => onSubmit(title, content)}
            />
        </View>
    )
}

NotesForm.defaultProps = {
    initialValues : {
        title: '',
        content: ''
    }
}

const styles = StyleSheet.create({
    titleInputBox: {
        fontSize:18,
        borderWidth:0.5,
        borderRadius: 6,
        borderColor:'grey',
        marginBottom: 15,
        padding: 5,
        margin: 5,
    },
    contentInputBox: {
        fontSize:18,
        borderWidth:0.5,
        borderRadius: 6,
        borderColor:'grey',
        marginBottom: 15,
        padding: 5,
        margin: 5,
    },
    label: {
        fontSize:20,
        marginBottom: 10,
        marginLeft: 5,
    }
})

export default NotesForm