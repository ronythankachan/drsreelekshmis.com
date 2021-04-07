import React,{useState} from 'react'
import './AdminPage.css'
import AdminControls from '../components/AdminControls'
import AppointmentList from '../components/AppointmentList'
import SidePanelContainer from '../components/SidePanelContainer'

const initialFilters = {
    date:'',
    service:'',
    doctor:'',
    appointmentType:'',
}

const AdminPage = () => {
    const [filters,setFilters] = useState(initialFilters)
    return (
        <div className="adminpage">
            <SidePanelContainer>
                <AdminControls setFilters={setFilters}/>
            </SidePanelContainer>
            <AppointmentList filters={filters}/>
        </div>
    )
}

export default AdminPage