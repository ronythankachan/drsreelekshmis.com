import React from "react";
import { NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { RiMenu3Fill, RiShoppingCart2Fill } from "react-icons/ri";
import "./Navbar.css";
import Header from "./Header";

const Navbar = ({ user, setUser, toggle, cartCount, setCart }) => {
  let history = useHistory();
  const signOut = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userType");
    setUser(null);
    setCart([]);
    history.push("/");
  };

  return (
    <div className="navbar__container">
      <div className="header">
        <Header />
      </div>
      <div className="navbar">
        <div className="navbar__left">
          <Link to={"/"} className="link navbar__logo">
            Dr.Sreelekshmi's{" "}
            <div style={{ fontSize: "12px", color: "grey" }}>
              Kerala Ayurveda center
            </div>
          </Link>
        </div>
        <div className="navbar__middle">
          <Link to="/about" className="link">
            About
          </Link>
          <Link to="/contact" className="link">
            Contact Us
          </Link>
          <Link to="/shop" className="link">
            Shop
          </Link>
          <NavDropdown title="Services">
            <NavDropdown.Item>
              <Link to="/rejuvenation">Pain Relief Therapies </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/post_delivery_care">Post Delivery Care</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/panchakarma">Panchakarma</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/swarna_prashana">Swarna Prashana</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/yoga">Therapeutic Yoga</Link>
            </NavDropdown.Item>
          </NavDropdown>
        </div>
        <div className="navbar__right">
          <div className="cart__icon">
            <p>{cartCount}</p> &nbsp;
            <Link to="/cart">
              <RiShoppingCart2Fill />
              Cart
            </Link>
          </div>
          <div className="account__info">
            <NavDropdown title="Account">
              {user && user.userType === "client" ? (
                <>
                  <NavDropdown.Item>
                    <Link to="/orders">Orders &amp; Returns</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/settings">Account Settings</Link>
                  </NavDropdown.Item>
                </>
              ) : user && user.userType === "admin" ? (
                <>
                  <NavDropdown.Item>
                    <Link to="/manage_appointments">Appointments</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/manage_products">Products</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/manage_orders">Orders</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/admin_settings">Settings</Link>
                  </NavDropdown.Item>
                </>
              ) : null}

              {user ? (
                <button onClick={signOut}>Sign Out</button>
              ) : (
                <NavDropdown.Item>
                  <Link to="/login">Sign Up/Login</Link>
                </NavDropdown.Item>
              )}
            </NavDropdown>
          </div>
          <div className="navbar__mobile__icon" onClick={toggle}>
            <RiMenu3Fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
