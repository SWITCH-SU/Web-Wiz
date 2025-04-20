
import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <div className="footer-content">
        <p className="copyright">
          &copy; {currentYear} <span className="company-name">Cosmic Web Initiative</span>. All rights reserved.
        </p>
        <nav className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#contact">Contact Us</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
