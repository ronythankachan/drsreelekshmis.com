import React,{ useState } from 'react'
import './Filters.css'
import { Form, Button } from 'react-bootstrap'



const initialFilters = {
    date:'',
    service:'',
    doctor:'',
    appointmentType:'',
}

const Filters = ({setFilterValues}) => {

    const [filters,setFilters] = useState(initialFilters)
    const handleChange = (event) =>{
        setFilters({
            ...filters,
            [event.target.name]:event.target.value
        })
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        alert(JSON.stringify(filters),2)
        setFilterValues(filters)
    }

    const resetForm = ()=>{
        document.getElementById("filterform").reset();
    }

    return (
        <div className="filters">
            <h3>FILTERS</h3>
            <Form onSubmit={handleSubmit} id="filterform">
                <Form.Group>
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" name="date" onChange={handleChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Doctor</Form.Label>
                    <Form.Control as="select" name="doctor" onChange={handleChange}>
                        <option>Choose...</option>
                        <option>Dr.Leena</option>
                        <option>Dr.Rony</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Service</Form.Label>
                    <Form.Control as="select" name="service" onChange={handleChange}>
                        <option>Choose...</option>
                        <option>Panchakarma</option>
                        <option>Marma Therapy</option>
                        <option>Post Delivery care</option>
                        <option>Swarna Prashana</option>
                        <option>Yoga</option>
                        <option>Others</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Appointment Type</Form.Label>
                    <Form.Control as="select" name="appointmentType" onChange={handleChange}>
                        <option>Choose...</option>
                        <option>Home</option>
                        <option>Clinic</option>
                    </Form.Control>
                </Form.Group>
                <Button type="submit" variant="success" className="mr-3">Apply</Button>
                <Button variant="dark" onClick={resetForm}>Reset</Button>
            </Form>
        
        </div>
    )
}

export default Filters
