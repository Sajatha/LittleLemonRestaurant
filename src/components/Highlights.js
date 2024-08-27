
import React from 'react';
import greekSalad from '../images/greek salad.jpg'; 
import bruchetta from '../images/bruchetta.jpeg'; 
import lemonDessert from '../images/lemon dessert.jpg'; 
import deliveryIcon from '../images/deliveryIcon.jpg'; 

function Highlights() {
    return(
        <header>
            <section className='menuBlock'>
                <div>
                    <button id="online-menu">Online Menu</button>
                </div>
                <h2 id='weeks-specials'>This weeks specials!</h2>

                <section className="specials">
                    <article className='items' id='item1'>
                        <img className='menu-image' id='greek-salad' src={greekSalad} alt='Greek Salad'></img>
                        <div className='itemBlock'>
                            
                            <h4 className='menu' id='dish'>Greek Salad</h4>
                            <h4 className='menu' id='price'>$12.99</h4>
                            <div className="main-p">
                                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                            </div>
                            <h4 className='menu' id='delivery'>Order a delivery</h4>
                            <img className='bike' src={deliveryIcon} alt='Delivery scooter icon'></img>
                        </div>
                    </article>
                    <article className='items' id='item2'>
                        <img className='menu-image' id='bruchetta' src={bruchetta} alt='Bruchetta'></img>
                        <div className='itemBlock'>
                            
                            <h4 className='menu' id='dish'>Bruchetta</h4>
                            <h4 className='menu' id='price'>$5.99</h4>
                            <div className="main-p">
                                <p>Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                            </div>
                            <h4 className='menu' id='delivery'>Order a delivery</h4>
                            <img className='bike' src={deliveryIcon} alt='Delivery scooter icon'></img>
                        </div>
                    </article>
                    <article className='items' id='item3'>
                        <img className='menu-image' id='dessert' src={lemonDessert} alt='Lemon dessert'></img>
                        <div className='itemBlock'>
                            
                            <h4 className='menu' id='dish'>Lemon Dessert</h4>
                            <h4 className='menu' id='price'>$5.00</h4>
                            <div className="main-p">
                                <p>This comes sttraight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                            </div>
                            <h4 className='menu' id='delivery'>Order a delivery</h4>
                            <img className='bike' src={deliveryIcon} alt='Delivery scooter icon'></img>
                        </div>
                    </article>
                </section>
            </section>
        </header>
        
    )

}

export default Highlights;


