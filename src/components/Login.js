import React,{useState} from 'react'
import './Login.css'
import { Form, Button } from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import backend from '../axios'

const Login = ({route, userData,setUserData}) => {

    const history = useHistory();
    const [loginData,setLoginData] =useState({
        username:'',
        password:''
    })
    const [loginMsg, setLoginMsg] =useState("")
    const handleChange = (event) => {
        setLoginData({
            ...loginData,
            [event.target.name]:event.target.value
        })
    }

    const handleSubmit = (event) => {
        // do a backend call to check if login is successfull, if login is success, then reroute 
        setUserData({
            ...userData,
            userId:"602bd642603494016ba038c2",
            isLoggedIn:true
        })
        // reroute to the origin intended page after logging in 
        console.log("route is", route)
        history.push(route)
    }

    return (
        <div className="login">
            <div className="login__form">
                <h2>Log In</h2>
                <p className="login__error">{loginMsg}</p>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" name="username" placeholder="User Name" required onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required onChange={handleChange}/>
                    </Form.Group>
                    <Button type="submit">Log In</Button>
                </Form>
            </div>
        </div>
    )
}

export default Login