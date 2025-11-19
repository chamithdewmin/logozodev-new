import React from 'react';
import './PageHero.css';
import './CareersPage.css';
import CTA from '../components/CTA';

const CareersPage = () => {
  const openPositions = [
    {
      title: 'Senior UI/UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      description: 'We are seeking a talented UI/UX designer to create exceptional user experiences for our clients.'
    },
    {
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Join our engineering team to build scalable web applications using modern technologies.'
    },
    {
      title: 'Project Manager',
      department: 'Operations',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Lead digital projects from conception to delivery, ensuring client satisfaction and team success.'
    },
    {
      title: 'Mobile App Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Develop innovative mobile applications for iOS and Android platforms.'
    },
    {
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      description: 'Drive digital marketing strategies and campaigns for our agency and clients.'
    }
  ];

  const benefits = [
    {
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Competitive Salary',
      description: 'Industry-leading compensation packages'
    },
    {
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      title: 'Health Benefits',
      description: 'Comprehensive health, dental, and vision coverage'
    },
    {
      icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
      title: 'Flexible PTO',
      description: 'Unlimited paid time off policy'
    },
    {
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
      title: 'Remote Work',
      description: 'Work from anywhere in the world'
    },
    {
      icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
      title: 'Learning Budget',
      description: 'Annual budget for courses and conferences'
    },
    {
      icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
      title: 'Career Growth',
      description: 'Clear paths for advancement and development'
    }
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">Join Our Team</h1>
          <p className="page-hero-description">
            Build your career with a team that values creativity, innovation, and work-life balance.
          </p>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '60px' }}>Why Work With Us</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">
                  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={benefit.icon} />
                  </svg>
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="careers-section">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '60px' }}>Open Positions</h2>
          <div className="jobs-list">
            {openPositions.map((job, index) => (
              <div key={index} className="job-card">
                <div className="job-header">
                  <div>
                    <h3>{job.title}</h3>
                    <div className="job-meta">
                      <span className="job-department">{job.department}</span>
                      <span className="job-location">📍 {job.location}</span>
                      <span className="job-type">{job.type}</span>
                    </div>
                  </div>
                  <button className="apply-btn">Apply Now</button>
                </div>
                <p className="job-description">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
};

export default CareersPage;
