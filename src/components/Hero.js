import React,{useState} from 'react';
import './Hero.css';
import HeroVideo from '../video/hero_background.mp4';
import {Link} from 'react-router-dom';
import HomeAppointment from '../components/HomeAppointment';

const Hero = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="hero">
            <div className="hero__video">
                <video autoPlay loop muted>
                    <source src={HeroVideo} type="video/mp4"/>
                </video>
            </div>
            <div className="hero__title">
                <h1>Sreelekshmi ayurveda clinic</h1>
                <h4>An Ayurveda care centre for your day today health problems</h4>
                <div className="hero__buttons">
                    <button><Link to={'/shop'} className="link black">Buy Kerala Medicines</Link></button>
                    <button onClick={handleShow}>Schedule a home appointment</button> 
                </div>
            </div>
            <HomeAppointment handleClose={handleClose} show={show} />
        </div>
    )
}

export default Hero
