import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

// Styled components
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginForm = styled.div`
  width: 300px;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Error = styled.p`
  color: red;
  font-size: 0.8rem;
  margin-top: 5px;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const CreateAccountLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 10px;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Login = () => {
  // State for form values and errors
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

  // Hook to navigate programmatically
  const navigate = useNavigate();

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
      navigate("/profile", { state: { info: values } });
    }
  };

  return (
    <LoginContainer>
      <LoginForm>
        <form onSubmit={handleSubmit}>
          {/* Input fields */}
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              onChange={handleInput}
              value={values.name}
              name="name"
              placeholder="Enter Name"
            />
            {errors.name && <Error>{errors.name}</Error>}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              onChange={handleInput}
              value={values.email}
              name="email"
              placeholder="Enter Email"
            />
            {errors.email && <Error>{errors.email}</Error>}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              onChange={handleInput}
              value={values.password}
              name="password"
              placeholder="Enter Password"
            />
            {errors.password && <Error>{errors.password}</Error>}
          </FormGroup>
          {/* Login button */}
          <LoginButton type="submit">Login</LoginButton>
          {/* Link to create account */}
          <CreateAccountLink to="/signup">Create Account</CreateAccountLink>
        </form>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
