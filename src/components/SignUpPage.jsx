import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you use React Router
import './SignUpPage.css'; // Use the CSS file name below
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'; // Requires 'react-icons' package

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Your actual registration logic goes here (e.g., API call)
    console.log('Attempting registration with:', { name, email, password });
  };

  return (
    // Outer container to mimic the card floating over the background
    <div className="formCardContainer"> 
      <div className="formCard">
        
        {/* Title and Subtitle */}
        <div className="welcomeText">
          <h2>Create Your Account</h2>
          <p>Register to get started with NyayaManch</p>
        </div>

        {/* Sign Up Form */}
        <form onSubmit={handleSubmit}>
          
          {/* Name Input Group */}
          <div className="inputGroup">
            <FaUser className="inputIcon" />
            <input
              type="text"
              placeholder="Full Name"
              className="inputField"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

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
          
          {/* Confirm Password Input Group */}
          <div className="inputGroup">
            <FaLock className="inputIcon" />
            <input
              type="password"
              placeholder="Confirm Password"
              className="inputField"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {/* Sign Up Button */}
          <button type="submit" className="signupButton">
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <div className="loginLink">
          Already have an account? <Link to="/login"> Login</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;