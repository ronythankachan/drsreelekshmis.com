import React from 'react';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {RiMenu3Fill} from 'react-icons/ri';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__left">
                <div className="navbar__logo">
                    <Link to={'/'} className="link">Dr.Sreelekshmi</Link>
                </div>
            </div>
            <div className="navbar__middle">
                <Link to={'/about'} className="link">About</Link>
                <Link to={'/contact'} className="link">Contact Us</Link>
            </div>
            <div className="navbar__right">
                <div className="navbar__button">
                    <Button variant="danger"><Link to={'/book_appointment'} className="link">Book appointment</Link></Button>
                </div>
                <div className="navbar__mobile__icon">
                    <RiMenu3Fill/>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar
