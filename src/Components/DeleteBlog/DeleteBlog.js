import React, { useContext, useEffect, useState } from 'react';
import { DeletedContext, PostedContext } from '../../App';
import Delete from '../Delete/Delete';

const DeleteBlog = () => {
    const [blogs, setBlogs] = useState([])
    const [isPosted, setIsPosted] = useContext(PostedContext);
    const [isDeleted, setIsDeleted] = useContext(DeletedContext);

    useEffect(() => {
        fetch(`https://tranquil-crag-96287.herokuapp.com/blogs`)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [isPosted, isDeleted])
    return (
        <div className="bg-light">
            <h4 className="fw-bold mt-2 p-2 text-color">Delete Blog Post</h4>
            <hr />
            <div className="d-flex justify-content-between">
                <div className="ml-5">
                    <h5 className="fw-bold">Blogs List</h5>
                </div>
                <div className="mr-5">
                    <h5 className="text-danger fw-bold">Action</h5>
                </div>
            </div>
            <div className="shadow p-5 bg-light">
                {
                    blogs.map(blog => <Delete blog={blog} key={blog._id}></Delete>)
                }
            </div>
        </div>
    );
};

export default DeleteBlog;