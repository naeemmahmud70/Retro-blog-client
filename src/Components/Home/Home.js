import React from 'react';
import Blogs from '../Blogs/Blogs';
import SuggestedLink from '../SuggestedLink/SuggestedLink';
import Header from './Header/Header';

const Home = () => {
    return (
        <div className="">
            <Header></Header>
            <Blogs></Blogs>
            <SuggestedLink></SuggestedLink>
        </div>
    );
};

export default Home;