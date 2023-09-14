import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../Components/BlogPostForm";


const EditScreen = ({ navigation }) => {

    const { state } = useContext(Context)

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'))

    return <BlogPostForm
        initialValues={{ title: blogPost.title, content: blogPost.content }}
        onSubmit={(newTitle, newContent) => console.log(newTitle, newContent)} />
}


export default EditScreen