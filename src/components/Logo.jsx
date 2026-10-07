import React from 'react';

const Logo = ({ className, style, variant = 'dark' }) => {
  const isLight = variant === 'light';
  
  return (
  <svg 
    viewBox="20 25 60 55" 
    className={className}
    style={{ display: 'block', ...style }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="themeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={isLight ? "#FFFFFF" : "#4A8BB5"} />
        <stop offset="50%" stopColor={isLight ? "#E2F0F9" : "#24578E"} />
        <stop offset="100%" stopColor={isLight ? "#8AB4F8" : "#113254"} />
      </linearGradient>
      <linearGradient id="themeGradientLight" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor={isLight ? "#4A8BB5" : "#8AB4F8"} />
        <stop offset="50%" stopColor={isLight ? "#8AB4F8" : "#4A8BB5"} />
        <stop offset="100%" stopColor={isLight ? "#FFFFFF" : "#24578E"} />
      </linearGradient>
    </defs>
    
    {/* Stylized Tooth */}
    {/* Left Swoosh */}
    <path 
      d="M 35 32 
         C 20 40, 25 60, 35 70 
         C 40 75, 45 65, 43 55
         C 40 45, 55 45, 65 35
         C 50 30, 40 30, 35 32 Z" 
      fill="url(#themeGradient)" 
      opacity="0.95"
    />
    
    {/* Right Swoosh */}
    <path 
      d="M 65 32 
         C 80 40, 75 60, 65 70 
         C 60 75, 55 65, 57 55
         C 60 45, 45 45, 35 35
         C 50 30, 60 30, 65 32 Z" 
      fill="url(#themeGradientLight)" 
      opacity="0.9"
    />
    
  </svg>
  );
};

export default Logo;
