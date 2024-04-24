import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Energy Efficiency Site</h3>
          <p>Stay tuned for energy-saving tips and news!</p>
        </div>
        <div className="footer-right">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Energy Efficiency Site. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
