import React, { useState } from "react";
import "./ShoppingPage.css";
import ProductList from "../components/ProductList";
import SidePanelContainer from "../components/SidePanelContainer";
import Search from "../components/Search";
import MedicineFilter from "../components/MedicineFilter";

const ShoppingPage = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  return (
    <div className="shoppingpage">
      <SidePanelContainer>
        <MedicineFilter setCategory={setCategory} />
      </SidePanelContainer>
      <div className="shoppingpage__body">
        <Search setQuery={setQuery} />
        <ProductList query={query} category={category} />
      </div>
    </div>
  );
};

export default ShoppingPage;
