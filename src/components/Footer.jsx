import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a 
            href="https://github.com/abdurrezzakekidi" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/a-rezzak-ekidi-9121ab255" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="mailto:abdurrezzakekid82@gmail.com"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
        <p>© {currentYear} Abdurrezzak Ekidi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;