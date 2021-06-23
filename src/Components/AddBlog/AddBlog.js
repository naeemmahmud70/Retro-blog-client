import React from 'react';
import { useForm } from "react-hook-form";


const AddBlog = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    const handleImageUpload=(event)=>{
        console.log(event)
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
                        <input date="title" className="form-control" placeholder="Posted date" ref={register} />
                    </div>
                    <div className="form-group w-85">
                    <textarea description="description" id="" cols="44" rows="10" placeholder="Your post" ref={register}></textarea><br />
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