import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Palette, Code, Clipboard } from 'lucide-react';
import TwitterCard from './TwitterCard';
import './Services.css';

const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      number: '01',
      title: 'Design',
      description: 'Our design team crafts user-centric, visually striking designs that elevate your brand and leave a lasting impression. We focus on clarity, usability, and seamless experiences that connect with your audience. Every pixel is purposeful — delivering beauty, function, and impact.',
      icon: Palette
    },
    {
      number: '02',
      title: 'Engineering',
      description: 'We combine deep technical expertise with modern engineering practices to create fast, secure, and scalable digital solutions. From custom applications to high-performance systems, we develop technology that grows with your business and delivers real-world results.',
      icon: Code
    },
    {
      number: '03',
      title: 'Project Management',
      description: 'Our project management team ensures every project is delivered on time, clearly communicated, and aligned with your goals. With proven methodologies and transparent workflows, we keep everything organized, efficient, and stress-free — so you can focus on what matters.',
      icon: Clipboard
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-background">
        <div className="wireframe-grid"></div>
      </div>
      <div className="container">
        <div className="section-header">
          <div className="header-content">
            <h2 className="section-title-home">
              Your <span className="highlight-green">trusted</span> digital agency partner
            </h2>
            <p className="section-description-right">
              Empowering businesses through innovative digital solutions and cutting-edge technology. We transform your brand with comprehensive services that captivate and engage your audience.
            </p>
          </div>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`twitter-card-container ${index === 1 ? 'highlighted' : ''}`}
            >
              <TwitterCard
                serviceData={service}
                authorName={service.title}
                authorHandle={service.title.toLowerCase().replace(/\s+/g, '')}
                isVerified={true}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
