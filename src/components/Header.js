import React from 'react'
import './Header.css'
import { CgPhone } from "react-icons/cg";
import { FaLocationArrow } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Header = () => {
    return (
        <div className="header">
          <div className="address">
            <div className="address__icon">
              <FaLocationArrow/>
            </div>
            <div className="address_info">
               Yelahanka New town, Bangalore
            </div>
          </div>
          <div className="phone">
            <div className="phone__icon">
              <CgPhone/>
            </div>
            <div className="phone__number">
              Contact at +91 9847532286
            </div>
          </div>
          <div className="social__media">
              <FaFacebookF/>
              <FaInstagram/>
              <FaTwitter/>
          </div>
        </div>
    )
}

export default Header
