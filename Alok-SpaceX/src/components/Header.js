
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="app-header">
      <div className="logo">SpaceX</div>
      <nav className="main-nav">
        <a href="#propulsion">Propulsion</a>
        <a href="#ai-systems">AI Systems</a>
        <a href="#space-medicine">Space Medicine</a>

        {/* <Link to='/allgategories' c */}
        <Link to="/careers/all" className="nav-cta">View All Openings</Link>

      </nav>
    </header>
  );
}

export default Header;
