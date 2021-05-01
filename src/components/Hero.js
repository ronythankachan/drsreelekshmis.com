import React,{useState} from 'react'
import './Hero.css'
import HeroVideo from '../video/hero_background.mp4'
import HomeAppointment from './HomeAppointment'
import MedicineShop from './MedicineShop'
import {Button} from 'react-bootstrap'

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
                <h4>An Ayurveda care centre for your day-to-day health problems</h4>
                <div className="hero__buttons">
                    <Button onClick={handleShowMed}>Buy Medicines</Button> 
                    <Button className="appointment__button" href="/book_appointment">Book Appointment</Button>
                </div>
            </div>
            <MedicineShop handleCloseMed={handleCloseMed} showMed={showMed} />
            <HomeAppointment handleClose={handleClose} show={show} />
        </div>
    )
}

export default Hero
