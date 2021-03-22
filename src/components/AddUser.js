import React, {useState} from 'react'
import { Form, Button, Toast } from 'react-bootstrap'
import './AddUser.css'
import backend from '../axios'

const AddUser = () => {
    const [show, setShow] = useState(false);
    const [toastMsg, setToastMsg] =useState("");
    const [toastColor, setToastColor] = useState("red");

    const [userData, setUserData] = useState({
        username:'',
        password:''
    })

    const handleChange = (event) =>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log(userData)
        backend.post('/api/signup',userData)
        .then((response) =>{
            setToastMsg(`${userData.username}, is successfully added as an admin user.`)
            setToastColor("green")
            setShow(true)
        },(error) =>{
            setToastMsg('Failed to add admin user.Please try again Later')
            setToastColor("red")
            setShow(true);
            console.log(error)
        })
        document.getElementById("userform").reset();
    }

    return (
        <div className="adduser">
            <h3>ADD USER</h3> 
            <Form onSubmit={handleSubmit} id="userform">
                <Form.Group>
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" name="username" placeholder="User Name" onChange={handleChange} required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" name="password" placeholder="Password" onChange={handleChange} required/>
                </Form.Group>
                <Button variant="success" type="submit">Add User</Button>
            </Form>
            <div style={{position: 'fixed',bottom: 0,right: 0,margin:"30px"}}>
                <Toast variant="primary" onClose={() => setShow(false)} show={show} delay={3000} style={{color:"white",backgroundColor:toastColor, borderRadius:"12px"}}>
                    <Toast.Header style={{fontSize:"1rem", color:"white",backgroundColor:toastColor,borderRadius:"12px"}}>
                        <strong className="mr-auto">Appointment Booking</strong>
                        <small >Just now</small>
                    </Toast.Header>
                    <Toast.Body style={{fontSize:"1rem"}}>{toastMsg}</Toast.Body>
                </Toast>
            </div>
        </div>
    )
}

export default AddUser
