import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Blogs.css'

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div id="blog">
            <div className="text-center">
                <h2 className="text-color fw-bold trend-style">Recent Blogs</h2>
            </div>
        <div className="div-flex-style">
            {
                blogs.map(blog => <Blog blog={blog} key={blog._id}></Blog>)
            }
        </div>
        </div>
    );
};

export default Blogs;