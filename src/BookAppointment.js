import React,{useState} from 'react';
import './BookAppointment.css';
import { Form, Row, Col, Button } from 'react-bootstrap';
import backend from './axios';

const BookAppointment = () => {

    const [formData, setFormData] = useState({
        "date":"",
        "first_name":"",
        "last_name":"",
        "phone":"",
        "age":"",
        "address":"",
        "doctor":"",
        "form_errors":{
            "date":"",
            "first_name":"",
            "last_name":"",
            "phone":"",
            "age":"",
            "address":"",
        }

    });
    const [formValid,setFormValid] =useState(false);
    const [validDate,setValidDate] =useState(false);


    const handleChange = e=>{
        let newFormData = {...formData};
        let name = e.target.name;
        let value = e.target.value;
        newFormData[name] = value;
        switch(name){
            case 'date':
                setValidDate(true);
                break;
            case 'first_name': 
                newFormData.form_errors[name] = value.length <3 ? "First Name should be atleast 3 letters long":"";
                break;
            case 'last_name': 
                newFormData.form_errors[name] = value.length ? "":"Second Name cannot be empty";
                break;
            case 'phone': 
                let phone_regex = /\+?\d[\d -]{8,12}\d/;
                newFormData.form_errors[name] = phone_regex.test(value) ? "":"Enter a valid phone number";
                break;
            case 'age':
                newFormData.form_errors[name] = value<0 || value>130 ? "Age is not valid":"";
                break;
            case 'address':
                newFormData.form_errors[name] = value.length ? "":"Address cannot be empty";
                break;
            default: console.log('unable to validate form');

        }
        if(!formData.form_errors.date && 
            !formData.form_errors.first_name && 
            !formData.form_errors.last_name && 
            !formData.form_errors.phone && 
            !formData.form_errors.age && 
            !formData.form_errors.address && 
            formData.date &&
            formData.first_name && 
            formData.last_name && 
            formData.phone && 
            formData.age && 
            formData.address){
                setFormValid(true);
            }else{
                setFormValid(false);
            }
            setFormData(newFormData);
    }

    

const handleSubmit = (event)=> {
    event.preventDefault();
    if(formValid){
        let data = formData;
        delete data["form_errors"];
        console.log("booking data",data);
        backend.post("/appointments",data).then((response) => {
            console.log(response);
            formData.date=null;
          }, (error) => {
            console.log(error);
          });
    }else{
        alert("Please correct the information and try resubmitting it.")
    }
}

    return (
        <div className="bookappointment">
            <div className="bookappointment__heading">
                <h1>Book an appointment</h1>
                <ul>
                    <li> Get a confirmed visiting date</li>
                    <li> No waiting in queue</li>
                    <li> Get follow up updates on your appointment</li>
                </ul>

            </div>
            <div className="bookappointment__form">
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Select Date *</Form.Label>
                        <Form.Control type="date" placeholder="Select date" name="date" onChange={handleChange} value={formData.date}/>
                        <small className="error">{formData.form_errors.date}</small>
                    </Form.Group>
                    <Form.Group>
                        <Row>
                            <Col>
                                <Form.Label> First Name *</Form.Label>
                                <Form.Control type="text" placeholder="First Name" name="first_name" onChange={handleChange} disabled={validDate? false:true}/>
                                <small className="error">{formData.form_errors.first_name}</small>
                            </Col>
                            <Col>
                                <Form.Label> Last Name *</Form.Label>
                                <Form.Control type="text" placeholder="Last Name" name="last_name" onChange={handleChange} disabled={validDate? false:true}/>
                                <small className="error">{formData.form_errors.last_name}</small>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Row>
                            <Col>
                                <Form.Label>Phone *</Form.Label>
                                <Form.Control type="number" placeholder="Phone Number" name="phone" onChange={handleChange}  disabled={validDate? false:true}/>
                                <small className="error">{formData.form_errors.phone}</small>
                            </Col>
                            <Col>
                                <Form.Label>Age *</Form.Label>
                                <Form.Control type="number" placeholder="Age" name="age" onChange={handleChange}  disabled={validDate? false:true}/>
                                <small className="error">{formData.form_errors.age}</small>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Address *</Form.Label>
                        <Form.Control placeholder="Address with ZIP Code" name="address" onChange={handleChange}  disabled={validDate? false:true}/>
                        <small className="error">{formData.form_errors.address}</small>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Doctor *</Form.Label>
                        <Form.Control as="select" name="doctor" defaultValue="Choose..." onChange={handleChange} disabled={validDate? false:true}>
                            <option>Choose...</option>
                            <option>Dr.Leena</option>
                            <option>Dr.Rony</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit" disabled={formValid? false:true}>Book appointment</Button>
                </Form>
            </div>
        </div>
    )
}

export default BookAppointment
