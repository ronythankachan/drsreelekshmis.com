import React,{useState} from 'react';
import './HomeAppointment.css';
import {Modal,Button, Form, Alert} from 'react-bootstrap';
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
                <Modal.Header closeButton>
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
                            <Form.Control type="date" placeholder="Select date" name="date" onChange={handleChange} value={formData.date}/>
                            <small className="error">{formData.form_errors.date}</small>
                        </Form.Group>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button  variant="primary" onClick={handleSubmit}>
                                Book Home Appointment
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
            <Alert className="alert" variant="success" show={alertshow} onClose={ ()=> setAlertShow(false)} dismissible>Home appintment booked</Alert>
        </div>
    )
}

export default HomeAppointment
