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

    // Generate Dates between start and end date
    var getDates = function(start,end) {
        var dateArray = []
        var startDate = new Date(start)
        var endDate = new Date(end)
        while(startDate<=endDate){
            let newDate = new Date(startDate)
            dateArray.push((newDate.getFullYear()+"-"+("0"+(newDate.getMonth()+1)).slice(-2)+"-"+("0"+newDate.getDate()).slice(-2)).toString())
            newDate.setDate(newDate.getDate()+1)
            startDate = newDate
        }
        return dateArray
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log("form data", dateRange)
        var dates = getDates(dateRange.startDate,dateRange.endDate)
        console.log(dates)
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
