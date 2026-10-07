import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Heart } from 'lucide-react';
import premiumToothImg from '../assets/premium-tooth.jpg';

const ImageStory = () => {
  const englishServices = [
    'Preventive Dental Care',
    'Restorative Dentistry',
    'Cosmetic Dentistry',
    'Orthodontic Care',
    "Children's Dentistry"
  ];

  return (
    <section className="container" style={{ marginBottom: '6rem' }}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ 
          background: 'linear-gradient(to right, #EAF2F8, #D8EAF5)', 
          borderRadius: '2rem', 
          padding: '3rem', 
          display: 'grid', 
          gridTemplateColumns: '1fr 1.5fr 1.5fr', 
          gap: '2rem', 
          alignItems: 'center',
          boxShadow: '0 20px 40px rgba(17, 50, 84, 0.05)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Decorative elements */}
        <div style={{ position: 'absolute', right: '-5%', top: '-10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%' }}></div>

        {/* Left: Tooth Image */}
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center' }}>
           <motion.img 
             whileHover={{ scale: 1.1, rotate: -5 }}
             src={premiumToothImg} alt="Healthy Tooth" style={{ width: '80%', maxWidth: '200px', borderRadius: '1rem', mixBlendMode: 'multiply', cursor: 'pointer' }} onError={(e) => e.target.style.display = 'none'} 
           />
        </div>

        {/* Middle: English List */}
        <div style={{ position: 'relative', zIndex: 1, paddingLeft: '2rem', borderLeft: '1px solid rgba(17, 50, 84, 0.1)' }}>
          <h3 style={{ color: 'var(--color-primary)', fontSize: '1.4rem', marginBottom: '1.5rem', fontWeight: 700, textTransform: 'uppercase' }}>
            Our Dental Services
          </h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {englishServices.map((item, index) => (
              <motion.li 
                key={index} 
                whileHover={{ x: 10, color: 'var(--color-accent)' }}
                style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--color-primary)', fontWeight: 500, fontSize: '1.05rem', cursor: 'pointer' }}
              >
                <CheckCircle2 size={18} fill="var(--color-primary)" color="var(--color-bg-light)" />
                {item}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right: Vision */}
        <div style={{ position: 'relative', zIndex: 1, paddingLeft: '2rem', borderLeft: '1px solid rgba(17, 50, 84, 0.1)' }}>
          <span style={{ color: 'var(--color-accent)', fontWeight: 700, letterSpacing: '0.1em', fontSize: '0.8rem', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>YOUR SMILE, OUR CARE</span>
          <h3 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1rem', lineHeight: 1.2 }}>
            <span className="script-text" style={{ fontSize: '2.2rem', display: 'block', marginBottom: '0.2rem' }}>Committed to</span>
            Healthy, Confident Smiles.
          </h3>
          <p style={{ color: 'var(--color-text-main)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>
            We are committed to providing dental care that combines clinical expertise with genuine personal attention. Whether you need a routine check-up, treatment, or guidance, we recommend care that is appropriate for you.
          </p>
          <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.95rem' }}>
            Your comfort matters. Your concerns matter. Your smile matters.
          </p>
        </div>
      </motion.div>
      
      <style>
        {`
          @media (max-width: 992px) {
            #services + section > div {
              grid-template-columns: 1fr !important;
              text-align: center;
            }
            #services + section > div > div {
              padding-left: 0 !important;
              border-left: none !important;
              border-top: 1px solid rgba(17, 50, 84, 0.1);
              padding-top: 2rem;
            }
            #services + section ul {
              align-items: center;
            }
          }
        `}
      </style>
    </section>
  );
};

export default ImageStory;
