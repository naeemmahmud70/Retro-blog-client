import React from 'react';
import { Link } from 'react-router-dom';
import PopularBlogCard from '../PopularBlogCard/PopularBlogCard';
import './PopularBlogs.css'

const PopularBlogs = () => {
    const blogsData = [
        {
            id: 1,
            img: "https://i.postimg.cc/DZkfFMpp/blog-list-img-56.jpg",
            title: "Fashion news: trends to wear right away",
            date: "June 26, 2021"

        },
        {
            id: 2,
            img: "https://i.postimg.cc/N0TYNxG6/blog-list-img-57.jpg",
            title: "Learn how to enjoy spending time alone",
            date: "June 26, 2021"

        },
        {
            id: 3,
            img: "https://i.postimg.cc/R0rxnn1N/blog-list-img-58.jpg",
            title: "Natural makeup trends for pale skin ",
            date: "June 26, 2021"

        }
    ]
    return (
        <div className="row mt-5">
            <div className="d-flex justify-content-center">
                <div className="text-center under-line">
                    <h2 className="fw-bold text-color text-center trend-style">New trend for your Fashion</h2>
                </div>
            </div>
            <div className="col-md-5">
                <div className="p-5">
                    <h2>New deal looks for any type of weather </h2>
                    <p className="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil optio minus modi mollitia molestiae aperiam! Cupiditate inventore cum illum, nemo quae aperiam dolores consectetur enim, dolorem officiis accusantium neque iusto fugit maxime doloremque? Reiciendis animi consequuntur dicta veritatis delectus temporibus voluptatibus vitae pariatur nobis quia aspernatur aut non culpa, minus ex, quo ipsa dolorum, ut quam distinctio maiores molestiae. Perspiciatis delectus sequi, minus dicta reprehenderit, explicabo voluptatem consectetur aliquid expedita rem est placeat! Laborum, voluptates. Obcaecati ea temporibus quaerat ad, possimus quibusdam exercitationem corporis sint laudantium! Minima voluptatibus, maiores repellat quod facilis ab! Eius officia doloremque quo quam! Dignissimos, hic.</p>
                    <Link to="/moreNewLook"><button className='learn-btn'><h5>Learn More...</h5></button></Link>
                </div>
            </div>
            <div className="col-md-7 mt-4">
                <div className="row d-flex justify-content-center">
                    <div className="d-flex justify-content-center">
                        <div className="text-center under-line">
                            <h2 className="fw-bold mt-4">Popular Blogs</h2>
                        </div>
                    </div>
                    {
                        blogsData.map(blog => <PopularBlogCard blog={blog} key={blog.id}></PopularBlogCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PopularBlogs;