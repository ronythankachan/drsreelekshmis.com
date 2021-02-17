import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import './AddUser.css'

const AddUser = () => {

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
    }

    return (
        <div className="adduser">
            <h3>ADD USER</h3> 
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" name="username" placeholder="User Name" onChange={handleChange} required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Passowrd</Form.Label>
                    <Form.Control type="text" name="username" placeholder="Password" onChange={handleChange} required/>
                </Form.Group>
                <Button variant="success" type="submit">Add User</Button>
            </Form>
        </div>
    )
}

export default AddUser
