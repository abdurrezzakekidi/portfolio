import React from 'react';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
          Abdurrezzak
        </a>
        <ul className="nav-links">
          <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
          <li><a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experience</a></li>
          <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
          <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;