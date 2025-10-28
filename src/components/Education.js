import React from 'react';

const Education = () => {
  return (
    <section id="education" className="education fade-up">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          <div className="education-card slide-up">
            <div className="education-icon">🎓</div>
            <h3>Bachelor of Engineering (B.E.)</h3>
            <h4>Computer Science and Engineering</h4>
            <p>Jain Institute of Technology, Davangere</p>
            <div className="education-details">
              <span className="grade">CGPA: 8.61</span>
              <span className="year">Expected: 2026</span>
            </div>
          </div>
          <div className="education-card slide-up">
            <div className="education-icon">📘</div>
            <h3>Pre-University Course (PUC)</h3>
            <h4>PCMB (Physics, Chemistry, Mathematics, Biology)</h4>
            <p>ST Johns PU College, Davangere</p>
            <div className="education-details">
              <span className="grade">81.83%</span>
              <span className="year">2022</span>
            </div>
          </div>
          <div className="education-card slide-up">
            <div className="education-icon">🏆</div>
            <h3>SSLC</h3>
            <h4>Board: KSEEB</h4>
            <p>Sri Someshwara English Medium High School, Gonivada, Davangere</p>
            <div className="education-details">
              <span className="grade">96%</span>
              <span className="year">2020</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;