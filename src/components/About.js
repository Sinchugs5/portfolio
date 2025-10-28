import React, { useEffect, useRef } from 'react';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const animateStats = () => {
      const stats = document.querySelectorAll('.stat-number');
      stats.forEach(stat => {
        const target = parseFloat(stat.textContent);
        let current = 0;
        const increment = target / 50;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          
          if (stat.textContent.includes('.')) {
            stat.textContent = current.toFixed(2);
          } else {
            stat.textContent = Math.floor(current) + '+';
          }
        }, 30);
      });
    };

    const animateSkillBars = () => {
      const skillFills = document.querySelectorAll('.skill-fill');
      skillFills.forEach((fill, index) => {
        const width = fill.getAttribute('data-width');
        setTimeout(() => {
          fill.style.width = width + '%';
        }, index * 200);
      });
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          animateStats();
          animateSkillBars();
          observer.unobserve(entry.target);
        }
      });
    });

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about fade-up" ref={aboutRef}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text slide-left">
            <p>Aspiring Software Engineer with expertise in Python, Java, C, Full-Stack Development, IoT, Data Analytics, AI, and Machine Learning. Passionate about creating innovative solutions and seeking opportunities to apply technical skills in diverse technology fields.</p>
            <div className="stats">
              <div className="stat-item bounce">
                <span className="stat-number">8.61</span>
                <span className="stat-label">CGPA</span>
              </div>
              <div className="stat-item bounce">
                <span className="stat-number">6+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item bounce">
                <span className="stat-number">2</span>
                <span className="stat-label">Internships</span>
              </div>
            </div>
          </div>
          <div className="about-skills slide-right">
            <h3>Core Competencies</h3>
            <div className="skill-bars">
              <div className="skill-bar">
                <div className="skill-info">
                  <span>Python & Machine Learning</span>
                  <span>90%</span>
                </div>
                <div className="skill-progress">
                  <div className="skill-fill" data-width="90"></div>
                </div>
              </div>
              <div className="skill-bar">
                <div className="skill-info">
                  <span>Full-Stack Development</span>
                  <span>85%</span>
                </div>
                <div className="skill-progress">
                  <div className="skill-fill" data-width="85"></div>
                </div>
              </div>
              <div className="skill-bar">
                <div className="skill-info">
                  <span>Data Analytics</span>
                  <span>80%</span>
                </div>
                <div className="skill-progress">
                  <div className="skill-fill" data-width="80"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;