import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './RefundPolicy.css';

export const RefundPolicy = () => {
  return (
    <Container className="refund-policy-container">
      <Row>
        <Col>
          <h1 className="refund-policy-title">Refund Policy</h1>
          
          <div className="policy-intro mb-4">
            <p>At SarthiQ, we strive to provide the best possible experience for our users. If you are not satisfied with our services, please review our refund policy below.</p>
          </div>

          <div className="policy-section">
            <h2 className="refund-policy-subtitle">1. Eligibility for Refunds</h2>
            <p>We offer refunds under the following conditions:</p>
            <ul className="refund-policy-list">
              <li className="refund-policy-list-item">If a technical issue prevents access to our platform, and we are unable to resolve it within 7 business days.</li>
              <li className="refund-policy-list-item">If you are charged incorrectly due to a billing error.</li>
              <li className="refund-policy-list-item">If you request a refund within 7 days of purchase and have not significantly used our services.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2 className="refund-policy-subtitle">2. Non-Refundable Cases</h2>
            <p>Refunds will not be provided under the following conditions:</p>
            <ul className="refund-policy-list">
              <li className="refund-policy-list-item">If the service has been fully or partially utilized.</li>
              <li className="refund-policy-list-item">If the refund request is made after 7 days of purchase.</li>
              <li className="refund-policy-list-item">If the issue is due to personal circumstances unrelated to our service (e.g., change of mind, lack of time to use the service).</li>
              <li className="refund-policy-list-item">If the subscription or service was obtained at a discounted or promotional rate.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2 className="refund-policy-subtitle">3. Refund Process</h2>
            <p>To request a refund, please follow these steps:</p>
            <ol className="refund-policy-list">
              <li className="refund-policy-ordered-list-item">Contact our support team at <a className="refund-policy-link" href="mailto:sarthiq@gmail.com">sarthiq@gmail.com</a> with your order details.</li>
              <li className="refund-policy-ordered-list-item">Provide a clear explanation of the issue.</li>
              <li className="refund-policy-ordered-list-item">Our team will review the request and respond within 7-14 business days.</li>
              <li className="refund-policy-ordered-list-item">If approved, the refund will be processed to your original payment method within 7-10 business days.</li>
            </ol>
          </div>

          <div className="policy-section">
            <h2 className="refund-policy-subtitle">4. Cancellation Policy</h2>
            <ul className="refund-policy-list">
              <li className="refund-policy-list-item">Users may cancel their subscriptions at any time, but cancellations will not result in a refund unless they meet the eligibility criteria mentioned above.</li>
              <li className="refund-policy-list-item">Upon cancellation, users will continue to have access to the service until the end of the current billing period.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2 className="refund-policy-subtitle">5. Modifications to this Policy</h2>
            <p>SarthiQ reserves the right to modify this refund policy at any time. Changes will be communicated via our website.</p>
          </div>

          <div className="refund-contact-info mt-4">
            <p>For any queries, please contact us at <a className="refund-policy-link" href="mailto:sarthiq@gmail.com">sarthiq@gmail.com</a>.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
