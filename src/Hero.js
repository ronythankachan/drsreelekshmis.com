import React from 'react';
import './Hero.css';
import HeroVideo from './video/hero_background.mp4';

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
                    <button> Buy medicines online</button>
                    <button>Schedule an at home appointment</button> 
                </div>
            </div>
        </div>
    )
}

export default Hero
