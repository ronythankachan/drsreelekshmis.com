import React,{useState, useEffect} from 'react';
import './ShowAppointments.css';
import Appointment from './Appointment';
import {CardColumns, Form, Row, Col} from 'react-bootstrap';
import backend from './axios';

const ShowAppointments = ({user}) => {
    const [appointments, setAppointments] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            const appointments = await backend('/appointments').then((response) => {
                setAppointments(response.data);
                console.log(response.status);
              }, (error) => {
                console.log(error);
              });
        }
        fetchData();
    },[]);

    const [formData, setFormData] = useState({
        "doctor":"",
        "date":""
    });
    const appointment_list = appointments.map((item)=>{
        return <Appointment data={item} key={item._id}/>
    });

    const handleSubmit = (event) => {
        console.log("searching...");
    }
    const handleChange = (e) =>{
        formData[e.target.name]=e.target.value;
        console.log(formData);
    }
    return (
        <div className="showappointments">
            <div className="searchform">
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Row>
                            <Col>
                                <Form.Label>Doctor</Form.Label>
                                <Form.Control as="select" onChange={handleChange} defaultValue={formData.doctor} >
                                    <option>Choose...</option>
                                    <option>Dr.Leena</option>
                                    <option>Dr.Rony</option>
                                </Form.Control>
                            </Col>
                            <Col>
                            <Form.Label>Select Date</Form.Label>
                            <Form.Control type="date" placeholder="Select date" name="date" onChange={handleChange} defaultValue={formData.date}/>
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </div>
            <div className="cardlist">
                <CardColumns>
                    {appointment_list}
                </CardColumns>
            </div>
        </div>
    )
}

export default ShowAppointments
