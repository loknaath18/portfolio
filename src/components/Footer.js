// src/components/Footer.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/rough.css'; // Import the external CSS file

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <h2>
            <NavLink className="navbar-brand" to="/Login">
              <i className="fab fa-dev"></i> WEBDEV14
            </NavLink>
        </h2>
      </div>
      <div className="footer-socials">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 WEBDEV14. All rights reserved.</p>
        <p style={{ fontSize: '16px' }}>Designed by LOKNAATH</p>
      </div>
    </footer>
  );
};

export default Footer;
