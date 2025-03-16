import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
  FaQuestionCircle,
  FaBriefcase,
  FaFileContract,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaHeart,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Products</h4>
          <ul>
            <li>
              <Link to="/quiz">
                <FaQuestionCircle className="footer-icon" /> Tests
              </Link>
            </li>
            <li>
              <Link to="/career">
                <FaBriefcase className="footer-icon" /> Career Counselling
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Terms and Conditions</h4>
          <ul>
            <li>
              <Link to="/privacy-policy">
                <FaShieldAlt className="footer-icon" /> Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/refund-policy">
                <FaFileContract className="footer-icon" /> Refund Policy
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact Details</h4>
          <p>
            <FaMapMarkerAlt className="footer-icon" /> C-70, Sect 8, Jankipuram
            Extension, Lucknow, UP-226021
          </p>
          <p>
            <FaEnvelope className="footer-icon" /> sarthiq@gmail.com
          </p>
          <p>
            <FaPhone className="footer-icon" /> +91 9335532658
          </p>
        </div>
      </div>
      <div className="footer-column">
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/company/sarthiq"
            className="linkedin"
          >
            <FaLinkedin />
          </a>
          <a href="https://www.youtube.com/@sarthiq" className="youtube">
            <FaYoutube />
          </a>
          <a href="https://wa.me/9335532658" className="whatsapp">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2025 Sarthiq. Made with <FaHeart className="heart-icon" /> in India
          |
          <Link to="/privacy-policy" className="footer-bottom-link">
            Privacy Policy
          </Link>{" "}
          |
          <Link to="/refund-policy" className="footer-bottom-link">
            Refund Policy
          </Link>
        </p>
      </div>
    </footer>
  );
};
