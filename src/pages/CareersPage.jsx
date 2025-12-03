import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PageHero.css';
import './CareersPage.css';
import CTA from '../components/CTA';

const CareersPage = () => {
  const navigate = useNavigate();

  const openPositions = [
    {
      id: 1,
      title: 'Senior UI/UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      description: 'We are looking for a talented Senior UI/UX Designer to join our team and help shape the digital experiences of our clients. In this role, you will lead the design process from concept to final execution, ensuring intuitive, engaging, and visually appealing interfaces. You will work closely with developers, project managers, and stakeholders to create designs that are both functional and aesthetically excellent.',
      responsibilities: [
        'Design user interfaces for web and mobile applications',
        'Conduct user research and usability testing',
        'Create wireframes, prototypes, and high-fidelity designs',
        'Collaborate with developers and stakeholders',
        'Maintain design systems and component libraries'
      ],
      requirements: [
        '5+ years of UI/UX design experience',
        'Proficiency in Figma, Sketch, or Adobe XD',
        'Strong portfolio demonstrating design thinking',
        'Experience with responsive and mobile-first design',
        'Excellent communication skills'
      ]
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Join our engineering team to build scalable web applications using modern technologies.',
      responsibilities: [
        'Develop and maintain full-stack web applications',
        'Write clean, maintainable, and efficient code',
        'Collaborate with cross-functional teams',
        'Participate in code reviews and architectural decisions',
        'Optimize applications for performance and scalability'
      ],
      requirements: [
        '4+ years of full-stack development experience',
        'Proficiency in React, Node.js, and databases',
        'Experience with RESTful APIs and microservices',
        'Knowledge of cloud platforms (AWS, Azure, or GCP)',
        'Strong problem-solving skills'
      ]
    },
    {
      id: 3,
      title: 'Project Manager',
      department: 'Operations',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Lead digital projects from conception to delivery, ensuring client satisfaction and team success.',
      responsibilities: [
        'Manage multiple client projects simultaneously',
        'Define project scope, goals, and deliverables',
        'Coordinate internal resources and third parties',
        'Monitor project progress and make adjustments',
        'Ensure projects are delivered on time and within budget'
      ],
      requirements: [
        '3+ years of project management experience',
        'PMP or Agile certification preferred',
        'Experience with project management tools',
        'Excellent organizational and leadership skills',
        'Strong client relationship management'
      ]
    },
    {
      id: 4,
      title: 'Mobile App Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Develop innovative mobile applications for iOS and Android platforms.',
      responsibilities: [
        'Build native or cross-platform mobile applications',
        'Implement responsive and performant UI/UX',
        'Integrate with backend services and APIs',
        'Write unit and integration tests',
        'Stay updated with mobile development trends'
      ],
      requirements: [
        '3+ years of mobile development experience',
        'Proficiency in React Native, Flutter, or native development',
        'Experience with mobile app deployment',
        'Knowledge of mobile design patterns',
        'Strong debugging and optimization skills'
      ]
    },
    {
      id: 5,
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      description: 'Drive digital marketing strategies and campaigns for our agency and clients.',
      responsibilities: [
        'Develop and execute digital marketing campaigns',
        'Manage social media and content marketing',
        'Analyze campaign performance and ROI',
        'Optimize SEO and SEM strategies',
        'Create marketing reports and presentations'
      ],
      requirements: [
        '2+ years of digital marketing experience',
        'Experience with Google Analytics and marketing tools',
        'Strong understanding of SEO/SEM',
        'Excellent copywriting and communication skills',
        'Data-driven mindset'
      ]
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

  const handleViewRole = (job) => {
    navigate('/careers/job-details', { state: { job } });
  };

  return (
    <div style={{ position: 'relative', width: '100%' }}>
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
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '60px' }}>Ready to Be Part of Digital Innovation?</h2>
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
                      <span className="job-location">{job.location}</span>
                      <span className="job-type">{job.type}</span>
                    </div>
                  </div>
                  <button 
                    className="apply-btn"
                    onClick={() => handleViewRole(job)}
                  >
                    View role
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default CareersPage;
