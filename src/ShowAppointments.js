import React,{useState, useEffect} from 'react';
import './ShowAppointments.css';
import Appointment from './Appointment';
import {CardColumns, Form, Row, Col, Button} from 'react-bootstrap';
import backend from './axios';
import Filters from './Filters';

const ShowAppointments = ({user}) => {
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

    const handleSubmit = (event) => {
        console.log("searching...");
    }
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
        <div className="showappointments">
            <Filters setFilterValues={setFilterValues}/>
            {filterValues.date}
            {filterValues.doctor}
            {filterValues.service}
            {filterValues.appointmentType}
        </div>
    )
}

export default ShowAppointments
