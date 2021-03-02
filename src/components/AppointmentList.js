import React,{useState, useEffect} from 'react';
import Appointment from './Appointment';
import backend from '../axios';

const AppointmentList = ({filters}) => {
    const [appointments, setAppointments] = useState([]);

    useEffect(()=>{
        async function fetchData(filters){
            await backend.get('/appointments',{ params:{"doctor":filters.doctor,"date":filters.date}}).then((response) => {
                var array = response.data
                // sort wrt date
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
        fetchData(filters)
    },[])

    const appointment_list = appointments.map((item)=>{
        return <Appointment data={item} key={item._id}/>
    });

    return (
        <div className="appointmentlist" style={{width:"100%", display:"flex", flexWrap:"wrap"}}>
            {appointment_list}
        </div>

    )
}

export default AppointmentList
