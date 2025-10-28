import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import { Toaster } from './components/ui/sonner';
import './index.css';

export const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
      <Toaster position="top-right" />
    </Router>
  );
};

export default App;