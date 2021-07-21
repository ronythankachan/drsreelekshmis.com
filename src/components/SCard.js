import React from "react";
import { Button } from "react-bootstrap";
import "./SCard.css";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";

const SCard = ({ image, name, description, direction, readmore }) => {
  return (
    <div className="scard" style={{ flexDirection: direction }}>
      <LazyLoad>
        <div className="card__image">
          <img src={image} alt="panchakarma" />
        </div>
      </LazyLoad>
      <div className="card__details">
        <h2>{name}</h2>
        <p>{description}</p>
        <Button variant="dark" href={readmore}>
          <Link to={readmore}>Read More &gt;&gt;</Link>
        </Button>
      </div>
    </div>
  );
};

export default SCard;
