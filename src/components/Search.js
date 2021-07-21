import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import "./Search.css";
import { RiSearchLine } from "react-icons/ri";
const Search = ({ setQuery }) => {
  return (
    <div className="search">
      <Form onSubmit={(e) => e.preventDefault()} id="search">
        <InputGroup>
          <RiSearchLine style={{ fontSize: "1.2rem", color: "gray" }} />
          <Form.Control
            type="text"
            placeholder="Search for products.."
            onChange={(e) => setQuery(e.target.value)}
          />
        </InputGroup>
      </Form>
    </div>
  );
};

export default Search;
