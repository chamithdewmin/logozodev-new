import React, { useState } from 'react';
import './WorkPage.css';
import ProjectModal from '../components/ProjectModal';
import GlareHover from '../components/GlareHover';

const WorkPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      number: '01',
      title: 'DevX - Hackathon',
      description: 'Spring Boot Hackathon',
      technologies: ['Spring Boot', 'Java'],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800',
      fullDescription: 'A comprehensive hackathon management platform built with Spring Boot. This application provides seamless project submission, judging, and real-time leaderboard updates. Features include user authentication, project categorization, and automated scoring system.',
      youtubeLink: 'https://www.youtube.com/watch?v=sample1',
      websiteLink: 'https://devx-hackathon-sample.com',
      githubLink: 'https://github.com/sample/devx-hackathon',
      projectImages: [
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200'
      ],
      features: [
        'Real-time leaderboard updates',
        'Automated scoring system',
        'User authentication & authorization',
        'Project categorization',
        'Admin dashboard',
        'Email notifications'
      ]
    },
    {
      id: 2,
      number: '02',
      title: 'Adopt a Wallet',
      description: 'Financial Management App',
      technologies: ['Flutter', 'Firebase'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
      fullDescription: 'A modern financial management mobile application built with Flutter and Firebase. Adopt a Wallet helps users track expenses, manage budgets, and achieve financial goals. The app features intuitive UI, real-time data synchronization, and comprehensive financial analytics.',
      youtubeLink: 'https://www.youtube.com/watch?v=sample2',
      websiteLink: 'https://adoptawallet-sample.com',
      githubLink: 'https://github.com/sample/adopt-a-wallet',
      projectImages: [
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200',
        'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=1200'
      ],
      features: [
        'Expense tracking & categorization',
        'Budget management',
        'Financial goal setting',
        'Real-time data sync',
        'Multi-currency support',
        'Transaction history & reports'
      ]
    },
    {
      id: 3,
      number: '03',
      title: 'Urban Food Delivery',
      description: 'MERN Stack Web Application',
      technologies: ['React', 'Node.js'],
      image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800',
      fullDescription: 'A full-stack food delivery platform built with the MERN stack. Urban Food Delivery connects customers with local restaurants, offering real-time order tracking, secure payment processing, and a seamless user experience. Features include restaurant management, order history, and customer reviews.',
      youtubeLink: 'https://www.youtube.com/watch?v=sample3',
      websiteLink: 'https://urbanfood-sample.com',
      githubLink: 'https://github.com/sample/urban-food-delivery',
      projectImages: [
        'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=1200',
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200'
      ],
      features: [
        'Real-time order tracking',
        'Restaurant management system',
        'Secure payment processing',
        'Customer reviews & ratings',
        'Order history',
        'Delivery status updates'
      ]
    },
    {
      id: 4,
      number: '04',
      title: 'Ecommerce Web Application',
      description: 'Spring Boot Microservices',
      technologies: ['Spring Boot', 'Java'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      fullDescription: 'A scalable e-commerce platform built with Spring Boot microservices architecture. This application handles high traffic volumes with distributed services for product management, order processing, payment gateway integration, and inventory management. Features include shopping cart, wishlist, and admin dashboard.',
      youtubeLink: 'https://www.youtube.com/watch?v=sample4',
      websiteLink: 'https://ecommerce-sample.com',
      githubLink: 'https://github.com/sample/ecommerce-app',
      projectImages: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200',
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200'
      ],
      features: [
        'Microservices architecture',
        'Product catalog management',
        'Shopping cart & checkout',
        'Payment gateway integration',
        'Order management system',
        'Admin dashboard & analytics'
      ]
    },
    {
      id: 5,
      number: '05',
      title: 'PayLink',
      description: 'Online Banking System',
      technologies: ['Java'],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800',
      fullDescription: 'A secure online banking system built with Java. PayLink provides comprehensive banking services including account management, fund transfers, bill payments, and transaction history. The system features robust security measures, multi-factor authentication, and real-time transaction processing.',
      youtubeLink: 'https://www.youtube.com/watch?v=sample5',
      websiteLink: 'https://paylink-sample.com',
      githubLink: 'https://github.com/sample/paylink',
      projectImages: [
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200',
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200'
      ],
      features: [
        'Account management',
        'Fund transfers',
        'Bill payment system',
        'Transaction history',
        'Multi-factor authentication',
        'Real-time notifications'
      ]
    },
    {
      id: 6,
      number: '06',
      title: 'POS System',
      description: 'C#.NET Application',
      technologies: ['C#', '.NET'],
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800',
      fullDescription: 'A comprehensive Point of Sale (POS) system developed with C# and .NET framework. This application streamlines retail operations with features including inventory management, sales processing, receipt generation, and sales reporting. The system supports multiple payment methods and provides detailed analytics.',
      youtubeLink: 'https://www.youtube.com/watch?v=sample6',
      websiteLink: 'https://pos-system-sample.com',
      githubLink: 'https://github.com/sample/pos-system',
      projectImages: [
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200',
        'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=1200'
      ],
      features: [
        'Sales processing',
        'Inventory management',
        'Receipt generation',
        'Multiple payment methods',
        'Sales reporting & analytics',
        'Employee management'
      ]
    }
  ];

  const handleLearnMore = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const getTechIcon = (tech) => {
    const icons = {
      'Spring Boot': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      'Flutter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
      'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
      '.NET': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg'
    };
    return icons[tech] || null;
  };

  return (
    <div className="work-page">
      <div className="work-hero">
        <div className="container">
          <h1 className="work-title">Our completed projects that earned client satisfaction and trust.</h1>
        </div>
      </div>

      <div className="work-projects">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project) => (
              <GlareHover
                key={project.id}
                width="100%"
                height="100%"
                background="#000000"
                borderRadius="0px"
                borderColor="rgba(255, 255, 255, 0.1)"
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                className="project-card-wrapper"
              >
                <div className="project-card">
                  <div className="project-number">{project.number}</div>
                  <div className="project-image-container">
                    <img src={project.image} alt={project.title} className="project-image" />
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-technologies">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-badge" title={tech}>
                          {getTechIcon(tech) && (
                            <img src={getTechIcon(tech)} alt={tech} className="tech-icon" />
                          )}
                        </span>
                      ))}
                    </div>
                    <button 
                      className="learn-more-btn"
                      onClick={() => handleLearnMore(project)}
                    >
                      Learn More
                      <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>
              </GlareHover>
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default WorkPage;
