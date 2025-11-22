import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <span className="logo-text">⚖️ NyayaManch</span>
      </div>
      
      {/* Primary Navigation Links - Centered Block */}
      <div className="main-nav-links">
        <Link to="/"><button className="nav-btn">Home</button></Link>
        <Link to="/dashboard"><button className="nav-btn">Dashboard</button></Link>
        <Link to="/strength"><button className="nav-btn">Case Strength</button></Link>
        <Link to="/similar"><button className="nav-btn">Similar Case Finder</button></Link>
        <Link to="/vernacular"><button className="nav-btn">Vernacular & Voice</button></Link>
        <Link to="/about"><button className="nav-btn">About Us</button></Link>
      </div>
      
      {/* Secondary Action Links - Pushed to the End */}
      <div className="action-buttons">
        <Link to="/login"><button className="login-btn">Login</button></Link>
        <Link to="/signup"><button className="signup-btn">Sign Up</button></Link>
      </div>
    </header>
  );
};

export default Header;