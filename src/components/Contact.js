import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const showNotification = (message, type = 'info') => {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 1rem 2rem;
      border-radius: 8px;
      color: white;
      font-weight: 500;
      z-index: 10000;
      transform: translateX(100%);
      transition: transform 0.3s ease;
    `;
    
    if (type === 'success') {
      notification.style.background = 'linear-gradient(135deg, #00d4ff, #5b73ff)';
    } else if (type === 'error') {
      notification.style.background = 'linear-gradient(135deg, #ff4757, #ff3838)';
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      showNotification('Please fill in all fields', 'error');
      return;
    }
    
    showNotification('Message sent successfully!', 'success');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="contact fade-up">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info slide-left">
            <h3>Let's Connect</h3>
            <p>I'm always open to discussing new opportunities, innovative projects, or just having a chat about technology.</p>
            
            <div className="contact-items">
              <div className="contact-item bounce">
                <i className="fas fa-envelope"></i>
                <div>
                  <span>Email</span>
                  <a href="mailto:sinchugs5@gmail.com">sinchugs5@gmail.com</a>
                </div>
              </div>
              <div className="contact-item bounce">
                <i className="fas fa-phone"></i>
                <div>
                  <span>Phone</span>
                  <a href="tel:+918762701330">+91-8762701330</a>
                </div>
              </div>
              <div className="contact-item bounce">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <span>Location</span>
                  <span>Davangere, Karnataka</span>
                </div>
              </div>
            </div>
          </div>
          
          <form className="contact-form slide-right" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;