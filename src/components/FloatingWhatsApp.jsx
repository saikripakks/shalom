import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = ({ phoneNumber = "1234567890", message = "Hello!" }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat on WhatsApp"
    >
      <div className="whatsapp-icon-container">
        <FaWhatsapp className="whatsapp-icon" />
      </div>
    </a>
  );
};

export default FloatingWhatsApp;
