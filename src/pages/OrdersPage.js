import React, { useState } from "react";
import { useEffect } from "react";
import { ProgressBar } from "react-bootstrap";
import LoadingButton from "../components/LoadingButton";
import backend from "../axios";
import "./OrdersPage.css";

// const dummy = [
//   {
//     id: "18923434896",
//     date: "21 June 2021",
//     name: "Ashta Choornam",
//     price: 340,
//     quantity: 3,git 
//     status: "Processing",
//     img: "https://images.theconversation.com/files/256057/original/file-20190129-108364-17hlc1x.jpg",
//   },
//   {
//     id: "28923434895",
//     date: "21 June 2021",
//     name: "COVIShield Vaccine",
//     price: 240,
//     quantity: 2,
//     status: "Shipped",
//     img: "https://images.financialexpress.com/2021/02/covishield-2.jpg",
//   },
//   {
//     id: "1892734894",
//     date: "21 June 2021",
//     name: "Kanti Choornam",
//     price: 340,
//     quantity: 3,
//     status: "Delivered",
//     img: "https://img.etimg.com/thumb/msid-76075220,width-1200,height-900/industry/healthcare/biotech/pharmaceuticals/government-frees-exports-of-paracetamol-apis.jpg",
//   },
// ];
const status = {
  Processing: 10,
  Shipped: 60,
  Delivered: 100,
};
const OrdersPage = () => {
  // fetch orders of a particular user.
  const [orders, setOrders] = useState();
  useEffect(() => {
    const fetchOrders = async () => {
      const orders = await backend.get("api/get_orders", {
        params: {
          userId: localStorage.getItem("userId"),
        },
      });
      setOrders(orders.data);
    };
    fetchOrders();
  }, []);

  return (
    <div className="orders">
      <h4 className="subheading">Your Orders</h4>
      {orders ? (
        orders.map((order) => <Order order={order} />)
      ) : (
        <p>You haven't ordered anything yet.</p>
      )}
    </div>
  );
};

export default OrdersPage;

const Order = ({ order }) => {
  const [loading, setLoading] = useState(false);
  const cancelOrder = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  const returnItem = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
        {/* <div className="order__header__id">
          <p>ORDER ID</p>
          <p>#{order._id}</p>
        </div> */}
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
