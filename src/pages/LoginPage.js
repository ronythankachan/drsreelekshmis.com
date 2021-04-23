import React from 'react'
import Login from '../components/Login'
import './LoginPage.css'

const Loginpage = ({route,userData,setUserData}) => {
    return (
        <div className="loginpage">
            <Login route={route} userData={userData} setUserData={setUserData}/> 
        </div>
    )
}
export default Loginpage