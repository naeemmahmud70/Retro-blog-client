import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./Header.css"
import bannerImg from '../../../images/blogging-fun-content-creation-online-streaming-video-blog-young-girl-making-selfie-social-network-sharing-feedback-self-promotion-strategy_335657-2386.jpg'

const Header = () => {
    return (
        <div className="row mt-5">
            <Navbar></Navbar>
            <div className="col-md-6 d-flex align-items-center">
                <div className="header-text">
                    <h1 className="text-color font-style fw-bold mb-5">Fashion World Blogs</h1>
                    <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, corrupti.
                         Autem incidunt molestiae id sapiente quas deleniti qui placeat animi.</h5>
                         <button className="learn-more-btn">Learn More...</button>
                </div>

            </div>
            <div className="col-md-6 ">
                <img className="img-fluid" src={bannerImg} alt="" />
            </div>

        </div>
    );
};

export default Header;