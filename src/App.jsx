import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import RootCanal from './pages/RootCanal';
import DentalImplants from './pages/DentalImplants';
import TeethWhitening from './pages/TeethWhitening';
import SmileEnhancement from './pages/SmileEnhancement';
import BracesOrthodontics from './pages/BracesOrthodontics';
import ChildDentist from './pages/ChildDentist';
import DentalCheckup from './pages/DentalCheckup';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import './index.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <CustomCursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/root-canal-treatment-alappuzha" element={<RootCanal />} />
          <Route path="/dental-implants-alappuzha" element={<DentalImplants />} />
          <Route path="/teeth-whitening-alappuzha" element={<TeethWhitening />} />
          <Route path="/smile-enhancement-alappuzha" element={<SmileEnhancement />} />
          <Route path="/braces-orthodontics-alappuzha" element={<BracesOrthodontics />} />
          <Route path="/child-dentist-alappuzha" element={<ChildDentist />} />
          <Route path="/dental-checkup-cleaning-alappuzha" element={<DentalCheckup />} />
        </Routes>
        <Footer />
        <FloatingWhatsApp phoneNumber="918606709290" message="Hi! I would like to book a dental appointment at Shalom House of Dental Care." />
      </div>
    </Router>
  );
}

export default App;
