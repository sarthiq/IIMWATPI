import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isLoggedIn = useSelector((state) => state.userAuth.isLoggedIn);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const location = useLocation();
  const scrollToSection = (elementId) => {
    const element = document.querySelector(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAssessmentClick = (e) => {
    // If we're already on the home page
    if (location.pathname === "/") {
     // e.preventDefault();
      scrollToSection("#test-section");
    }
  };
  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src="/Logo.png" alt="SarthiQ" className="logo-image" />
        </Link>

        {/* Navigation */}
        <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link
                to="/dashboard/recommendations"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Post-12th Guide
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/dashboard/ai-literacy"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                AI Literacy
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/#test-section"
                className="nav-link"
                onClick={() => {
                  setIsOpen(false)
                  handleAssessmentClick();
                }}
              >
                Tests
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/institute"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Colleges
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/entrance-test-details"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Entrance Exams
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/schollarship"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Scholarships
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/dashboard/career-options/summary"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Career Options
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/blog"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
            </li>
            {isLoggedIn ? (
              <li className="nav-item">
                <Link
                  to="/dashboard"
                  className="nav-link nav-cta dashboard-link"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link
                  to="/auth"
                  className="nav-link nav-cta login-link"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
    </header>
  );
};
