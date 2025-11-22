import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css" ;

import Header from "./components/Header";
import SidebarLayout from "./Layouts/SideBarLayout";

import NyayaManchLandingPage from "./components/LandingPage";
import LoginForm from "./components/LoginPage";
import SignupForm from "./components/SignUpPage";
import Footer from "./components/Footer";

// Sidebar pages
import Dashboard from "./Pages/Dashboard";
import UploadCase from "./Pages/NextStepPredictor";
import JudgementSummarizer from "./Pages/JudgementSummarizer";
import SimilarCaseFinder from "./Pages/SimilarCaseFinder";
import DelayForecast from "./Pages/DelayForecast";
import VernacularVoice from "./Pages/VernacularVoice";
import CaseStrength from "./Pages/CaseStrength";

export default function App() {
    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen">
                <Header />
                <div className="flex-grow">
                    <Routes>
                        {/* 1. PUBLIC ROUTES */}
                        <Route path="/" element={<NyayaManchLandingPage />} />
                        <Route path="/login" element={<LoginForm />} />
                        <Route path="/signup" element={<SignupForm />} />

                        {/* 2. PROTECTED ROUTES (With Sidebar Layout) 
                            This parent route renders <SidebarLayout>. 
                            The children routes (dashboard, upload, etc.) 
                            are rendered inside <Outlet /> within the layout. 
                        */}
                        <Route element={<SidebarLayout />}>
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/upload" element={<UploadCase />} />
                            <Route path="/summarizer" element={<JudgementSummarizer />} />
                            <Route path="/similar" element={<SimilarCaseFinder />} />
                            <Route path="/forecast" element={<DelayForecast />} />
                            <Route path="/vernacular" element={<VernacularVoice />} />
                            <Route path="/strength" element={<CaseStrength />} />
                        </Route>

                        {/* 3. 404 CATCH-ALL */}
                        <Route path="*" element={<div className="text-center p-10"><h1 className="text-4xl font-bold">404: Page Not Found</h1></div>} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}