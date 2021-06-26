import React, { useState } from "react";
import "./Sidebar.css";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { RiShoppingCart2Fill } from "react-icons/ri";

const Sidebar = ({ isOpen, toggle, cartCount }) => {
  const [userId, setUserId] = useState("602bd642603494016ba038c2");
  const signOut = () => {
    alert("signed out");
    setUserId("");
  };

  return (
    <div className={"sidebar " + (isOpen ? "show" : "hide")}>
      <div className="icon">
        <FaTimes onClick={toggle} />
      </div>
      <div className="sidebar-content">
        <Link to={"/about"} className="link" onClick={toggle}>
          About
        </Link>
        <Link to={"/contact"} className="link" onClick={toggle}>
          Contact Us
        </Link>
        <Link to={"/shop"} className="link" onClick={toggle}>
          Shop
        </Link>
        <NavDropdown title="Services" id="basic-nav-dropdown">
          <NavDropdown.Item href="/rejuvenation">
            Rejuvenation &amp; Pain Relief Therapies
          </NavDropdown.Item>
          <NavDropdown.Item href="/post_delivery_care">
            Pregnancy &amp; Post Delivery Care
          </NavDropdown.Item>
          <NavDropdown.Item href="/panchakarma">Panchakarma</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/swarna_prashana">
            Swarna Prashana
          </NavDropdown.Item>
          <NavDropdown.Item href="/yoga">Therapeutic Yoga</NavDropdown.Item>
        </NavDropdown>
        <div className="cart__icon__mobile">
          <p>{cartCount}</p> &nbsp;
          <a href="/cart">
            <RiShoppingCart2Fill />
            <small>&nbsp;cart</small>
          </a>
        </div>
        <div className="account__info__mobile">
          <NavDropdown title="Account" id="basic-nav-dropdown">
            <NavDropdown.Item href="/orders">My Orders</NavDropdown.Item>
            {userId ? (
              <NavDropdown.Item onClick={signOut}>Sign Out</NavDropdown.Item>
            ) : (
              <NavDropdown.Item href="/sign_in">Sign In</NavDropdown.Item>
            )}
          </NavDropdown>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
