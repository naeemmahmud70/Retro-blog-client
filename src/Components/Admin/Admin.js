import React from 'react';
import AddBlog from '../AddBlog/AddBlog';
import DeleteBlog from '../DeleteBlog/DeleteBlog';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';
import "./Admin.css"

const Admin = () => {
    return (
        <div className="row mt-5">
            <Navbar></Navbar>
            <div className="col-md-6">
                <AddBlog></AddBlog>
            </div>
            <div className="col-md-6">
                <DeleteBlog></DeleteBlog>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Admin;