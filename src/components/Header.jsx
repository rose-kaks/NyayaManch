import React from 'react';
import './Header.css';

const Header = () => {
  return (
      <header className="header">
        <div className="logo-container">
          <span className="logo-text">NyayaManch</span>
        </div>
        <div className="nav-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </header>
  );
};

export default Header;