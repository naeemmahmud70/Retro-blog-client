import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import CommentsCard from '../ComentsCard/CommentsCard';
import './PostComment.css'

const PostComment = () => {

    const { register, handleSubmit, reset } = useForm();
    const [comments, setComments] = useState([]);
    const [isCommented, setIsCommented] = useState(false)

    const onSubmit = (data) => {
        setIsCommented(true)
        const date = new Date()
        const commentData = {
            name: data.name,
            comment: data.comment,
            date: date.toDateString()
        }
   
        const url = 'https://tranquil-crag-96287.herokuapp.com/addComment'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(commentData)
        })
            .then(res => {
                if (res) {
                    reset();
                }
                setIsCommented(false)
            })
    };

    useEffect(() => {
        fetch('https://tranquil-crag-96287.herokuapp.com/comments')
            .then(res => res.json())
            .then(data => setComments(data))
    }, [isCommented])

    return (
        <div className="row comment-section p-2">
            <form className="col-md-8" onSubmit={handleSubmit(onSubmit)}>
                <div className='form-group col-md-8'>
                    <input name='name' className="form-control" type="text" placeholder="Your name" ref={register} />
                </div>
                <div className="form-group d-flex align-items-end mx-3">
                    <textarea name="comment" className="comment-box form-control" cols="50" rows="5" placeholder="comment here..." ref={register}></textarea><br />
                    <input value="Comment" className="btn-style ml-2" type="submit" />
                </div>
            </form>
            <div>
                {
                    comments.map(comment => <CommentsCard comment={comment} key={comment._id}></CommentsCard>)
                }
            </div>
        </div>
    );
};

export default PostComment;