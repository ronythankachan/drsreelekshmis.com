import React from 'react'
import './Sidebar.css'
import {FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {NavDropdown, Button} from 'react-bootstrap'

const Sidebar = ({isOpen,toggle}) => {
    return (
        <div className={"sidebar "+(isOpen?'show':'hide')}>
            <div className="icon">
                <FaTimes onClick={toggle}/>
            </div>
            <div className="sidebar-content">
                <Link to={'/about'} className="link" onClick={toggle}>About</Link>
                <Link to={'/contact'} className="link" onClick={toggle}>Contact Us</Link>
                <NavDropdown title="Services" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/panchakarma">Panchakarma</NavDropdown.Item>
                    <NavDropdown.Item href="/marma_therapy">Marma Therapy</NavDropdown.Item>
                    <NavDropdown.Item href="/post_delivery_care">Post Delivery Care</NavDropdown.Item>
                    <NavDropdown.Item href="/swarna_prashana">Swarna Prashana</NavDropdown.Item>
                    <NavDropdown.Item href="/yoga">Yoga</NavDropdown.Item>
                </NavDropdown>
                <Button variant="primary" onClick={toggle} className="bottom">Book Appointment</Button>
            </div>
        </div>
    )
}

export default Sidebar
