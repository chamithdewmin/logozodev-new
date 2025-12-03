import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import JobApplicationModal from '../components/JobApplicationModal';
import './JobDetailsPage.css';
import LightRays from '../components/LightRays';

const JobDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { job } = location.state || {};
  const [isModalOpen, setIsModalOpen] = useState(false);

  // If no job data, redirect back to careers
  if (!job) {
    navigate('/careers');
    return null;
  }

  const handleApplyClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <div className="light-rays-overlay">
        <LightRays
          raysOrigin="top-center"
          raysColor="#CAFF33"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      <div className="job-details-container">
        <div className="job-details-hero">
          <div className="container">
            <button className="back-btn" onClick={() => navigate('/careers')}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Back to Careers
            </button>
            
            <div className="job-details-header">
              <h1 className="job-details-title">{job.title}</h1>
              <div className="job-details-meta">
                <span className="meta-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  {job.location}
                </span>
                <span className="meta-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
                  </svg>
                  {job.department}
                </span>
                <span className="meta-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  {job.type}
                </span>
              </div>
            </div>

            <div className="job-hero-summary">
              <p>{job.description}</p>
            </div>

            <button className="apply-now-btn" onClick={handleApplyClick}>
              Apply Now
            </button>
          </div>
        </div>

        <div className="job-details-content">
          <div className="container">
            {/* About the Role shown in hero summary above */}

            <section className="job-section">
              <h2>Key Responsibilities</h2>
              <ul className="job-list">
                {job.responsibilities && job.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="job-section">
              <h2>Requirements</h2>
              <ul className="job-list">
                {job.requirements && job.requirements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <div className="job-apply-footer">
              <h3>Ready to join our team?</h3>
              <p>Submit your application and let's build something amazing together.</p>
              <button className="apply-now-btn" onClick={handleApplyClick}>
                Apply for this position
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <JobApplicationModal 
          job={job}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default JobDetailsPage;
