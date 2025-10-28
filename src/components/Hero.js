import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    const heroElements = document.querySelectorAll('.greeting, .name, .role, .hero-description, .hero-buttons, .hero-social');
    heroElements.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'all 0.6s ease';
    });

    setTimeout(() => {
      heroElements.forEach((element, index) => {
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, index * 200);
      });
    }, 100);

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector('.hero');
      if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="greeting">Hello, I'm</span>
              <span className="name">Sinchana G S</span>
              <span className="role">Software Engineer</span>
            </h1>
            <p className="hero-description">
              Passionate about creating innovative solutions with Python, Java, Machine Learning, and Full-Stack Development. 
              Currently pursuing B.E. in Computer Science at Jain Institute of Technology.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Get In Touch</a>
              <a href="Sinchana_G_S_Resume.pdf" target="_blank" className="btn btn-secondary">
                <i className="fas fa-download"></i> Download CV
              </a>
            </div>
            <div className="hero-social">
              <a href="mailto:sinchugs5@gmail.com" className="social-link">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="https://linkedin.com/in/sinchana-gs" target="_blank" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/Sinchugs5" target="_blank" className="social-link">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <img src="Profile.jpg" alt="Sinchana G S" className="profile-img" />
              <div className="image-bg"></div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;