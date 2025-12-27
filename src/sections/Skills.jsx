import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>
      
      <motion.div 
        className="skills-grid"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ 
              duration: 0.4, 
              delay: index * 0.05 
            }}
            viewport={{ once: true }}
          >
            <span>{skill}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;