import React, { useState } from "react"; // Importing React and useState hook from React
import { Link } from "react-router-dom"; // Importing Link component from react-router-dom
import "./index.css"; // Import CSS file

function Signup() {
  // State variables to store form values and errors
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

  // Function to validate form inputs
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

  // Function to handle input changes in the form
  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  // Function to handle form submission
  const SubmitForm = (e) => {
    e.preventDefault();
    setErrors(Validation(values)); // Validate form inputs and set errors
  };

  return (
    <div className="signup-container">
      <div className="form-container">
        <h1>Sign up</h1>
        {/* Form element with onSubmit event handler */}
        <form onSubmit={SubmitForm}>
          {/* Input field for name */}
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
            {/* Display error message if name is empty */}
            {errors.name && <p className="error-message">{errors.name}</p>}
          </div>
          {/* Input field for email */}
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
            {/* Display error message if email is empty */}
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          {/* Input field for password */}
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
            {/* Display error message if password is empty */}
            {errors.password && (
              <p className="error-message">{errors.password}</p>
            )}
          </div>
          {/* Submit button */}
          <button type="submit">Sign up</button>
          {/* Link to navigate to login page */}
          <Link to="/login">Login</Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
