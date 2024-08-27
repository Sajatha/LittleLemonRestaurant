import React from 'react';
import david from '../images/david1.jpg';
import sunitha from '../images/sunitha.jpg';
import rasi from '../images/rasi.jpg';

function Testimonials() {
    return (
        <header>
            <h3 className='testimonial-heading'>Testimonials</h3>
            <section className='testimonials-container'>
                <article className='testimonials-block' id='block1'>
                    <img className='testimonial-img' src={david}></img>
                    <h3 className='testimonials-name'>David</h3>
                    <div className="stars">
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                    </div>
                    <p className='testimonial-p'>Awesome food , best service and beautiful place!! One of the best restaurants in town!! Go for it!!</p>
                </article>
                <article className='testimonials-block' id='block2'>
                    <img className='testimonial-img' src={sunitha}></img>
                    <h3 className='testimonials-name'>Sunitha</h3>  
                    <div className="stars">
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="no-star"></div>
                    </div> 
                    <p className='testimonial-p'>Fantastic food! It was very fresh and flavorful. We could tell it was just made for us. A little slow, but worth the wait. Yum!</p>
                </article>
                <article className='testimonials-block' id='block3'>
                    <img className='testimonial-img' src={rasi}></img>
                    <h3 className='testimonials-name'>Rashmika</h3>
                    <div className="stars">
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="no-star"></div>
                    </div>
                    <p className='testimonial-p'>Excellent Mediterranean restaurant. Wonderful flavors across all the dishes I've tried. BYOB. Liked: Food, Service, Atmosphere, Value</p>
                </article>
            </section>
        </header>
    )
}

export default Testimonials;