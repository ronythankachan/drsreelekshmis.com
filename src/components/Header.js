import React from 'react'
import './Header.css'
import { CgPhone } from "react-icons/cg";
import { FaLocationArrow } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";


const Header = () => {
    return (
        <div className="header">
          <div className="address">
            <FaLocationArrow/>Yelahanka New town, Bangalore
          </div>
          <div className="phone">
            <IoLogoWhatsapp style={{color:"lightgreen"}}/> Whatspp  / <CgPhone style={{color:"orange"}}/>Contact at +91 97404 76241
          </div>
          <div className="social__media">
              <a href="https://www.facebook.com/dr.sreesAyur/" target="_blank" rel="noopener noreferrer"><FaFacebookF/></a>
              <a href="https://www.instagram.com/dr_srees_ayur_/" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
          </div>
        </div>
    )
}

export default Header
