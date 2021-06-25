import React from 'react';
import "./Header.css"
import bannerImg from '../../../images/blogging-fun-content-creation-online-streaming-video-blog-young-girl-making-selfie-social-network-sharing-feedback-self-promotion-strategy_335657-2386.jpg'

const Header = () => {
    return (
        <div className="banner-img">
        <div className="row mt-5">
            <div className="col-md-6 d-flex align-items-center">
                <div className="header-text">
                    <h1 className="text-color font-style fw-bold mb-5">Retro Blogs World</h1>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, dolores excepturi cumque fuga quidem quae facilis consectetur corrupti sapiente doloribus distinctio at rem nisi eveniet, impedit minus, porro voluptas iusto praesentium voluptatem maxime voluptatibus perspiciatis est. Quisquam tempore dolores incidunt deserunt eaque, error inventore similique vitae ratione omnis corrupti? Unde!</h5>
                         <button className="learn-more-btn mt-2">Learn More...</button>
                </div>

            </div>
            <div className="col-md-6 ">
                <img className="img-fluid" src={bannerImg} alt="" />
            </div>

        </div>
        </div>
    );
};

export default Header;