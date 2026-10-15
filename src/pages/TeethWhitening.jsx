import React from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

/* Reusable fade-up animation config */
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const TeethWhitening = () => {
  return (
    <main style={{ paddingTop: '80px' }}>

      {/* ── HERO BANNER ── */}
      <section style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '0.1em', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1rem' }}>
            DENTAL TREATMENT · ALAPPUZHA
          </p>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', lineHeight: 1.2 }}>
            Teeth Whitening in Alappuzha
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.85, maxWidth: '600px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
            Safe, professional teeth whitening for a brighter, confident smile.
          </p>
          <a
            href="tel:+918606709290"
            style={{ backgroundColor: 'var(--color-accent)', color: 'white', padding: '1rem 2.5rem', borderRadius: '50px', fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.8rem' }}
          >
            <Phone size={18} /> Book Appointment — 8606709290
          </a>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--color-white)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>

          {/* What Is Professional Teeth Whitening? */}
          <motion.div {...fadeUp} style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
              What Is Professional Teeth Whitening?
            </h2>
            <p style={{ color: 'var(--color-text-main)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Professional teeth whitening is a clinically supervised procedure that uses carefully formulated whitening agents to lighten the natural colour of your teeth. Unlike over-the-counter whitening products — which use lower-concentration agents and are applied without examining your teeth — professional whitening is carried out following a thorough clinical examination to ensure it is safe and appropriate for you.
            </p>
            <p style={{ color: 'var(--color-text-main)', lineHeight: 1.8 }}>
              This means better, more predictable results, reduced risk of sensitivity, and the reassurance of treatment supervised by a qualified dental professional.
            </p>
          </motion.div>

          {/* Who Can Have Teeth Whitening? */}
          <motion.div {...fadeUp} style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
              Who Can Have Teeth Whitening?
            </h2>
            <p style={{ color: 'var(--color-text-main)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Teeth whitening is suitable for most adults with healthy teeth and gums. However, it is not recommended in the following situations:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                'Existing crowns, veneers, or tooth-coloured fillings (whitening will not lighten these)',
                'Active gum disease or significant tooth decay',
                'Pregnancy or breastfeeding',
                'Children and teenagers under 18',
                'Severe intrinsic staining (a different cosmetic approach may be better)',
              ].map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--color-text-main)', lineHeight: 1.6 }}>
                  <CheckCircle size={18} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '3px' }} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* The Procedure */}
          <motion.div {...fadeUp} style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
              The Whitening Procedure
            </h2>
            <ol style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { step: 1, text: 'Clinical examination to check for decay, gum disease, or other conditions that need to be treated first.' },
                { step: 2, text: 'Your current tooth shade is recorded so we can measure the improvement accurately.' },
                { step: 3, text: 'Professional whitening agent is carefully applied to the teeth, with gums protected throughout.' },
                { step: 4, text: 'Results are reviewed at the end of the session and aftercare advice is provided.' },
              ].map(({ step, text }) => (
                <li key={step} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ backgroundColor: 'var(--color-accent)', color: 'white', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.85rem', flexShrink: 0, marginTop: '1px' }}>
                    {step}
                  </span>
                  <p style={{ color: 'var(--color-text-main)', lineHeight: 1.7, margin: 0 }}>{text}</p>
                </li>
              ))}
            </ol>
          </motion.div>

          {/* Aftercare Tips */}
          <motion.div {...fadeUp}>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
              Aftercare Tips
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                'Avoid staining foods and drinks (tea, coffee, red wine, curry) for at least 48 hours after treatment',
                'Use a sensitivity toothpaste if you experience temporary sensitivity',
                'Maintain good oral hygiene to preserve the results',
                'Avoid smoking, which quickly re-stains teeth',
              ].map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--color-text-main)', lineHeight: 1.6 }}>
                  <CheckCircle size={18} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '3px' }} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <motion.h2 {...fadeUp} style={{ fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '2rem', textAlign: 'center' }}>
            Frequently Asked Questions
          </motion.h2>
          {[
            {
              q: 'Is professional teeth whitening safe?',
              a: 'Yes — when carried out after a proper dental examination, professional whitening is safe. We assess your teeth and gums beforehand to make sure whitening is appropriate for you.',
            },
            {
              q: 'Does teeth whitening cause sensitivity?',
              a: 'Some patients experience temporary sensitivity during or after treatment. This usually resolves within a day or two. Using a sensitivity toothpaste before and after treatment can help.',
            },
            {
              q: 'How long do whitening results last?',
              a: 'Results typically last several months to a year, depending on your diet and lifestyle habits. Avoiding staining foods and drinks and maintaining good oral hygiene will help prolong the effect.',
            },
          ].map(({ q, a }, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ borderBottom: '1px solid #e2e8f0', padding: '1.5rem 0' }}
            >
              <h3 style={{ fontSize: '1.1rem', color: 'var(--color-primary)', marginBottom: '0.5rem', fontWeight: 600 }}>{q}</h3>
              <p style={{ color: 'var(--color-text-light)', lineHeight: 1.7, margin: 0 }}>{a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to Get Started?</h2>
          <p style={{ opacity: 0.85, marginBottom: '2rem', fontSize: '1.1rem' }}>
            Call us or send a WhatsApp message to book your appointment.
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
};

export default TeethWhitening;
