import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__left">
                <div className="footer__logo">
                    <h2>
                        <Link to={'/'} className="link logo_green">Dr.Sreelakshmi clinic</Link>
                    </h2>
                </div>

            </div>
            <div className="footer__middle">
                <div className="footer__heading">
                    <h3>Links</h3>
                </div>
                <Link to={'/about'} className="link">About</Link>
                <Link to={'/contact'} className="link">Contact us</Link>
            </div>
            <div className="footer__right">
                <div className="footer__heading">
                    <h3>Connect with us</h3>
                </div>
                <p>Tel: +919847532286</p>
                <p>First floor, Maruthi complex, SFS 407, 4t phase, Yelahanka New town, Bangalore 560064</p>
                <div className="footer__right__socialmedia">
                    <a href="https://www.instagram.com"><FaFacebook/></a>
                    <a href="https://www.facebook.com"><FaInstagram/></a>
                    <a href="https://www.twitter.com"><FaTwitter/></a>
                </div>
            </div>
        </div>
    )
}

export default Footer
