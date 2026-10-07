import React from 'react';

const Marquee = () => {
  const items = [
    "PREVENTIVE CARE",
    "RESTORATIVE DENTISTRY",
    "COSMETIC DENTISTRY",
    "ORTHODONTICS",
    "CHILD DENTAL CARE"
  ];

  return (
    <div style={{ backgroundColor: 'var(--color-charcoal)', padding: '2rem 0', overflow: 'hidden', whiteSpace: 'nowrap', display: 'flex' }}>
      <div style={{ display: 'flex', animation: 'marquee 20s linear infinite' }}>
        {[...Array(4)].map((_, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
            {items.map((item, i) => (
              <React.Fragment key={i}>
                <span style={{ 
                  color: i % 2 === 0 ? 'var(--color-yellow)' : 'var(--color-white)', 
                  fontFamily: 'var(--font-sans)', 
                  fontSize: '1.2rem', 
                  fontWeight: 600, 
                  letterSpacing: '0.1em' 
                }}>
                  {item}
                </span>
                <span style={{ margin: '0 2rem', color: 'rgba(255,255,255,0.2)' }}>•</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
};

export default Marquee;
