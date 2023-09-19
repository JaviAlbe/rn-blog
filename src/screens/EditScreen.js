import React, { useContext } from "react";
import { Context } from "../context/NotesContext";
import NotesForm from "../Components/NotesForm";

const EditScreen = ({ navigation }) => {

    const { state, editNote } = useContext(Context)

    const noteId = navigation.getParam('id')

    const note = state.find((blogPost) => blogPost.id === noteId)

    return <NotesForm
        initialValues={{ title: note.title, content: note.content }}
        onSubmit={(newTitle, newContent) => editNote(noteId, newTitle, newContent, () => navigation.pop())} />
}

export default EditScreen