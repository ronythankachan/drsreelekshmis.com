import React from 'react'
import './SwarnaPrashana.css'
import SPImage from '../images/swarna_prashana.jpg'
import {Button} from 'react-bootstrap'

const SwarnaPrashana = () => {
    return (
        <div className="swarnaprashana">
            <div className="content__title">
                <h1>Swarna Prashana</h1>
                <img src={SPImage} alt="swarna prashana" />
                <p>Swarna prashana is an ancient practice of giving gold and vacha (Acorus calamus roots) and other brain stimulating medicines to the new born kid along with or without addition of breast milk. We provide specific Ayurvedic ghee preparations during every month on the date of Pushya nakshatra for kids of the age between 6 months to 10 years on appointment basis. Benefits of Swarna prashana include proper development and attainment of milestones in kids and enhancement of brain functions including memory and immunity.</p>
            </div>
            <Button className="book__button" href='/book_appointment' variant="success">Book Appointment</Button>
        </div>
    )
}

export default SwarnaPrashana
