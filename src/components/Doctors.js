import React from "react";
import { Card } from "react-bootstrap";
import "./Doctors.css";
import Sreelekshmi from "../images/sreelekshmi.jpg";
import Varghese from "../images/varghese.jpeg";

const cardStyle = {
  maxWidth: "400px",
  fontSize: "1rem",
};
const Doctors = () => {
  return (
    <div className="doctors">
      <h3>Doctors</h3>
      <div className="doctor__cards">
        <Card style={cardStyle}>
          <Card.Img
            variant="top"
            src={Sreelekshmi}
            style={{ height: "200px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title style={{ fontWeight: "bold" }}>
              Dr. Sreelekshmi S S (BAMS, Yoga TTC)
            </Card.Title>
            <Card.Text>
              Dr. Sreelekshmi completed her BAMS from Rajiv Gandhi University of
              health Sciences and carry an experience of several years in the
              field of Ayurvedic medical practice. She is a Yoga trainer
              practicing therapeutic Yoga since the last 4 years. Currently she
              is pursuing masters in Yoga from SVYASA University, Bangalore.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Available on all days except Tuesday from 10 AM to 1 PM and 4 PM
              to 8 PM
            </small>
          </Card.Footer>
        </Card>
        <Card style={cardStyle}>
          <Card.Img
            variant="top"
            src={Varghese}
            style={{ height: "200px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title style={{ fontWeight: "bold" }}>
              Dr. Varghese Thomas (BAMS, MD)
            </Card.Title>
            <Card.Text>
              Dr. Varghese Thomas is pursuing Ph.D in Trans-Disciplinary
              University Bengaluru. His area of specialization is Ayurvedic
              pharmacology.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Available on Saturday and Sunday on prior appointment.
            </small>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
};

export default Doctors;
