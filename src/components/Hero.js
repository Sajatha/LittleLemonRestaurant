import React from 'react';
import restauranfood from '../images/restauranfood.jpg'; 

function Hero() {
    return(
        <main>
            <section className="hero-section">
                <aside>
                    <img id="hero-img" src={restauranfood} alt="Platter of Tuna Bread"></img>
                </aside>
                <article id='hero-block'>
                    <h3>Little Lemon</h3>
                    <h2>Chicago</h2>
                    <p id='hero-p'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button id="reserve-table-btn">Reserve a Table</button>
                </article>
                
                
            </section>
        </main>
    )

}

export default Hero;
