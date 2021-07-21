import React, { useState } from "react";
import "./ProductCard.css";
import { Button, Spinner } from "react-bootstrap";
import backend from "../axios";
import { useContext } from "react";
import { UserContext } from "../App";
import { useHistory } from "react-router-dom";

const ProductCard = ({ data }) => {
  const history = useHistory();
  const { user, cartUpdated, setCartUpdated } = useContext(UserContext);
  const [alertClasses, setAlertClasses] = useState("alert__hide");
  const [alertMsg, setAlertMsg] = useState();
  const [addToCartClicked, setAddToCartClicked] = useState(false);

  const addToCartBtnText = () => {
    return addToCartClicked ? (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Spinner animation="border" size="sm" style={{ marginRight: "5px" }} />
        Adding...
      </div>
    ) : (
      <div className="logintxt">Add to Cart</div>
    );
  };

  const addToCart = (medicineId) => {
    if (user) {
      setAddToCartClicked(true);
      backend
        .post("/api/add_to_cart", {
          userId: user.userId,
          medicineId: medicineId,
          quantity: 1,
        })
        .then(
          () => {
            setCartUpdated(!cartUpdated);
            setAddToCartClicked(false);
          },
          (error) => {
            console.log("failed to add item to cart", error);
          }
        );
      console.log(`adding ${medicineId} item to Cart`);
    } else {
      setAlertClasses("simple__alert orange");
      setAlertMsg("Please Login First");
      setTimeout(() => {
        setAlertClasses("simple__alert alert__hide");
        setAlertMsg("");
      }, 2000);
    }
  };
  const buyNow = (medicineId) => {
    addToCart(medicineId);
    history.push("/cart");
  };

  return (
    <div className="productcard">
      <img src={data.img} alt="" />
      <h3>
        {data.name} <small>({data.category})</small>
      </h3>
      <small>{data.description}</small>
      <h3>Rs. {data.price}</h3>
      <div className="productcard__buttons">
        <Button variant="warning" onClick={() => addToCart(data._id)}>
          <Spinner />
          {addToCartBtnText()}
        </Button>
        <Button variant="success" onClick={() => buyNow(data._id)}>
          Buy Now
        </Button>
      </div>
      {user ? null : <div className={alertClasses}>{alertMsg}</div>}
    </div>
  );
};

export default ProductCard;
