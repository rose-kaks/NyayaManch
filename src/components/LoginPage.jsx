import React, { useState } from 'react';
import './LoginPage.css';
import { FaEnvelope, FaLock } from 'react-icons/fa'; // Requires 'react-icons' package

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your actual login logic goes here (e.g., API call)
    console.log('Attempting login with:', { email, password });
  };

  return (
    // Outer container to mimic the card floating over the background
    <div className="formCardContainer">
      <div className="formCard">
        
        {/* Title and Subtitle */}
        <div className="welcomeText">
          <h2>Welcome Back</h2>
          <p>Login to access your dashboard</p>
        </div>

        {/* Login Form */}
        {/* NOTE: I also corrected onSubmit="handleSubmit" to onSubmit={handleSubmit} */}
        <form onSubmit={handleSubmit}> 
          
          {/* Email Input Group */}
          <div className="inputGroup">
            <FaEnvelope className="inputIcon" />
            <input
              type="email"
              placeholder="Email Address"
              className="inputField"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input Group */}
          <div className="inputGroup">
            <FaLock className="inputIcon" />
            <input
              type="password"
              placeholder="Password"
              className="inputField"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Login Button */}
          <button type="submit" className="loginButton">
            Login
          </button>
        </form>

        {/* Sign Up Link: FIXED */}
        <div className="signupLink">
          Don't have an account? <a href="/signup"> Sign Up</a>
        </div>
        <div>
          <a href="/">back to home</a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;