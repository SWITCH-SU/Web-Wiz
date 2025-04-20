import React from 'react';
import '../css/nav.css'; // Assuming you have a CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="src/assets/music-svgrepo-com.svg" alt="Logo" /> {/* Replace with your logo path */}
      </div>
      <ul className="navbar-links">
        <li><h5>Welcome to the Music world</h5></li>

      </ul>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
      </div>
    </nav>
  );
}

export default Navbar;