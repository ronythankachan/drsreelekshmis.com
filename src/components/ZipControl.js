import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import './ZipControl.css'

const ZipControl = () => {

    const [validZip, setValidZip] = useState({
        zip:'',
    })

    const handleChange = (event) =>{
        setValidZip({
            ...validZip,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
    }

    return (
        <div className="zipcontrol">
            <h3>ADD/DELETE ZIP</h3> 
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Zip *</Form.Label>
                    <Form.Control type="number" name="zip" placeholder="Pin Code" onChange={handleChange} required/>
                </Form.Group>
                <Button className="mr-3" variant="success" type="submit">Add</Button>
                <Button variant="danger" onClick >Delete</Button>
            </Form>
        </div>
    )
}

export default ZipControl
