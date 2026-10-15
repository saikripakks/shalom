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

const BracesOrthodontics = () => {
  return (
    <main style={{ paddingTop: '80px' }}>

      {/* ── HERO BANNER ── */}
      <section style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '0.1em', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1rem' }}>
            DENTAL TREATMENT · ALAPPUZHA
          </p>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', lineHeight: 1.2 }}>
            Braces and Orthodontics in Alappuzha
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.85, maxWidth: '600px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
            Straighten your teeth and correct bite problems with personalised orthodontic care.
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

          {/* What Is Orthodontic Treatment? */}
          <motion.div {...fadeUp} style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
              What Is Orthodontic Treatment?
            </h2>
            <p style={{ color: 'var(--color-text-main)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Orthodontic treatment uses appliances such as braces or aligners to move teeth into better positions, correct bite problems, and improve the overall alignment of your smile. It addresses crowded, gapped, or misaligned teeth as well as malocclusions such as overbites, underbites, and crossbites.
            </p>
            <p style={{ color: 'var(--color-text-main)', lineHeight: 1.8 }}>
              Beyond aesthetics, orthodontic treatment can make teeth easier to clean, reduce abnormal wear, and in some cases relieve jaw discomfort caused by a poor bite.
            </p>
          </motion.div>

          {/* Types of Braces */}
          <motion.div {...fadeUp} style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
              Types of Braces
            </h2>
            <p style={{ color: 'var(--color-text-main)', lineHeight: 1.8, marginBottom: '1rem' }}>
              The most suitable type of brace depends on the complexity of your case, your age, and your preferences. Options we assess include:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                'Traditional metal braces — highly effective for a wide range of cases, robust and reliable',
                'Ceramic braces — work like metal braces but use tooth-coloured brackets for a less noticeable appearance',
                'Clear aligners — a series of removable transparent trays that gradually shift teeth (suitability assessed individually)',
              ].map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--color-text-main)', lineHeight: 1.6 }}>
                  <CheckCircle size={18} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '3px' }} />
                  {item}
                </li>
              ))}
            </ul>
            <p style={{ color: 'var(--color-text-light)', lineHeight: 1.7, marginTop: '1rem', fontSize: '0.95rem' }}>
              Availability of specific appliance types depends on individual clinical assessment.
            </p>
          </motion.div>

          {/* Who Needs Braces? */}
          <motion.div {...fadeUp} style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
              Who Needs Braces?
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                'Crowded or overlapping teeth',
                'Overbite (upper teeth protrude significantly over lower teeth)',
                'Underbite (lower teeth sit in front of upper teeth)',
                'Crossbite (upper and lower teeth do not meet correctly)',
                'Gaps or spaces between teeth',
              ].map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--color-text-main)', lineHeight: 1.6 }}>
                  <CheckCircle size={18} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '3px' }} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* How Long Does Treatment Take? */}
          <motion.div {...fadeUp}>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
              How Long Does Treatment Take?
            </h2>
            <p style={{ color: 'var(--color-text-main)', lineHeight: 1.8 }}>
              Treatment duration varies considerably depending on the complexity of the case, the type of brace used, and patient compliance. Simple cases may be completed in several months, while more complex orthodontic work can take one to two years or more. Your orthodontic treatment plan will include an estimated timeline based on your individual needs.
            </p>
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
              q: 'What age is best for braces?',
              a: 'Teenagers often benefit from orthodontic treatment as the jaws and teeth are still developing. However, adults can equally have successful orthodontic treatment — there is no upper age limit. We welcome patients of all ages for assessment.',
            },
            {
              q: 'Do braces hurt?',
              a: 'You may experience some discomfort for a few days after braces are fitted or after each adjustment appointment. This is normal and settles on its own. Over-the-counter pain relief can help during this period.',
            },
            {
              q: 'How do I clean my teeth with braces?',
              a: 'Careful cleaning is essential with braces. Brush your teeth thoroughly after every meal using a soft brush, paying attention around the brackets and wires. Use floss threaders or interdental brushes to clean between teeth. We will give you detailed hygiene instructions at the start of treatment.',
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

export default BracesOrthodontics;
