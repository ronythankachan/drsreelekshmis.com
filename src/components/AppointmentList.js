import React,{useState, useEffect} from 'react'
import Appointment from './Appointment'
import backend from '../axios'
import {Spinner} from 'react-bootstrap'
import './AppointmentList.css'

const AppointmentList = ({filters}) => {
    const [appointments, setAppointments] = useState([]);
    const [isLoading, setIsLoading] =useState(true);

    useEffect(()=>{
        console.log(filters)
        async function fetchData(){
            setIsLoading(true)
            await backend.get('/appointments',{
                 params:{
                     "doctor":filters.doctor,
                     "date":filters.date,
                     "appointmentType":filters.appointmentType, 
                     "service":filters.service
                }
            }).then((response) => {
                setIsLoading(false)
                // sort wrt date
                var array = response.data
                array.sort(function(a,b){
                    var dateA = new Date(a.date).getTime();
                    var dateB = new Date(b.date).getTime();
                    return dateA < dateB ? 1 : -1;  
                })
                setAppointments(array)
            }, (error) => {
                console.log(error)
            })
        }
        fetchData()
         // eslint-disable-next-line
    },[filters])

    const appointment_list = appointments.map((item)=>{
        return <Appointment data={item} key={item._id}/>
    });

    return (
        <div className="appointmentlist">
            {
                isLoading? 
                <div className="loading">
                    <Spinner animation="grow" style={{ width:"60px", height:"60px"}}/>
                </div>:appointment_list
            }
        </div>

    )
}

export default AppointmentList
