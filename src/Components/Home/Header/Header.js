import React from 'react';
import "./Header.css"
import bannerImg from '../../../images/blogging-fun-content-creation-online-streaming-video-blog-young-girl-making-selfie-social-network-sharing-feedback-self-promotion-strategy_335657-2386.jpg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="banner-img bg-light">
            <div className="row">
                <div className="col-md-6 d-flex align-items-center">
                    <div className="header-text">
                        <h1 className="text-color font-style fw-bold mb-3">RETRO BLOG WORLD</h1>
                        <h3 className="text-color font-style fw-bold mb-3">You can make yourself brand </h3>
                        <h5 className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, dolores excepturi cumque fuga quidem quae facilis consectetur corrupti sapiente doloribus distinctio at rem nisi eveniet, impedit minus, porro voluptas iusto praesentium voluptatem maxime voluptatibus perspiciatis est. Quisquam tempore dolores incidunt deserunt eaque, error inventore similique vitae ratione omnis corrupti? Unde!</h5>
                        <Link to="/about"><button className="learn-more-btn mt-2">Learn More...</button></Link>
                    </div>

                </div>
                <div className="col-md-6 text-center">
                    <img className="img-fluid" src={bannerImg} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Header;