import React from 'react';
import './Hero.css';
import HeroVideo from './video/hero_background.mp4';
import {Link} from 'react-router-dom';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__video">
                <video autoPlay loop muted>
                    <source src={HeroVideo} type="video/mp4"/>
                </video>
            </div>
            <div className="hero__title">
                <h1>Authentic kerala ayurveda clinic</h1>
                <h4>An ayurveda care center offers authentic treatments and stuff</h4>
                <div className="hero__buttons">
                    <button><Link to={'/shop'} className="link">Buy medicines online</Link></button>
                    <button><Link to={'/book_appointment'} className="link">Schedule a home appointment</Link></button> 
                </div>
            </div>
        </div>
    )
}

export default Hero
