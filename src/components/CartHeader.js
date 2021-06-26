import React from "react";
import "./CartHeader.css";
const CartHeader = ({ title }) => {
  return (
    <div className="cartheader">
      <h3>{title}</h3>
    </div>
  );
};

export default CartHeader;
