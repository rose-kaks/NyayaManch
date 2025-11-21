import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
      <header className="header">
        <div className="logo-container">
          <span className="logo-text">NyayaManch</span>
        </div>
        <div className="nav-buttons">
  <Link to="/login" ><button className="login-btn">Login</button></Link>
  <Link to="/signup" ><button className="signup-btn">Sign Up</button></Link>
</div>

      </header>
  );
};

export default Header;