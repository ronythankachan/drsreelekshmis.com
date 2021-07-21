import backend from "../axios";
import { useState, useEffect } from "react";

const useCart = (user) => {
  const [cart, setCart] = useState([]);
  const [cartUpdated, setCartUpdated] = useState(false);
  useEffect(() => {
    const getCartItems = async () => {
      try {
        const response = await backend.get("/api/get_cart_items", {
          params: { userId: user.userId },
        });
        setCart(response.data);
        return response.data;
      } catch (error) {
        console.log(error);
        return [];
      }
    };
    getCartItems();
  }, [user, cartUpdated]);

  return [cart, setCart, cartUpdated, setCartUpdated];
};

export default useCart;
