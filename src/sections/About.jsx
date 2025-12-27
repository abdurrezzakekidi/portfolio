import React from 'react';
import { MapPin, GraduationCap, Mail } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I am <strong>Abdurrezzak Ekidi</strong>, a passionate Software Engineer currently pursuing my 
            B.Sc. in Software Engineering at Malatya Turgut Özal University, expected to graduate in 2026.
          </p>
          <p>
            I specialize in full-stack development using modern frameworks like ASP.NET, Spring Boot, and 
            Flutter. My experience spans from building enterprise-level applications to conducting AI/ML 
            research in Natural Language Processing.
          </p>
          <p>
            I'm highly motivated, detail-oriented, and passionate about solving real-world problems through 
            innovative software solutions. I thrive in collaborative environments and enjoy learning new 
            technologies.
          </p>
        </div>
        <div className="about-cards">
          <div className="info-card">
            <div className="info-card-icon">
              <MapPin size={24} />
            </div>
            <div className="info-card-content">
              <h3>Location</h3>
              <p>Istanbul, Turkey</p>
            </div>
          </div>
          <div className="info-card">
            <div className="info-card-icon">
              <GraduationCap size={24} />
            </div>
            <div className="info-card-content">
              <h3>Education</h3>
              <p>B.Sc. in Software Engineering</p>
              <p>Malatya Turgut Özal University | 2026</p>
            </div>
          </div>
          <div className="info-card">
            <div className="info-card-icon">
              <Mail size={24} />
            </div>
            <div className="info-card-content">
              <h3>Email</h3>
              <p>abdurrezzakekid82@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;