import React from 'react';
import { motion } from 'framer-motion';

const Philosophy = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-cream)', textAlign: 'center' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '800px', margin: '0 auto' }}
        >
          <h2 style={{ fontSize: '2.5rem', color: 'var(--color-charcoal)', marginBottom: '1.5rem', fontWeight: 400 }}>
            "Dentistry is not just about treating a tooth."
          </h2>
          <h3 style={{ fontSize: '3rem', color: 'var(--color-charcoal)', lineHeight: 1.2 }}>
            It is about caring for the <span style={{ color: 'var(--color-yellow)', fontFamily: 'var(--font-serif)', fontStyle: 'italic', position: 'relative' }}>
              PERSON
              <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '100%', height: '3px', backgroundColor: 'var(--color-yellow)', borderRadius: '2px' }}></span>
            </span> sitting in the dental chair.
          </h3>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
