import React, { useState, useEffect } from "react";
import { Button, ProgressBar } from "react-bootstrap";
import backend from "../axios";
import "./Orders.css";
const Orders = () => {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    const getOrders = async () => {
      const response = await backend.get("api/get_orders", {
        params: {
          userId: localStorage.getItem("userId"),
        },
      });
      setOrders(response.data);
    };
    getOrders();
  }, []);

  console.log(orders);
  return (
    <div className="orders">
      <h4 className="subheading">Your Orders</h4>
      <Order />
      <Order />
      <Order />

    </div>
  );
};

export default Orders;

const Order = () => {
  return (
    <div className="order">
      <div className="order__header">
        <div className="order__header__date">
          <p>ORDER PLACED</p>
          <p>2021 June 23</p>
        </div>
        <div className="order__header__total">
          <p>TOTAL</p>
          <p>Rs. 820</p>
        </div>
        <div className="order__header__id">
          <p>ORDER ID</p>
          <p>#234681634</p>
        </div>
      </div>
      <div className="order__body">
        <img
          src="https://images.theconversation.com/files/256057/original/file-20190129-108364-17hlc1x.jpg"
          alt=""
        />
        <div className="order__body__data">
          <div className="order__body__details">
            <h4>Ashta Choornam</h4>
            <p>Quantity: 3</p>
          </div>
          <div className="order__body__buttons">
            <Button size="sm" variant="dark">Cancel Order</Button>
          </div>
        </div>
      </div>
      <div className="order__footer">
        <div className="order__footer__status">
          <small>Processing</small>
          <small>Shipped</small>
          <small>Delivered</small>
        </div>
        <ProgressBar variant="success" animated now={50} />
      </div>
    </div>
  );
};
