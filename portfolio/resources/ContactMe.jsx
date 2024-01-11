// ContactMe.js

import React from 'react';
import './contactMe.css';

const ContactMe = () => {
  return (
    <div className="contact-me-container">
      <div className="contact-me-title">Contact Me</div>
      <div className="contact-me-content">
        Feel free to reach out! You can contact me via email at{' '}
        <a href="mailto:your.email@example.com" className="contact-me-link">
          your.email@example.com
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
