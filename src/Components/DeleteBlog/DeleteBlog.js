import React, { useEffect, useState } from 'react';
import Delete from '../Delete/Delete';

const DeleteBlog = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch(`https://tranquil-crag-96287.herokuapp.com/blogs`)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="bg-light">
            <h4 className="fw-bold mt-2 p-2 text-color">Delete Blog Post</h4>
            <hr />
            <div className="d-flex justify-content-between">
                <div className="ml-5">
                    <h3 className="fw-bold">Blogs List</h3>
                </div>
                <div className="mr-5">
                    <h3 className="text-danger fw-bold">Action</h3>
                </div>
            </div>
            <div className="shadow p-5 bg-light">
                {
                    blogs.map(blog=> <Delete blog={blog} key={blog._id}></Delete>)
                }
            </div>
        </div>
    );
};

export default DeleteBlog;