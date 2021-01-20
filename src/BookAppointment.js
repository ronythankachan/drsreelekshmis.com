import React from 'react';
import './BookAppointment.css';

const BookAppointment = () => {

    return (
        <div className="bookappointment">
            <h1>Book an appointment</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Date <input type="date" name="Booking date"></input>
                </label>
                <label>
                    Name <input type="text" name="name"></input>
                </label>
                <label>
                    Age <input type="number" name="age"></input>
                </label>
                <label for="doctors">Doctor
                    <select name="Doctor" id="cars">
                        <option value="leena">-select-</option>
                        <option value="leena">Leena</option>
                        <option value="saab">Litto</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
            
        </div>
    )
}

const handleSubmit = (event)=> {
    alert('A booking has been made');
    event.preventDefault();

}

export default BookAppointment
