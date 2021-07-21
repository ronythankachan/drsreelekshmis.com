import React from "react";
import "./Sidebar.css";
import { FaTimes } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { RiShoppingCart2Fill } from "react-icons/ri";

const Sidebar = ({ user, setUser, toggle, cartCount, setCart, isOpen }) => {
  let history = useHistory();
  const signOut = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userType");
    setUser(null);
    setCart([]);
    toggle();
    history.push("/");
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
          <NavDropdown.Item onClick={toggle}>
            <Link to="/rejuvenation">Pain Relief Therapies </Link>
          </NavDropdown.Item>
          <NavDropdown.Item onClick={toggle}>
            <Link to="/post_delivery_care">Post Delivery Care</Link>
          </NavDropdown.Item>
          <NavDropdown.Item onClick={toggle}>
            <Link to="/panchakarma">Panchakarma</Link>
          </NavDropdown.Item>
          <NavDropdown.Item onClick={toggle}>
            <Link to="/swarna_prashana">Swarna Prashana</Link>
          </NavDropdown.Item>
          <NavDropdown.Item onClick={toggle}>
            <Link to="/yoga">Therapeutic Yoga</Link>
          </NavDropdown.Item>
        </NavDropdown>
        <div className="cart__icon__mobile" onClick={toggle}>
          <p>{cartCount}</p> &nbsp;
          <Link to="/cart">
            <RiShoppingCart2Fill />
            Cart
          </Link>
        </div>
        <div className="account__info__mobile">
          <NavDropdown title="Account" id="basic-nav-dropdown">
            {user && user.userType === "client" ? (
              <>
                <NavDropdown.Item onClick={toggle}>
                  <Link to="/orders">Orders &amp; Returns</Link>
                </NavDropdown.Item>
                {/* <NavDropdown.Item>
                    <Link to="/settings">Account Settings</Link>
                  </NavDropdown.Item> */}
              </>
            ) : user && user.userType === "admin" ? (
              <>
                <NavDropdown.Item onClick={toggle}>
                  <Link to="/manage_appointments">Appointments</Link>
                </NavDropdown.Item>
                <NavDropdown.Item onClick={toggle}>
                  <Link to="/manage_products">Products</Link>
                </NavDropdown.Item>
                <NavDropdown.Item onClick={toggle}>
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
              <NavDropdown.Item onClick={toggle}>
                <Link to="/login">Sign Up/Login</Link>
              </NavDropdown.Item>
            )}
          </NavDropdown>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
