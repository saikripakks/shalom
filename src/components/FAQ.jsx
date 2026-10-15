import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

/**
 * FAQ - Animated accordion FAQ section for Shalom House of Dental Care.
 * Answers common dental questions with smooth expand/collapse animations.
 */

const faqs = [
  {
    question: 'Is root canal treatment painful?',
    answer:
      'Modern root canal treatment is done under local anaesthesia and is usually no more uncomfortable than a filling. Most patients feel relief because the infection causing the pain is removed.',
  },
  {
    question: 'How often should I visit a dentist?',
    answer:
      'Every six months for a check-up and cleaning, or sooner if you notice pain, bleeding gums or sensitivity.',
  },
  {
    question: 'At what age should my child first see a dentist?',
    answer:
      'Around their first birthday, or when the first tooth appears. Early visits build comfort and prevent cavities.',
  },
  {
    question: 'Is teeth whitening safe?',
    answer:
      'Professional whitening done after an examination is safe. We check that your teeth and gums are healthy first.',
  },
  {
    question: 'How much do treatments cost?',
    answer:
      'Cost depends on your condition. We explain the treatment plan and charges in full before starting any work.',
  },
  {
    question: 'Do you treat dental emergencies?',
    answer:
      'Yes. Call 8606709290 for toothache, broken teeth or swelling and we will advise you on the next steps.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      style={{ backgroundColor: 'var(--color-bg-light)', padding: '6rem 0' }}
    >
      <div className="container">
        {/* Section header */}
        <div style={{ textAlign: 'center' }}>
          <span
            style={{
              color: 'var(--color-accent)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontWeight: 600,
              fontSize: '0.875rem',
            }}
          >
            FREQUENTLY ASKED
          </span>
          <h2
            style={{
              color: 'var(--color-primary)',
              fontSize: '2.5rem',
              fontWeight: 700,
              margin: '0.5rem 0 0.75rem',
            }}
          >
            Frequently Asked Questions
          </h2>
          <p
            style={{
              color: 'var(--color-text-light)',
              fontSize: '1.05rem',
            }}
          >
            Answers to Common Dental Concerns
          </p>
        </div>

        {/* FAQ list */}
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            marginTop: '3rem',
          }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                style={{
                  backgroundColor: 'var(--color-white)',
                  borderRadius: '1rem',
                  marginBottom: '1rem',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  overflow: 'hidden',
                }}
                initial={false}
              >
                {/* Question button */}
                <button
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    border: 'none',
                    backgroundColor: 'var(--color-white)',
                    padding: '1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      color: 'var(--color-primary)',
                    }}
                  >
                    {faq.question}
                  </span>

                  {/* Rotating chevron */}
                  <ChevronDown
                    size={20}
                    style={{
                      color: 'var(--color-accent)',
                      flexShrink: 0,
                      marginLeft: '1rem',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                </button>

                {/* Animated answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p
                        style={{
                          color: 'var(--color-text-light)',
                          padding: '0 1.5rem 1.5rem',
                          fontSize: '1rem',
                          lineHeight: 1.7,
                          margin: 0,
                        }}
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
