import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="header">
      <div className="container">
        <div className="nav-logo">My App</div>
        <div className="nav-links">
          <ul >
          <li>
              <Link to="/" className="text-white hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-gray-300">About</Link>
            </li>
            <li>
              <Link to="/services" className="text-white hover:text-gray-300">Services</Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
