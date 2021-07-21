import React from "react";
import "./CartItem.css";
import backend from "../axios";

const CartItem = ({ cart, data, setCart, userId }) => {
  // delete an item from cart
  const deleteItem = () => {
    // medicine is removed from cart
    const filteredCart = cart.filter(
      (item) => item.medicineId !== data.medicineId
    );
    setCart(filteredCart);
    // update this removal in db also
    backend
      .post("/api/remove_from_cart", {
        medicineId: data.medicineId,
        userId: userId,
      })
      .then(
        (response) => {
          console.log(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  // increment quantity of an item
  const incrementQuantity = () => {
    var newCart = cart.map((item) => {
      if (item.medicineId === data.medicineId) {
        ++item.quantity;
        // update the same in db
        backend
          .post("/api/add_to_cart", {
            userId: userId,
            medicineId: data.medicineId,
            quantity: 1,
          })
          .then(
            (response) => {
              console.log(response.data);
            },
            (error) => {
              console.log(error);
            }
          );
      }
      return item;
    });
    setCart(newCart);
  };

  // decrement quantity of an item
  const decrementQuantity = () => {
    var newCart = cart.map((item) => {
      if (item.medicineId === data.medicineId && item.quantity > 1) {
        --item.quantity;
        // Update the same in db too
        backend
          .post("/api/add_to_cart", {
            userId: userId,
            medicineId: data.medicineId,
            quantity: -1,
          })
          .then(
            (response) => {
              console.log(response.data);
            },
            (error) => {
              console.log(error);
            }
          );
      }
      return item;
    });
    setCart(newCart);
  };

  return (
    <div className="cartitem">
      <div className="item__img">
        <img src={data.img} alt="" />
      </div>
      <div className="item__content">
        <h4>Rs. {data.price}</h4>
        <p>
          {data.name} ( {data.category} )
        </p>
        <div className="item__quantity">
          <p>Quantity</p>
          <button onClick={decrementQuantity}>-</button>
          <p>{data.quantity}</p>
          <button onClick={incrementQuantity}>+</button>
        </div>
      </div>
      <button onClick={deleteItem}>X</button>
    </div>
  );
};

export default CartItem;
