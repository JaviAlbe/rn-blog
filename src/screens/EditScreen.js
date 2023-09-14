import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../Components/BlogPostForm";


const EditScreen = ({ navigation }) => {

    const { state, editBlogPost } = useContext(Context)

    const blogPostId = navigation.getParam('id')

    const blogPost = state.find((blogPost) => blogPost.id === blogPostId)

    return <BlogPostForm
        initialValues={{ title: blogPost.title, content: blogPost.content }}
        onSubmit={(newTitle, newContent) => editBlogPost(blogPostId, newTitle, newContent, () => navigation.pop())} />
}


export default EditScreen