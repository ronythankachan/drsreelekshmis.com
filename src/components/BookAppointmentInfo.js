import React from 'react'
import './BookAppointmentInfo.css'
import {GiBreakingChain, GiHospitalCross} from 'react-icons/gi'
import {HiDocument} from 'react-icons/hi'

const BookAppointmentInfo = () => {
    return (
        <div className="bookappointmentinfo">
        <h1>Book Online Appointment</h1>
        <p>Let's fight covid together</p>
        <div className="bullets">
            <div className="bullet__item">
                <div className="bullet__icon">
                    <GiBreakingChain style={{color:"green"}}/>
                </div>
                <p>Due to increasing number of covid cases in india, let's work together to break the chain.</p>
            </div>
            <div className="bullet__item">
                <div className="bullet__icon">
                    <GiHospitalCross style={{color:"blue"}}/>
                </div>
                <p>We are launching online consultation to avoid coming to clinic for minor health issues.</p>
            </div>
            <div className="bullet__item">
                <div className="bullet__icon">
                    <HiDocument style={{color:"orange"}}/>
                </div>
                <p>You can schedule an appointment by providing the details and upon booking, a zoom meeting link will be generated and send to your email address along with instructions.</p>
            </div>
        </div>
    </div>
    )
}

export default BookAppointmentInfo
