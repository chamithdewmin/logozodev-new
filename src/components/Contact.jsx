import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    services: {
      webDesign: true,
      collaboration: false,
      mobileAppDesign: false,
      others: false
    },
    budget: 3000,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckbox = (service) => {
    setFormData({
      ...formData,
      services: {
        ...formData.services,
        [service]: !formData.services[service]
      }
    });
  };

  const handleBudgetChange = (e) => {
    setFormData({
      ...formData,
      budget: parseInt(e.target.value)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest in LogozoDev! We will get back to you soon.');
    setFormData({
      fullName: '',
      email: '',
      services: {
        webDesign: false,
        collaboration: false,
        mobileAppDesign: false,
        others: false
      },
      budget: 3000,
      message: ''
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header">
          <div className="logo-large">
            <svg width="60" height="60" viewBox="0 0 40 40" fill="none">
              <path d="M20 5L35 12.5V27.5L20 35L5 27.5V12.5L20 5Z" stroke="#CAFF33" strokeWidth="2" fill="none"/>
              <path d="M20 15L28 19V29L20 33L12 29V19L20 15Z" fill="#CAFF33"/>
            </svg>
          </div>
          <h2 className="section-title">Thank you for your Interest in LogozoDev.</h2>
          <p className="section-description">
            We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.
          </p>
          <button className="btn btn-primary">Start Project</button>
        </div>

        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit} className="contact-form-modern">
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Type here"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Type here"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Why are you contacting us?</label>
              <div className="checkbox-grid">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={formData.services.webDesign}
                    onChange={() => handleCheckbox('webDesign')}
                  />
                  <span className="checkmark"></span>
                  Web Design
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={formData.services.collaboration}
                    onChange={() => handleCheckbox('collaboration')}
                  />
                  <span className="checkmark"></span>
                  Collaboration
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={formData.services.mobileAppDesign}
                    onChange={() => handleCheckbox('mobileAppDesign')}
                  />
                  <span className="checkmark"></span>
                  Mobile App Design
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={formData.services.others}
                    onChange={() => handleCheckbox('others')}
                  />
                  <span className="checkmark"></span>
                  Others
                </label>
              </div>
            </div>

            <div className="form-group">
              <label>Your Budget</label>
              <p className="budget-subtitle">Slide to indicate your budget range</p>
              <div className="budget-slider">
                <input
                  type="range"
                  min="1000"
                  max="5000"
                  step="100"
                  value={formData.budget}
                  onChange={handleBudgetChange}
                  className="slider"
                />
                <div className="budget-values">
                  <span>$1000</span>
                  <span>$5000</span>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Your Message</label>
              <textarea
                name="message"
                placeholder="Type here"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-full">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
