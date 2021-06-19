import React from 'react'
import './MyAccountPage.css'
import SidePanelContainer from '../components/SidePanelContainer'
import {Form} from 'react-bootstrap'
import { useState } from 'react'
import { FiSettings } from 'react-icons/fi';
import { FaShoppingBasket } from 'react-icons/fa';
import { Button } from 'react-bootstrap'
import { useFormik } from 'formik'
import backend from '../axios'


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
    const [msg, setMsg] = useState('')
    const [msgClass,setMsgClass] = useState('')
    const [loading,setLoading] = useState(false)
    const validate = values =>{
        const errors = {}
        if(!values.currentPassword)errors.currentPassword = "Enter current password"
        if(!values.newPassword1) errors.newPassword1 = "Enter a new password"
        else if(values.newPassword1 === values.currentPassword) errors.newPassword1 = "New password cannot be same as old"
        else if(values.newPassword1.length < 8) errors.newPassword1 = "Password must be atleast 8 characters"
        if(!values.newPassword2) errors.newPassword2 = "Repeat the password"
        if(values.newPassword1 !== values.newPassword2) errors.newPassword2 = "Passwords doesnt match"
        return errors
    }
    const formik = useFormik({
        initialValues:{
            currentPassword:'',
            newPassword1:'',
            newPassword2:''
        },
        validate,
        onSubmit: values =>{
            setLoading(true)
            let userId = localStorage.getItem("userId")
            let userType = localStorage.getItem("userType")
            backend.post('/api/resetpassword',{userId,userType,...values})
            .then(response=>{
                setMsgClass("success")
                setMsg(response.data)
                formik.resetForm()
            },error =>{
                setMsgClass("error")
                setMsg(error.response.data)
            })
            .finally(()=>{
                setLoading(false)
                setTimeout(() => {
                    setMsg('')
                    setMsgClass('')
                }, 3000);
            })
        }
    })
    return (
            <div className="resetpassword">
                <h5 className="subheading">Reset Password</h5>
                <Form className="resetpassword__form" onSubmit={formik.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Current Password *</Form.Label>
                        <Form.Control name="currentPassword" value={formik.values.currentPassword} type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} isInvalid={formik.touched.currentPassword && formik.errors.currentPassword}/>
                        {formik.touched.currentPassword && formik.errors.currentPassword ? (<div className="error">{formik.errors.currentPassword}</div>) : null}
                        <Form.Label>New Password *</Form.Label>
                        <Form.Control name="newPassword1" value={formik.values.newPassword1} type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} isInvalid={formik.touched.newPassword1 && formik.errors.newPassword1}/>
                        {formik.touched.newPassword1 && formik.errors.newPassword1 ? (<div className="error">{formik.errors.newPassword1}</div>) : null}
                        <Form.Label>Re-enter New Password *</Form.Label>
                        <Form.Control name="newPassword2" value={formik.values.newPassword2} type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} isInvalid={formik.touched.newPassword2 && formik.errors.newPassword2}/>
                        {formik.touched.newPassword2 && formik.errors.newPassword2 ? (<div className="error">{formik.errors.newPassword2}</div>) : null}
                    </Form.Group>
                    <Button variant="success" type="submit" style={{minWidth:"150px"}}>{loading ? "Processing...":"Reset Password"}</Button> 
                    {msg ? <div className={msgClass} style={{marginTop:"10px"}}>{msg}</div>:null}
                </Form>
                
            </div>
    )
}


export default MyAccountPage
