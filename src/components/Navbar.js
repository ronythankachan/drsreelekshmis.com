import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {RiMenu3Fill, RiShoppingCart2Fill} from 'react-icons/ri';
import './Navbar.css';
import Header from './Header';

const Navbar = ({toggle, cartCount}) => {

    // const signOut =()=>{
    //     localStorage.removeItem("isLoggedIn")
    //     alert("Signed out")
    // }
    return (
        <div className="navbar__container">
            <div className="header">
                <Header/>
            </div>
            <div className="navbar">
                <div className="navbar__left">
                    <Link to={'/'} className="link navbar__logo">Dr.Sreelekshmi's <div style={{fontSize:"12px", color:"grey"}}>Kerala Ayurveda center</div></Link>
                </div>
                <div className="navbar__middle">
                    <Link to={'/about'} className="link">About</Link>
                    <Link to={'/contact'} className="link">Contact Us</Link>
                    <Link to={'/shop'} className="link">Shop</Link>
                    <NavDropdown title="Services" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/rejuvenation">Rejuvenation &amp; Pain Relief Therapies </NavDropdown.Item>
                        <NavDropdown.Item href="/post_delivery_care">Pregnancy &amp; Post Delivery Care </NavDropdown.Item>
                        <NavDropdown.Item href="/panchakarma">Panchakarma</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/swarna_prashana">Swarna Prashana</NavDropdown.Item>
                        <NavDropdown.Item href="/yoga">Therapeutic Yoga </NavDropdown.Item>
                    </NavDropdown>
                </div>
                <div className="navbar__right">
                    <div className="cart__icon">
                        <p>{cartCount}</p> &nbsp;
                        <a href='/cart'>
                            <RiShoppingCart2Fill/>
                            &nbsp;cart
                        </a>
                    </div>
                    <div className="account__info">
                        <NavDropdown title="Account" id="basic-nav-dropdown" style={{margin:"0"}}>
                            <NavDropdown.Item href="/account">My Account</NavDropdown.Item>
                            <NavDropdown.Item href="/login">Sign up/Login</NavDropdown.Item>
                        </NavDropdown>
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
