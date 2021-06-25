import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const AddBlog = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState({})

    const onSubmit = data => {
        const blogData = {
            title: data.title,
            description: data.description,
            date: data.date,
            imageURL: imageURL
        }
        const url = 'http://localhost:5000/addBlog'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(blogData)
        })
            .then(res => console.log("server side response", res))

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
            <div className="shadow p-5 bg-light">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group w-85">
                        <input name="title" className="form-control" placeholder="Post title" ref={register} />
                    </div>
                    <div className="form-group w-85">
                        <input name="date" className="form-control" placeholder="Posted date" ref={register} />
                    </div>
                    <div className="form-group w-85">
                        <textarea name="description" id="" cols="44" rows="10" placeholder="Your post" ref={register}></textarea><br />
                    </div>
                    <div className="form-group w-75">
                        <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                    </div>
                    <input value="Submit" className="btn-style" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddBlog;