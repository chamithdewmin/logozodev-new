import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      category: 'web',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      title: 'E-Commerce Platform',
      type: 'Web Design'
    },
    {
      id: 2,
      category: 'app',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
      title: 'Fitness Mobile App',
      type: 'App Development'
    },
    {
      id: 3,
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800',
      title: 'Corporate Branding',
      type: 'Branding'
    },
    {
      id: 4,
      category: 'web',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800',
      title: 'Business Website',
      type: 'Web Design'
    },
    {
      id: 5,
      category: 'app',
      image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800',
      title: 'Food Delivery App',
      type: 'App Development'
    },
    {
      id: 6,
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800',
      title: 'Startup Identity',
      type: 'Branding'
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">PORTFOLIO</span>
          <h2 className="section-title">
            Our Latest <span className="highlight">Projects</span>
          </h2>
          <p className="section-description">
            Explore our recent work and success stories
          </p>
        </div>
        <div className="portfolio-filters">
          {['all', 'web', 'app', 'branding'].map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter === 'all' ? 'All' : filter === 'web' ? 'Web Design' : filter === 'app' ? 'App' : 'Branding'}
            </button>
          ))}
        </div>
        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="portfolio-item">
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <div className="portfolio-info">
                    <h3>{project.title}</h3>
                    <p>{project.type}</p>
                    <a href="#" className="portfolio-link">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
