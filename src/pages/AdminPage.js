import React from 'react'
import './AdminPage.css'
import SidePanel from '../components/SidePanel'
import AppointmentList from '../components/AppointmentList'

const AdminPage = () => {
    const filters = {
        doctor:"",
        date:""
    }
    return (
        <div className="adminpage">
            <div className="side__panel">
                <SidePanel/>
            </div>
            <div className="appointment__list">
                <AppointmentList filters={filters}/>
            </div>
        </div>
    )
}

export default AdminPage