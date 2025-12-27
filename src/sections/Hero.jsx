import React from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { Mail, FileDown, Code } from 'lucide-react';
import profileImage from '../assets/profile.jpeg';


const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm <span className="highlight">Abdurrezzak</span>
          </motion.h1>
          
          <motion.div 
            className="title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <ReactTyped
              strings={[
                'Software Engineer',
                'Full Stack Developer',
                'AI/ML Enthusiast',
                'Problem Solver'
              ]}
              typeSpeed={60}
              backSpeed={30}
              loop
            />
          </motion.div>

          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('contact')}
            >
              <Mail size={20} />
              Contact Me
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('projects')}
            >
              <Code size={20} />
              View Projects
            </button>
            <a 
              href="/AbdurrezzakEkidiCV.pdf" 
              className="btn btn-secondary"
              download="AbdurrezzakEkidiCV.pdf"
            >
              <FileDown size={20} />
              Download CV
            </a>
          </motion.div>
        </div>

        <motion.div 
          className="hero-image"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src={profileImage} 
            alt="Abdurrezzak Ekidi" 
            className="profile-image"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x400/6366f1/ffffff?text=A.E.';
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;