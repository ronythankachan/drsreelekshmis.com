import React,{useState, useEffect} from 'react';
import './AppointmentList.css';
import Appointment from './Appointment';
import backend from './axios';
import Filters from './Filters';
import AddUser from './AddUser';
import DateControl from './DateControl';
import ZipControl from './ZipControl';
import {Accordion, Card} from 'react-bootstrap';

const AppointmentList = ({user}) => {
    const [appointments, setAppointments] = useState([]);
    const [formData, setFormData] = useState({
        "doctor":"",
        "date":""
    });
    async function fetchData(){
        console.log(formData);
        const appointments = await backend.get('/appointments',{ params:{"doctor":formData.doctor,"date":formData.date}}).then((response) => {
            setAppointments(response.data);
          }, (error) => {
            console.log(error);
          });
    }
    useEffect(()=>{
        fetchData();
    },[]);

    const appointment_list = appointments.map((item)=>{
        return <Appointment data={item} key={item._id}/>
    });

    const handleChange = (e) =>{
        if(e.target.value=="Choose..."){
            formData[e.target.name]="";
        }else{
            formData[e.target.name]=e.target.value;
        }
        console.log(formData);
        fetchData();
    }
    const [filterValues, setFilterValues] = useState({});

    return (
        <div className="appointmentlist">
            <div className="searchform">
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">Filters</Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Filters setFilterValues={setFilterValues}/>  
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">Add User</Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <AddUser/>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">Manage Dates</Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <DateControl/>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="3">Manage Zip</Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                        <Card.Body>
                            <ZipControl/>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
            <div className="appointment__items">
                    {appointment_list}
            </div>
        </div>
    )
}

export default AppointmentList
