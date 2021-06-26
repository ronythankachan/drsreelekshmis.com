import React, { useState } from "react";
import "./Filters.css";
import { Form, Button } from "react-bootstrap";

const initialFormData = {
  date: "",
  service: "",
  appointmentType: "",
};

const Filters = ({ setFilters }) => {
  const [formData, setFormData] = useState(initialFormData);
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFilters(formData);
  };

  const resetForm = (event) => {
    document.getElementById("filterform").reset();
    setFormData(initialFormData);
  };

  return (
    <div className="filters">
      <h3>FILTERS</h3>
      <Form onSubmit={handleSubmit} id="filterform">
        <Form.Group>
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" name="date" onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Service</Form.Label>
          <Form.Control as="select" name="service" onChange={handleChange}>
            <option>Choose...</option>
            <option>Abhyanga and steam bath (Massage)</option>
            <option>Pinda sweda/Kizhi (Heat fomentation using herbs)</option>
            <option>Shastika shali panda sveda (SSPS)</option>
            <option>Kati, Greeva &amp; Janu basti</option>
            <option>Udvartanam</option>
            <option>Pichu</option>
            <option>Lepam</option>
            <option>Vamana (Therapeutically induced vomiting)</option>
            <option>Virechana (Therapeutically induced loose motion)</option>
            <option>Basti (Medicated enema)</option>
            <option>Nasya (Instillation of medicines to nose)</option>
            <option>Rakta mokshana (Blood letting)</option>
            <option>Post Delivery Care</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Appointment Type</Form.Label>
          <Form.Control
            as="select"
            name="appointmentType"
            onChange={handleChange}
          >
            <option>Choose...</option>
            <option>Home</option>
            <option>Clinic</option>
            <option>Online</option>
          </Form.Control>
        </Form.Group>
        <Button type="submit" variant="success" className="mr-3">
          Apply
        </Button>
        <Button variant="dark" onClick={resetForm}>
          Reset
        </Button>
      </Form>
    </div>
  );
};

export default Filters;
