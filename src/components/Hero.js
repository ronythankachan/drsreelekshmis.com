import React from "react";
import "./Hero.css";
import HeroVideo from "../video/hero_background.mp4";
import { Button } from "react-bootstrap";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__video">
        <video autoPlay loop muted>
          <source src={HeroVideo} type="video/mp4" />
        </video>
      </div>
      <div className="hero__title">
        <h1>Dr. Sreelekshmi’s kerala Ayurveda Centre</h1>
        <h4>An Ayurveda care centre for your day-to-day health problems</h4>
        <div className="hero__buttons">
          <Button className="green__button" href="/shop">
            Buy Medicines
          </Button>
          <Button className="green__button" href="/book_appointment">
            Book Appointment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
