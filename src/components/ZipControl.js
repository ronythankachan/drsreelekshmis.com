import React, {useState} from 'react'
import { Form, Button, Toast } from 'react-bootstrap'
import './ZipControl.css'
import backend from '../axios'


const ZipControl = () => {
    const [show, setShow] = useState(false);
    const [toastMsg, setToastMsg] =useState("");
    const [toastColor, setToastColor] = useState("red");

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
        backend.post('/api/add_zip',validZip)
        .then((response) =>{
            setToastMsg(`Pin Code  ${validZip.zip} is successfully added`)
            setToastColor("green")
            setShow(true)
        },(error) =>{
            setToastMsg(`Failed to add pin code ${validZip.zip}`)
            setToastColor("red")
            setShow(true);
        })
    }
    const deleteZip = ()=>{
        backend.post('/api/delete_zip',validZip)
        .then((response) =>{
            setToastMsg(`Pin Code ${validZip.zip} is successfully removed`)
            setToastColor("green")
            setShow(true)
        },(error) =>{
            setToastMsg(`Failed to delete pin code ${validZip.zip}`)
            setToastColor("red")
            setShow(true);
        })
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
                <Button variant="danger" onClick={deleteZip} >Delete</Button>
            </Form>
            <div style={{position: 'fixed',bottom: 0,right: 0,margin:"30px"}}>
                <Toast variant="primary" onClose={() => setShow(false)} show={show} delay={3000} style={{color:"white",backgroundColor:toastColor, borderRadius:"12px"}}>
                    <Toast.Header style={{fontSize:"1rem", color:"white",backgroundColor:toastColor,borderRadius:"12px"}}>
                        <strong className="mr-auto">Appointment Booking</strong>
                        <small >Just now</small>
                    </Toast.Header>
                    <Toast.Body style={{fontSize:"1rem"}}>{toastMsg}</Toast.Body>
                </Toast>
            </div>
        </div>
    )
}

export default ZipControl
