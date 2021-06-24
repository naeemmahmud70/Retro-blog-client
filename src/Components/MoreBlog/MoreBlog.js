import React from 'react';
import './MoreBlog.css'

const MoreBlog = (props) => {
    const { title, imageURL, date } = props.blog;
    return (
        <div className="">
            <div className="div-card d-flex  shadow">
                <div className="image-size mr-3">
                    <img src={imageURL} alt="" />
                </div>
                <div>
                    <h4>{title}</h4>
                    <h5>{date}</h5>
                </div>
            </div>
        </div>
    );
};

export default MoreBlog;