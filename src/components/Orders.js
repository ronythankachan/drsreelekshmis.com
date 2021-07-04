import React, { useState, useEffect } from "react";
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
      <h5 className="subheading">My Orders</h5>
    </div>
  );
};

export default Orders;
