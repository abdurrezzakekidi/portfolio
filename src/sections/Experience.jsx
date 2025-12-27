import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ExternalLink } from 'lucide-react';
import { experiences } from '../data/experiences';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>
      
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <motion.div 
            key={exp.id} 
            className="experience-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ x: 10 }}
          >
            <div className="experience-header">
              <div className="experience-title">
                <h3>
                  {exp.title} <span className="company">@ {exp.company}</span>
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{exp.location}</p>
              </div>
              <div className="experience-date">
                <Calendar size={16} />
                <span>{exp.period}</span>
              </div>
            </div>
            <div className="experience-description">
              <ul>
                {exp.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
            {exp.projectLink && (
              <motion.div 
                className="experience-link"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.a
                  href={exp.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={18} />
                  View Live Project
                </motion.a>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;