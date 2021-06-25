import React from 'react';
import icon from '../../images/delete-icon.jpg';

const Delete = (props) => {
    const { title, _id } = props.blog
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log('deleted successfully', result)
            })
    }
    return (
        <div>
            <div className="d-flex justify-content-between">
                <div className="mt-3">
                    <ul>
                        <h5><li className="fw-bold">{title}</li></h5>
                    </ul>
                </div>
                <div>
                    <button onClick={() => handleDelete(_id)}><img style={{ width: "35px" }} src={icon} alt="" /></button>
                </div>
            </div>
        </div>
    );
};

export default Delete;