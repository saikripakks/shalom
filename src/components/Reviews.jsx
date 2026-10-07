import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: 'Yaseen Shanavas (Darvin)',
      text: 'Had A Hole In My Molar Went And Met With Dr Ezlizabet She Straightforwardly Said All The Things Very Clearly... She Was Soo Sweet And Did It Very Nicely And Well, Gave Me Many Informations About The Teeth And How To Maintain Them. I Have Never Got Such Informations From Anyone. Thank You Dr Ezlizabet ❤️',
      rating: 5
    },
    {
      name: 'Shihymon Antony Lansalant',
      text: 'Dental Care Clinic run by Dr. Elizabeth T John. Well equipped. Very caring. Treatment only to the need. Easily noticeable from Civilstation Station - General Hospital Road, East of Amman Kovil temple in the North side of the Road.',
      rating: 5
    },
    {
      name: 'Arfas Akbar',
      text: 'Well care and very good service ❤️',
      rating: 5
    }
  ];

  return (
    <section id="reviews" style={{ padding: '6rem 0', backgroundColor: 'var(--color-bg-light)', position: 'relative' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-accent)' }}></div>
            <span style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '0.1em', fontSize: '0.9rem', textTransform: 'uppercase' }}>TESTIMONIALS</span>
            <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-accent)' }}></div>
          </div>
          <h2 style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
            What Our Patients Say
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', maxWidth: '600px', margin: '0 auto' }}>
            Real reviews from our Google Maps listing.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(17,50,84,0.08)' }}
              style={{
                backgroundColor: 'var(--color-white)',
                padding: '2.5rem',
                borderRadius: '1.5rem',
                border: '1px solid rgba(17,50,84,0.05)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}
            >
              <div style={{ position: 'absolute', top: '2rem', right: '2rem', opacity: 0.1 }}>
                <Quote size={60} color="var(--color-primary)" fill="currentColor" />
              </div>
              
              <div style={{ display: 'flex', gap: '0.3rem', marginBottom: '1.5rem' }}>
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#FFB800" color="#FFB800" />
                ))}
              </div>
              
              <p style={{ color: 'var(--color-text-light)', fontSize: '1.05rem', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '2rem', flex: 1, position: 'relative', zIndex: 1 }}>
                "{review.text}"
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid rgba(17,50,84,0.1)', paddingTop: '1.5rem' }}>
                <div style={{ width: '45px', height: '45px', borderRadius: '50%', backgroundColor: 'var(--color-bg-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', fontWeight: 700, fontSize: '1.2rem' }}>
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '1rem' }}>{review.name}</h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.2rem' }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" style={{ width: '12px', height: '12px' }} />
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-main)', fontWeight: 500 }}>Google Review</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            href="https://www.google.com/maps/place/Shalom+House+Of+Dental+Care/@9.4924442,76.3283177,17z/data=!4m16!1m9!3m8!1s0x3b088591913d96df:0x45b5ee0964516e72!2sShalom+House+Of+Dental+Care!8m2!3d9.4924442!4d76.3308926!9m1!1b1!16s%2Fg%2F11qzcmzr6d!3m5!1s0x3b088591913d96df:0x45b5ee0964516e72!8m2!3d9.4924442!4d76.3308926!16s%2Fg%2F11qzcmzr6d?entry=ttu" 
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '0.8rem', 
              backgroundColor: 'white', color: 'var(--color-primary)', padding: '0.8rem 2rem', 
              borderRadius: '50px', fontSize: '1rem', fontWeight: 600, border: '1px solid rgba(17,50,84,0.1)',
              boxShadow: '0 10px 20px rgba(0,0,0,0.05)', textDecoration: 'none'
            }}
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" style={{ width: '18px', height: '18px' }} />
            Read more reviews on Google
          </motion.a>
        </div>

      </div>
    </section>
  );
};

export default Reviews;
