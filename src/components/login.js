import React, { useState } from "react";
import "../components/login.css";
import { Form, Button, Alert } from "react-bootstrap";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    setShow(false);
    e.preventDefault();
    if (validateEmail(email)) {
      setShow(true);
      setError("");
      return;
    }
    setError("Your email is not valid");
    return false;
  };

  const reset = () => {
    setEmail("");
    setPassword("");
    setShow(false);
  };

  return (
    <>
      {show && (
        <Alert data-testid="user" variant="success">
          {email}
        </Alert>
      )}
      {error && (
        <Alert data-testid="error" variant="danger">
          {error}
        </Alert>
      )}
      <div className="container">
        <Form onSubmit={handleSubmit} className="login-form" noValidate>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Please enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Please enter a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button data-testid="submit" type="submit">
            Submit
          </Button>
          <Button data-testid="reset" type="reset" onClick={reset}>
            Reset
          </Button>
        </Form>
      </div>
    </>
  );
};

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (regex.test(email)) {
    return true;
  }
  return false;
};

export default Login;
