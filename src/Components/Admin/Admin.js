import React from 'react';
import AddBlog from '../AddBlog/AddBlog';
import DeleteBlog from '../DeleteBlog/DeleteBlog';
import "./Admin.css"

const Admin = () => {
    return (
        <div className="row">
            <div className="col-md-6">
                <AddBlog></AddBlog>
            </div>
            <div className="col-md-6">
                <DeleteBlog></DeleteBlog>
            </div>
        </div>
    );
};

export default Admin;