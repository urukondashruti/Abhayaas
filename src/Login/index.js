// Login.js

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css"; // Import CSS file

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate(); // Use useNavigate hook

  function Validation(values) {
    let error = {};

    if (values.email === "") {
      error.email = "email should not be empty";
    } else {
      error.email = "";
    }

    if (values.password === "") {
      error.password = "password should not be empty";
    } else {
      error.password = "";
    }
    return error;
  }

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values));

    // Check if there are no errors
    if (values.email!=="" && values.password!=="") {
      // Redirect to profile with props
      navigate("/profile", { state: { info: values } }); // Use navigate function
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              onChange={handleInput}
              value={values.email}
              name="email"
              placeholder="Enter Email"
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              onChange={handleInput}
              value={values.password}
              name="password"
              placeholder="Enter Password"
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <button type="submit" className="login-btn">Login</button>
          <Link to="/signup" className="create-account-link">Create Account</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
