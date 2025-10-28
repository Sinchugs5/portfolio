import React from 'react';

const Projects = () => {
  const projects = [
    {
      icon: "🎵",
      title: "Emotion Responsive Music Player Using EEG Signals",
      description: "AI-powered music recommendation system using EEG signals through NeuroSky headset, CNN, and RNN for real-time emotion detection and personalized music suggestions. Published in IJPREMS journal.",
      tech: ["Python", "CNN/RNN", "EEG Analysis", "NeuroSky"]
    },
    {
      icon: "🏛️",
      title: "Civix Digital Democracy Platform",
      description: "Developing a full-stack civic engagement app with Node.js, Express.js, MongoDB, and React, featuring secure authentication, CRUD petitions, and role-based APIs.",
      tech: ["Node.js", "Express.js", "MongoDB", "React"]
    },
    {
      icon: "🍽️",
      title: "Restaurant Intelligence System",
      description: "ML-powered system for restaurant rating prediction, cuisine classification, and personalized recommendations with advanced data preprocessing and model evaluation techniques.",
      tech: ["Python", "Scikit-learn", "Data Analysis", "ML"]
    },
    {
      icon: "🏠",
      title: "PG Life Web Application",
      description: "Responsive full-stack website for PG accommodations with user authentication, property listings, and enhanced UI/UX design using modern web technologies.",
      tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript"]
    },
    {
      icon: "🚌",
      title: "Bus Booking Management System",
      description: "Interactive web application with booking functionality, seat selection features, input validation, and responsive design for optimal user experience.",
      tech: ["HTML/CSS", "JavaScript", "PHP", "MySQL"]
    },
    {
      icon: "🗳️",
      title: "Votex: AI-Enhanced Next-Gen Blockchain Voting with Face Recognition Authentication",
      description: "Developed a secure blockchain-based voting system with triple authentication (password, face, OTP), AI monitoring, multilingual support, and real-time fraud detection using Flask, dlib, and Twilio.",
      tech: ["Flask", "Blockchain", "dlib", "Twilio", "Face Recognition", "AI"]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3>{project.icon} {project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;