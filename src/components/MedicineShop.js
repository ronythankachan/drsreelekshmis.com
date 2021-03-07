import React from 'react';
import './MedicineShop.css';
import {Modal} from 'react-bootstrap'

const MedicineShop = ({handleCloseMed,showMed}) => {
    return (
        <Modal show={showMed} onHide={handleCloseMed} backdrop="static" keyboard={false} centered>
            <Modal.Header closeButton style={{backgroundColor:"lightgreen", color:"black"}}>
                <Modal.Title>Please call +91 9740476241 to enquire and buy medicines.</Modal.Title>
            </Modal.Header>
        </Modal>
    )
}

export default MedicineShop
