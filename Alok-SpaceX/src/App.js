
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingExperience from './components/LandingExperience';
import CareersPage from './components/CareersPage'; 
import Header from './components/Header';
import Footer from './components/Footer'; 
import ProgressBar from './components/ProgressBar'; 



import './App.css';

function App() {
  return (
    <>
      
      <Routes>
        
        <Route path="/" element={<LandingExperience />} />

        <Route path="/careers" element={<CareersPage />} />


        
        <Route path="/careers/:department" element={<CareersPage />} />
        
        <Route path="/careers" element={<CareersPage />} />
        

        
        
        
        
      </Routes>
    </>
  );
}


export default App; 
