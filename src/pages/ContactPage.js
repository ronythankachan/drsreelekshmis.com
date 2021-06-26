import React from "react";
import "./ContactPage.css";
import Map from "../components/Map";
import ClinicInfo from "../components/ClinicInfo";

const ContactPage = () => {
  return (
    <div className="contactpage">
      <Map />
      <ClinicInfo />
    </div>
  );
};

export default ContactPage;
