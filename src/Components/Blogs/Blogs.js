import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Blogs.css'

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('https://tranquil-crag-96287.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div id="blog">
            <div className="d-flex justify-content-center">
                <div className="text-center under-line">
                    <h2 className="text-color fw-bold trend-style">Recent Blogs</h2>
                </div>
            </div>
            {
                blogs.length === 0 && <div className="text-center">
                    <div class="spinner-border text-success" role="status">
                        <span class="visually-hidden"></span>

                    </div>
                    <p>...loading</p>
                </div>
            }

            <div className="row d-flex justify-content-center mt-4">
                {
                    blogs.map(blog => <Blog blog={blog} key={blog._id}></Blog>)
                }
            </div>

        </div>
    );
};

export default Blogs;