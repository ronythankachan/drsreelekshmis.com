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
            <FaLocationArrow/>Yelahanka New town, Bangalore
          </div>
          <div className="phone">
              <CgPhone/>Contact at +91 9847532286
          </div>
          <div className="social__media">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF/></a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter/></a>
          </div>
        </div>
    )
}

export default Header
