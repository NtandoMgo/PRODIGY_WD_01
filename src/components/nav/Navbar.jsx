import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="header">
      <div className="container">
        <div className="nav-logo">My App</div>
        
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu} className="text-white hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu} className="text-white hover:text-gray-300">About</Link>
            </li>
            <li>
              <Link to="/services" onClick={toggleMenu} className="text-white hover:text-gray-300">Services</Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu} className="text-white hover:text-gray-300">Contact</Link>
            </li>
          </ul>
        </div>
        
        <div className="hamburger" onClick={toggleMenu}>
          <i className="fas fa-bars fa-2x" style={{ color: 'blue' }}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
