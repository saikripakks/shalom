import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Footer = () => {
  const navLinks = ['Home', 'About', 'Services', 'Why Us', 'Contact'];

  return (
    <footer style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-white)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="container" style={{ padding: '4rem 2rem 2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
        
        {/* Left: Logo and Info */}
        <div>
          <motion.div whileHover={{ scale: 1.05 }} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer', marginBottom: '1.5rem' }}>
            <Logo style={{ height: '40px', width: '40px' }} variant="light" />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '1.4rem', fontWeight: 800, lineHeight: 1.1, letterSpacing: '0.02em', color: 'var(--color-white)' }}>SHALOM</span>
              <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.8)', fontWeight: 600, letterSpacing: '0.05em' }}>HOUSE OF DENTAL CARE</span>
            </div>
          </motion.div>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
            Your journey to a healthier, more confident smile starts at Alappuzha's premier dental clinic.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'var(--transition-smooth)' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-white)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'var(--transition-smooth)' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-white)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>

        {/* Middle: Links */}
        <div>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--color-white)' }}>Quick Links</h4>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {navLinks.map((link) => (
              <motion.a 
                key={link} 
                whileHover={{ x: 5, color: 'var(--color-accent)' }}
                href={`#${link.toLowerCase().replace(' ', '-')}`} 
                style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', fontWeight: 500, display: 'inline-block' }} 
              >
                {link}
              </motion.a>
            ))}
          </nav>
        </div>

        {/* Right: Contact Us */}
        <div>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--color-white)', textTransform: 'uppercase' }}>Contact Us</h4>
          <h5 style={{ color: 'var(--color-accent)', marginBottom: '1rem', fontSize: '1rem' }}>We'd Love to Hear From You</h5>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            Have a dental concern or looking for professional advice? Get in touch with Shalom House of Dental Care to schedule your consultation.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <p style={{ color: 'var(--color-white)', fontWeight: 600 }}>Shalom House of Dental Care</p>
            <p style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '1.1rem' }}>Phone: 8606709290</p>
          </div>
        </div>

        {/* Far Right: Map */}
        <div>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--color-white)', textTransform: 'uppercase' }}>Find Us</h4>
          <div style={{ width: '100%', height: '220px', borderRadius: '1rem', overflow: 'hidden', border: '2px solid rgba(255,255,255,0.1)' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.187107303746!2d76.32831767458971!3d9.492449481563215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b088591913d96df%3A0x45b5ee0964516e72!2sShalom%20House%20Of%20Dental%20Care!5e0!3m2!1sen!2sin!4v1791349397056!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
        
      </div>
      
      <div className="container" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)' }}>© 2026 Shalom House of Dental Care. All rights reserved.</p>
        <div className="script-text" style={{ fontSize: '1.5rem', color: 'var(--color-white)' }}>
          Smiles for a better tomorrow ♡
        </div>
      </div>
    </footer>
  );
};

export default Footer;
