import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { PostedContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';


const AddBlog = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null)

    const [isPosted, setIsPosted] = useContext(PostedContext)

    const onSubmit = data => {
        const date = new Date();
        setIsPosted(true)
        const blogData = {
            title: data.title,
            description: data.description,
            date: date.toDateString(),
            imageURL: imageURL
        }
        const url = 'https://tranquil-crag-96287.herokuapp.com/addBlog'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(blogData)
        })
            .then(res => {
                if (res) {
                    setIsPosted(false)
                }
            })

    };

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'c27cdbd7f672caa5d177ddecda022824')
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="bg-light">
            <h4 className=" text-color fw-bold mt-2 p-2">Add Blog Post</h4>
            <hr />
            <div className="shadow px-5 p-2 bg-light">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group w-85">
                        <input name="title" className="form-control" placeholder="Post title" ref={register} />
                    </div>
                    <div className="form-group w-85">
                        <textarea name="description" id="" cols="44" rows="10" placeholder="Your post" ref={register}></textarea><br />
                    </div>
                    <div className="form-group w-75">
                        <label htmlFor="upload" className="image-upload-button fw-bold">Upload With Image <FontAwesomeIcon icon={faCloudUploadAlt} /></label>
                        <input id="upload" hidden="hidden" className="form control" type="file" onChange={handleImageUpload} />
                    </div>
                    {imageURL ? <input value="Submit" className="btn-style" type="submit" /> : <input value="Submit" type="submit" className="disable-btn" />}
                </form>
            </div>
        </div>
    );
};

export default AddBlog;