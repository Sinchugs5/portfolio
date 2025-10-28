import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="skills fade-up">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-container">
          <div className="skill-category slide-up">
            <h3><i className="fas fa-code"></i> Programming Languages</h3>
            <div className="skill-items">
              <div className="skill-item">C</div>
              <div className="skill-item">Python</div>
              <div className="skill-item">Java</div>
              <div className="skill-item">JavaScript</div>
              <div className="skill-item">PHP</div>
            </div>
          </div>
          
          <div className="skill-category slide-up">
            <h3><i className="fas fa-globe"></i> Web Technologies</h3>
            <div className="skill-items">
              <div className="skill-item">HTML5</div>
              <div className="skill-item">CSS3</div>
              <div className="skill-item">Bootstrap</div>
              <div className="skill-item">React.js</div>
              <div className="skill-item">Angular</div>
              <div className="skill-item">Node.js</div>
              <div className="skill-item">Express.js</div>
            </div>
          </div>
          
          <div className="skill-category slide-up">
            <h3><i className="fas fa-database"></i> Databases & Core</h3>
            <div className="skill-items">
              <div className="skill-item">MySQL</div>
              <div className="skill-item">MongoDB</div>
              <div className="skill-item">Data Structures</div>
              <div className="skill-item">OOP</div>
              <div className="skill-item">DBMS</div>
            </div>
          </div>
          
          <div className="skill-category slide-up">
            <h3><i className="fas fa-brain"></i> Other Skills</h3>
            <div className="skill-items">
              <div className="skill-item">Machine Learning</div>
              <div className="skill-item">Data Analytics</div>
              <div className="skill-item">IoT</div>
              <div className="skill-item">MS Office</div>
              <div className="skill-item">Communication</div>
              <div className="skill-item">Teamwork</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;