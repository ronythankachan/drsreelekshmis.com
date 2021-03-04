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
                <p>Yoga is a life style. Most recent researches prove that Yoga is not just a health practice but also a treatment modality for systemic disorders. We teach Yoga to kids and for the elderly for its health benefits. We also provide therapeutic yoga sessions for specific disorders like diabetes, hypertension, obesity, stress, depression, insomnia, menstrual disorders and hormonal problems. It also helps improve other musculoskeletal and neurological disorders like neck and back pain caused due to different disease conditions. Yoga along with herbal medicines helps improve the condition of the patient suffering with different diseases in a much faster way.</p>
                <Button className="book__button" href='/book_appointment' variant="success">Book Appointment</Button>
            </div>
        </div>
    )
}

export default Yoga
