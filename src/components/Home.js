import Hero from "./Hero";
import React from 'react';
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";

function Home() {
    return (
            <React.Fragment>
                <Hero/>
                <Highlights/>
                <Testimonials/>
            </React.Fragment>
    )           
}

export default Home;