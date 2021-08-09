import React from "react";
import "./CartInvoice.css";
import { Button } from "react-bootstrap";
// import { useHistory } from "react-router-dom";
import backend from "../axios";
const CartInvoice = ({ total, delivery, cart }) => {
  // const history = useHistory();

  // dummy items
  const items = [
    {
      id: 1,
      quantity: 3,
    },
    {
      id: 2,
      quantity: 1,
    },
    {
      id: 3,
      quantity: 13,
    },
  ];

  const checkOut = () => {
    backend
      .post("/api/checkout", items)
      .then((res) => {
        window.location = res.data.url;
      })
      .catch((err) => {
        console.log(JSON.stringify(err));
      });
  };

  // const checkOut = () => {
  //   history.push(`/checkout/${cart[0]._id}`);
  // };

  const isCartEmpty = () => {
    if (cart.length > 0) return false;
    else return true;
  };
  return (
    <div className="cartinvoice">
      <div className="cartinvoice__item">
        <p>Amount</p>
        <p>Rs. {total}</p>
      </div>
      <div className="cartinvoice__item">
        <p>Delivery</p>
        <p>Rs. {delivery}</p>
      </div>
      <div className="cartinvoice__item">
        <h4>Sub-total</h4>
        <h4>Rs. {total + delivery}</h4>
      </div>
      <div className="checkout__btn">
        <Button variant="success" onClick={checkOut} disabled={isCartEmpty()}>
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartInvoice;
