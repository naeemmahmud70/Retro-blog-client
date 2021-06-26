import React from 'react';
import Blogs from '../Blogs/Blogs';
import PopularBlogs from '../PopularBlogs/PopularBlogs';
import Header from './Header/Header';

const Home = () => {
    return (
        <div className="">
            <Header></Header>
            <Blogs></Blogs>
            <PopularBlogs></PopularBlogs>
        </div>
    );
};

export default Home;