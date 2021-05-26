import React from 'react'
import './MyAccountPage.css'
import SidePanelContainer from '../components/SidePanelContainer'
import {Form} from 'react-bootstrap'
import { useState } from 'react'
import { BiReset } from 'react-icons/bi';
import { FaShoppingBasket } from 'react-icons/fa';


const MyAccountPage = () => {
    const [sidePanelControl,setSidePanelControl] =useState('orders')

    return (
        <div className="myaccountpage">
            <SidePanelContainer>
                <div className="sidepanel__items">
                    <button onClick={()=>setSidePanelControl('orders')}><FaShoppingBasket/>My Orders</button>
                    <button onClick={()=>setSidePanelControl('resetPassword')}><BiReset/>Reset Password</button>
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
    return (
        <div className="resetpassword">
            <h3>Reset your password</h3>
            <div className="resetpassword__form">
                <Form >
                    <Form.Group style={{display:"flex"}}>
                        <Form.Label>Current Password</Form.Label>
                        <Form.Control type="password" placeholder="Current Password"/>
                    </Form.Group>
                    <Form.Group style={{display:"flex"}}>
                        <Form.Label>New Password</Form.Label>
                        <Form.Control type="password" placeholder="New Password"/>
                    </Form.Group>
                    <Form.Group style={{display:"flex"}}>
                        <Form.Label>Re-type Password</Form.Label>
                        <Form.Control type="password" placeholder="Re-type Password"/>
                    </Form.Group>
                </Form>
            </div>
        </div>
    )
}


export default MyAccountPage
