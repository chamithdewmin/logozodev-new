import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: 'M12 3L3 9v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V9l-9-6zm0 2.2l7 4.7v4.8c0 4.4-3.1 8.5-7 9.7-3.9-1.2-7-5.3-7-9.7v-4.8l7-4.7z',
      title: 'Design',
      description: 'At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it\'s about creating seamless and intuitive user experiences.'
    },
    {
      icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-7-2h2V7h-4v2h2z',
      title: 'Engineering',
      description: 'Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.'
    },
    {
      icon: 'M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z',
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
          <h2 className="section-title">Our Services</h2>
          <p className="section-description">
            Transform your brand with our innovative digital solutions that captivate and engage your audience.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path d={service.icon} fill="#CAFF33"/>
                </svg>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="learn-more-btn">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
