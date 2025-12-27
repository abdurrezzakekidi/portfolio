import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id} 
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <motion.span 
                    key={index} 
                    className="tech-tag"
                    whileHover={{ y: -2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              {project.githubLink && (
                <div className="project-links">
                  <motion.a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={18} />
                    View on GitHub
                  </motion.a>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;