import MarioandAdrianA from '../images/MarioandAdrianA.jpg'; 
import MarioandAdrianb from '../images/MarioandAdrianb.jpg'; 
import background from '../images/chicago.jpg';
import React from 'react';

function About() {
    return(
        <section>
            <article className='chicago'>
                <h2 className='little-lemon'>Little Lemon</h2>
            </article>
            <aside className='image-1'>
                <img className='about-img' src={MarioandAdrianA}></img>
            </aside>
            <p className='left-p'>Mario and Adrian met during their college years at the Culinary Institute of America. Their shared love for cooking and Mediterranean cuisine quickly bonded them. Mario, whose family hailed from Italy, grew up immersed in the rich culinary traditions of the Mediterranean. Adrian, on the other hand, had spent his childhood summers in Greece, where he fell in love with the fresh, vibrant flavors of Greek cuisine. Their combined experiences and cultural backgrounds formed the perfect foundation for their dream.

After graduation, both friends worked in various restaurants, honing their skills and gaining valuable experience. Despite working in different parts of the city, they kept in touch and often discussed their dream of opening a Mediterranean restaurant. They envisioned a place where people could experience the diverse and flavorful dishes of the Mediterranean, from the savory tastes of Italian and Greek cuisine to the aromatic delights of Moroccan and Turkish dishes.</p>

            <aside className='image-2'>
                <img className='about-img' src={MarioandAdrianb}></img>
            </aside>
            <p className='right-p'>Transforming the space into Mediterranean Breeze was a labor of love. Mario and Adrian worked tirelessly, often late into the night, painting walls, installing fixtures, and decorating the interior. They chose a warm, earthy color palette inspired by the Mediterranean landscape, with terracotta tiles, wooden beams, and hand-painted murals depicting scenes from the region.

The heart of the restaurant, the kitchen, was equipped with state-of-the-art appliances and tools. Mario and Adrian meticulously selected each piece of equipment, ensuring that it met their high standards. They also handpicked a team of talented chefs and staff who shared their passion for Mediterranean cuisine and their commitment to excellence.</p>
            
        </section>
    )
}

export default About;