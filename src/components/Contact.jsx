import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
    budget: 2500,
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 4;

  const reasons = [
    'General Inquiry',
    'Request a Quote',
    'Support',
    'Feedback'
  ];

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
      }
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!validateEmail(formData.email)) {
        newErrors.email = 'Please enter a valid email';
      }
    }

    if (step === 2) {
      if (!formData.reason) {
        newErrors.reason = 'Please select a reason';
      }
    }

    if (step === 4) {
      if (!formData.message.trim()) {
        newErrors.message = 'Message is required';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(4)) {
      setIsSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          reason: '',
          budget: 2500,
          message: ''
        });
        setCurrentStep(1);
        setIsSubmitted(false);
      }, 3000);
    }
  };

  const getBudgetLabel = (value) => {
    if (value < 1500) return 'Low Budget';
    if (value < 3500) return 'Medium Budget';
    return 'High Budget';
  };

  const getProgressPercentage = () => {
    return (currentStep / totalSteps) * 100;
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header">
          <div className="logo-icon">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <rect x="20" y="20" width="40" height="40" rx="8" fill="#CAFF33"/>
              <path d="M35 35L45 40V50L35 55L25 50V40L35 35Z" fill="#1A1A1A"/>
            </svg>
          </div>
          <h2 className="section-title">Let's Start Your Project</h2>
          <p className="section-description">
            Complete this quick form to tell us about your needs. We'll respond within 24 hours with a tailored proposal.
          </p>
        </div>

        <div className="stepper-form-wrapper">
          {!isSubmitted ? (
            <form id="contact-form" onSubmit={handleSubmit} className="stepper-form">
              {/* Progress Bar */}
              <div className="progress-container">
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${getProgressPercentage()}%` }}
                  ></div>
                </div>
                <div className="progress-text">Step {currentStep} of {totalSteps}</div>
              </div>

              {/* Step 1: Basic Info */}
              <div className={`form-step ${currentStep === 1 ? 'active' : ''}`}>
                <h3 className="step-title">Basic Information</h3>
                <p className="step-description">Let's start with your contact details</p>

                <div className="form-group">
                  <label>Name <span className="required">*</span></label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label>Email <span className="required">*</span></label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                  <span className="helper-text">We'll never share your email with anyone else</span>
                </div>
              </div>

              {/* Step 2: Reason */}
              <div className={`form-step ${currentStep === 2 ? 'active' : ''}`}>
                <h3 className="step-title">What brings you here?</h3>
                <p className="step-description">Select the reason for contacting us</p>

                <div className="form-group">
                  <label>Reason for Contact <span className="required">*</span></label>
                  <select
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    className={errors.reason ? 'error' : ''}
                  >
                    <option value="">Select an option</option>
                    {reasons.map((reason, index) => (
                      <option key={index} value={reason}>{reason}</option>
                    ))}
                  </select>
                  {errors.reason && <span className="error-message">{errors.reason}</span>}
                </div>
              </div>

              {/* Step 3: Budget */}
              <div className={`form-step ${currentStep === 3 ? 'active' : ''}`}>
                <h3 className="step-title">Budget Range</h3>
                <p className="step-description">Help us understand your budget expectations</p>

                <div className="form-group">
                  <label>Budget</label>
                  <div className="budget-display">
                    <span className="budget-amount">${formData.budget}</span>
                    <span className="budget-label">{getBudgetLabel(formData.budget)}</span>
                  </div>
                  <input
                    type="range"
                    name="budget"
                    min="0"
                    max="5000"
                    step="100"
                    value={formData.budget}
                    onChange={handleChange}
                    className="budget-slider"
                  />
                  <div className="budget-markers">
                    <span>$0</span>
                    <span>$2,500</span>
                    <span>$5,000</span>
                  </div>
                  <span className="helper-text">Slide to adjust your budget range</span>
                </div>
              </div>

              {/* Step 4: Message */}
              <div className={`form-step ${currentStep === 4 ? 'active' : ''}`}>
                <h3 className="step-title">Tell us more</h3>
                <p className="step-description">Share details about your project</p>

                <div className="form-group">
                  <label>Your Message <span className="required">*</span></label>
                  <textarea
                    name="message"
                    placeholder="Describe your project, goals, and any specific requirements..."
                    rows="6"
                    maxLength="500"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                  ></textarea>
                  <div className="textarea-footer">
                    {errors.message && <span className="error-message">{errors.message}</span>}
                    <span className="char-count">{formData.message.length} / 500</span>
                  </div>
                </div>

                {/* Summary */}
                <div className="form-summary">
                  <h4>Summary</h4>
                  <div className="summary-item">
                    <strong>Name:</strong> <span>{formData.name}</span>
                  </div>
                  <div className="summary-item">
                    <strong>Email:</strong> <span>{formData.email}</span>
                  </div>
                  <div className="summary-item">
                    <strong>Reason:</strong> <span>{formData.reason}</span>
                  </div>
                  <div className="summary-item">
                    <strong>Budget:</strong> <span>${formData.budget}</span>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="form-navigation">
                {currentStep > 1 && (
                  <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={handleBack}
                  >
                    Back
                  </button>
                )}
                {currentStep < totalSteps ? (
                  <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={handleNext}
                  >
                    Next
                  </button>
                ) : (
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          ) : (
            <div className="success-message">
              <div className="success-icon">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="35" stroke="#CAFF33" strokeWidth="4"/>
                  <path d="M25 40L35 50L55 30" stroke="#CAFF33" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Thank You!</h3>
              <p>We've received your message and will get back to you within 24 hours.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
