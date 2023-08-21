import React, { useState } from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {

    const [blogPosts, setBlogPosts] = useState([])

    const addBlogPost = () => {
        //takes the current blogPosts and adds another post at the end of the array
        setBlogPosts([
            ...blogPosts ,
            { title: `Blog Post #${blogPosts.length + 1}`}])
    }

    return (
        <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContext;

