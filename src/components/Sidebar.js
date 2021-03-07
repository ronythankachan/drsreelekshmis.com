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
                    <NavDropdown.Item href="/rejuvenation">Rejuvenation &amp; Pain Relief Therapies</NavDropdown.Item>
                    <NavDropdown.Item href="/post_delivery_care">Pregnancy &amp; Post Delivery Care</NavDropdown.Item>
                    <NavDropdown.Item href="/panchakarma">Panchakarma</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item href="/swarna_prashana">Swarna Prashana</NavDropdown.Item>
                    <NavDropdown.Item href="/yoga">Therapeutic Yoga</NavDropdown.Item>
                </NavDropdown>
                <Button variant="primary" onClick={toggle} className="bottom" href='/book_appointment'>Book Appointment</Button>
            </div>
        </div>
    )
}

export default Sidebar
