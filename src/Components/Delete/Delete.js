import React, { useContext } from 'react';
import { DeletedContext } from '../../App';
import icon from '../../images/delete-icon.jpg';

const Delete = (props) => {
    const { title, _id } = props.blog;
    const [isDeleted, setIsDeleted] = useContext(DeletedContext)

    const handleDelete = (id) => {
        setIsDeleted(true)
        fetch(`https://tranquil-crag-96287.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    setIsDeleted(false)
                }
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