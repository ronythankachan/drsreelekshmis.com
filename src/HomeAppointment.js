import React,{useState} from 'react';
import './HomeAppointment.css';
import {Modal,Button, Form, Alert, Row, Col} from 'react-bootstrap';
import BookAppointment from './BookAppointment';

const HomeAppointment = ({handleClose,show}) => {
    const [formData, setFormData] = useState({
        "zip":"",
        "date":"",
        "first_name":"",
        "last_name":"",
        "phone":"",
        "age":"",
        "address":"",
        "comments":"",
        "form_errors":{
            "zip":"",
            "date":"",
            "first_name":"",
            "last_name":"",
            "phone":"",
            "age":"",
            "address":""
        }
    });
    const [success, setSuccess] = useState("success");
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const fadeAlert = async () => {
        await delay(5000);
        setAlertShow(false);
      };
    const [alertshow,setAlertShow] = useState(false);
    const handleSubmit = (event)=>{
        setAlertShow(true);
        handleClose(event);
        fadeAlert();
    }

    const handleChange =(event)=>{
        let name = event.target.name;
        let value = event.target.value;
        formData[name]=value;
        validate(name,value);
        
    }

    const validate =(name,value) => {
        console.log(name);
        console.log(value);
    }

    return (
        <div className="homeappointment">
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
                <Modal.Header className="modal_header" closeButton>
                    <Modal.Title>Schedule Home Appointment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>ZIP *</Form.Label>
                            <Form.Control type="number" placeholder="Pin Code" name="zip" onChange={handleChange}/>
                            <small className="error">{formData.form_errors.zip}</small>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Select Date *</Form.Label>
                            <Form.Control type="date" placeholder="Select date" name="date" onChange={handleChange}/>
                            <small className="error">{formData.form_errors.date}</small>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Service *</Form.Label>
                            <Form.Control as="select" name="service" defaultValue="Choose..." onChange={handleChange}>
                                <option>Choose...</option>
                                <option>Panchakarma</option>
                                <option>Marma Therapy</option>
                                <option>Post Delivery Care</option>
                                <option>Swarna prashana</option>
                                <option>Yoga</option>
                                <option>Others</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Label> First Name *</Form.Label>
                                    <Form.Control type="text" placeholder="First Name" name="first_name" onChange={handleChange}/>
                                    <small className="error">{formData.form_errors.first_name}</small>
                                </Col>
                                <Col>
                                    <Form.Label> Last Name *</Form.Label>
                                    <Form.Control type="text" placeholder="Last Name" name="last_name" onChange={handleChange}/>
                                    <small className="error">{formData.form_errors.last_name}</small>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Phone *</Form.Label>
                            <Form.Control type="number" placeholder="Phone Number" name="phone" onChange={handleChange}/>
                            <small className="error">{formData.form_errors.phone}</small>
                        </Form.Group>
                        <Form.Group>
                                <Form.Label>Age *</Form.Label>
                                <Form.Control type="number" placeholder="Age" name="age" onChange={handleChange}/>
                                <small className="error">{formData.form_errors.age}</small>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Address *</Form.Label>
                            <Form.Control placeholder="Address" name="address" onChange={handleChange}/>
                            <small className="error">{formData.form_errors.address}</small>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Comments</Form.Label>
                            <Form.Control placeholder="Comments (optional)" name="address" onChange={handleChange}/>
                        </Form.Group>
                        <Modal.Footer>
                            <Button variant="warning" onClick={handleClose}>
                                Close
                            </Button>
                            <Button  variant="success" onClick={handleSubmit}>
                                Book Home Appointment
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
            <Alert className="alert" variant={success} show={alertshow} onClose={ ()=> setAlertShow(false)} dismissible>
                Home appointment booked succesfully
            </Alert>
        </div>
    )
}

export default HomeAppointment
