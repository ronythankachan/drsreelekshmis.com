import { Form, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import backend from "../axios";
import LoadingButton from "./LoadingButton";
import { useState } from "react";

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Punjab",
  "Puducherry",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const AddressForm = () => {
  const [loading, setLoading] = useState(false);
  const validate = (values) => {
    const errors = {};
    if (!values.firstName) errors.firstName = "Required field";
    if (!values.phone) errors.phone = "Required field";
    if (!values.zip) errors.zip = "Required field";
    if (!values.addressLine1) errors.addressLine1 = "Required field";
    if (!values.city) errors.city = "Required field";
    if (!values.state || values.state === "Choose...")
      errors.state = "Required field";
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      zip: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      landMark: "",
    },
    validate,
    onSubmit: (values) => {
      setLoading(true);
      const addAddress = async () => {
        const response = await backend.post("/api/add_address", {
          ...values,
          userId: localStorage.getItem("userId"),
        });
        if (response.statusText === "OK") {
          setLoading(false);
          alert("Address added successfully");
        }
      };
      addAddress();
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group>
        <Row>
          <Col>
            <Form.Label>First Name*</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.firstName && formik.errors.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="error">{formik.errors.firstName}</div>
            ) : null}
          </Col>
          <Col>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
            />
          </Col>
        </Row>
      </Form.Group>
      <Form.Group>
        <Row>
          <Col>
            <Form.Label>Phone*</Form.Label>
            <Form.Control
              type="number"
              name="phone"
              placeholder="Mobile Number"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.phone && formik.errors.phone}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="error">{formik.errors.phone}</div>
            ) : null}
          </Col>
          <Col>
            <Form.Label>Pin Code*</Form.Label>
            <Form.Control
              type="number"
              name="zip"
              placeholder="Pin Code"
              value={formik.values.zip}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.zip && formik.errors.zip}
            />
            {formik.touched.zip && formik.errors.zip ? (
              <div className="error">{formik.errors.zip}</div>
            ) : null}
          </Col>
        </Row>
      </Form.Group>
      <Form.Group>
        <Form.Label>Flat, House no.,Building, Company, Apartment*</Form.Label>
        <Form.Control
          type="text"
          placeholder="Address Line 1"
          name="addressLine1"
          value={formik.values.addressLine1}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={formik.touched.addressLine1 && formik.errors.addressLine1}
        />
        {formik.touched.addressLine1 && formik.errors.addressLine1 ? (
          <div className="error">{formik.errors.addressLine1}</div>
        ) : null}
      </Form.Group>
      <Form.Group>
        <Form.Label>Area, Colony, Street, Sector, Village</Form.Label>
        <Form.Control
          type="text"
          placeholder="Address Line 2"
          name="addressLine2"
          value={formik.values.addressLine2}
          onChange={formik.handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>LandMark</Form.Label>
        <Form.Control
          type="text"
          placeholder="Eg: Near PVR Cinemas"
          name="landMark"
          value={formik.values.landMark}
          onChange={formik.handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Row>
          <Col>
            <Form.Label>Town/City*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Eg:Kochi"
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.city && formik.errors.city}
            />
            {formik.touched.city && formik.errors.city ? (
              <div className="error">{formik.errors.city}</div>
            ) : null}
          </Col>
          <Col>
            <Form.Label>State*</Form.Label>
            <Form.Control
              as="select"
              title="Choose..."
              name="state"
              value={formik.values.state}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.state && formik.errors.state}
            >
              <option>Choose...</option>
              {indianStates.map((state) => (
                <option>{state}</option>
              ))}
            </Form.Control>
            {formik.touched.state && formik.errors.state ? (
              <div className="error">{formik.errors.state}</div>
            ) : null}
          </Col>
        </Row>
      </Form.Group>
      <Form.Group>
        <Form.Label>Delivery Instructions</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <LoadingButton
        variant="success"
        type="submit"
        loadingText="Adding..."
        text="Add Address"
        loading={loading}
      />
    </Form>
  );
};
export default AddressForm;
