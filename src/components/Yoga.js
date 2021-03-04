import React from 'react'
import './Yoga.css'
import YogaGirl from '../images/yoga_girl.jpg'
import {Button} from 'react-bootstrap'

const Yoga = () => {
    return (
        <div className="yoga">
            <div className="main__heading">
                <h1>Therapeutic Yoga</h1>
            </div>
            <div className="content">
                <div className="content__image">
                    <img src={YogaGirl} alt="swarna prashana" />
                </div>
                <p>Swarna prashana is an ancient practice of giving gold and vacha (Acorus calamus roots) and other brain stimulating medicines to the new born kid along with or without addition of breast milk. We provide specific Ayurvedic ghee preparations during every month on the date of Pushya nakshatra for kids of the age between 6 months to 10 years on appointment basis. Benefits of Swarna prashana include proper development and attainment of milestones in kids and enhancement of brain functions including memory and immunity.</p>
                <Button className="book__button" href='/book_appointment' variant="success">Book Appointment</Button>
            </div>
        </div>
    )
}

export default Yoga
