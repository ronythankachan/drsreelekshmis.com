import React, { useEffect } from "react";
import "./ProductList.css";
import ProductCard from "../components/ProductCard";
import backend from "../axios";
import { useState } from "react";
import { Spinner } from "react-bootstrap";

const ProductList = ({ query, category }) => {
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    backend
      .get("/api/get_medicines", {
        params: {
          value: query + "" + category,
        },
      })
      .then(
        (response) => {
          setLoading(false);
          setMedicines(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
  }, [query, category]);

  const products = medicines.map((item) => {
    return <ProductCard data={item} key={item._id} />;
  });
  return (
    <div className="productlist">
      {loading ? (
        <Spinner
          animation="grow"
          style={{ marginTop: "100px", width: "30px" }}
        />
      ) : (
        products
      )}
    </div>
  );
};

export default ProductList;
