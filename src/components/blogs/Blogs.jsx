import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div>
            <h1>Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog blog = {blog} key={blog.id}></Blog>)
            }
        </div>
    );
};

export default Blogs;