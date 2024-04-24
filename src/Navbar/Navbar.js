import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <header className="fixed-header">
      <nav>
        <div className="logo">
          <a href="https://ecityenergy.com/">
            <img
              src="/src/images/ecity-logo.png"
              className="desktop-logo"
              alt="Electric City Energy Logo"
            />
          </a>
          <a href="https://ecityenergy.com/">
            <img
              src="/src/images/ecity-logo-m.png"
              className="mobile-logo"
              alt="Electric City Energy Logo"
            />
          </a>
        </div>
        <ul>
          <li>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/calculate" className="nav-link">Calculate</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;
