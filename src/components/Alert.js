import React from 'react'
import './Alert.css'
import { AiOutlineClose } from 'react-icons/ai';
import {Modal} from 'react-bootstrap'


const Alert = (props) => {
    return (
        <Modal show={props.alert} centered>
            <Modal.Body className="alert">
                <button onClick={()=>props.setAlert(false)}><AiOutlineClose/></button>
                {props.children}
            </Modal.Body>
        </Modal>

    )
}

export default Alert
