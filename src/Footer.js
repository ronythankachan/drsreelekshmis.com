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
                <a href="/about">About</a>
                <a href="/contact">Contact us</a>
            </div>
            <div className="footer__middle">
                <div className="footer__heading">
                    <h3>SERVICES</h3>
                </div>
                <a href="/shop">Order medicines</a>
                <a href="/panchakarma">Panchakarma</a>
                <a href="/marma_therapy">Marma Therapy</a>
                <a href="/post_delivery_care">Post delivery care</a>
                <a href="/swarna_prashana">Svarna prashana</a>
                <a href="/yoga">Yoga</a>
            </div>
            <div className="footer__right">
                <div className="footer__heading">
                    <h3>CONNECT WITH US</h3>
                </div>
                <p>Tel: +919847532286</p>
                <p>First floor, Maruthi complex, SFS 407, 4t phase, Yelahanka New
town, Bangalore 560064</p>
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
