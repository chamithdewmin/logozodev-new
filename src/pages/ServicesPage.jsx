import React from 'react';
import {
  Code,
  Smartphone,
  Palette,
  ShoppingCart,
  Sparkles,
  Megaphone,
  Search,
  Cloud,
  Network,
  Wrench,
  BookOpen,
  MessageCircle,
} from 'lucide-react';
import './ServicesPage.css';
import CTA from '../components/CTA';

const ServicesPage = () => {
  const services = [
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Web Development',
      description: 'We build responsive, high-performance websites using modern technologies. Our web development services ensure fast loading times, SEO optimization, and exceptional user experiences across all devices.'
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: 'Mobile App Development',
      description: 'We create native and cross-platform mobile applications for iOS and Android. Our mobile apps are user-friendly, feature-rich, and designed to engage your audience effectively.'
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: 'UI/UX Design',
      description: 'Our design team creates stunning, user-centric interfaces that captivate and engage. We focus on creating seamless and intuitive user experiences that elevate your brand.'
    },
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: 'E-commerce Solutions',
      description: 'We develop powerful e-commerce platforms that drive sales and enhance customer experience. Our solutions include secure payment integration, inventory management, and analytics.'
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: 'Branding & Identity',
      description: 'We help establish your brand identity with comprehensive branding services including logo design, brand guidelines, and visual identity systems that resonate with your target audience.'
    },
    {
      icon: <Megaphone className="h-6 w-6" />,
      title: 'Digital Marketing',
      description: 'We develop comprehensive digital marketing strategies to increase your online presence, engage your audience, and drive conversions through SEO, social media, and content marketing.'
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: 'SEO Optimization',
      description: 'We optimize your website to rank higher in search engine results. Our SEO services include keyword research, on-page optimization, technical SEO, and content strategy.'
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: 'Cloud Solutions',
      description: 'We provide cloud infrastructure and migration services to help your business scale efficiently. Our solutions ensure high availability, security, and cost optimization.'
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: 'API Development',
      description: 'We build robust RESTful APIs and GraphQL endpoints that enable seamless integration between your applications and third-party services, ensuring scalability and security.'
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Custom Software Development',
      description: 'We develop tailored software solutions that address your unique business challenges. Our custom applications are scalable, secure, and designed to streamline your operations.'
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: 'Maintenance & Support',
      description: 'We provide ongoing maintenance and support services to keep your digital products running smoothly. Our services include updates, bug fixes, security patches, and performance optimization.'
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: 'Consulting Services',
      description: 'We offer expert consulting services to help you make informed technology decisions. Our consultants provide strategic guidance on digital transformation, architecture, and best practices.'
    }
  ];

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <section className="services-page">
        <div className="services-container">
          <div className="services-header">
            <div className="services-header-content">
              <h3 className="services-title">
                Let's help build your MVP
              </h3>
              <p className="services-subtitle">
                Prioritize your business needs and choose wisely. We offer comprehensive digital solutions tailored to your unique requirements.
              </p>
            </div>
            <div
              className="services-header-glow"
              style={{
                background:
                  'linear-gradient(152.92deg, rgba(202, 255, 51, 0.2) 4.54%, rgba(202, 255, 51, 0.26) 34.2%, rgba(202, 255, 51, 0.1) 77.55%)',
              }}
            ></div>
          </div>

          <hr className="services-divider" />

          <div className="services-grid">
            {services.map((item, idx) => (
              <li
                key={idx}
                className="service-card"
              >
                <div className="service-icon-container">
                  {item.icon}
                </div>
                <h4 className="service-card-title">
                  {item.title}
                </h4>
                <p className="service-card-description">{item.description}</p>
              </li>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default ServicesPage;
