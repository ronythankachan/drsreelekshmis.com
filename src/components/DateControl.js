import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import './DateControl.css'

const DateControl = () => {

    const [dateRange, setDateRange] = useState({
        startDate:'',
        endDate:'',
        appointmentType:''
    })

    const handleChange = (event) =>{
        setDateRange({
            ...dateRange,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
    }

    return (
        <div className="datecontrol">
            <h3>UNAVAILABLE DATES</h3> 
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Start Date *</Form.Label>
                    <Form.Control type="date" name="startDate" placeholder="Start Date" onChange={handleChange} required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>End Date *</Form.Label>
                    <Form.Control type="date" name="endDate" placeholder="End Date" onChange={handleChange} required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Appointment Type</Form.Label>
                    <Form.Control as="select" name="appointmentType" onChange={handleChange}>
                        <option>Choose...</option>
                        <option>Home</option>
                        <option>Clinic</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="success" type="submit">Add Dates</Button>
            </Form>
        </div>
    )
}

export default DateControl
