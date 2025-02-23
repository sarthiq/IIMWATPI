import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons
import "./Header.css"; // Import styling

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-700 text-white py-3 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src="/Logo.png" alt="Logo" className="h-10" />
        </a>

        {/* Mobile Menu Button */}
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navigation */}
        <nav className={isOpen ? "nav-open" : ""}>
          <ul className="flex space-x-6 text-lg font-medium">
            <li>
              <a href="/" className="hover:text-gray-200">Test</a>
            </li>
            <li>
              <a href="/resources" className="hover:text-gray-200">Career Options</a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-200">About Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
