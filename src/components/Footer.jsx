// Footer.jsx

import React from 'react';
import './Footer.css';

function Footer({ isDarkMode, onToggle }) {
  return (
    <footer className={`footer ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>LearnHUB facilitates and enhances the learning experience,<br/>streamlining the educational process for users.</p>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: aishikadas3@gmail.com</p>
          <p>Phone: +91-9330540779</p>
          <p>Protfolio:https://aishikadas.netlify.app/</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; LearnHUB-EDUCATEAI</p>
      </div>
    </footer>
  );
}

export default Footer;
