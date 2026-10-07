import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Phone, ArrowRight, Sofa, Zap, Users, Users2 } from 'lucide-react';

const CTA = () => {
  return (
    <section style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-white)', padding: '3rem 0', position: 'relative', zIndex: 10 }}>
      {/* Top curved wave to match design */}
      <div style={{ position: 'absolute', top: '-30px', left: 0, width: '100%', overflow: 'hidden', lineHeight: 0, transform: 'rotate(180deg)' }}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ position: 'relative', display: 'block', width: 'calc(100% + 1.3px)', height: '30px' }}>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.84,122.92,192.56,114.65,236.4,108.79,279.4,91.86,321.39,56.44Z" style={{ fill: 'var(--color-primary)' }}></path>
        </svg>
      </div>

      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1.5fr', gap: '2rem', alignItems: 'center' }}>
        
        {/* Left: Book Appointment */}
        <motion.div whileHover={{ y: -5 }} style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderRight: '1px solid rgba(255,255,255,0.2)', paddingRight: '2rem', cursor: 'pointer' }}>
          <div style={{ width: '50px', height: '50px', borderRadius: '50%', border: '1.5px dashed rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Calendar size={24} />
          </div>
          <div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Book Your Appointment</h4>
            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>For any queries or to schedule your visit, feel free to reach out.</p>
          </div>
        </motion.div>

        {/* Middle: Phone CTA */}
        <motion.div whileHover={{ y: -5 }} style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderRight: '1px solid rgba(255,255,255,0.2)', paddingRight: '2rem', cursor: 'pointer' }}>
          <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--color-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
            <Phone size={24} fill="var(--color-primary)" />
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Call Us</span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>8606709290</h3>
          </div>
          <button style={{ marginLeft: 'auto', background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'var(--transition-smooth)' }} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'} onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}>
            <ArrowRight size={20} />
          </button>
        </motion.div>

        {/* Right: Icons */}
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '1rem' }}>
          <motion.div whileHover={{ y: -5, scale: 1.05 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '0.5rem', cursor: 'pointer' }}>
            <Sofa size={28} strokeWidth={1.5} />
            <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.8)' }}>Comfortable<br/>Environment</span>
          </motion.div>
          <motion.div whileHover={{ y: -5, scale: 1.05 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '0.5rem', cursor: 'pointer' }}>
            <Zap size={28} strokeWidth={1.5} />
            <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.8)' }}>Advanced<br/>Technology</span>
          </motion.div>
          <motion.div whileHover={{ y: -5, scale: 1.05 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '0.5rem', cursor: 'pointer' }}>
            <Users size={28} strokeWidth={1.5} />
            <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.8)' }}>Expert<br/>Consultation</span>
          </motion.div>
          <motion.div whileHover={{ y: -5, scale: 1.05 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '0.5rem', cursor: 'pointer' }}>
            <Users2 size={28} strokeWidth={1.5} />
            <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.8)' }}>Family<br/>Friendly</span>
          </motion.div>
        </div>

      </div>
      
      <style>
        {`
          @media (max-width: 1024px) {
            #services ~ section:last-of-type .container {
              grid-template-columns: 1fr;
              gap: 3rem;
            }
            #services ~ section:last-of-type .container > div {
              border-right: none !important;
              padding-right: 0 !important;
              border-bottom: 1px solid rgba(255,255,255,0.2);
              padding-bottom: 2rem;
            }
            #services ~ section:last-of-type .container > div:last-child {
              border-bottom: none;
              padding-bottom: 0;
            }
          }
        `}
      </style>
    </section>
  );
};

export default CTA;
