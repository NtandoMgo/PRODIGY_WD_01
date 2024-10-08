import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { FaBars } from 'react-icons/fa';

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
              <Link to="/about-me" onClick={toggleMenu} className="text-white hover:text-gray-300">About</Link>
            </li>
            <li>
              <Link to="/my-work" onClick={toggleMenu} className="text-white hover:text-gray-300">Services</Link>
            </li>
            <li>
              <Link to="/contact-me" onClick={toggleMenu} className="text-white hover:text-gray-300">Contact</Link>
            </li>
          </ul>
        </div>
        
        <div className="hamburger" onClick={toggleMenu}>
            {/* <FaBars/> */}
            <span></span>
            <span></span>
            <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
