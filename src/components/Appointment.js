import React from 'react'
import './Appointment.css'
import Avatar from '../images/avatar.png'
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
                    data.doctor ? <div className="card__doctor type">{data.doctor}</div>:null
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
