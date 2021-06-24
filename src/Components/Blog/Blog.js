import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css'

const Blog = (props) => {
    const {_id, title, description, imageURL, date} = props.blog
    console.log(props.blog)
    return (
        <div>
            <div className="blog-card shadow">
                <Link to= {"/blog/"+_id}><img src={imageURL} alt=""/></Link>
                <h2>{title}</h2>
                <h5>Posted Date: {date}</h5>
            </div>
        </div>
    );
};

export default Blog;