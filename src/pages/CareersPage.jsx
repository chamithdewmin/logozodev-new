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
      icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z',
      title: 'Competitive Salary',
      description: 'Industry-leading compensation packages'
    },
    {
      icon: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z',
      title: 'Health Benefits',
      description: 'Comprehensive health, dental, and vision coverage'
    },
    {
      icon: 'M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z',
      title: 'Flexible PTO',
      description: 'Unlimited paid time off policy'
    },
    {
      icon: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z',
      title: 'Remote Work',
      description: 'Work from anywhere in the world'
    },
    {
      icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
      title: 'Learning Budget',
      description: 'Annual budget for courses and conferences'
    },
    {
      icon: 'M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z',
      title: 'Career Growth',
      description: 'Clear paths for advancement and development'
    }
  ];

  const handleViewRole = (job) => {
    navigate('/careers/job-details', { state: { job } });
  };

  return (
    <div style={{ position: 'relative', width: '100%' }}>

      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Ready to Be Part of Digital Innovation?</h2>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon-wrapper">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                    <path d={benefit.icon} fill="#CAFF33"/>
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
