import React from 'react';
import './About.css';
import './Card.css';

const About = () => {
  const features = [
    {
      icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
      title: 'Fast Development with top-notch quality',
      description: 'We understand the value of your time and budget, which is why we strive to deliver fast and reliable development services. Our team ensures top-notch quality while meeting your deadlines.'
    },
    {
      icon: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z',
      title: 'Trustable and one tap solution',
      description: 'We ensure reliability and faster connectivity to serve your purposes. Our services are quickly updated with cutting-edge technology and thoroughly tested for optimal performance.'
    },
    {
      icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z',
      title: 'Secure Data, ensure privacy',
      description: 'We understand the value of your sensitive information, which is why we prioritize data security and privacy. We implement robust security measures to protect your digital assets.'
    },
    {
      icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
      title: '24/7 Dedicated Support',
      description: 'We understand the value of your business operations, which is why we provide round-the-clock support. Our dedicated team is always available to assist you with any issues or questions.'
    },
    {
      icon: 'M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z',
      title: 'One solution, all platforms',
      description: 'We ensure reliability and faster connectivity across all platforms. Our cross-platform solutions are quickly updated with cutting-edge technology and thoroughly tested for seamless integration.'
    },
    {
      icon: 'M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z',
      title: 'Keep secure on public networks',
      description: 'We understand the value of your online security, which is why we implement robust protection measures. Our solutions ensure your data remains secure even on public networks.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="about-background">
        <div className="wireframe-overlay"></div>
      </div>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose LogozoDev?</h2>
          <p className="section-description">
            Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="card-container feature-card-wrapper">
              <div className="card-wrapper">
                <div className="card-background">
                  <div className="card-gradient-overlay" />
                  <div className="card-blur-circle-1" />
                  <div className="card-ping-circle-1" />
                  <div className="card-ping-circle-2" />
                  <div className="card-shimmer" />
                </div>
                <div className="card-content feature-card">
                  <div className="card-icon-wrapper">
                    <div className="card-icon-ping" />
                    <div className="card-icon-pulse" />
                    <div className="card-icon-inner">
                      <div className="card-icon-svg-wrapper">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="card-icon-svg">
                          <path d={feature.icon} fill="#CAFF33"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="card-title">
                    <h3 className="card-title-text">{feature.title}</h3>
                  </div>
                  <div className="card-description">
                    <p>{feature.description}</p>
                  </div>
                  <div className="card-divider" />
                  <div className="card-dots">
                    <div className="card-dot" />
                    <div className="card-dot" />
                    <div className="card-dot" />
                  </div>
                </div>
                <div className="card-corner-1" />
                <div className="card-corner-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
