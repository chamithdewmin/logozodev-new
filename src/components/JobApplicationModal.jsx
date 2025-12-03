import React, { useState, useEffect } from 'react';
import Stepper, { Step } from './Stepper';
import './JobApplicationModal.css';

const JobApplicationModal = ({ job, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: job?.title || '',
    expectedSalary: '',
    resume: null,
    portfolioLink: '',
    coverLetter: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('jobApplicationData');
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setFormData({ ...parsed, position: job?.title || parsed.position });
    } else {
      setFormData(prev => ({ ...prev, position: job?.title || '' }));
    }
  }, [job]);

  // Save to localStorage on form data change
  useEffect(() => {
    if (!isSubmitted) {
      localStorage.setItem('jobApplicationData', JSON.stringify(formData));
    }
  }, [formData, isSubmitted]);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^[\d\s\-\+\(\)]+$/;
    return regex.test(phone) && phone.replace(/\D/g, '').length >= 10;
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.fullName.trim()) {
        newErrors.fullName = 'Full name is required';
      }
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!validateEmail(formData.email)) {
        newErrors.email = 'Please enter a valid email';
      }
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required';
      } else if (!validatePhone(formData.phone)) {
        newErrors.phone = 'Please enter a valid phone number';
      }
    }

    if (step === 2) {
      if (!formData.position.trim()) {
        newErrors.position = 'Position is required';
      }
    }

    if (step === 3) {
      if (!formData.resume) {
        newErrors.resume = 'Resume is required';
      }
    }

    if (step === 4) {
      if (!formData.coverLetter.trim()) {
        newErrors.coverLetter = 'Cover letter is required';
      } else if (formData.coverLetter.length < 50) {
        newErrors.coverLetter = 'Cover letter should be at least 50 characters';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type === 'application/pdf' || file.type === 'application/msword' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        setFormData({ ...formData, resume: file });
        if (errors.resume) {
          setErrors({ ...errors, resume: '' });
        }
      } else {
        setErrors({ ...errors, resume: 'Please upload PDF or DOC file only' });
      }
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      if (file.type === 'application/pdf' || file.type === 'application/msword' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        setFormData({ ...formData, resume: file });
        if (errors.resume) {
          setErrors({ ...errors, resume: '' });
        }
      } else {
        setErrors({ ...errors, resume: 'Please upload PDF or DOC file only' });
      }
    }
  };

  const handleStepChange = (step) => {
    // This is called after step changes, just for tracking
    console.log('Step changed to:', step);
  };

  const handleValidateStep = (step) => {
    // Validate the current step before allowing progression
    const isValid = validateStep(step);
    if (!isValid) {
      // Scroll to first error if validation fails
      setTimeout(() => {
        const firstError = document.querySelector('.stepper-step-default .error');
        if (firstError) {
          firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
          firstError.focus();
        }
      }, 100);
    }
    return isValid;
  };

  const handleFinalStepCompleted = () => {
    // Final validation before submission
    if (validateStep(5)) {
      setIsSubmitted(true);
      localStorage.removeItem('jobApplicationData');
      setTimeout(() => {
        onClose();
      }, 3000);
    }
  };

  const handleModalClick = (e) => {
    if (e.target.className === 'job-modal-overlay') {
      onClose();
    }
  };

  return (
    <div className="job-modal-overlay" onClick={handleModalClick}>
      <div className="job-modal-content stepper-modal">
        <button className="modal-close-btn" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {!isSubmitted ? (
          <div className="modal-body">
            <div className="modal-header">
              <h2>Apply for {job?.title}</h2>
              <p>Complete your application in 5 simple steps</p>
            </div>

            <Stepper
              initialStep={1}
              onStepChange={handleStepChange}
              onFinalStepCompleted={handleFinalStepCompleted}
              validateStep={handleValidateStep}
              backButtonText="Previous"
              nextButtonText="Next"
              disableStepIndicators={false}
            >
              {/* Step 1: Personal Info */}
              <Step>
                <h3>Personal Information</h3>
                <p>Let's start with your basic details</p>

                <label>Full Name <span className="required">*</span></label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={errors.fullName ? 'error' : ''}
                />
                {errors.fullName && <span className="error-message">{errors.fullName}</span>}

                <label>Email Address <span className="required">*</span></label>
                <input
                  type="email"
                  name="email"
                  placeholder="john.doe@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}

                <label>Phone Number <span className="required">*</span></label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'error' : ''}
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
                <span className="helper-text">We'll contact you via this number</span>
              </Step>

              {/* Step 2: Job Details */}
              <Step>
                <h3>Job Details</h3>
                <p>Tell us about your application</p>

                <label>Position Applying For <span className="required">*</span></label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className={errors.position ? 'error' : ''}
                  readOnly
                />
                {errors.position && <span className="error-message">{errors.position}</span>}
                <span className="helper-text">Pre-filled from your selection</span>

                <label>Expected Salary / Current CTC <span className="optional">(Optional)</span></label>
                <input
                  type="text"
                  name="expectedSalary"
                  placeholder="e.g., $80,000 - $100,000"
                  value={formData.expectedSalary}
                  onChange={handleChange}
                />
                <span className="helper-text">This helps us match you with the right opportunity</span>
              </Step>

              {/* Step 3: Resume & Portfolio */}
              <Step>
                <h3>Resume & Portfolio</h3>
                <p>Upload your documents</p>

                <label>Upload Resume <span className="required">*</span></label>
                <div 
                  className={`file-upload-area ${isDragging ? 'dragging' : ''} ${errors.resume ? 'error' : ''}`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    id="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                  />
                  <label htmlFor="resume" className="file-upload-label">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" />
                    </svg>
                    {formData.resume ? (
                      <div className="file-info">
                        <span className="file-name">{formData.resume.name}</span>
                        <span className="file-size">{(formData.resume.size / 1024).toFixed(1)} KB</span>
                      </div>
                    ) : (
                      <>
                        <span>Drag & drop your resume here, or click to browse</span>
                        <span className="file-types">PDF or DOC format</span>
                      </>
                    )}
                  </label>
                </div>
                {errors.resume && <span className="error-message">{errors.resume}</span>}

                <label>Portfolio / LinkedIn Link <span className="optional">(Optional)</span></label>
                <input
                  type="url"
                  name="portfolioLink"
                  placeholder="https://linkedin.com/in/yourprofile"
                  value={formData.portfolioLink}
                  onChange={handleChange}
                />
                <span className="helper-text">Share your portfolio, LinkedIn, or personal website</span>
              </Step>

              {/* Step 4: Cover Letter */}
              <Step>
                <h3>Cover Letter</h3>
                <p>Tell us why you're a great fit</p>

                <label>Your Cover Letter <span className="required">*</span></label>
                <textarea
                  name="coverLetter"
                  placeholder="Tell us about your experience, skills, and why you're interested in this position..."
                  rows="10"
                  maxLength="1000"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  className={errors.coverLetter ? 'error' : ''}
                ></textarea>
                <div className="textarea-footer">
                  {errors.coverLetter && <span className="error-message">{errors.coverLetter}</span>}
                  <span className="char-count">{formData.coverLetter.length} / 1000</span>
                </div>
                <span className="helper-text">Minimum 50 characters required</span>
              </Step>

              {/* Step 5: Review & Submit */}
              <Step>
                <h3>Review Your Application</h3>
                <p>Please review your information before submitting</p>

                <div className="application-summary">
                  <div className="summary-section">
                    <h4>Personal Information</h4>
                    <div className="summary-item">
                      <strong>Name:</strong> <span>{formData.fullName}</span>
                    </div>
                    <div className="summary-item">
                      <strong>Email:</strong> <span>{formData.email}</span>
                    </div>
                    <div className="summary-item">
                      <strong>Phone:</strong> <span>{formData.phone}</span>
                    </div>
                  </div>

                  <div className="summary-section">
                    <h4>Job Details</h4>
                    <div className="summary-item">
                      <strong>Position:</strong> <span>{formData.position}</span>
                    </div>
                    {formData.expectedSalary && (
                      <div className="summary-item">
                        <strong>Expected Salary:</strong> <span>{formData.expectedSalary}</span>
                      </div>
                    )}
                  </div>

                  <div className="summary-section">
                    <h4>Documents</h4>
                    <div className="summary-item">
                      <strong>Resume:</strong> <span>{formData.resume?.name || 'Not uploaded'}</span>
                    </div>
                    {formData.portfolioLink && (
                      <div className="summary-item">
                        <strong>Portfolio:</strong> <span>{formData.portfolioLink}</span>
                      </div>
                    )}
                  </div>

                  <div className="summary-section">
                    <h4>Cover Letter</h4>
                    <div className="cover-letter-preview">
                      {formData.coverLetter}
                    </div>
                  </div>
                </div>
              </Step>
            </Stepper>
          </div>
        ) : (
          <div className="modal-success-message">
            <div className="success-icon">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="35" stroke="#CAFF33" strokeWidth="4"/>
                <path d="M25 40L35 50L55 30" stroke="#CAFF33" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Thank You!</h3>
            <p>Your application has been received. We'll review it and get back to you soon.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobApplicationModal;
