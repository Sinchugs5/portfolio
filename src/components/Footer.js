import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2025 Sinchana G S. All rights reserved.</p>
          <div className="footer-social">
            <a href="mailto:sinchugs5@gmail.com" className="social-link">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://linkedin.com/in/sinchana-gs" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Sinchugs5" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;