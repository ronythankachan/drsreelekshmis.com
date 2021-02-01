import React,{useState, useEffect} from 'react';
import './ShowAppointments.css';
import Appointment from './Appointment';
import {CardColumns, Form, Row, Col} from 'react-bootstrap';

const ShowAppointments = ({user}) => {

    const [appointments, setAppointments] = useState([]);
    useEffect(()=>{
        setAppointments([
            {
                "_id":1,
                "date":"2018-03-29",
                "first_name":"rishi",
                "last_name":"nv",
                "phone":9847534345,
                "age":25,
                "address":"Konnanikkatu house, pottankad p.o, tea company",
                "doctor":"dr.rony"
            },
            {
                "_id":2,
                "date":"2018-03-29",
                "first_name":"nazeel",
                "last_name":"ashraf",
                "phone":9847534345,
                "age":25,
                "address":"Konnanikkatu house, pottankad p.o, tea company",
                "doctor":"dr.leena"
            },
            {
                "_id":3,
                "date":"2018-03-29",
                "first_name":"leena",
                "last_name":"thomas",
                "phone":9847534345,
                "age":25,
                "address":"Konnanikkatu house, pottankad p.o, tea company",
                "doctor":"dr.rony"
            },
            {
                "_id":4,
                "date":"2018-03-29",
                "first_name":"rishi",
                "last_name":"nv",
                "phone":9847534345,
                "age":25,
                "address":"Konnanikkatu house, pottankad p.o, tea company",
                "doctor":"dr.rony"
            },
            {
                "_id":5,
                "date":"2018-03-29",
                "first_name":"nazeel",
                "last_name":"ashraf",
                "phone":9847534345,
                "age":25,
                "address":"Konnanikkatu house, pottankad p.o, tea company",
                "doctor":"dr.leena"
            },
            {
                "_id":6,
                "date":"2018-03-29",
                "first_name":"leena",
                "last_name":"thomas",
                "phone":9847534345,
                "age":25,
                "address":"Konnanikkatu house, pottankad p.o, tea company",
                "doctor":"dr.rony"
            },
            {
                "_id":7,
                "date":"2018-03-29",
                "first_name":"rishi",
                "last_name":"nv",
                "phone":9847534345,
                "age":25,
                "address":"Konnanikkatu house, pottankad p.o, tea company",
                "doctor":"dr.rony"
            },
            {
                "_id":8,
                "date":"2018-03-29",
                "first_name":"nazeel",
                "last_name":"ashraf",
                "phone":9847534345,
                "age":25,
                "address":"Konnanikkatu house, pottankad p.o, tea company",
                "doctor":"dr.leena"
            },
            {
                "_id":9,
                "date":"2018-03-29",
                "first_name":"leena",
                "last_name":"thomas",
                "phone":9847534345,
                "age":25,
                "address":"Konnanikkatu house, pottankad p.o, tea company",
                "doctor":"dr.rony"
            },
            {
                "_id":10,
                "date":"2018-03-29",
                "first_name":"rishi",
                "last_name":"nv",
                "phone":9847534345,
                "age":25,
                "address":"Konnanikkatu house, pottankad p.o, tea company",
                "doctor":"dr.rony"
            },
            {
                "_id":11,
                "date":"2018-03-29",
                "first_name":"nazeel",
                "last_name":"ashraf",
                "phone":9847534345,
                "age":25,
                "address":"Konnanikkatu house, pottankad p.o, tea company",
                "doctor":"dr.leena"
            },
            {
                "_id":12,
                "date":"2018-03-29",
                "first_name":"leena",
                "last_name":"thomas",
                "phone":9847534345,
                "age":25,
                "address":"Konnanikkatu house, pottankad p.o, tea company",
                "doctor":"dr.rony"
            },
            {
                "_id":13,
                "date":"2018-03-29",
                "first_name":"rishi",
                "last_name":"nv",
                "phone":9847534345,
                "age":25,
                "address":"Konnanikkatu house, pottankad p.o, tea company",
                "doctor":"dr.rony"
            },
            {
                "_id":14,
                "date":"2018-03-29",
                "first_name":"nazeel",
                "last_name":"ashraf",
                "phone":9847534345,
                "age":25,
                "address":"Konnanikkatu house, pottankad p.o, tea company",
                "doctor":"dr.leena"
            },
            {
                "_id":15,
                "date":"2018-03-29",
                "first_name":"leena",
                "last_name":"thomas",
                "phone":9847534345,
                "age":25,
                "address":"Konnanikkatu house, pottankad p.o, tea company",
                "doctor":"dr.rony"
            }
        ])
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
