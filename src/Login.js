import React,{useState} from 'react'
import './Login.css'
import { Form, Button } from 'react-bootstrap'
import backend from './axios'

const Login = ({setIsLoggedIn}) => {

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
        event.preventDefault();
        backend.post('/login',loginData)
        .then((response)=>{
            setIsLoggedIn(true);
        })
        .catch((error=> {
            if(error.response.status === 401){
                setLoginMsg(error.response.data)
            }else{
                setLoginMsg("Something went wrong")
            }
        }))
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