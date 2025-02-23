import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons
import "./Header.css"; // Import styling

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="head-container">
        {/* Logo - Aligned to Left */}
        <a href="/" className="logo">
          <img src="/Logo.png" alt="Logo" />
        </a>

        {/* Navigation - Centered */}
        <nav className={isOpen ? "nav-menu open" : "nav-menu"}>
          <ul>
            <li><a href="/" onClick={() => setIsOpen(false)}>Test</a></li>
            <li><a href="/resources" onClick={() => setIsOpen(false)}>Career Options</a></li>
            <li><a href="/about" onClick={() => setIsOpen(false)}>About Us</a></li>
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
