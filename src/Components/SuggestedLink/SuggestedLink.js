import React from 'react';
import './SuggestedLink.css'

const SuggestedLink = () => {
    return (
        <div className="row p-5">
            <h2 className="fw-bold text-color mb-3 text-center trend-style">New trend for your Fashion</h2>
            <div className="col-md-5">
                <div className="mt-3">
                    <h2>New deal looks for any type of weather </h2>
                    <p className="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil optio minus modi mollitia molestiae aperiam! Cupiditate inventore cum illum, nemo quae aperiam dolores consectetur enim, dolorem officiis accusantium neque iusto fugit maxime doloremque? Reiciendis animi consequuntur dicta veritatis delectus temporibus voluptatibus vitae pariatur nobis quia aspernatur aut non culpa, minus ex, quo ipsa dolorum, ut quam distinctio maiores molestiae. Perspiciatis delectus sequi, minus dicta reprehenderit, explicabo voluptatem consectetur aliquid expedita rem est placeat! Laborum, voluptates. Obcaecati ea temporibus quaerat ad, possimus quibusdam exercitationem corporis sint laudantium! Minima voluptatibus, maiores repellat quod facilis ab! Eius officia doloremque quo quam! Dignissimos, hic.</p>
                    <button className='learn-btn'><h5>Learn More...</h5></button>
                </div>
            </div>
            <div className="col-md-7 mt-3">
               
               <h5> LIFE-SAVING HACKS FROM UNWANTED PROBLEMS || Beauty Ideas And Fashion Tips by 5-Minute DECOR!</h5>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/4ORYovUEdhs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    );
};

export default SuggestedLink;