import React from 'react';
import { motion } from 'framer-motion';
import { Ear, Brain, FileCheck, Stethoscope, RefreshCcw } from 'lucide-react';

const DentalJourney = () => {
  const steps = [
    { title: 'Listen', desc: 'Understand your concerns.', icon: <Ear size={24} /> },
    { title: 'Understand', desc: 'Assess your dental needs.', icon: <Brain size={24} /> },
    { title: 'Plan', desc: 'Create a tailored approach.', icon: <FileCheck size={24} /> },
    { title: 'Treat', desc: 'Provide dependable care.', icon: <Stethoscope size={24} /> },
    { title: 'Maintain', desc: 'Ensure long-lasting health.', icon: <RefreshCcw size={24} /> },
  ];

  return (
    <section id="approach" className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', color: 'var(--color-charcoal)', marginBottom: '1rem' }}>Your Smile Journey in Alappuzha</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-gray-dark)' }}>A Simple Approach. A Personal Experience.</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', overflowX: 'auto', paddingBottom: '2rem' }}>
          {/* Connecting Line */}
          <div style={{ position: 'absolute', top: '40px', left: '10%', right: '10%', height: '2px', backgroundColor: 'var(--color-gray)', zIndex: 0 }}></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '200px', cursor: 'pointer' }}
              whileHover={{ scale: 1.05 }}
            >
              <div style={{ 
                width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--color-white)', 
                display: 'flex', justifyContent: 'center', alignItems: 'center', 
                border: '2px solid var(--color-yellow)', marginBottom: '1.5rem',
                boxShadow: '0 10px 20px rgba(212, 175, 55, 0.2)',
                color: 'var(--color-yellow)'
              }}>
                {step.icon}
              </div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-charcoal)' }}>{step.title}</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-dark)' }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DentalJourney;
