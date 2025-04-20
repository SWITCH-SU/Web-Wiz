import React from 'react';
import '../css/footer.css'; // Assuming you have a CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            We are a company dedicated to providing the best services and products to our customers.
          </p>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: contact@company.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;