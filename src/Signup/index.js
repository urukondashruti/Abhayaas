import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled components
const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormContainer = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

const InputGroup = styled.div`
  margin-bottom: 15px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;

  &.error {
    border-color: #dc3545;
  }
`;

const Label = styled.label`
  font-weight: bold;
`;

const ErrorMessage = styled.p`
  color: #dc3545;
  font-size: 14px;
  margin-top: 5px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #0056b3;
  }
`;

const LoginLink = styled(Link)`
  display: block;
  text-align: center;
  color: #007bff;
  text-decoration: none;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

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
    setErrors(Validation(values));
  };

  return (
    <SignupContainer>
      <FormContainer>
        <h1>Sign up</h1>
        <form onSubmit={SubmitForm}>
          {/* Input field for name */}
          <InputGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              onChange={handleInput}
              value={values.name}
              name="name"
              placeholder="Enter name"
              className={errors.name ? "error" : ""}
            />
            {/* Display error message if name is empty */}
            {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
          </InputGroup>
          {/* Input field for email */}
          <InputGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              onChange={handleInput}
              value={values.email}
              name="email"
              placeholder="Enter Email"
              className={errors.email ? "error" : ""}
            />
            {/* Display error message if email is empty */}
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          </InputGroup>
          {/* Input field for password */}
          <InputGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              onChange={handleInput}
              value={values.password}
              name="password"
              placeholder="Enter Password"
              className={errors.password ? "error" : ""}
            />
            {/* Display error message if password is empty */}
            {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
          </InputGroup>
          {/* Submit button */}
          <SubmitButton type="submit">Sign up</SubmitButton>
          {/* Link to navigate to login page */}
          <LoginLink to="/login">Login</LoginLink>
        </form>
      </FormContainer>
    </SignupContainer>
  );
}

export default Signup;