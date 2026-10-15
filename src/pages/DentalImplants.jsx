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

const DentalImplants = () => {
  return (
    <main style={{ paddingTop: '80px' }}>

      {/* ── HERO BANNER ── */}
      <section style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '0.1em', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1rem' }}>
            DENTAL TREATMENT · ALAPPUZHA
          </p>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', lineHeight: 1.2 }}>
            Dental Implants in Alappuzha
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.85, maxWidth: '600px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
            Permanent, natural-looking tooth replacement at Shalom House of Dental Care.
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

          {/* What Are Dental Implants? */}
          <motion.div {...fadeUp} style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
              What Are Dental Implants?
            </h2>
            <p style={{ color: 'var(--color-text-main)', lineHeight: 1.8, marginBottom: '1rem' }}>
              A dental implant is a small titanium post that is surgically placed into the jawbone to act as an artificial tooth root. Titanium is used because it is biocompatible — over a few months it bonds with the surrounding bone through a process called osseointegration, creating a stable and permanent foundation.
            </p>
            <p style={{ color: 'var(--color-text-main)', lineHeight: 1.8 }}>
              Once the implant has integrated, a custom-made porcelain crown is attached on top, restoring the look, feel, and function of a natural tooth. The result is virtually indistinguishable from your own teeth.
            </p>
          </motion.div>

          {/* Who Is a Good Candidate? */}
          <motion.div {...fadeUp} style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
              Who Is a Good Candidate?
            </h2>
            <p style={{ color: 'var(--color-text-main)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Most adults with one or more missing teeth can be considered for dental implants. Good candidates generally have:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                'Completed jawbone growth (adults)',
                'Adequate bone density to support the implant',
                'Healthy gums free from periodontal disease',
                'No uncontrolled systemic conditions that affect healing',
                'Non-smokers or those willing to quit (smoking slows healing)',
              ].map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--color-text-main)', lineHeight: 1.6 }}>
                  <CheckCircle size={18} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '3px' }} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* The Implant Procedure */}
          <motion.div {...fadeUp} style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
              The Implant Procedure
            </h2>
            <ol style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { step: 1, text: 'Consultation and X-ray / CBCT scan to assess bone volume and plan placement precisely.' },
                { step: 2, text: 'Implant placement under local anaesthesia — the titanium post is inserted into the jawbone.' },
                { step: 3, text: 'Healing period of several weeks to months, allowing osseointegration to occur.' },
                { step: 4, text: 'Crown attachment — the custom porcelain crown is fixed to the implant, completing the restoration.' },
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

          {/* Benefits */}
          <motion.div {...fadeUp}>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
              Benefits of Dental Implants
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                'Feels and functions just like a natural tooth',
                'Preserves jawbone and prevents bone loss after tooth loss',
                'Long-lasting solution with proper care',
                'Easy to clean — brush and floss as normal',
                'Does not require neighbouring teeth to be altered',
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
              q: 'Are dental implants painful?',
              a: 'The procedure is carried out under local anaesthesia, so you will not feel pain during surgery. Post-operative discomfort is typically mild and manageable with prescribed medication.',
            },
            {
              q: 'How long do dental implants last?',
              a: 'With good oral hygiene and regular dental check-ups, dental implants can last many years — often a lifetime. The crown on top may need replacement after ten to fifteen years due to normal wear.',
            },
            {
              q: 'Are dental implants expensive?',
              a: 'The cost depends on individual circumstances including the number of implants needed and any preparatory procedures required. We will provide a transparent cost breakdown at your consultation.',
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

export default DentalImplants;
