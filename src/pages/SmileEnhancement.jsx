import React from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const treatmentOptions = [
  {
    title: 'Dental veneers',
    description: 'Custom-made porcelain or composite shells can improve the appearance of selected teeth, including their shape, colour, or visible chips and gaps.',
  },
  {
    title: 'Composite bonding',
    description: 'Tooth-coloured composite can be shaped to address minor chips, cracks, or spaces.',
  },
  {
    title: 'Orthodontic treatment',
    description: 'Braces or clear aligners can improve tooth alignment and address spacing or crowding where appropriate.',
  },
  {
    title: 'Gum contouring',
    description: 'Reshaping the gum line may help improve the balance between the teeth and gums for suitable cases.',
  },
  {
    title: 'Teeth whitening',
    description: 'Professional whitening can lighten natural tooth colour when it is suitable for your teeth and gums.',
  },
];

const SmileEnhancement = () => (
  <main style={{ paddingTop: '80px' }}>
    <section style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '5rem 0' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <p style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '0.1em', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1rem' }}>
          DENTAL TREATMENT · ALAPPUZHA
        </p>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', lineHeight: 1.2 }}>
          Smile Enhancement in Alappuzha
        </h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.85, maxWidth: '700px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
          A personalised combination of dental treatments can improve your smile's colour, shape, alignment, and overall balance.
        </p>
        <a
          href="tel:+918606709290"
          style={{ backgroundColor: 'var(--color-accent)', color: 'white', padding: '1rem 2.5rem', borderRadius: '50px', fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.8rem' }}
        >
          <Phone size={18} /> Book Appointment — 8606709290
        </a>
      </div>
    </section>

    <section style={{ padding: '6rem 0', backgroundColor: 'var(--color-white)' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div {...fadeUp} style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
            What Is Smile Enhancement?
          </h2>
          <p style={{ color: 'var(--color-text-main)', lineHeight: 1.8, marginBottom: '1rem' }}>
            Smile enhancement is not limited to teeth whitening. It is a personalised approach to improving the appearance of your smile, which may combine treatments for tooth colour, shape, alignment, and gum proportions.
          </p>
          <p style={{ color: 'var(--color-text-main)', lineHeight: 1.8 }}>
            Your dentist will discuss your concerns, examine your teeth and gums, and recommend options suited to your oral health and goals. Not everyone needs the same treatments, and some concerns may be best addressed in stages.
          </p>
        </motion.div>

        <motion.div {...fadeUp} style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
            Treatments That May Be Considered
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {treatmentOptions.map(({ title, description }) => (
              <li key={title} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--color-text-main)', lineHeight: 1.7 }}>
                <CheckCircle size={18} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '3px' }} />
                <span><strong>{title}:</strong> {description}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
            Your Smile, Your Treatment Plan
          </h2>
          <p style={{ color: 'var(--color-text-main)', lineHeight: 1.8 }}>
            The right combination depends on your teeth, gums, bite, and preferences. A consultation helps determine which options are suitable, how they may work together, and what to expect from treatment and maintenance.
          </p>
        </motion.div>
      </div>
    </section>

    <section style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '5rem 0', textAlign: 'center' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to Talk About Your Smile?</h2>
        <p style={{ opacity: 0.85, marginBottom: '2rem', fontSize: '1.1rem' }}>
          Call us or send a WhatsApp message to book a consultation.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="tel:+918606709290"
            style={{ backgroundColor: 'white', color: 'var(--color-primary)', padding: '1rem 2.5rem', borderRadius: '50px', fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.8rem' }}
          >
            <Phone size={18} /> Call 8606709290
          </a>
          <a
            href="https://wa.me/918606709290"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: '#25D366', color: 'white', padding: '1rem 2.5rem', borderRadius: '50px', fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.8rem' }}
          >
            <FaWhatsapp size={18} /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  </main>
);

export default SmileEnhancement;
