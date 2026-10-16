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

const RootCanal = () => {
  return (
    <main style={{ paddingTop: '80px' }}>

      {/* ── HERO BANNER ── */}
      <section style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '0.1em', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1rem' }}>
            DENTAL TREATMENT · ALAPPUZHA
          </p>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', lineHeight: 1.2 }}>
            Root Canal Treatment in Alappuzha
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.85, maxWidth: '600px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
            Comfort-focused root canal treatment at Shalom House of Dental Care.
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

          {/* What Is Root Canal Treatment? */}
          <motion.div {...fadeUp} style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
              What Is Root Canal Treatment?
            </h2>
            <p style={{ color: 'var(--color-text-main)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Root canal treatment (also called endodontic therapy) is a dental procedure that treats infection or damage inside the tooth. The soft tissue at the centre of a tooth — known as the pulp — can become infected due to deep decay, a crack, or injury. Left untreated, this infection can spread to surrounding bone and tissue.
            </p>
            <p style={{ color: 'var(--color-text-main)', lineHeight: 1.8 }}>
              The goal of root canal treatment is to save your natural tooth. By carefully removing the infected pulp, cleaning the canals, and sealing the tooth, we eliminate infection while preserving your own tooth structure — which is always preferable to extraction.
            </p>
          </motion.div>

          {/* Who Needs Root Canal Treatment? */}
          <motion.div {...fadeUp} style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
              Who Needs Root Canal Treatment?
            </h2>
            <p style={{ color: 'var(--color-text-main)', lineHeight: 1.8, marginBottom: '1rem' }}>
              You may need a root canal if you experience any of the following symptoms:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                'Severe or persistent toothache',
                'Prolonged sensitivity to hot or cold temperatures',
                'Swollen or tender gum near the affected tooth',
                'Darkening or discolouration of the tooth',
                'Dental abscess (pus or swelling at the root)',
              ].map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--color-text-main)', lineHeight: 1.6 }}>
                  <CheckCircle size={18} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '3px' }} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* How the Procedure Works */}
          <motion.div {...fadeUp} style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
              How the Procedure Works
            </h2>
            <ol style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { step: 1, text: 'Examination and X-ray to assess the extent of infection and root anatomy.' },
                { step: 2, text: 'Local anaesthesia applied to ensure a completely comfortable experience.' },
                { step: 3, text: 'Infected pulp carefully removed through a small opening in the tooth.' },
                { step: 4, text: 'Root canals cleaned, shaped, and filled with a biocompatible material.' },
                { step: 5, text: 'Crown or permanent filling placed to restore the tooth\'s strength and appearance.' },
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

          {/* Recovery and Aftercare */}
          <motion.div {...fadeUp}>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
              Recovery and Aftercare
            </h2>
            <p style={{ color: 'var(--color-text-main)', lineHeight: 1.8 }}>
              It is normal to experience mild discomfort or sensitivity for one to two days after the procedure. Take any prescribed medication as directed, avoid biting on hard foods until your final restoration is placed, and attend your follow-up appointment as advised. Most patients return to their regular routine the next day.
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
              q: 'Is root canal treatment painful?',
              a: 'No. The procedure is carried out under local anaesthesia, so you should feel no pain during treatment. Modern techniques make root canal treatment no more uncomfortable than having a filling.',
            },
            {
              q: 'How long does root canal treatment take?',
              a: 'Most root canal treatments are completed in one to two appointments, each lasting between 60 and 90 minutes, depending on the complexity of the case.',
            },
            {
              q: 'Do I need a crown after root canal treatment?',
              a: 'In most cases, yes. A crown is recommended to protect the treated tooth from fracture and restore its full function. Your dentist will advise the best option for your specific tooth.',
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

export default RootCanal;
