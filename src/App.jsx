import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="app">
      <Navbar />
      
      {/* Theme Toggle */}
      <div className="theme-toggle">
        <button 
          className={`theme-btn ${theme === 'light' ? 'active' : ''}`}
          onClick={() => toggleTheme('light')}
          aria-label="Light Mode"
        >
          <Sun size={20} />
        </button>
        <button 
          className={`theme-btn ${theme === 'dark' ? 'active' : ''}`}
          onClick={() => toggleTheme('dark')}
          aria-label="Dark Mode"
        >
          <Moon size={20} />
        </button>
      </div>

      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;