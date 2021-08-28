import React from 'react';
import './PopularBlogCard.css'

const PopularBlogCard = (props) => {
    const { title, img, date } = props.blog;
    return (
        <div className="Blog-card d-flex shadow p-2">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="ml-5">
                <h4>{title}</h4>
                <h5>{date}</h5>
            </div>
        </div>
    );
};

export default PopularBlogCard;