import React, { useState } from "react";
import { useEffect } from "react";
import { ProgressBar } from "react-bootstrap";
import LoadingButton from "../components/LoadingButton";
import backend from "../axios";
import "./OrdersPage.css";

const status = {
  Processing: 10,
  Shipped: 60,
  Delivered: 100,
};
const OrdersPage = () => {
  // fetch orders of a particular user.
  const [orders, setOrders] = useState();
  useEffect(() => {
    (async () => {
      const orders = await backend.get("api/get_orders", {
        params: {
          userId: localStorage.getItem("userId"),
        },
      });
      setOrders(orders.data);
    })();
    return () => {
      setOrders();
    };
  }, []);
  return (
    <div className="orders">
      <h4 className="subheading">Your Orders</h4>
      {orders && orders.length ? (
        orders.map((order, index) => (
          <Order order={order} key={index} setOrders={setOrders} />
        ))
      ) : (
        <p>You haven't ordered anything yet.</p>
      )}
    </div>
  );
};

export default OrdersPage;

const Order = ({ order, setOrders }) => {
  const [loading, setLoading] = useState(false);

  const cancelOrder = () => {
    setLoading(true);
    // change order status in db
    (async () =>
      await backend.post("/api/cancel_order", {
        userId: localStorage.getItem("userId"),
        orderId: order.orderId,
        medicineId: order._id,
      }))();
    alert("Order Cancelled Successfully");
    // Change order status in local state
    setOrders((curr) =>
      curr.filter(
        (item) => !(item._id === order._id && item.orderId === order.orderId)
      )
    );
    setLoading(false);
  };
  const returnItem = () => {
    setLoading(true);
    // change order status in db
    (async () =>
      await backend.post("/api/return_item", {
        userId: localStorage.getItem("userId"),
        orderId: order.orderId,
        medicineId: order._id,
      }))();
    alert("Return request raised");
    // Change order status in local state
    setOrders((curr) =>
      curr.filter(
        (item) => !(item._id === order._id && item.orderId === order.orderId)
      )
    );
    setLoading(false);
  };
  return (
    <div className="order">
      <div className="order__header">
        <div className="order__header__date">
          <p>ORDER PLACED</p>
          <p>{new Date(order.orderDate).toDateString()}</p>
        </div>
        <div className="order__header__total">
          <p>TOTAL</p>
          <p>Rs. {order.price * order.quantity}</p>
        </div>
        <div className="order__header__id" style={{ color: "green" }}>
          <p>Expected Delivery</p>
          <p>{new Date(order.deliveryDate).toDateString()}</p>
        </div>
      </div>
      <div className="order__body">
        <img src={order.img} alt="" />
        <div className="order__body__data">
          <div className="order__body__details">
            <h4>{order.name}</h4>
            <p>{order.quantity} items</p>
          </div>
          <div className="order__body__buttons">
            {order.status === "Processing" ? (
              <LoadingButton
                onClick={cancelOrder}
                text="Cancel Order"
                loading={loading}
                loadingText={"Please wait"}
                variant="dark"
              />
            ) : order.status === "Delivered" ? (
              <LoadingButton
                onClick={returnItem}
                text="Return Item"
                loading={loading}
                loadingText={"Please wait"}
                variant="dark"
              />
            ) : null}
          </div>
        </div>
      </div>
      <div className="order__footer">
        <div className="order__footer__status">
          <small>Processing</small>
          <small>Shipped</small>
          <small>Delivered</small>
        </div>
        <ProgressBar variant="success" animated now={status[order.status]} />
      </div>
    </div>
  );
};
