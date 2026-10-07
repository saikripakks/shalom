import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding" style={{ backgroundColor: 'var(--color-white)', overflow: 'hidden' }}>
      <div className="container about-grid" style={{ display: 'grid', gap: '4rem', alignItems: 'center' }}>
        
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ fontSize: '2.8rem', marginBottom: '0.5rem', color: 'var(--color-primary)', lineHeight: 1.1 }}>
            Care Begins With Listening
          </h2>
          <h3 style={{ fontSize: '1.2rem', color: 'var(--color-accent)', marginBottom: '1.5rem', fontWeight: 600 }}>
            Dentistry That Starts With Understanding You
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', color: 'var(--color-text-light)', fontSize: '1.05rem' }}>
            <p>
              A healthy smile is an important part of overall well-being. That is why we believe good dentistry begins with a conversation.
            </p>
            <p>
              We take the time to listen to our patients, understand their concerns, answer their questions, and help them feel comfortable throughout their dental journey.
            </p>
            <p style={{ fontWeight: 600, color: 'var(--color-primary)' }}>
              Our approach is simple: Listen. Understand. Explain. Care.
            </p>
            <p>
              As a general dental practice, we focus on providing appropriate, honest, and dependable dental care. When specialised treatment is required, we work with experienced consultants in their respective fields to ensure that patients receive the appropriate expertise for their needs.
            </p>
            <p>
              Because dentistry is not simply about treating a tooth.
            </p>
            <p style={{ color: 'var(--color-primary)', fontStyle: 'italic', fontWeight: 600, marginTop: '1rem', fontSize: '1.1rem' }}>
              It is about caring for the person sitting in the dental chair.
            </p>
          </div>
        </motion.div>

        {/* Right: Circular Image and Shapes */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          {/* Blue curved background shape */}
          <div style={{ position: 'absolute', right: '-10%', bottom: '-10%', width: '120%', height: '120%', backgroundColor: 'var(--color-bg-blue)', borderRadius: '50% 50% 0 50%', zIndex: 0, transform: 'rotate(-15deg)' }}></div>
          
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 2 }}
            style={{ position: 'relative', zIndex: 1, width: '300px', height: '300px', borderRadius: '50%', overflow: 'hidden', border: '10px solid var(--color-white)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
          >
            <img 
              src="/src/assets/about.png" 
              alt="Dr. Shalom" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' ,}} 
              onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80" }}
            />
          </motion.div>

          {/* Floating Script Text */}
          <motion.div 
            className="about-floating-text"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            style={{ position: 'absolute', top: '20%', right: '-10%', zIndex: 2, transform: 'rotate(-5deg)' }}
          >
            <div className="script-text" style={{ fontSize: '2rem', color: 'var(--color-primary)', lineHeight: 1 }}>
              Healthy<br/>Smiles<br/>Happy Lives
              <span style={{ display: 'inline-block', marginLeft: '5px', fontSize: '2rem' }}>♡</span>
            </div>
          </motion.div>
        </motion.div>

      </div>
      
      <style>
        {`
          .about-grid {
            grid-template-columns: 1.2fr 1fr;
          }
          @media (max-width: 992px) {
            .about-grid {
              grid-template-columns: 1fr;
              text-align: center;
            }
            .about-grid > div:last-child {
              margin-top: 3rem;
            }
            .about-floating-text {
              right: 10% !important;
              top: -15% !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default About;
