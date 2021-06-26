import React from "react";
import "./BookAppointmentInfo.css";
import { FcOk } from "react-icons/fc";
import SocialDistance from "../images/social_distance.svg";

const BookAppointmentInfo = () => {
  return (
    <div className="bookappointmentinfo">
      <h1>Book Appointment</h1>
      <p>Let's fight COVID-19 together</p>
      <div className="pageImage">
        <img src={SocialDistance} alt="" />
      </div>
      <div className="bullets">
        <div className="bullet__item">
          <div className="bullet__icon">
            <FcOk style={{ color: "green" }} />
          </div>
          <p>
            Due to alarming increase of COVID-19 cases, we have launched
            consultation via video calls. You can schedule a video call
            appointment by selecting appointment type as "Online". Let's break
            the chain together.
          </p>
        </div>
        <div className="bullet__item">
          <div className="bullet__icon">
            <FcOk style={{ color: "blue" }} />
          </div>
          <p>
            There are several services that are done by experts in your home. To
            book a home appointment, select appointment type as "Home"
          </p>
        </div>
        <div className="bullet__item">
          <div className="bullet__icon">
            <FcOk style={{ color: "orange" }} />
          </div>
          <p>
            You can also book an appointment in clinic. If there is any change
            of plans after booking, please contact us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookAppointmentInfo;
