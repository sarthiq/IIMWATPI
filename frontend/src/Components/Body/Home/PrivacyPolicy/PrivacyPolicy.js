import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './PrivacyPolicy.css';

export const PrivacyPolicy = () => {
  return (
    <Container className="privacy-policy-container">
      <Row>
        <Col>
          <h1 className="text-center mb-4">Privacy Policy</h1>
          <p className="text-end">Last Updated: 15/03/2025</p>
          
          <div className="policy-intro mb-4">
            <p>SarthiQ is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://www.sarthiq.com/">https://www.sarthiq.com/</a> (the "Site") and use our services.</p>
          </div>

          <div className="policy-section">
            <h2>1. Information We Collect</h2>
            <p>We collect information that helps us provide and improve our services. This includes:</p>
            
            <h3>1.1 Personal Information</h3>
            <p>When you sign up or interact with our platform, we may collect personal details such as:</p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Educational background</li>
              <li>Interests and preferences</li>
            </ul>

            <h3>1.2 Non-Personal Information</h3>
            <p>We may automatically collect non-personal information, such as:</p>
            <ul>
              <li>Browser type and version</li>
              <li>IP address</li>
              <li>Device information</li>
              <li>Usage data (such as pages visited and time spent on our website)</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>2. How We Use Your Information</h2>
            <ul>
              <li>To provide personalized career guidance</li>
              <li>To enhance user experience by improving our platform</li>
              <li>To send relevant updates, newsletters, or promotional materials</li>
              <li>To analyze website performance and improve our services</li>
              <li>To comply with legal obligations</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>3. How We Share Your Information</h2>
            <p>We do not sell or rent your personal data. However, we may share your information with:</p>
            <ul>
              <li><strong>Educational Institutions:</strong> If you opt to connect with schools or colleges through our platform.</li>
              <li><strong>Service Providers:</strong> Third-party vendors who assist in maintaining our website and services.</li>
              <li><strong>Legal Authorities:</strong> If required by law, to protect our rights, or to prevent fraud.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>4. Data Security</h2>
            <p>We implement appropriate security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no online platform can be 100% secure.</p>
          </div>

          <div className="policy-section">
            <h2>5. Your Rights and Choices</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access, update, or delete your personal information</li>
              <li>Opt out of marketing emails</li>
              <li>Request data portability</li>
              <li>Withdraw consent for data processing</li>
            </ul>
            <p>For any requests, contact us at <a href="mailto:sarthig@gmail.com">sarthig@gmail.com</a>.</p>
          </div>

          <div className="policy-section">
            <h2>6. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to read their policies.</p>
          </div>

          <div className="policy-section">
            <h2>7. Cookies and Tracking Technologies</h2>
            <p>We use cookies and similar technologies to improve user experience and analyze website performance. You can manage cookie preferences in your browser settings.</p>
          </div>

          <div className="policy-section">
            <h2>8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date.</p>
          </div>

          <div className="policy-section">
            <h2>9. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
            <div className="contact-info">
              <p><strong>SarthiQ</strong></p>
              <p>Email: <a href="mailto:sarthiq@gmail.com">sarthiq@gmail.com</a></p>
              <p>Website: <a href="https://www.sarthiq.com/">https://www.sarthiq.com/</a></p>
            </div>
          </div>

          <div className="consent-notice mt-4">
            <p>By using our website, you consent to the terms outlined in this Privacy Policy.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
