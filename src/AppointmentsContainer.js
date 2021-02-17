import React from 'react'
import { useState, useEffect } from 'react'
import Login from './Login'
import AppointmentList from './AppointmentList'

const AppointmentsContainer = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        let value = localStorage.getItem("isLoggedIn") || 'false'
        value === 'true'?  setIsLoggedIn(true): setIsLoggedIn(false)
    }, [])

    useEffect(() => {
        localStorage.setItem("isLoggedIn", isLoggedIn)
    }, [isLoggedIn])

    return (
        <div>
            {isLoggedIn?<AppointmentList/>:<Login setIsLoggedIn={setIsLoggedIn}/>}
        </div>
    )
}

export default AppointmentsContainer
