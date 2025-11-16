import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NyayaManchLandingPage from './components/LandingPage';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<NyayaManchLandingPage />} />
        <Route path="*" element={<h1>404: Page Not Found</h1>} />
      </Routes>

    </BrowserRouter>
  );
};

export default App;