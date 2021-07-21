import { useState, useEffect } from "react";
import backend from "../axios";

const useAddress = (updater) => {
  const [addressList, setAddressList] = useState(null);
  useEffect(() => {
    async function getAddress() {
      const response = await backend.get("/api/get_address", {
        params: { userId: localStorage.getItem("userId") },
      });
      setAddressList(response.data);
    }
    getAddress();
  }, [updater]);
  return [addressList, setAddressList];
};

export default useAddress;
