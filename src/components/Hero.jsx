import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar, Shield, Heart, Award, ArrowRight } from 'lucide-react';
import heroBg from '../assets/hero.png';

const Hero = () => {
  const stats = [
    { 
      icon: <Shield size={22} />, 
      text: 'Experienced\nCare' 
    },
    { 
      // Using a custom SVG for the tooth icon
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21c-2 0-3.5-1.5-4-3 0-1 1-1.5 2-2 1-.5 2 0 2 2 0-1 1-1.5 2-2 1-.5 2 0 2 2-.5 1.5-2 3-4 3z" /><path d="M12 21c4.5 0 8-3.5 8-8 0-3-2-5-4-6s-4-2-4-2-2 1-4 2-4 3-4 6c0 4.5 3.5 8 8 8z" /></svg>, 
      text: 'Modern\nTechnology' 
    },
    { 
      icon: <Heart size={22} />, 
      text: 'Personalized\nTreatment' 
    },
    { 
      icon: <Award size={22} />, 
      text: 'Your Smile\nOur Priority' 
    }
  ];

  return (
    <section id="home" className="hero-section" style={{ 
      position: 'relative',
      minHeight: '800px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="hero-bg-layer" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
        <div 
          className="hero-bg-img"
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            backgroundImage: `url(${heroBg})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'calc(100% + 300px) center',
            backgroundRepeat: 'no-repeat'
          }} 
        />
        {/* Soft white/blue gradient masking the left side */}
        <div 
          className="hero-bg-gradient"
          style={{ 
            position: 'absolute', 
            top: 0, left: 0, width: '100%', height: '100%', 
            background: 'linear-gradient(to right, rgba(235, 245, 251, 1) 0%, rgba(235, 245, 251, 1) 40%, rgba(235, 245, 251, 0.4) 65%, rgba(255, 255, 255, 0) 100%)' 
          }} 
        />
      </div>

      <div className="container hero-container" style={{ position: 'relative', zIndex: 2, display: 'flex', height: '100%', paddingTop: '6rem' }}>
        
        {/* Left Content Column */}
        <div className="hero-left" style={{ flex: '0 0 50%', maxWidth: '600px', paddingTop: '4rem', paddingBottom: '8rem' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            
            <p className="hero-subtitle" style={{ color: '#4A8BB5', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
              COMPREHENSIVE DENTAL CARE FOR EVERY SMILE
            </p>
            
            <h1 className="hero-title" style={{ color: '#113254', lineHeight: 1, marginBottom: '1.5rem', display: 'flex', flexDirection: 'column' }}>
              <span className="hero-heading" style={{ fontSize: '4.5rem', fontWeight: 800 }}>Healthy Smiles.</span>
              <span className="script-text hero-script" style={{ fontSize: '5.8rem', color: '#C89B5C', marginTop: '-1.5rem', fontWeight: 400 }}>Confident You.</span>
            </h1>
            
            <p className="hero-desc" style={{ fontSize: '1.1rem', color: '#113254', marginBottom: '3rem', maxWidth: '520px', fontWeight: 500, lineHeight: 1.6 }}>
              At Shalom House of Dental Care, we believe that dental care is more than treating teeth — it is about caring for people. We provide comfortable, honest, and dependable dental care with a focus on your individual needs and long-term oral health.
            </p>
            
            {/* Buttons */}
            <div className="btn-group" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(17,50,84,0.2)' }}
                whileTap={{ scale: 0.95 }}
                className="btn interactive" style={{ 
                backgroundColor: '#113254', color: 'white', padding: '0.4rem 0.4rem 0.4rem 1.5rem', 
                borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.95rem', fontWeight: 600, border: 'none'
              }}>
                <Calendar size={18} /> 
                Book an Appointment 
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'white', color: '#113254', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ArrowRight size={16} strokeWidth={2.5} />
                </div>
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.9)' }}
                whileTap={{ scale: 0.95 }}
                className="btn interactive" style={{ 
                backgroundColor: 'white', color: '#113254', padding: '0.8rem 1.8rem', 
                borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.95rem', fontWeight: 600, border: '1px solid #4A8BB5'
              }}>
                <Phone size={18} fill="#113254" color="#113254" /> Call 8606709290
              </motion.button>
            </div>

            {/* Icons Grid */}
            <div className="hero-icons" style={{ display: 'flex', gap: '2rem' }}>
              {stats.map((stat, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '85px' }}
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    style={{ 
                    width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.7)', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#113254', 
                    marginBottom: '0.8rem', border: '1px solid rgba(17, 50, 84, 0.1)' 
                  }}>
                    {stat.icon}
                  </motion.div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#113254', lineHeight: 1.3, whiteSpace: 'pre-line' }}>{stat.text}</span>
                </motion.div>
              ))}
            </div>
            
          </motion.div>
        </div>
        
        {/* Right Floating Text */}
        <div className="hero-right" style={{ flex: '0 0 55%', position: 'relative', height: '100%' }}>
          {/* Hand-written text beside dentist */}
          <motion.div 
            className="floating-script-container"
            animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            style={{ position: 'absolute', top: '35%', right: '5%', transform: 'rotate(-5deg)' }}
          >
            <span className="script-text floating-script" style={{ fontSize: '3.5rem', color: 'white', textShadow: '2px 2px 10px rgba(0,0,0,0.3)', lineHeight: 1 }}>Your Smile<br/>Matters ♡</span>
          </motion.div>
        </div>
      </div>

      {/* Beautiful Animated Flowing Waves */}
      <div className="wave-container" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '140px', overflow: 'hidden', zIndex: 5 }}>
        <div className="wave-layer wave-white"></div>
        <div className="wave-layer wave-blue"></div>
      </div>

      <style>
        {`
          .wave-layer {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-repeat: repeat-x;
            background-size: 1200px 100%;
          }
          .wave-white {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' preserveAspectRatio='none'%3E%3Cpath d='M0,50 C250,100 250,0 500,50 C750,100 750,0 1000,50 L1000,100 L0,100 Z' fill='rgba(255,255,255,0.7)'/%3E%3C/svg%3E");
            animation: wave-flow 12s linear infinite;
            height: 130%;
            bottom: -15px;
          }
          .wave-blue {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' preserveAspectRatio='none'%3E%3Cpath d='M0,50 C250,0 250,100 500,50 C750,0 750,100 1000,50 L1000,100 L0,100 Z' fill='%235792BA'/%3E%3C/svg%3E");
            animation: wave-flow 15s linear infinite reverse;
            opacity: 0.9;
          }
          @keyframes wave-flow {
            0% { background-position-x: 0; }
            100% { background-position-x: 1200px; }
          }
          @media (max-width: 1400px) {
            .hero-heading { font-size: 4rem !important; }
            .hero-script { font-size: 5rem !important; margin-top: -1rem !important; }
            .hero-bg-img { background-position: right center !important; }
          }
          @media (max-width: 992px) {
            .hero-section { min-height: auto !important; padding-bottom: 4rem; }
            .hero-container { flex-direction: column !important; padding-top: 6rem !important; align-items: center; text-align: center; }
            .hero-left { flex: 0 0 100% !important; padding-top: 2rem !important; padding-bottom: 2rem !important; max-width: 100% !important; }
            .hero-title { align-items: center; }
            .hero-heading { font-size: 3rem !important; }
            .hero-script { font-size: 4rem !important; margin-top: -0.5rem !important; }
            .hero-desc { margin: 0 auto 2rem auto !important; }
            .btn-group { justify-content: center; margin-bottom: 2rem !important; }
            .hero-icons { justify-content: center; flex-wrap: wrap; gap: 1rem !important; }
            .hero-right { flex: 0 0 100% !important; min-height: 250px; width: 100%; }
            .floating-script-container { top: 10% !important; right: auto !important; left: 50% !important; transform: translateX(-50%) rotate(-5deg) !important; }
            .floating-script { font-size: 2.5rem !important; }
            .hero-bg-img { background-position: center !important; }
            .hero-bg-gradient { background: linear-gradient(to bottom, rgba(235, 245, 251, 1) 0%, rgba(235, 245, 251, 0.8) 40%, rgba(255, 255, 255, 0) 100%) !important; }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
