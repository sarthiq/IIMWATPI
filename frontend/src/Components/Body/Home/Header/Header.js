import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css";
import { useSelector } from "react-redux";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isLoggedIn = useSelector((state) => state.userAuth.isLoggedIn);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src="/Logo.png" alt="SarthiQ" className="logo-image" />
        </Link>

        {/* Navigation */}
        <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/schollarship" 
                    className="nav-link" 
                    onClick={() => setIsOpen(false)}>
                Scholarship
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/entrance-test-details" 
                    className="nav-link" 
                    onClick={() => setIsOpen(false)}>
                Entrance Exam
              </Link>
            </li>
            {isLoggedIn ? (
              <li className="nav-item">
                <Link to="/dashboard" 
                      className="nav-link nav-cta dashboard-link" 
                      onClick={() => setIsOpen(false)}>
                  Dashboard
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link to="/auth" 
                      className="nav-link nav-cta login-link" 
                      onClick={() => setIsOpen(false)}>
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
          aria-label="Toggle menu">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
    </header>
  );
};
