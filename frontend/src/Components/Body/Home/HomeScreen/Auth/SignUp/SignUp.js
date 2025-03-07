import React, { useState } from 'react';
import { Container, Card, Form, Button, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { signUpHandler } from '../apiHandler';

import './SignUp.css';
import { useAlert } from '../../../../../UI/Alert/AlertContext';

export const SignUp = () => {
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { showAlert } = useAlert();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      showAlert("error","Error!", "Passwords do not match!");
      return;
    }
    console.log(formData.phone.length);
    if(formData.phone.length !== 10){
      showAlert("error","Error!", "Phone number must be 10 digits!");
      return;
    }

    // Remove confirmPassword from data sent to API
    const { confirmPassword, ...signUpData } = formData;
   
    const response = await signUpHandler(signUpData, setIsLoading, showAlert);
    
    if (response) {
     
      
      // Show success message
      showAlert("info","Success!", "Account created successfully!");
      
      // Redirect to login or dashboard
      navigate('/auth/login');
    }
  };

  return (
    <Container className="signup-container">
      <Card className="signup-card">
        <Card.Body>
          <h2 className="signup-title">Create Account</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="signup-form-group">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                disabled={isLoading}
              />
            </Form.Group>

            <Form.Group className="signup-form-group">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                disabled={isLoading}
              />
            </Form.Group>

            <Form.Group className="signup-form-group">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
                disabled={isLoading}
              />
            </Form.Group>

            <Form.Group className="signup-form-group">
              <Form.Label>Password</Form.Label>
              <div className="password-input-group">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create password"
                  required
                  disabled={isLoading}
                />
                <Button
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  type="button"
                  disabled={isLoading}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </Button>
              </div>
            </Form.Group>

            <Form.Group className="signup-form-group">
              <Form.Label>Confirm Password</Form.Label>
              <div className="password-input-group">
                <Form.Control
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  required
                  disabled={isLoading}
                />
                <Button
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  type="button"
                  disabled={isLoading}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </Button>
              </div>
            </Form.Group>

            <Button 
              className="signup-submit-btn" 
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
                'Sign Up'
              )}
            </Button>

            <div className="signup-footer">
              <p>Already have an account?</p>
              <Link to="../login" className="login-link">
                Login
              </Link>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};