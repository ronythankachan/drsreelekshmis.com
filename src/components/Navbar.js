import React from 'react';
import { Button, NavDropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {RiMenu3Fill} from 'react-icons/ri';
import './Navbar.css';
import Header from './Header';

const Navbar = ({toggle}) => {
    return (
        <div className="navbar__container">
            <div className="header">
                <Header/>
            </div>
            <div className="navbar">
                <div className="navbar__left">
                    <Link to={'/'} className="link navbar__logo">Dr.Sreelekshmi clinic</Link>
                </div>
                <div className="navbar__middle">
                    <Link to={'/about'} className="link">About</Link>
                    <Link to={'/contact'} className="link">Contact Us</Link>
                    <NavDropdown title="Services" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/rejuvenation">Rejuvenation &amp; Pain Relief Therapies </NavDropdown.Item>
                        <NavDropdown.Item href="/panchakarma">Panchakarma</NavDropdown.Item>
                        <NavDropdown.Item href="/post_delivery_care">Pregnancy &amp; Post Delivery Care </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/swarna_prashana">Swarna Prashana</NavDropdown.Item>
                        <NavDropdown.Item href="/yoga">Therapeutic Yoga </NavDropdown.Item>
                    </NavDropdown>
                </div>
                <div className="navbar__right">
                    <div className="navbar__button">
                        <Button href="/book_appointment">Book Appointment</Button>
                    </div>
                    <div className="navbar__mobile__icon" onClick={toggle}>
                        <RiMenu3Fill/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
