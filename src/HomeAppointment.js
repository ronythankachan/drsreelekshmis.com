import React,{useState} from 'react';
import './HomeAppointment.css';
import {Modal,Button, Form, Row, Col, Toast} from 'react-bootstrap';
import {useFormik} from 'formik'
import backend from './axios'

const isValidZip = (zip) =>{
    // Check if service is available in this zip
    return true
}
const isValidDate = (date) =>{
    // Check if doctors are available in this date
    return true
}

const validate = values => {
    const errors={}
    if(!values.zip){
        errors.zip = 'Required field'
    }else if(!isValidZip(values.zip)){
        errors.zip = 'Sorry, our services are not availble in your area'
    }
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
    if(!values.service || values.service === "Choose..."){
        errors.service = 'Required field'
    }
    return errors
}

const HomeAppointment = ({handleClose,show}) => {

    const [toastShow, setToastShow] = useState(false);
    const [toastMsg, setToastMsg] =useState("");
    const [toastColor, setToastColor] = useState("red");

    const formik = useFormik({
        initialValues:{
            zip:'',
            date:'',
            firstName:'',
            lastName:'',
            phone:'',
            age:'',
            address:'',
            doctor:'',
            comments:'',
            service:'',
            appointmentType:'home'
        },
        validate,
        onSubmit: values => {
            backend.post('/appointments',values)
            .then((response) =>{
                setToastColor("green")
                setToastMsg(`Hi ${values.firstName}, Your appointment has been made successfully on ${values.date}`)
            },(error) =>{
                setToastColor("red")
                setToastMsg('Failed to book appointment')
                console.log(error)
            })
            formik.resetForm()
            handleClose()
            setToastShow(true)
        }
    })

    return (
        <div className="homeappointment">
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
                <Modal.Header className="modal_header" closeButton>
                    <Modal.Title>Schedule Home Appointment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Group>
                            <Form.Label>ZIP *</Form.Label>
                            <Form.Control id="zip" type="number" placeholder="Zip Code" name="zip" value={formik.values.zip} onChange={formik.handleChange} onBlur={formik.handleBlur} isInvalid={formik.touched.zip && formik.errors.zip}/>                             
                            {formik.touched.zip && formik.errors.zip ? (<div className="error">{formik.errors.zip}</div>) : null}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Select Date *</Form.Label>
                            <Form.Control id="date" type="date" placeholder="Select date" name="date" value={formik.values.date} onChange={formik.handleChange} onBlur={formik.handleBlur} isInvalid={formik.touched.date && formik.errors.date}/>
                            {formik.touched.date && formik.errors.date ? (<div className="error">{formik.errors.date}</div>) : null}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Service *</Form.Label>
                            <Form.Control as="select" name="service" value={formik.values.service} onChange={formik.handleChange} onBlur={formik.handleBlur} isInvalid={formik.touched.service && formik.errors.service}>
                                <option>Choose...</option>
                                <option>Panchakarma</option>
                                <option>Marma Therapy</option>
                                <option>Post Delivery Care</option>
                                <option>Swarna prashana</option>
                                <option>Yoga</option>
                                <option>Others</option>
                            </Form.Control>
                            {formik.touched.service && formik.errors.service ? (<div className="error">{formik.errors.service}</div>) : null}
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
                            <Form.Label>Doctor</Form.Label>
                            <Form.Control as="select" name="doctor" value={formik.values.doctor} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                                <option>Choose...</option>
                                <option>Dr.Leena</option>
                                <option>Dr.Rony</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Address *</Form.Label>
                            <Form.Control as="textarea" rows={3} id="address" placeholder="Address with ZIP Code" name="address" value={formik.values.address} onChange={formik.handleChange} onBlur={formik.handleBlur} isInvalid={formik.touched.address && formik.errors.address}/>
                            {formik.touched.address && formik.errors.address ? (<div className="error">{formik.errors.address}</div>) : null}
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
                            <Form.Label>Comments</Form.Label>
                            <Form.Control as="textarea" rows={3} id="comments" placeholder="Comments" name="comments" value={formik.values.comments} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                        </Form.Group>
                        <Modal.Footer>
                            <Button variant="warning" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="success" type="submit">
                                Book Home Appointment
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
            <div style={{position: 'fixed',bottom: 0,right: 0,margin:"30px"}}>
                <Toast variant="primary" onClose={() => setToastShow(false)} show={toastShow} delay={3000} style={{color:"white",backgroundColor:toastColor, borderRadius:"12px"}}>
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

export default HomeAppointment
