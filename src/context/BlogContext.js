import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

//Where state is the current list of blog posts
const blogReducer = (state, action) => {
    switch (action.type) {

        case 'get_blogposts':
            return action.payload

        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload )

        case 'add_blogpost':
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 99999),
                    title: action.payload.title,
                    content: action.payload.content
                }
            ]

        case 'edit_blogpost':
            //We map through all the current blog posts to find the one with the correct ID.
            return state.map((blogPost) => {
                //If the id is found, replace and return the edited blogpost
                return blogPost.id === action.payload.id ? action.payload : blogPost
            })
        default:
            return state
    }
}

const getBlogPosts = dispatch => {
    return async () => {
        const response = await jsonServer.get('/blogposts')
        dispatch({ type: 'get_blogposts', payload: response.data })
    }
}

const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
        //to add a blog in the server we use the post() method
        await jsonServer.post('/blogposts', {title, content})
        if (callback){
            callback()
        }

        //locally adding a blog post
        // dispatch({ type: 'add_blogpost', payload: { title, content } })
        // callback()
    }
}

const editBlogPost = dispatch => {
    return (id, title, content, callback) => {
        dispatch({ type:'edit_blogpost', payload: { id, title, content } })
        callback()
    }
}

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id})
    }
}

export const { Context, Provider } = createDataContext(blogReducer,
    {addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts},
    [])

