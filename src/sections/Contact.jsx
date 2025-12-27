import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>
      
      <div className="contact-grid">
        <motion.div 
          className="contact-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
        >
          <div className="contact-card-icon">
            <Mail size={40} />
          </div>
          <h3>Email</h3>
          <a href="mailto:abdurrezzakekid82@gmail.com">
            abdurrezzakekid82@gmail.com
          </a>
        </motion.div>
        
        <motion.div 
          className="contact-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
        >
          <div className="contact-card-icon">
            <Phone size={40} />
          </div>
          <h3>Phone</h3>
          <a href="tel:+905340440622">
            +90 534 044 06 22
          </a>
        </motion.div>
        
        <motion.div 
          className="contact-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
        >
          <div className="contact-card-icon">
            <Linkedin size={40} />
          </div>
          <h3>LinkedIn</h3>
          <a 
            href="https://www.linkedin.com/in/a-rezzak-ekidi-9121ab255" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            linkedin.com/in/a-rezzak-ekidi
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;