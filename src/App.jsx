import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <CustomCursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
        <FloatingWhatsApp phoneNumber="1234567890" message="Hi! I am interested in your services." />
      </div>
    </Router>
  );
}

export default App;
