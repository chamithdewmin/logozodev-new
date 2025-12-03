import React from 'react';
import './PageHero.css';
import './WorkPage.css';
import CTA from '../components/CTA';
import LightRays from '../components/LightRays';

const WorkPage = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      client: 'Chic Boutique',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      description: 'A modern e-commerce platform with seamless shopping experience and integrated payment solutions.'
    },
    {
      title: 'Food Delivery App',
      client: 'HungryBites',
      category: 'Mobile App',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
      description: 'Mobile application streamlining food ordering with real-time tracking and smart recommendations.'
    },
    {
      title: 'Event Management System',
      client: 'EventMasters',
      category: 'Web Application',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
      description: 'Comprehensive booking and reservation system for seamless event management.'
    },
    {
      title: 'Workflow Automation',
      client: 'ProTech Solutions',
      category: 'Custom Software',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      description: 'Custom software solution automating business workflows and reducing manual errors.'
    },
    {
      title: 'Healthcare Portal',
      client: 'MediCare Plus',
      category: 'Web Platform',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      description: 'Patient management portal with appointment scheduling and medical records integration.'
    },
    {
      title: 'Financial Dashboard',
      client: 'FinanceHub',
      category: 'Analytics Platform',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      description: 'Real-time financial analytics dashboard with AI-powered insights and reporting.'
    }
  ];

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
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">Our Work</h1>
          <p className="page-hero-description">
            Explore our portfolio of successful projects that have transformed businesses and delighted users.
          </p>
        </div>
      </section>

      <section className="portfolio-grid-section">
        <div className="container">
          <div className="portfolio-grid">
            {projects.map((project, index) => (
              <div key={index} className="portfolio-item">
                <div className="portfolio-image">
                  <img src={project.image} alt={project.title} />
                  <div className="portfolio-overlay">
                    <span className="portfolio-category">{project.category}</span>
                  </div>
                </div>
                <div className="portfolio-content">
                  <h3>{project.title}</h3>
                  <p className="portfolio-client">{project.client}</p>
                  <p className="portfolio-description">{project.description}</p>
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

export default WorkPage;
