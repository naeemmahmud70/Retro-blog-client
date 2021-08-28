import React from 'react';
import defaultPic from '../../images/default-user.png'

const CommentsCard = ({ comment }) => {
    console.log(comment)
    return (
        <div className="p-3">
            <div className='d-flex align-items-center user-img'>
                <img src={defaultPic} alt="" />
                <div>
                    <h5 className="ml-3">{comment.name}</h5>
                </div>
            </div>
            <div className="ml-3">
                <p className="ml-5">{comment.comment}</p>
                <small className="ml-5 text-secondary">{comment.date}</small>
            </div>


        </div>
    );
};

export default CommentsCard;