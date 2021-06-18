import React from 'react'
import './MyAccountPage.css'
import SidePanelContainer from '../components/SidePanelContainer'
import {Form} from 'react-bootstrap'
import { useState } from 'react'
import { FiSettings } from 'react-icons/fi';
import { FaShoppingBasket } from 'react-icons/fa';
import { Button } from 'react-bootstrap'
import { useFormik } from 'formik'


const MyAccountPage = () => {
    const [sidePanelControl,setSidePanelControl] =useState('orders')
    return (
        <div className="myaccountpage">
            <SidePanelContainer>
                <div className="sidepanel__items">
                    <button onClick={()=>setSidePanelControl('orders')}><FaShoppingBasket/>My Orders</button>
                    <button onClick={()=>setSidePanelControl('resetPassword')}><FiSettings/>Settings</button>
                </div>
            </SidePanelContainer>
            <PageContent sidePanelControl={sidePanelControl}/>
        </div>
    )
}

const PageContent = ({sidePanelControl}) =>{
    switch(sidePanelControl) {
        case 'resetPassword':
            return <ResetPasswordForm/>
        case 'orders': 
            return <p>Orders Page</p>
        default:
            return null
    } 
}

const ResetPasswordForm = () =>{
    const validate = values =>{
        const errors = {}
        if(!values.currentPassword)errors.currentPassword = "Enter current password"
        if(!values.newPassword1) errors.newPassword1 = "Enter a new password"
        if(!values.newPassword2) errors.newPassword2 = "Repeat the password"
        if(values.newPassword1 !== values.newPassword2) errors.newPassword2 = "Passwords doesnt match"
    }
    const formik = useFormik({
        initialValues:{
            currentPassword:'',
            newPassword1:'',
            newPassword2:''
        },
        validate,
        onSubmit: values =>{
            console.log("submitting", values)
        }
    })
    return (
            <div className="resetpassword">
                <h5 className="subheading">Reset Password</h5>
                <div/>
                <Form className="resetpassword__form" onSubmit={formik.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Current Password *</Form.Label>
                        <Form.Control name="currentPassword" value={formik.values.currentPassword} type="password" onChange={formik.handleChange}/>
                        <Form.Label>New Password *</Form.Label>
                        <Form.Control name="newPassword1" value={formik.values.newPassword1} type="password" onChange={formik.handleChange}/>
                        <Form.Label>Re-enter New Password *</Form.Label>
                        <Form.Control name="newPassword2" value={formik.values.newPassword2} type="password" onChange={formik.handleChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">Reset Password</Button>
                </Form>
            </div>
    )
}


export default MyAccountPage
