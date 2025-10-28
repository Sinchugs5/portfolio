import React from 'react';

const Publications = () => {
  return (
    <section id="publications" className="publications fade-up">
      <div className="container">
        <h2 className="section-title">Publications</h2>
        <div className="publication-card slide-up">
          <div className="publication-icon">📄</div>
          <div className="publication-content">
            <h3>"Emotion Responsive Music Player Using EEG Signals Through NeuroSky Headset"</h3>
            <p><strong>International Journal of Progressive Research in Engineering Management and Science (IJPREMS)</strong></p>
            <div className="publication-details">
              <span>Vol. 5, Issue 3, March 2025</span>
              <span>Paper ID: IJPREMS50300036032</span>
              <span>Status: Published</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;