import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg'; 

function Nav() {
    useEffect(() => {
        const navToggle = document.querySelector('#navToggle');
        const nav = document.querySelector('nav');
        const navIcon = document.querySelectorAll('.navIcon');
        const hamburger = document.querySelector('#hamburger');

        const navToggleClick = () => {
            nav.classList.toggle('open');
            navIcon.forEach(icon => {
                icon.classList.toggle('hidden');
            })
        };

        const resizer = () => {
            if(document.body.clientWidth > 720) {
                nav.classList.remove('open');
                navIcon.forEach(icon => {
                    icon.classList.add('hidden');
                });
                hamburger.classList.remove('hidden');
            }
        };

        navToggle.addEventListener("click", navToggleClick);
        window.addEventListener("resize", resizer);

        return () => {
            navToggle.removeEventListener('click', navToggleClick);
            window.removeEventListener("resize", resizer);
        }

    },[])


    return(
        <header>
            <div className="container">
                <div>
                    <img id="logo-nav" src={logo} alt="Little Lemon logo"></img>
                    <div className='nav-toggle' id='navToggle'>
                        <img id="hamburger" className="navIcon" src="https://www.richardmiddleton.me/wp-content/themes/richardcodes/assets/img/hamburger.svg" alt="hamburger menu"></img>
                        <img id="close" className="navIcon hidden" src="https://www.richardmiddleton.me/wp-content/themes/richardcodes/assets/img/close.svg" alt="close hamburger"></img>
            
                    </div>
                </div>
                <nav className='navigation'>
                    <ul className='nav-list'>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/'>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/bookings'>Bookings</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/about'>About</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/order-online'>Order Online</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/login'>Login</Link>
                        </li>
                    </ul>   
                </nav>
            </div>    
        </header>
    )
}

export default Nav;
