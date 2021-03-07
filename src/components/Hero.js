import React,{useState} from 'react';
import './Hero.css';
import HeroVideo from '../video/hero_background.mp4';
import HomeAppointment from './HomeAppointment';
import MedicineShop from './MedicineShop';

const Hero = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showMed, setShowMed] = useState(false);
    const handleCloseMed = () => setShowMed(false);
    const handleShowMed = () => setShowMed(true);

    return (
        <div className="hero">
            <div className="hero__video">
                <video autoPlay loop muted>
                    <source src={HeroVideo} type="video/mp4"/>
                </video>
            </div>
            <div className="hero__title">
                <h1>Dr. Sreelekshmi’s kerala Ayurveda Centre</h1>
                <h4>An Ayurveda care centre for your day today health problems</h4>
                <div className="hero__buttons">
                    <button onClick={handleShowMed}>Buy Medicines</button> 
                    <button onClick={handleShow}>Schedule a home appointment</button> 
                </div>
            </div>
            <MedicineShop handleCloseMed={handleCloseMed} showMed={showMed} />
            <HomeAppointment handleClose={handleClose} show={show} />
        </div>
    )
}

export default Hero
