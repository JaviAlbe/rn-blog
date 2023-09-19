import React, { useContext } from "react";
import { Context } from "../context/NotesContext";
import NotesForm from "../Components/NotesForm";

const CreateScreen = ({ navigation }) => {

    const { addNote } = useContext(Context)

    return <NotesForm onSubmit={(title, content) => {
        addNote(title, content, () => navigation.navigate('Index'))
    }}/>

}

export default CreateScreen