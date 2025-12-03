import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlareHover from './GlareHover';
import './Services.css';

const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      number: '01',
      title: 'Design',
      description: 'At LogozoDev, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it\'s about creating seamless and intuitive user experiences.'
    },
    {
      number: '02',
      title: 'Engineering',
      description: 'Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.'
    },
    {
      number: '03',
      title: 'Project Management',
      description: 'Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.'
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
            <GlareHover
              key={index}
              width="100%"
              height="100%"
              background={index === 1 ? '#CAFF33' : 'rgba(20, 20, 20, 0.8)'}
              borderRadius="16px"
              borderColor={index === 1 ? '#CAFF33' : 'rgba(255, 255, 255, 0.08)'}
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={800}
              playOnce={false}
              className={`service-card-wrapper ${index === 1 ? 'highlighted' : ''}`}
            >
              <div className={`service-card ${index === 1 ? 'highlighted' : ''}`}>
                <div className="service-number">{service.number}.</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                {index === 1 && (
                  <button className="learn-more-btn-green" onClick={() => navigate('/services')}>
                    Learn More
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                )}
              </div>
            </GlareHover>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
