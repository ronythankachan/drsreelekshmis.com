import React,{useState} from 'react'
import './PostDeliveryCare.css'
import {Button} from 'react-bootstrap'
import HomeAppointment from './HomeAppointment'
import PregnantImg from '../images/pregnant_women.jpg'

const PostDeliveryCare = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="postdeliverycare">
            <div className="content__title">
                <h1>Pregnancy &amp; Post Delivery Care</h1>
                <div className="highlighted_notification">
                    <p>All Pregnancy and Post Delivery Care Services will be done at home by trained therapists under doctor’s supervision.</p>
                </div>
                <img src={PregnantImg} alt="" />
                <p>We provide simple home based herbal formulations and diet plans for common health problems associated with pregnancy like nausea, constipation, back pain, sleeplessness, gastritis, joint pain, fatigue and stress.</p>
                <p>We also provide prenatal Ayurveda massage at home for carrying ladies for general health and for specific problems like low back pain.</p>
                <h2>Post Delivery Care</h2>
                <p>Post delivery care includes Ayurveda medicines and therapies provided to women after delivery. These medications help improve the quality and quantity of breast milk, strengthen the mother’s bones, bring back her body strength, enhance shrinkage of the uterus, reduce tummy fat and stretch marks, improve muscle tone, increase appetite and reduce stress and provide good sleep.</p>
                <p>Post delivery care therapies include massage, steam bath, dhara, vethu kuli (bath with medicated water), pichu, lepa and several other modalities according to the health needs.</p>
            </div>
            <Button className="book__button" variant="success" onClick={handleShow}>Book Appointment</Button>
            <HomeAppointment handleClose={handleClose} show={show} />
        </div>
    )
}

export default PostDeliveryCare
