import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Services', 'Why Us', 'Contact'];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? '0.8rem 2rem' : '1.2rem 2rem',
          transition: 'var(--transition-smooth)',
          backgroundColor: 'rgba(255, 255, 255, 0.98)',
          boxShadow: scrolled ? '0 4px 20px rgba(17, 50, 84, 0.08)' : 'none',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <motion.div whileHover={{ scale: 1.05 }} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
          <Logo style={{ height: '45px', width: '45px' }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ color: 'var(--color-primary)', fontSize: '1.6rem', fontWeight: 800, lineHeight: 1.1, letterSpacing: '0.02em' }}>SHALOM</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-primary)', fontWeight: 600, letterSpacing: '0.05em' }}>HOUSE OF DENTAL CARE</span>
          </div>
        </motion.div>

        <nav style={{ display: 'none', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
          <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
            {navLinks.map((link, index) => (
              <motion.li key={link} whileHover={{ y: -2 }}>
                <a href={`#${link.toLowerCase().replace(' ', '-')}`} style={{ 
                  fontSize: '0.95rem', 
                  fontWeight: index === 0 ? 700 : 500, 
                  color: index === 0 ? 'var(--color-primary)' : 'var(--color-text-main)',
                  borderBottom: index === 0 ? '2px solid var(--color-primary)' : 'none',
                  paddingBottom: '0.3rem',
                  display: 'inline-block'
                }}>
                  {link}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <button className="btn btn-primary desktop-btn">
            <Calendar size={18} />
            Book an Appointment
          </button>
          
          <a href="tel:8606709290" className="phone-btn">
            <Phone size={22} fill="var(--color-primary)" />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--color-text-light)', fontWeight: 600, lineHeight: 1 }}>Call Us</span>
              <span style={{ fontWeight: 700, fontSize: '1rem' }}>8606709290</span>
            </div>
          </a>
          
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </header>

      <style>
        {`
          .desktop-btn, .phone-btn { display: none !important; }
          .mobile-menu-btn { display: flex; background: none; border: none; cursor: pointer; color: var(--color-primary); }
          @media (min-width: 768px) {
            .phone-btn { display: flex !important; align-items: center; gap: 0.5rem; color: var(--color-primary); }
          }
          @media (min-width: 1024px) {
            .desktop-nav { display: flex !important; }
            .desktop-btn { display: inline-flex !important; }
            .mobile-menu-btn { display: none !important; }
          }
        `}
      </style>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-white)',
              zIndex: 1001,
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }} onClick={() => setMobileMenuOpen(false)}>
                <X size={32} />
              </button>
            </div>
            <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2rem' }}>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--color-white)' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
