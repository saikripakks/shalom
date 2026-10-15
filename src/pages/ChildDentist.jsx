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

const ChildDentist = () => {
  return (
    <main style={{ paddingTop: '80px' }}>

      {/* ── HERO BANNER ── */}
      <section style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '0.1em', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1rem' }}>
            DENTAL TREATMENT · ALAPPUZHA
          </p>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', lineHeight: 1.2 }}>
            Child Dentist in Alappuzha
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.85, maxWidth: '600px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
            Gentle, friendly dental care for babies, toddlers and children.
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

          {/* Why Early Dental Visits Matter */}
          <motion.div {...fadeUp} style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
              Why Early Dental Visits Matter
            </h2>
            <p style={{ color: 'var(--color-text-main)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Bringing your child to the dentist early — ideally before any dental problems arise — is one of the most valuable things you can do for their long-term oral health. Early visits allow your child to become familiar with the dental environment in a calm, positive way, building confidence rather than anxiety.
            </p>
            <p style={{ color: 'var(--color-text-main)', lineHeight: 1.8 }}>
              These appointments also give us the opportunity to spot any concerns at the earliest possible stage, advise on diet and brushing habits, and keep your child's development on track.
            </p>
          </motion.div>

          {/* When Should My Child First Visit? */}
          <motion.div {...fadeUp} style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
              When Should My Child First Visit?
            </h2>
            <p style={{ color: 'var(--color-text-main)', lineHeight: 1.8 }}>
              We recommend bringing your child to the dentist around their first birthday, or when their first tooth appears — whichever comes first. There is no such thing as too early. Even at this young age, we can check that development is on track, advise on teething, and introduce your child to the dental environment gently. After the first visit, regular six-monthly check-ups are recommended.
            </p>
          </motion.div>

          {/* What We Do for Children */}
          <motion.div {...fadeUp} style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
              What We Do for Children
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                'Thorough dental examination of teeth, gums, and jaw development',
                'Fluoride application to strengthen and protect growing teeth',
                'Fissure sealants to protect the deep grooves of back teeth from decay',
                'Dietary and brushing advice tailored to your child\'s age',
                'Fillings for milk teeth where needed, to prevent spread of decay and pain',
              ].map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--color-text-main)', lineHeight: 1.6 }}>
                  <CheckCircle size={18} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '3px' }} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Making Visits Comfortable */}
          <motion.div {...fadeUp}>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
              Making Visits Comfortable
            </h2>
            <p style={{ color: 'var(--color-text-main)', lineHeight: 1.8 }}>
              We understand that a visit to the dentist can feel daunting for young children. Our approach is warm, unhurried, and child-centred. We move entirely at your child's pace — never forcing or rushing — and take time to explain what we are doing in simple, friendly language. Our aim is for every child to leave feeling positive about their dental visit.
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
              q: 'Is it too early to bring a one-year-old to the dentist?',
              a: 'Not at all. Early visits prevent problems by catching any concerns before they develop, and help your child build a comfortable relationship with the dental environment from the very start.',
            },
            {
              q: 'Are baby teeth important if they fall out anyway?',
              a: 'Yes — baby teeth are very important. They hold space for adult teeth, help with chewing and nutrition, and support the development of speech. Decay in baby teeth can be painful and affect your child\'s eating and confidence.',
            },
            {
              q: 'What if my child is anxious about dental visits?',
              a: 'Dental anxiety in children is very common and completely understandable. We take a no-pressure, step-by-step approach — we may simply let your child sit in the chair and look around on the first visit. There is no rush.',
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

export default ChildDentist;
