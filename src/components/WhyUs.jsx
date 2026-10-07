import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Phone, Calendar, Heart, Shield, Users, Smile } from 'lucide-react';

const WhyUs = () => {
  const reasons = [
    { title: 'Patient-Centred Care', desc: 'We listen to your concerns and make sure you understand your treatment options.', icon: Heart },
    { title: 'Honest & Dependable', desc: 'We believe in clear communication and recommending care that is appropriate for your dental needs.', icon: Shield },
    { title: 'Comprehensive Dental Services', desc: 'From prevention and restoration to cosmetic and orthodontic care, we support your oral health at every stage.', icon: CheckCircle2 },
    { title: 'Comfortable Environment', desc: 'We strive to create a calm, welcoming experience so that every patient feels comfortable and cared for.', icon: Smile },
    { title: 'Experienced Consultation', desc: 'For specialised procedures, we collaborate with experienced consultants in relevant dental specialties.', icon: Users },
    { title: 'Care for the Whole Family', desc: "From children's dental care to adult treatments, we welcome patients of all ages.", icon: Users }
  ];

  return (
    <section id="why-us" style={{ backgroundColor: 'var(--color-bg-light)', padding: '6rem 0' }}>
      <div className="container">
        
        {/* Why Choose Us Grid */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '0.1em', fontSize: '0.9rem', textTransform: 'uppercase' }}>WHY CHOOSE</span>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginTop: '0.5rem' }}>SHALOM HOUSE OF DENTAL CARE?</h2>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
          {reasons.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              style={{ backgroundColor: 'var(--color-white)', padding: '2rem', borderRadius: '1rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', cursor: 'pointer' }}
            >
              <item.icon size={32} color="var(--color-accent)" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.2rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>{item.title}</h4>
              <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Comfortable & Family Blocks */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '6rem' }}>
          <motion.div whileHover={{ scale: 1.02 }} style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '3rem', borderRadius: '1rem' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>A Comfortable Dental Experience</h3>
            <h4 style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>We Take the Time to Listen</h4>
            <p style={{ opacity: 0.9, marginBottom: '1rem' }}>Visiting a dentist should not feel overwhelming.</p>
            <p style={{ opacity: 0.9, marginBottom: '1rem' }}>We believe in creating an environment where you can openly discuss your concerns, understand your treatment, and feel confident about the care you receive.</p>
            <p style={{ opacity: 0.9 }}>From your first consultation to your follow-up visits, our goal is to make your dental experience comfortable, transparent, and reassuring.</p>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.02 }} style={{ backgroundColor: 'var(--color-white)', border: '2px solid var(--color-bg-blue)', padding: '3rem', borderRadius: '1rem' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>For You and Your Family</h3>
            <h4 style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>Dental Care at Every Stage of Life</h4>
            <p style={{ color: 'var(--color-text-main)', marginBottom: '1rem' }}>Healthy dental habits begin early and continue throughout life.</p>
            <p style={{ color: 'var(--color-text-main)' }}>Whether it is your child's first dental visit, a routine check-up, treatment for a damaged tooth, or improving the appearance of your smile, we are here to support your oral health with personalised care.</p>
          </motion.div>
        </div>

        {/* Final CTA Block */}
        <div style={{ textAlign: 'center', backgroundColor: 'var(--color-bg-blue)', padding: '4rem 2rem', borderRadius: '1rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Your Smile Deserves Care</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-accent)', fontWeight: 600, marginBottom: '1.5rem' }}>Take the First Step Toward Better Oral Health</p>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: 'var(--color-text-main)' }}>
            Don't wait until a dental problem becomes uncomfortable. Regular dental care can help maintain healthy teeth and gums and allow potential problems to be identified early.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <motion.button whileHover={{ scale: 1.05 }} style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '1rem 2rem', borderRadius: '50px', border: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', fontWeight: 600, cursor: 'pointer' }}>
              <Calendar size={18} /> Book your consultation today
            </motion.button>
          </div>
          
          <div style={{ borderTop: '1px solid rgba(17,50,84,0.1)', paddingTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>SHALOM HOUSE OF DENTAL CARE</h3>
            <p style={{ color: 'var(--color-accent)', fontWeight: 600, marginBottom: '1rem' }}>Healthy Smiles. Confident You.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem', color: 'var(--color-primary)', fontWeight: 700 }}>
              <Phone size={20} fill="currentColor" /> 8606709290
            </div>
          </div>
        </div>

      </div>
      
      <style>
        {`
          @media (max-width: 768px) {
            #why-us > .container > div:nth-child(2) {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default WhyUs;
