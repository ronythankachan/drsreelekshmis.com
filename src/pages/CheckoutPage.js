import { Button, Accordion, Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import backend from "../axios";
import "./CheckoutPage.css";
import AddressForm from "../components/AddressForm";
import PaymentSelector from "../components/PaymentSelector";
import AddressCard from "../components/AddressCard";

const CheckoutPage = (props) => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [cart, setCart] = useState([]);
  console.log("cart is", cart);
  const placeOrder = () => {
    alert("Order placed successfully");
  };

  useEffect(() => {
    const getCartItems = async () => {
      try {
        const response = await backend.get("/api/get_cart_items", {
          params: { userId: localStorage.getItem("userId") },
        });
        setCart(response.data);
        return response.data;
      } catch (error) {
        console.log(error);
        return [];
      }
    };
    getCartItems();
  }, []);

  const isInvalidOrder = () => {
    if (selectedAddress) return false;
    return true;
  };

  return (
    <div className="checkoutpage">
      <Accordion defaultActiveKey="0" style={{ margin: "30px 10px" }}>
        <Card style={{ width: "800px" }}>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Select a delivery address
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <AddressList
                selectedAddress={selectedAddress}
                setSelectedAddress={setSelectedAddress}
              />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card style={{ width: "800px" }}>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Add a new address
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <AddressForm />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card style={{ width: "800px" }}>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            Select Payment method
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <PaymentSelector />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <div className="summary">
        <h3 className="subheading">Summary</h3>
        <div className="cartinvoice__item">
          <p>Amount</p>
          <p>Rs. {props.location?.state?.total}</p>
        </div>
        <div className="cartinvoice__item">
          <p>Delivery</p>
          <p>Rs. {props.location?.state?.delivery}</p>
        </div>
        <div className="cartinvoice__item">
          <h4>Sub-total</h4>
          <h4>
            Rs. {props.location?.state?.total + props.location?.state?.delivery}
          </h4>
        </div>
        <div className="checkout__btn">
          <Button
            variant="success"
            onClick={placeOrder}
            disabled={isInvalidOrder()}
          >
            Place Order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

const AddressList = ({ selectedAddress, setSelectedAddress }) => {
  const [addressList, setAddressList] = useState([]);
  const [updater, setUpdater] = useState(false);

  useEffect(() => {
    async function getAddress() {
      const response = await backend.get("/api/get_address", {
        params: { userId: localStorage.getItem("userId") },
      });
      setAddressList(response.data);
    }
    getAddress();
    return () => {
      setAddressList([]);
    };
  }, [updater]);

  const addresses = addressList.map((item, index) => {
    return (
      <AddressCard
        data={item}
        setUpdater={setUpdater}
        key={index}
        selectedAddress={selectedAddress}
        setSelectedAddress={setSelectedAddress}
      />
    );
  });

  return <div className="addresses">{addresses}</div>;
};
