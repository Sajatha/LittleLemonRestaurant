import React from "react";
import logo from '../images/logo.jpg'; 
import {
    FiFacebook,
    FiInstagram,
    FiLinkedin,
    FiTwitter,
    FiYoutube
} from "react-icons/fi";


const socialLinks = [
    {
        id: 1,
        icon: <FiTwitter size={25} stroke="#495e57"></FiTwitter>,
        url: "https://x.com/home?lang=en"
    },
    {
        id: 2,
        icon: <FiFacebook size={25} stroke="#495e57"></FiFacebook>,
        url: "https://www.facebook.com/"
    },
    {
        id: 3,
        icon: <FiYoutube size={25}  stroke="#495e57"></FiYoutube>,
        url: "https://www.youtube.com/"
    },
    {
        id: 4,
        icon: <FiInstagram size={25} stroke="#495e57"></FiInstagram>,
        url: "https://www.instagram.com/"
    },
    {
        id: 5,
        icon: <FiLinkedin size={25} stroke="#495e57" ></FiLinkedin>,
        url: "https://www.linkedin.com/feed/"
    }
];

function Footer() {
    return (
        <section className="footer-main">
            <img id="logo" src={logo} alt="Little Lemon logo"></img>
            <div className="address">
                <h4>Contact us</h4>
                <p>1198 Parrill Court, Chicago</p>
                <p>+1 219-670-7211</p>
                <p>little@lemon.com</p>
            </div>
            <div className="social">
                <h4>Follow us on</h4>
                {socialLinks.map((link) => (
                    <a  id="social-icons"
                        href={link.url}
                        key={link.id}
                    >{link.icon}</a>
                ))}
            </div>
        </section>
    )
}

export default Footer;