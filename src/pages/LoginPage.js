import React from 'react'
import Login from '../components/Login'
import './LoginPage.css'

const Loginpage = ({setLoginKey,validKey}) => {
    return (
        <div className="loginpage">
            <Login setLoginKey={setLoginKey} validKey={validKey}/>
        </div>
    )
}
export default Loginpage