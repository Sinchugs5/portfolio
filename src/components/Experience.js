import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="experience fade-up">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-grid">
          <div className="experience-card slide-up">
            <div className="experience-icon">💼</div>
            <div className="experience-content">
              <h3>Machine Learning Intern</h3>
              <h4>Cognifyz Technologies</h4>
              <span className="duration">Sep 2024 - Oct 2024</span>
              <p>Developed ML models for restaurant rating prediction, cuisine classification, and personalized recommendation systems. Applied data preprocessing, feature engineering, and model evaluation techniques using Python and Scikit-learn.</p>
              <div className="tech-stack">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Scikit-learn</span>
                <span className="tech-tag">Data Analysis</span>
              </div>
            </div>
          </div>
          <div className="experience-card slide-up">
            <div className="experience-icon">💻</div>
            <div className="experience-content">
              <h3>Virtual Internship 6.0</h3>
              <h4>Infosys Springboard</h4>
              <span className="duration">Sep 2024 - Present</span>
              <p>Developing full-stack web application using Angular, Node.js, and MongoDB for civic engagement through digital petitions. Implementing user authentication, petition management, and responsive UI design.</p>
              <div className="tech-stack">
                <span className="tech-tag">Angular</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;