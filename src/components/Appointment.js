import React from 'react'
import './Appointment.css'
import Avatar from '../images/avatar.png'
const timeMap={
    960:'4.00 PM',
    990:'4.30 PM',
    1020:'5.00 PM',
    1050:'5.30 PM',
    1080:'6.00 PM',
    1110:'6.30 PM',
    1140:'7.00 PM',
    1170:'7.30 PM',
    1200:'8.00 PM'
}
const Appointment = ({data}) => {

    const date = new Date(data.date)
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'short' });
    const dt = date.getDate();

    return (
        <div className="appointment">
            <div className="card__left">
                <div className="type">
                    {data.appointmentType}
                </div>
                <div className="avatar">
                    <img src = {Avatar} alt=""/>
                </div>
                <div className="type">
                    {dt+" - "+month+" - "+year}
                </div>
            </div>
            <div className="card__right">
                {
                    data.time ? <div className="time type">{timeMap[data.time]}</div>:null
                }
                <div className="more__info">
                    <h1>{data.firstName +" "+ data.lastName}</h1>
                </div>
                <div className="others">
                    <p>
                        <span>Age</span> 
                        {data.age}
                    </p>
                    <p>
                        <span>Phone</span> 
                        {data.phone}
                    </p>
                    <p>
                        <span>Sex</span> 
                        {data.sex}
                    </p>
                    {
                        data.zoomID ? <p><span>Zoom ID</span> {data.zoomID}</p>: null
                    }
                    <p>
                        <span>Email</span> 
                        {data.email}
                    </p>
                    {
                        data.zip ? <p><span>Pin Code</span> {data.zip}</p>: null
                    }
                    {
                        data.service ? <p style={{lineHeight:"1rem", color:"white", fontWeight:"500", textAlign:"center"}}>{data.service}</p>: null
                    }
                </div>
                <div className="card__address">
                    <p>{data.address}</p>
                </div>
            </div>
        </div>
    )
}

export default Appointment
