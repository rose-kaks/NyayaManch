import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import NyayaManchLandingPage from './components/LandingPage';
import LoginForm from './components/LoginPage';
import SignupForm from './components/SignUpPage';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<NyayaManchLandingPage />} />

        {/* Login Page */}
        <Route path="/login" element={<LoginForm />} />

        {/* Signup Page */}
        <Route path="/signup" element={<SignupForm />} />

        {/* 404 */}
        <Route path="*" element={<h1>404: Page Not Found</h1>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;

