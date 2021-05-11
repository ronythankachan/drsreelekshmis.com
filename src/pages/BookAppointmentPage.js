import React from 'react'
import './BookAppointmentPage.css'
import BookAppointmentInfo from '../components/BookAppointmentInfo'
import BookAppointmentForm from '../components/BookAppointmentForm'


const BookAppointmentPage = () => {
    return (
        <div className="bookappointmentpage">
            <div className="bookappointmentinfo">
                <BookAppointmentInfo/>
            </div>
            <div className="bookappointmentform">
                <BookAppointmentForm/>
            </div>
        </div>
    )
}

export default BookAppointmentPage
