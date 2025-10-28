import React from 'react';

const Achievements = () => {
  return (
    <section id="achievements" className="achievements fade-up">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        <div className="achievements-grid">
          <div className="achievement-card slide-up">
            <div className="achievement-icon">🥈</div>
            <h3>2nd Place - Stacksphere</h3>
            <p>Secured 2nd place in "Stacksphere - A State Level Mini Project Exhibition" at Jain Institute of Technology, Davangere for innovative project presentation</p>
          </div>
          <div className="achievement-card slide-up">
            <div className="achievement-icon">🏅</div>
            <h3>Inceptrix Hackathon Finalist</h3>
            <p>Finalist in Inceptrix Hackathon 2025, Jain University - FET with theme "Shaping tomorrow's world through intelligent innovation"</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;