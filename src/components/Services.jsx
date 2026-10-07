import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    { title: 'Preventive Care', desc: 'Protect your smile before problems begin with regular dental check-ups, professional cleaning, oral examinations, and personalized preventive care.', img: '/src/assets/generated/preventive_tooth_1790935155077.jpg' },
    { title: 'Restorative Treatments', desc: 'Restore damaged or decayed teeth with appropriate treatments designed to improve both function and oral health.', img: '/src/assets/generated/restorative_tooth_1790935167532.jpg' },
    { title: 'Cosmetic Dentistry', desc: 'Enhance the appearance of your smile with personalized cosmetic dental solutions that help you smile with confidence.', img: '/src/assets/generated/cosmetic_tooth_1790935180819.jpg' },
    { title: 'Orthodontic Solutions', desc: 'Improve the alignment of your teeth and create a healthier, more balanced smile with suitable orthodontic treatment options.', img: '/src/assets/generated/ortho_tooth_1790935194251.jpg' },
    { title: 'Child Dental Care', desc: 'Gentle and friendly dental care for children, helping them develop healthy oral habits and a positive relationship with dentistry from an early age.', img: '/src/assets/generated/child_tooth_1790935207908.jpg' }
  ];

  return (
    <section id="services" style={{ padding: '8rem 0 4rem 0', backgroundColor: 'var(--color-white)', position: 'relative' }}>
      {/* Top Wave to match the new Hero wave */}
      <div style={{ position: 'absolute', top: '-1px', left: 0, width: '100%', overflow: 'hidden', lineHeight: 0, zIndex: 0 }}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ position: 'relative', display: 'block', width: 'calc(100% + 1.3px)', height: '80px', transform: 'rotate(180deg)' }}>
          <path fill="var(--color-primary)" fillOpacity="1" d="M0,0L48,10.7C96,21,192,43,288,48C384,53,480,43,576,37.3C672,32,768,32,864,37.3C960,43,1056,53,1152,48C1248,43,1344,21,1392,10.7L1440,0L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-accent)' }}></div>
            <span style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '0.1em', fontSize: '0.9rem', textTransform: 'uppercase' }}>COMPREHENSIVE DENTAL CARE</span>
            <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-accent)' }}></div>
          </div>
          <h2 style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
            Complete Care for Your Smile
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', maxWidth: '800px', margin: '0 auto' }}>
            From preventive check-ups to restorative and cosmetic treatments, we offer comprehensive dental care for children and adults in a comfortable and caring environment.
          </p>
        </div>

        <div className="services-grid" style={{ display: 'grid', gap: '1.5rem' }}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="interactive"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02, boxShadow: '0 20px 40px rgba(17, 50, 84, 0.08)' }}
              style={{
                backgroundColor: 'var(--color-white)',
                padding: '2.5rem 1.5rem',
                borderRadius: '1.5rem',
                border: '1px solid var(--color-bg-blue)',
                boxShadow: '0 10px 30px rgba(17, 50, 84, 0.03)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                transition: 'var(--transition-smooth)',
                cursor: 'pointer'
              }}
            >
              {/* Using specific images for each service */}
              <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'linear-gradient(135deg, #E2F0F9 0%, #FFFFFF 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', overflow: 'hidden', border: '3px solid var(--color-bg-light)', boxShadow: 'inset 0 4px 10px rgba(0,0,0,0.1)' }}>
                 <img src={service.img} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
              
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>{service.title}</h3>
              <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem', marginBottom: '2rem', flex: 1 }}>{service.desc}</p>
              
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid var(--color-bg-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
                <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* CSS for grid fallback since inline media queries don't work like this */}
      <style>
        {`
          .services-grid {
            grid-template-columns: repeat(5, 1fr);
          }
          @media (max-width: 1200px) {
            .services-grid {
              grid-template-columns: repeat(3, 1fr) !important;
            }
          }
          @media (max-width: 768px) {
            .services-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Services;
