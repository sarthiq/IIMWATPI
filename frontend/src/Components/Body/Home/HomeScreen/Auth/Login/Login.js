import React, { useState } from "react";
import { Container, Card, Form, Button, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { loginHandler } from "../apiHandler";
import { useDispatch } from "react-redux";
import { setUserAuthToken,userLogin } from "../../../../../../Store/User/auth";
import "./Login.css";
import { useAlert } from "../../../../../UI/Alert/AlertContext";
import { setUserType } from "../../../../../../Store/CommonInfo/commonInfo";

export const Login = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { showAlert } = useAlert();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await loginHandler(formData, setIsLoading, showAlert);

    if (response) {
      // Store the token in localStorage
      localStorage.setItem("token", response.token);
      dispatch(setUserAuthToken(response.token));
      dispatch(userLogin());
      dispatch(setUserType());
      // Show success message
      showAlert("Login successful!", "success");

      // Redirect to dashboard or home
      navigate("/dashboard");
    }
  };

  return (
    <Container className="login-container">
      <Card className="login-card">
        <Card.Body>
          <h2 className="login-title">Welcome Back!</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="login-form-group">
              <Form.Label>Email or Phone</Form.Label>
              <Form.Control
                type="text"
                name="emailOrPhone"
                value={formData.emailOrPhone}
                onChange={handleChange}
                placeholder="Enter email or phone number"
                required
                disabled={isLoading}
              />
            </Form.Group>

            <Form.Group className="login-form-group">
              <Form.Label>Password</Form.Label>
              <div className="password-input-group">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  required
                  disabled={isLoading}
                  style={{ paddingRight: '40px' }}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </Form.Group>

            <Button
              className="login-submit-btn"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              ) : (
                "Login"
              )}
            </Button>

            <div className="login-footer">
              <p>Don't have an account?</p>
              <Link to="../signup" className="signup-link">
                Sign Up
              </Link>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};
