import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css"; // Import CSS file

function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: ""
  });

  function Validation(values) {
    let error = {};

    if (values.name === "") {
      error.name = "Name should not be empty";
    } else {
      error.name = "";
    }

    if (values.email === "") {
      error.email = "Email should not be empty";
    } else {
      error.email = "";
    }

    if (values.password === "") {
      error.password = "Password should not be empty";
    } else {
      error.password = "";
    }
    return error;
  }

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const SubmitForm = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
  };

  return (
    <div className="signup-container">
      <div className="form-container">
        <h1>Sign up</h1>
        <form onSubmit={SubmitForm}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              onChange={handleInput}
              value={values.name}
              name="name"
              placeholder="Enter name"
              className={errors.name ? "error" : ""}
            />
            {errors.name && <p className="error-message">{errors.name}</p>}
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              onChange={handleInput}
              value={values.email}
              name="email"
              placeholder="Enter Email"
              className={errors.email ? "error" : ""}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              onChange={handleInput}
              value={values.password}
              name="password"
              placeholder="Enter Password"
              className={errors.password ? "error" : ""}
            />
            {errors.password && (
              <p className="error-message">{errors.password}</p>
            )}
          </div>
          <button type="submit">Sign up</button>
          <Link to="/login">Login</Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
