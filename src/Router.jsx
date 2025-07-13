import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import About from './About';
import Projects from './App';
import Navbar from './Navbar';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
     <Routes>
 
  <Route path="/" element={<Navigate to="/about" replace />} />
  <Route path="/port" element={<Navigate to="/about" replace />} />

 
  <Route path="/about" element={<About />} />
  <Route path="/projects" element={<Projects />} />
</Routes>
    </BrowserRouter>
  );
};

export default AppRouter;