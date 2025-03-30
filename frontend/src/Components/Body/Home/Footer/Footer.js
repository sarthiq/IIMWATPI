import React from "react";
import { Link, useLocation } from "react-router-dom";
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
  FaGraduationCap,
  FaRobot,
  FaChartLine,
} from "react-icons/fa";

export const Footer = () => {
  const location = useLocation();

  const scrollToSection = (elementId) => {
    const element = document.querySelector(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAssessmentClick = (e) => {
    // If we're already on the home page
    if (location.pathname === '/') {
      e.preventDefault();
      scrollToSection('#test-section');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/#test-section" onClick={handleAssessmentClick}>
                <FaQuestionCircle className="footer-icon" /> Assessment Tests
              </Link>
            </li>
            <li>
              <Link to="dashboard/*">
                <FaBriefcase className="footer-icon" /> Career Counselling
              </Link>
            </li>
            <li>
              <Link to="dashboard/ai-literacy">
                <FaRobot className="footer-icon" /> AI Literacy
              </Link>
            </li>
            <li>
              <Link to="/entrance-test-details#entrance-test-container">
                <FaGraduationCap className="footer-icon" /> Entrance Exams
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
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
            <li>
              <Link to="/career-trends">
                <FaChartLine className="footer-icon" /> Career Trends
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact Us</h4>
         
            <p>
              <FaMapMarkerAlt className="footer-icon" />
              C-70, Sect8, Jankipuram Ext,
              <span className="address-line">Lucknow, UP-226021</span>
            </p>
            <p>
              <FaEnvelope className="footer-icon" />
              <a href="mailto:sarthiq@gmail.com">sarthiq@gmail.com</a>
            </p>
            <p>
              <FaPhone className="footer-icon" />
              <a href="tel:+919335532658">+91 9335532658</a>
            </p>
          
        </div>

        <div className="footer-column">
          <h4>Connect With Us</h4>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/company/sarthiq"
              className="social-link linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.youtube.com/@Sarthiq"
              className="social-link youtube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              href="https://wa.me/919335532658"
              className="social-link whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-links">
          <Link to="/terms" className="footer-bottom-link">
            Terms of Service
          </Link>
          {/* <span className="separator">|</span>
          <Link to="/sitemap" className="footer-bottom-link">Sitemap</Link> */}
        </div>
      </div>
    </footer>
  );
};
