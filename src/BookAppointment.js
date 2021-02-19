import React,{useState} from 'react';
import './BookAppointment.css';
import { Form, Row, Col, Button, Toast } from 'react-bootstrap';
import {useFormik} from 'formik'
import backend from './axios'

const isValidDate = (date) =>{
    // Check if doctors are available in this date
    return true
}

const validate = values =>{
    const errors={}
    if(!values.date){
        errors.date = 'Required field'
    }else if(!isValidDate(values.date)){
        errors.date = 'Doctors are not available on this date. Please select some other date'
    }
    if(!values.firstName){
        errors.firstName = 'Required field'
    }else if(values.firstName.length <3){
        errors.firstName = 'First Name should be atleast 3 characters long'
    }
    if(!values.phone){
        errors.phone = 'Required field'
    }else if(!/\+?\d[\d -]{8,12}\d/.test(values.phone)){
        errors.phone = 'Invalid phone number'
    }
    if(!values.age){
        errors.age = 'Required field'
    }else if(parseInt(values.age)<0 || parseInt(values.age)>120){
        errors.age= 'Age is not valid'
    }
    if(!values.address){
        errors.address = 'Required field'
    }
    return errors
}


const BookAppointment = () => {
    const [show, setShow] = useState(false);
    const [toastMsg, setToastMsg] =useState("");
    const [toastColor, setToastColor] = useState("red");

    const formik = useFormik({
        initialValues:{
            date:'',
            firstName:'',
            lastName:'',
            phone:'',
            age:'',
            address:'',
            doctor:'',
            appointmentType:'clinic'
        },
        validate,
        onSubmit: values => {
            backend.post('/appointments',values)
            .then((response) =>{
                setToastMsg(`Hi ${values.firstName}, Your appointment has been made successfully on ${values.date}`)
                setToastColor("green")
                setShow(true)
                
            },(error) =>{
                setToastMsg('Failed to book appointment.Please try after some time.')
                setToastColor("red")
                setShow(true);
                console.log(error)
            })
            formik.resetForm()
        }
    })

    return (
        <div className="bookappointment">
            <div className="bookappointment__form">
                <h2>BOOK HOSPITAL APPOINTMENT</h2>
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Select Date *</Form.Label>
                        <Form.Control id="date" type="date" placeholder="Select date" name="date" value={formik.values.date} onChange={formik.handleChange} onBlur={formik.handleBlur} isInvalid={formik.touched.date && formik.errors.date}/>
                        {formik.touched.date && formik.errors.date ? (<div className="error">{formik.errors.date}</div>) : null}
                    </Form.Group>
                    <Form.Group>
                        <Row>
                            <Col>
                                <Form.Label> First Name *</Form.Label>
                                <Form.Control id="firstName" type="text" placeholder="First Name" name="firstName" value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur} isInvalid={formik.touched.firstName && formik.errors.firstName}/>
                                {formik.touched.firstName && formik.errors.firstName ? (<div className="error">{formik.errors.firstName}</div>) : null}
                            </Col>
                            <Col>
                                <Form.Label> Last Name</Form.Label>
                                <Form.Control id="lastName" type="text" placeholder="Last Name" name="lastName" value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Row>
                            <Col>
                                <Form.Label>Phone *</Form.Label>
                                <Form.Control id="phone" type="number" placeholder="Phone Number" name="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} isInvalid={formik.touched.phone && formik.errors.phone}/>
                                {formik.touched.phone && formik.errors.phone ? (<div className="error">{formik.errors.phone}</div>) : null}
                            </Col>
                            <Col>
                                <Form.Label>Age *</Form.Label>
                                <Form.Control id="age" type="number" placeholder="Age" name="age" value={formik.values.age} onChange={formik.handleChange} onBlur={formik.handleBlur} isInvalid={formik.touched.age && formik.errors.age}/>
                                {formik.touched.age && formik.errors.age ? (<div className="error">{formik.errors.age}</div>) : null}
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Address *</Form.Label>
                        <Form.Control as="textarea" rows={3} id="address" placeholder="Address with ZIP Code" name="address" value={formik.values.address} onChange={formik.handleChange} onBlur={formik.handleBlur} isInvalid={formik.touched.address && formik.errors.address}/>
                        {formik.touched.address && formik.errors.address ? (<div className="error">{formik.errors.address}</div>) : null}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Doctor</Form.Label>
                        <Form.Control as="select" name="doctor" value={formik.values.doctor} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                            <option>Choose...</option>
                            <option>Dr.Leena</option>
                            <option>Dr.Rony</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit" >Book appointment</Button>
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
        </div>
    )
}

export default BookAppointment
