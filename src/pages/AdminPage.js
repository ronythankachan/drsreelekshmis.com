import React from 'react'
import './AdminPage.css'
import SidePanel from '../components/SidePanel'
import AppointmentList from '../components/AppointmentList'
import { useState,useEffect } from 'react'

const initialFilters = {
    date:'',
    service:'',
    doctor:'',
    appointmentType:'',
}

const AdminPage = () => {
    const [isMinimized,setIsMinimized] =useState(false)
    const [appointmentListClasses, setAppointmentListClasses] = useState("appointment__list")
    const [sidePanelClass, setSidePanelClass] =useState("side__panel")
    const [filters,setFilters] = useState(initialFilters)

    useEffect(() => {
        if(isMinimized){
            setAppointmentListClasses("full_screen")
            setSidePanelClass("minimized")
        }else{
            setAppointmentListClasses("appointment__list")
            setSidePanelClass("side__panel")
        }
    }, [isMinimized])
    return (
        <div className="adminpage">
            <div className={sidePanelClass}>
                <SidePanel setIsMinimized={setIsMinimized} setFilters={setFilters}/>
            </div>
            <div className={appointmentListClasses}>
                <AppointmentList filters={filters}/>
            </div>
        </div>
    )
}

export default AdminPage