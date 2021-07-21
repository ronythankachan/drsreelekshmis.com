import React, { useState } from "react";
import "./SignUp.css";
import { useFormik } from "formik";
import { Form, Spinner } from "react-bootstrap";
import { CgArrowLongRight } from "react-icons/cg";
import backend from "../axios";

const SignUp = ({ setLogIn }) => {
  const [signUpClicked, setSignUpClicked] = useState(false);
  const [msg, setMsg] = useState("");
  const [msgClass, setMsgClass] = useState("signup__msg");
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "E-mail is required";
    } else if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        values.email
      )
    ) {
      errors.email = "Invalid E-mail Address";
    }
    if (!values.password1) {
      errors.password1 = "Enter password";
    } else if (values.password1.length < 8) {
      errors.password1 = "Minimum 8 characters needed";
    }
    if (!values.password2) {
      errors.password2 = "Repeat password";
    } else if (values.password1 !== values.password2) {
      errors.password2 = "Passwords dont match";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password1: "",
      password2: "",
      userType: "client",
    },
    validate,
    onSubmit: (values) => {
      setMsgClass("signup__msg");
      setMsg("");
      setSignUpClicked(true);
      let postValues = {
        userType: values.userType,
        email: values.email,
        password: values.password1,
      };
      backend
        .post("/api/signup", postValues)
        .then(
          (response) => {
            setMsgClass("signup__msg signup__success");
            setMsg(response.data);
            setSignUpClicked(false);
            setTimeout(() => {
              setLogIn(true);
            }, 3000);
          },
          (error) => {
            setMsgClass("signup__msg signup__error");
            setMsg(error.response.data);
          }
        )
        .finally(() => {
          setSignUpClicked(false);
          formik.resetForm();
        });
      console.log(formik.errors);
    },
  });
  const signupText = () => {
    return signUpClicked ? (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Spinner animation="border" size="sm" style={{ marginRight: "10px" }} />
        Signing up...
      </div>
    ) : (
      <div className="logintxt">
        Sign Up
        <CgArrowLongRight />
      </div>
    );
  };
  return (
    <div className="signup">
      <div className="login__title">
        <h3>Dr. Sreelekshmi's</h3>
        <small>Ayurveda care center</small>
      </div>
      <div className={msgClass}>
        <p>{msg}</p>
      </div>
      <Form className="form__width" onSubmit={formik.handleSubmit}>
        <Form.Group style={{ height: "50px" }}>
          <Form.Control
            type="text"
            placeholder="E-mail"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.email && formik.errors.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </Form.Group>
        <Form.Group style={{ height: "50px" }}>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password1"
            value={formik.values.password1}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.password1 && formik.errors.password1}
          />
          {formik.touched.password1 && formik.errors.password1 ? (
            <div className="error">{formik.errors.password1}</div>
          ) : null}
        </Form.Group>
        <Form.Group style={{ height: "50px" }}>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={formik.values.password2}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.password2 && formik.errors.password2}
          />
          {formik.touched.password2 && formik.errors.password2 ? (
            <div className="error">{formik.errors.password2}</div>
          ) : null}
        </Form.Group>

        <div className="login__buttons">
          <button className="submit" type="submit">
            {signupText()}
          </button>
        </div>
      </Form>
    </div>
  );
};

export default SignUp;
