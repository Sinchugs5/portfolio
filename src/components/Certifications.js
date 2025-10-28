import React from 'react';

const Certifications = () => {
  return (
    <section id="certifications" className="certifications fade-up">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="cert-grid">
          <div className="cert-card slide-up">
            <div className="cert-icon">🏅</div>
            <h3>Infosys Springboard (2024)</h3>
            <ul>
              <li>Artificial Intelligence Primer</li>
              <li>Database Management System</li>
              <li>Python Foundation</li>
            </ul>
          </div>
          <div className="cert-card slide-up">
            <div className="cert-icon">🎓</div>
            <h3>NPTEL (IITs, 2023–2024)</h3>
            <ul>
              <li>Joy of Computing Using Python (IIT Madras)</li>
              <li>Programming in Java (IIT Kharagpur)</li>
            </ul>
          </div>
          <div className="cert-card slide-up">
            <div className="cert-icon">💼</div>
            <h3>Deloitte Forage (2024)</h3>
            <ul>
              <li>Data Analytics Virtual Job Simulation</li>
            </ul>
          </div>
          <div className="cert-card slide-up">
            <div className="cert-icon">🌐</div>
            <h3>Internshala Trainings (2023)</h3>
            <ul>
              <li>Web Development (Skill India & NSDC)</li>
            </ul>
          </div>
          <div className="cert-card slide-up">
            <div className="cert-icon">🗣️</div>
            <h3>Infosys Pragati Path (2025)</h3>
            <ul>
              <li>Communication & Assertiveness</li>
              <li>Presentation & Interpersonal Skills</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;