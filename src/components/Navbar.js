import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        if (window.scrollY > 100) {
          navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
          navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        }
      }
    };

    const handleSmoothScroll = (e) => {
      if (e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleSmoothScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <span className="logo-text">Sinchana G S</span>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#education" className="nav-link">Education</a></li>
          <li><a href="#experience" className="nav-link">Experience</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#skills" className="nav-link">Skills</a></li>
          <li><a href="#certifications" className="nav-link">Certifications</a></li>
          <li><a href="#publications" className="nav-link">Publications</a></li>
          <li><a href="#achievements" className="nav-link">Achievements</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;