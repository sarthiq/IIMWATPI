import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css";
import { useSelector } from "react-redux";
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = useSelector((state) => state.userAuth.isLoggedIn);

  return (
    <header className="header">
      <div className="head-container">
        {/* Logo - Aligned to Left */}
        <Link to="/" className="logo">
          <img src="/Logo.png" alt="Logo" />
        </Link>

        {/* Navigation - Centered */}
        <nav className={isOpen ? "nav-menu open" : "nav-menu"}>
          <ul>
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Tests
              </Link>
            </li>
            {/* <li><Link to="/resources" onClick={() => setIsOpen(false)}>Career Options</Link></li> */}
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>
                About Us
              </Link>
            </li>
            {isLoggedIn ? (
              <li>
                <Link
                  to="/dashboard"
                  className="dashboard-link"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  to="/auth"
                  className="login-link"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
    </header>
  );
};
