import React from 'react';
import './ServicesPage.css';
import CTA from '../components/CTA';
import LightRays from '../components/LightRays';

const ServicesPage = () => {
  const services = [
    {
      icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      title: 'Web Development',
      description: 'We build responsive, high-performance websites using modern technologies. Our web development services ensure fast loading times, SEO optimization, and exceptional user experiences across all devices.'
    },
    {
      icon: 'M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z',
      title: 'Mobile App Development',
      description: 'We create native and cross-platform mobile applications for iOS and Android. Our mobile apps are user-friendly, feature-rich, and designed to engage your audience effectively.'
    },
    {
      icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
      title: 'UI/UX Design',
      description: 'Our design team creates stunning, user-centric interfaces that captivate and engage. We focus on creating seamless and intuitive user experiences that elevate your brand.'
    },
    {
      icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
      title: 'E-commerce Solutions',
      description: 'We develop powerful e-commerce platforms that drive sales and enhance customer experience. Our solutions include secure payment integration, inventory management, and analytics.'
    },
    {
      icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
      title: 'Branding & Identity',
      description: 'We help establish your brand identity with comprehensive branding services including logo design, brand guidelines, and visual identity systems that resonate with your target audience.'
    },
    {
      icon: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055zM16.6 13c-.8 2.2-2.5 3.9-4.6 4.6V13h4.6zM13 13V7.4c2.2.8 3.9 2.5 4.6 4.6H13zM7.4 13c.8-2.2 2.5-3.9 4.6-4.6V13H7.4zM11 16.6V13H6.4c.8 2.2 2.5 3.9 4.6 4.6z',
      title: 'Digital Marketing',
      description: 'We develop comprehensive digital marketing strategies to increase your online presence, engage your audience, and drive conversions through SEO, social media, and content marketing.'
    },
    {
      icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
      title: 'SEO Optimization',
      description: 'We optimize your website to rank higher in search engine results. Our SEO services include keyword research, on-page optimization, technical SEO, and content strategy.'
    },
    {
      icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
      title: 'Cloud Solutions',
      description: 'We provide cloud infrastructure and migration services to help your business scale efficiently. Our solutions ensure high availability, security, and cost optimization.'
    },
    {
      icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
      title: 'API Development',
      description: 'We build robust RESTful APIs and GraphQL endpoints that enable seamless integration between your applications and third-party services, ensuring scalability and security.'
    },
    {
      icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
      title: 'Custom Software Development',
      description: 'We develop tailored software solutions that address your unique business challenges. Our custom applications are scalable, secure, and designed to streamline your operations.'
    },
    {
      icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
      title: 'Maintenance & Support',
      description: 'We provide ongoing maintenance and support services to keep your digital products running smoothly. Our services include updates, bug fixes, security patches, and performance optimization.'
    },
    {
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
      title: 'Consulting Services',
      description: 'We offer expert consulting services to help you make informed technology decisions. Our consultants provide strategic guidance on digital transformation, architecture, and best practices.'
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
      <section className="services-page">
        <div className="container" style={{ position: 'relative', zIndex: 3 }}>
          <div className="services-page-header">
            <h1 className="services-page-title">
              Prioritize your business needs<br />
              and choose wisely
            </h1>
          </div>

          <div className="services-grid-new">
            {services.map((service, index) => (
              <div key={index} className="service-card-new">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-description">{service.description}</p>
                <div className="service-card-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d={service.icon} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
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

export default ServicesPage;
