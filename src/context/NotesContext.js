import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

//Where state is the current list of notes
const notesReducer = (state, action) => {
    switch (action.type) {

        case 'get_notes':
            return action.payload

        case 'delete_notes':
            return state.filter((note) => note.id !== action.payload )

        case 'edit_note':
            //We map through all the current notes to find the one with the correct ID.
            return state.map((note) => {
                //If the id is found, replace and return the edited note
                return note.id === action.payload.id ? action.payload : note
            })
        default:
            return state
    }
}

const getNotes = dispatch => {
    return async () => {
        const response = await jsonServer.get('/notes')
        dispatch({ type: 'get_notes', payload: response.data })
    }
}

const addNote = (dispatch) => {
    return async (title, content, callback) => {
        //to add a note in the server we use the post() method
        await jsonServer.post('/notes', {title, content})
        if (callback){
            callback()
        }
    }
}

const editNote = dispatch => {
    return async (id, title, content, callback) => {
        //to remove a note in the server we use delete() method
        await jsonServer.put(`/notes/${id}`, { title, content})

        dispatch({ type:'edit_note', payload: { id, title, content } })
        if(callback){
            callback()
        }
    }
}

const deleteNote = (dispatch) => {
    return async (id) => {
        //To edit a note we use the put() method
        await jsonServer.delete(`/notes/${id}`)

        dispatch({ type: 'delete_note', payload: id})
    }
}

export const { Context, Provider } = createDataContext(notesReducer,
    {addNote, deleteNote, editNote, getNotes},
    [])

