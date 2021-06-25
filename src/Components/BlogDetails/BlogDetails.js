import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MoreBlog from '../MoreBlog/MoreBlog';
import './BlogDetails.css'

const BlogDetails = () => {
    const [details, setDetails] = useState({})
    const [moreBlog, setMoreBlog] = useState([])
    const { title, description, imageURL, date } = details;

    const { id } = useParams()
    useEffect(() => {
        fetch('https://tranquil-crag-96287.herokuapp.com/blog/' + id)
            .then(res => res.json())
            .then(data => setDetails(data))

    }, [id])

    useEffect(() => {
        fetch('https://tranquil-crag-96287.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setMoreBlog(data))

    }, [])

    return (
        <div className="row mt-5">
            <div className="col-md-7 right-border">
                <div className="text-center bg-dark">
                    <img className="img-fluid" src={imageURL} alt="" />
                </div>
                <div className="container">
                    <h2>{title}</h2>
                    <h5>Date Posted: {date}</h5>
                    <p className="text-justify">{description}</p>
                </div>
            </div>
            <div className="col-md-5">
                <h2 className="fw-bold p-2 text-color">More blogs for you-</h2>
                <div>
                    {
                        moreBlog.map(blog => <MoreBlog blog={blog} key={blog._id}></MoreBlog>)
                    }
                </div>
            </div>


        </div>
    );
};

export default BlogDetails;