import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaLinkedin, FaYoutube, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Product Section */}
        <div className="footer-column">
          <h4>Products</h4>
          <ul>
            <li><Link to="/quiz">Tests</Link></li>
            <li><Link to="/career">Career Counselling</Link></li>
          </ul>
        </div>

        {/* Policies Section */}
        <div className="footer-column">
          <h4>Terms and Conditions</h4>
          <ul>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/refund-policy">Refund Policy</Link></li>
          </ul>
        </div>

        {/* Contact Details Section */}
        <div className="footer-column">
          <h4>Contact Details</h4>
          <p><strong>Address:</strong> C-70, Sect 8, Jankipuram Extension, Lucknow, UP-226021</p>
          <p><strong>Email:</strong> sarthiq@gmail.com</p>
          <p><strong>WhatsApp:</strong> 9335532658</p>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="https://www.linkedin.com/company/sarthiq" className="linkedin"><FaLinkedin /></a>
        <a href="https://www.youtube.com/@sarthiq" className="youtube"><FaYoutube /></a>
        <a href="https://wa.me/9335532658" className="whatsapp"><FaWhatsapp /></a>
      </div>

      {/* Copyright Text */}
      <div className="footer-bottom">
        <p>© 2025 Sarthiq.</p>
      </div>
    </footer>
  );
};
