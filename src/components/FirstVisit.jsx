import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Search, FileText, ClipboardList, Heart, Phone } from 'lucide-react';

const steps = [
  {
    step: 1,
    Icon: MessageCircle,
    title: 'Friendly Welcome',
    desc: 'We begin with a relaxed conversation about your concerns, dental history and what brings you in.',
  },
  {
    step: 2,
    Icon: Search,
    title: 'Thorough Examination',
    desc: 'A complete oral examination is carried out, with X-rays taken only if clinically needed.',
  },
  {
    step: 3,
    Icon: FileText,
    title: 'Clear Explanation',
    desc: 'We explain our findings in plain language, outlining all available treatment options.',
  },
  {
    step: 4,
    Icon: ClipboardList,
    title: 'Personalised Plan',
    desc: 'A tailored treatment plan is presented with costs discussed openly before any work begins.',
  },
  {
    step: 5,
    Icon: Heart,
    title: 'Ongoing Support',
    desc: 'After treatment, we provide home-care guidance and arrange any follow-up you need.',
  },
];

export default function FirstVisit() {
  return (
    <section
      id="first-visit"
      style={{ backgroundColor: 'var(--color-bg-light)', padding: '6rem 0' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p
            style={{
              color: 'var(--color-accent)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontSize: '0.9rem',
              fontWeight: 600,
              marginBottom: '0.75rem',
            }}
          >
            YOUR FIRST VISIT
          </p>
          <h2
            style={{
              fontSize: '2.5rem',
              color: 'var(--color-primary)',
              fontWeight: 800,
              marginBottom: '0',
            }}
          >
            What to Expect at Shalom House of Dental Care
          </h2>
          <p
            style={{
              color: 'var(--color-text-light)',
              maxWidth: '600px',
              margin: '0 auto',
              marginTop: '1rem',
              lineHeight: 1.7,
            }}
          >
            From the moment you arrive, our focus is on making you feel welcome, informed and comfortable.
          </p>
        </div>

        {/* Steps Row */}
        <div
          className="steps-row"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            justifyContent: 'center',
          }}
        >
          {steps.map(({ step, Icon, title, desc }, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              style={{
                backgroundColor: 'var(--color-white)',
                borderRadius: '1.5rem',
                padding: '2rem',
                flex: '1 1 180px',
                maxWidth: '220px',
                textAlign: 'center',
                boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
              }}
            >
              {/* Step Number Circle */}
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-primary)',
                  color: 'white',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                  marginBottom: '1rem',
                }}
              >
                {step}
              </div>

              {/* Icon Container */}
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-bg-blue)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                  marginBottom: '1rem',
                }}
              >
                <Icon size={28} color="var(--color-accent)" />
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--color-primary)',
                  marginBottom: '0.5rem',
                }}
              >
                {title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.88rem',
                  color: 'var(--color-text-light)',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <p
            style={{
              color: 'var(--color-text-light)',
              marginBottom: '1.5rem',
              fontSize: '1.05rem',
            }}
          >
            Do not wait for a toothache. Regular check-ups catch problems early.
          </p>
          <motion.a
            href="tel:+918606709290"
            whileHover={{ scale: 1.05 }}
            style={{
              backgroundColor: 'var(--color-primary)',
              color: 'white',
              padding: '1rem 2.5rem',
              borderRadius: '50px',
              fontSize: '1rem',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.8rem',
              textDecoration: 'none',
            }}
          >
            <Phone size={18} />
            Book Your First Visit — Call 8606709290
          </motion.a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .steps-row { flex-direction: column; align-items: center; }
          .steps-row > div { max-width: 100% !important; width: 100%; }
        }
      `}</style>
    </section>
  );
}
