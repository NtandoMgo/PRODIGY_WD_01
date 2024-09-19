import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
        <p>Designed and developed by Ntando Mgo.</p>
      </div>
    </footer>
  );
};

export default Footer;
