// Import necessary dependencies and styles
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate from react-router-dom
import "./index.css"; // Import CSS file for styling

// Login component
const Login = () => {
  // Initialize state for form values and errors
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

  const navigate = useNavigate(); // Use useNavigate hook to navigate programmatically

  // Function to validate form inputs
  function Validation(values) {
    let error = {};

    if (values.name === "") {
      error.name = "name should not be empty";
    } else {
      error.name = "";
    }

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

  // Function to handle input changes
  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values));

    // Check if all fields are filled
    if (values.name !== "" && values.email !== "" && values.password !== "") {
      // Redirect to profile with props
      navigate("/profile", { state: { info: values } }); // Use navigate function to redirect to profile page
    }
  };

  // Render login form
  return (
    <div className="login-container">
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              onChange={handleInput}
              value={values.name}
              name="name"
              placeholder="Enter Name"
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
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

export default Login; // Export Login component
