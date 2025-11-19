import React from 'react';
import './PageHero.css';
import CTA from '../components/CTA';

const ServicesPage = () => {
  const services = [
    {
      icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      title: 'Design',
      description: 'Our design team creates stunning, user-centric interfaces that captivate and engage. From wireframes to high-fidelity mockups, we bring your vision to life with pixel-perfect precision.',
      features: ['UI/UX Design', 'Branding & Identity', 'Responsive Design', 'Prototyping']
    },
    {
      icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
      title: 'Engineering',
      description: 'We build scalable, high-performance applications using cutting-edge technologies. Our engineering expertise ensures your product is robust, secure, and ready to scale.',
      features: ['Web Development', 'Mobile Apps', 'API Integration', 'Cloud Solutions']
    },
    {
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
      title: 'Project Management',
      description: 'Our project managers ensure seamless execution from concept to launch. We keep your project on track, on budget, and aligned with your business goals.',
      features: ['Agile Methodology', 'Timeline Planning', 'Resource Management', 'Quality Assurance']
    }
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">Our Services</h1>
          <p className="page-hero-description">
            Transform your business with our comprehensive suite of digital services designed to deliver exceptional results.
          </p>
        </div>
      </section>

      <section className="services-detail">
        <div className="container">
          {services.map((service, index) => (
            <div key={index} className="service-detail-card">
              <div className="service-detail-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d={service.icon} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="service-detail-content">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
};

export default ServicesPage;
