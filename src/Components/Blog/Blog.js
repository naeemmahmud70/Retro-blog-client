import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css'

const Blog = (props) => {
    const { _id, title, imageURL, date } = props.blog
    return (
        <div className="col-md-5">
            <div className="blog-card shadow">
                <div className="text-center">
                    <Link to={"/blog/" + _id}><img className="img-fluid blog-img" src={imageURL} alt="" /></Link>
                </div>
                <div className="p-4">
                    <h2>{title}</h2>
                    <h5>Posted Date: {date}</h5>
                </div>
            </div>
        </div>
    );
};

export default Blog;