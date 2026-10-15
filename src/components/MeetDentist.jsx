import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Award } from 'lucide-react';
import doctorImg from '../assets/dr.webp';

export default function MeetDentist() {
  return (
    <section id="meet-dentist" style={{ padding: 0 }}>
      <div
        className="doctor-grid"
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}
      >
        {/* Left Column — Dark Panel */}
        <div
          style={{
            backgroundColor: 'var(--color-primary)',
            padding: '5rem 3rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Doctor Photo */}
            <div
              style={{
                width: '220px',
                height: '220px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '6px solid rgba(255,255,255,0.2)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                margin: '0 auto',
                marginBottom: '2rem',
              }}
            >
              <img
                src={doctorImg}
                alt="Dr. Elizabeth T John Dentist at Shalom House of Dental Care Alappuzha"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>

            {/* Doctor Name */}
            <h2
              style={{
                fontSize: '2rem',
                color: 'white',
                fontWeight: 800,
                marginBottom: '0.5rem',
              }}
            >
              Dr. Elizabeth T John
            </h2>

            {/* Badge */}
            <span
              style={{
                backgroundColor: 'rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.9)',
                padding: '0.3rem 1rem',
                borderRadius: '50px',
                fontSize: '0.85rem',
                fontWeight: 600,
                display: 'inline-block',
              }}
            >
              BDS · General Dentist
            </span>

            {/* Quote */}
            <p
              style={{
                marginTop: '2rem',
                fontSize: '1.1rem',
                color: 'rgba(255,255,255,0.8)',
                fontStyle: 'italic',
                lineHeight: 1.6,
                maxWidth: '300px',
                margin: '2rem auto 0',
              }}
            >
              Every smile is unique. I take the time to understand yours.
            </p>
          </motion.div>
        </div>

        {/* Right Column — Light Panel */}
        <div
          style={{
            backgroundColor: 'var(--color-bg-light)',
            padding: '5rem 4rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Label */}
            <p
              style={{
                color: 'var(--color-accent)',
                textTransform: 'uppercase',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                marginBottom: '1rem',
              }}
            >
              MEET THE DENTIST
            </p>

            {/* Heading */}
            <h2
              style={{
                fontSize: '2.2rem',
                color: 'var(--color-primary)',
                fontWeight: 800,
                marginBottom: '0.5rem',
              }}
            >
              Dr. Elizabeth T John, BDS
            </h2>

            {/* Subtitle */}
            <p
              style={{
                color: 'var(--color-accent)',
                fontWeight: 600,
                marginBottom: '2rem',
                fontSize: '1rem',
              }}
            >
              General Dentist · Shalom House of Dental Care, Alappuzha
            </p>

            {/* Bio Para 1 */}
            <p
              style={{
                color: 'var(--color-text-light)',
                lineHeight: 1.8,
                marginBottom: '1.5rem',
                fontSize: '1rem',
              }}
            >
              Dr. Elizabeth T John brings a patient-first approach to every consultation. She believes that good dentistry begins long before the treatment chair — it starts with listening. Whether you are visiting for a routine check-up or an anxious first appointment, Dr. John takes the time to explain your options clearly and honestly, so you always feel informed and in control.
            </p>

            {/* Bio Para 2 */}
            <p
              style={{
                color: 'var(--color-text-light)',
                lineHeight: 1.8,
                marginBottom: '1.5rem',
                fontSize: '1rem',
              }}
            >
              Her special interest lies in making dental visits comfortable for nervous patients and children, ensuring that every person who walks through the door leaves with a little less worry and a lot more confidence.
            </p>

            {/* Info Box */}
            <div
              style={{
                backgroundColor: 'white',
                borderLeft: '4px solid var(--color-accent)',
                borderRadius: '0.5rem',
                padding: '1rem 1.5rem',
                marginBottom: '2rem',
              }}
            >
              <p
                style={{
                  color: 'var(--color-primary)',
                  fontWeight: 600,
                  margin: 0,
                }}
              >
                Accepting new patients · Mon – Sat · Call 8606709290
              </p>
            </div>

            {/* CTA Button */}
            <motion.a
              href="tel:+918606709290"
              whileHover={{ scale: 1.05 }}
              style={{
                backgroundColor: 'var(--color-primary)',
                color: 'white',
                padding: '0.9rem 2rem',
                borderRadius: '50px',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.8rem',
                textDecoration: 'none',
                fontSize: '0.95rem',
              }}
            >
              <Phone size={18} />
              Book a Consultation
            </motion.a>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .doctor-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
