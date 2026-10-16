import React from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const DentalCheckup = () => {
  const faqs = [
    {
      q: 'Is scaling (cleaning) painful?',
      a: 'Professional dental cleaning is generally comfortable with minimal sensation. If you have sensitive gums or heavy tartar buildup, a mild numbing gel or local anaesthetic can be used to ensure you remain completely relaxed.'
    },
    {
      q: 'What if I have not visited a dentist in years?',
      a: 'We understand and provide a strictly judgment-free environment. Everyone starts fresh. Our focus is purely on understanding your current oral health and helping you maintain healthy teeth comfortably.'
    },
    {
      q: 'Does scaling or cleaning weaken natural teeth?',
      a: 'No, this is a common myth. Professional scaling only removes harmful calculus (tartar) and bacterial plaque that cannot be removed by normal brushing. It preserves and protects your teeth and gum bone structure.'
    }
  ];

  return (
    <main style={{ paddingTop: '80px' }}>
      {/* HERO BANNER */}
      <section style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '0.1em', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1rem' }}>
            PREVENTIVE CARE · ALAPPUZHA
          </p>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', lineHeight: 1.2 }}>
            Dental Check-up & Cleaning in Alappuzha
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.85, maxWidth: '650px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
            Comprehensive oral examinations and gentle ultrasonic scaling to keep your teeth bright, plaque-free, and healthy.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="tel:+918606709290" 
              style={{ backgroundColor: 'var(--color-accent)', color: 'white', padding: '1rem 2.5rem', borderRadius: '50px', fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.8rem' }}
            >
              <Phone size={18} /> Book Check-up — 8606709290
            </a>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--color-white)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ fontSize: '2.2rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
              What Happens at a Routine Dental Check-up?
            </h2>
            <p style={{ color: 'var(--color-text-main)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              A regular dental check-up at Shalom House of Dental Care is designed to keep you ahead of dental issues. During your visit, Dr. Elizabeth T John thoroughly inspects your teeth, gums, bite, and soft tissues for early signs of decay, gum inflammation, or structural wear.
            </p>
            <p style={{ color: 'var(--color-text-main)', lineHeight: 1.8, marginBottom: '2.5rem', fontSize: '1.05rem' }}>
              Digital dental X-rays are recommended only when clinically required, helping detect hidden cavities between teeth or underlying root issues before they cause pain or sensitivity.
            </p>

            <h3 style={{ fontSize: '1.6rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
              Professional Dental Cleaning (Scaling & Polishing)
            </h3>
            <p style={{ color: 'var(--color-text-main)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              Even with diligent daily brushing and flossing, saliva minerals harden plaque into tartar (calculus) along the gumline. Professional cleaning provides:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                'Gentle ultrasonic removal of hardened tartar and bacterial deposits',
                'Prevention and treatment of early gum disease (gingivitis) and bleeding gums',
                'Removal of superficial surface stains from tea, coffee, and food',
                'Polishing for a smooth, fresh surface that resists future plaque adhesion',
                'Personalized recommendations on brushing technique and home oral care'
              ].map((benefit, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', color: 'var(--color-text-main)', fontSize: '1rem' }}>
                  <CheckCircle size={20} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <h3 style={{ fontSize: '1.6rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
              How Often Should You Visit a Dentist?
            </h3>
            <p style={{ color: 'var(--color-text-main)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              For most adults and children, a check-up and cleaning every <strong>six months</strong> is recommended. If you have a history of gum disease, orthodontic appliances, or prone to rapid tartar buildup, your dentist may suggest visits every 3 to 4 months.
            </p>
            <p style={{ color: 'var(--color-text-main)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              Don't wait until a tooth starts aching. Preventive care catches minor issues before they require root canals, restorations, or extractions, saving you discomfort, time, and expenses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container" style={{ maxWidth: '750px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.2rem', color: 'var(--color-primary)', marginBottom: '2.5rem', textAlign: 'center' }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {faqs.map((faq, index) => (
              <div 
                key={index}
                style={{ backgroundColor: 'var(--color-white)', padding: '2rem', borderRadius: '1rem', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}
              >
                <h4 style={{ fontSize: '1.15rem', color: 'var(--color-primary)', marginBottom: '0.6rem', fontWeight: 600 }}>
                  {faq.q}
                </h4>
                <p style={{ color: 'var(--color-text-light)', lineHeight: 1.7, margin: 0 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.4rem', marginBottom: '1rem' }}>Prioritize Your Oral Health Today</h2>
          <p style={{ opacity: 0.85, marginBottom: '2rem', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Schedule your routine dental examination and professional cleaning at our Alappuzha clinic.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="tel:+918606709290" 
              style={{ backgroundColor: 'white', color: 'var(--color-primary)', padding: '1rem 2.5rem', borderRadius: '50px', fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.8rem' }}
            >
              <Phone size={18} /> Call 8606709290
            </a>
            <a 
              href="https://wa.me/918606709290?text=Hi%21%20I%20would%20like%20to%20book%20a%20check-up%20and%20cleaning%20appointment." 
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

export default DentalCheckup;
