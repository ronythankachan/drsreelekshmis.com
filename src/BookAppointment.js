import React,{useState} from 'react';
import './BookAppointment.css';
import { Form, Row, Col, Button } from 'react-bootstrap';

const BookAppointment = () => {

    const [formData, setFormData] = useState({
        "date":null,
        "first_name":null,
        "last_name":null,
        "op_number":null,
        "phone":null,
        "age":null,
        "address":null,
        "form_errors":{
            "date":"",
            "first_name":"",
            "last_name":"",
            "op_number":"",
            "phone":"",
            "age":"",
            "address":"",
        }

    });
    const [formValid,setFormValid] =useState(false);

    const handleChange = e=>{
        let newFormData = {...formData};
        let name = e.target.name;
        let value = e.target.value;
        newFormData[name] = value;

        switch(name){
            case 'date': // Logic to check if appointment is possible on that particular date
                                break;
            case 'first_name': newFormData.form_errors[name] = value.length <3 ? "First Name should be atleast 3 letters long":"";
                break;
            case 'last_name': newFormData.form_errors[name] = value.length ? "":"Second Name cannot be empty";
                break;
            case 'op_number': 
                break;
            case 'phone':
                break;
            case 'age':
                break;
            case 'address':
                break;
            default: console.log('unable to validate form');

        }
        if(!formData.form_errors.date && !formData.form_errors.first_name && !formData.form_errors.last_name && !formData.form_errors.phone && !formData.form_errors.age && !formData.form_errors.address){
            setFormValid(true);
        }else{
            setFormValid(false);
        }
        setFormData(newFormData);
    }

    

const handleSubmit = (event)=> {
    event.preventDefault();
    alert('A booking has been made');
    console.log(formData);

}

    return (
        <div className="bookappointment">
            <div className="bookappointment__heading">
                <h1>Book an appointment</h1>
            </div>
            <div className="bookappointment__form">
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Select Date *</Form.Label>
                        <Form.Control type="date" placeholder="Select date" name="date" onChange={handleChange}/>
                        <small className="error">{formData.form_errors.date}</small>
                        
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
                                <Form.Control type="text" placeholder="Last Name" name="last_name" onChange={handleChange} required/>
                                <small className="error">{formData.form_errors.last_name}</small>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Existing OP Number </Form.Label>
                        <Form.Control type="number" placeholder="OP Number (Optional)" name="op_number" onChange={handleChange}/>
                        <small className="error">{formData.form_errors.op_number}</small>
                    </Form.Group>
                    <Form.Group>
                        <Row>
                            <Col>
                                <Form.Label>Phone *</Form.Label>
                                <Form.Control type="number" placeholder="Phone Number" name="phone" onChange={handleChange}/>
                                <small className="error">{formData.form_errors.phone}</small>
                            </Col>
                            <Col>
                                <Form.Label>Age *</Form.Label>
                                <Form.Control type="number" placeholder="Age" name="age" onChange={handleChange}/>
                                <small className="error">{formData.form_errors.age}</small>
                            </Col>
                        </Row>

                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Address *</Form.Label>
                        <Form.Control placeholder="Address with ZIP Code" name="address" onChange={handleChange}/>
                        <small className="error">{formData.form_errors.address}</small>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Doctor *</Form.Label>
                        <Form.Control as="select" name="doctor" defaultValue="Choose..." onChange={handleChange}>
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
