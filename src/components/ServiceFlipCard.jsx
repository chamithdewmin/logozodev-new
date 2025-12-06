import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Code2, Copy, Rocket, Zap } from 'lucide-react';
import { cn } from '../lib/utils';
import './ServiceFlipCard.css';

const ServiceFlipCard = ({ service }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // On mobile, always show flipped state so features are visible
      if (mobile) {
        setIsFlipped(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Generate features from service description
  const getFeatures = () => {
    const featureMap = {
      'Web Development': [
        'Responsive Design',
        'SEO Optimized',
        'Fast Performance',
        'Modern Technologies'
      ],
      'Mobile App Development': [
        'iOS & Android',
        'Cross-Platform',
        'User-Friendly',
        'Feature-Rich'
      ],
      'UI/UX Design': [
        'User-Centric',
        'Intuitive Design',
        'Brand Elevation',
        'Seamless Experience'
      ],
      'E-commerce Solutions': [
        'Secure Payments',
        'Inventory Management',
        'Sales Analytics',
        'Customer Experience'
      ],
      'Branding & Identity': [
        'Logo Design',
        'Brand Guidelines',
        'Visual Identity',
        'Target Audience'
      ],
      'Digital Marketing': [
        'SEO Strategy',
        'Social Media',
        'Content Marketing',
        'Conversion Focused'
      ],
      'SEO Optimization': [
        'Keyword Research',
        'On-Page SEO',
        'Technical SEO',
        'Content Strategy'
      ],
      'Cloud Solutions': [
        'High Availability',
        'Secure Infrastructure',
        'Cost Optimization',
        'Scalable Solutions'
      ],
      'API Development': [
        'RESTful APIs',
        'GraphQL Endpoints',
        'Secure Integration',
        'Scalable Architecture'
      ],
      'Custom Software Development': [
        'Tailored Solutions',
        'Scalable Design',
        'Secure Applications',
        'Streamlined Operations'
      ],
      'Maintenance & Support': [
        'Regular Updates',
        'Bug Fixes',
        'Security Patches',
        'Performance Optimization'
      ],
      'Consulting Services': [
        'Strategic Guidance',
        'Digital Transformation',
        'Architecture Planning',
        'Best Practices'
      ]
    };
    return featureMap[service.title] || ['Professional Service', 'Expert Team', 'Quality Results', 'Client Focused'];
  };

  const features = getFeatures();
  const icons = [Copy, Code2, Rocket, Zap];

  const handleStartBuilding = () => {
    const subject = `Inquiry about ${service.title} Services`;
    const message = `Hello,\n\nI'm interested in learning more about your ${service.title} services.\n\n${service.description}\n\nPlease contact me to discuss how we can work together.\n\nThank you!`;
    
    // Navigate to contact page with pre-filled data
    navigate('/contact', { 
      state: { 
        prefillSubject: subject,
        prefillMessage: message 
      } 
    });
  };

  return (
    <div
      className="service-flip-card"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={cn(
          'service-flip-card-inner',
          isFlipped ? 'flipped' : ''
        )}
      >
        {/* Front of card */}
        <div className="service-flip-card-front">
          <div className="service-flip-card-gradient" />

          {/* Top left icon */}
          <div className="service-flip-card-icon-top-left">
            <div className="service-flip-card-icon-box">
              <div className="service-flip-card-icon-content">
                {service.icon}
              </div>
            </div>
          </div>

          {/* Bottom content */}
          <div className="service-flip-card-front-content">
            <div className="service-flip-card-front-text">
              <h3 className="service-flip-card-title">
                {service.title}
              </h3>
              <p className="service-flip-card-subtitle">
                Professional {service.title.toLowerCase()} solutions
              </p>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="service-flip-card-back">
          <div className="service-flip-card-gradient" />

          <div className="service-flip-card-back-content">
            <div className="service-flip-card-back-header">
              <div className="service-flip-card-back-icon-box">
                <Code2 className="service-flip-card-back-icon" />
              </div>
              <h3 className="service-flip-card-back-title">
                {service.title}
              </h3>
            </div>
            <p className="service-flip-card-back-description">
              {service.description}
            </p>

            <div className="service-flip-card-features">
              {features.map((feature, index) => {
                const IconComponent = icons[index % icons.length];
                return (
                  <div
                    key={feature}
                    className="service-flip-card-feature"
                    style={{
                      transform: (isFlipped || isMobile) ? 'translateX(0)' : 'translateX(-10px)',
                      opacity: (isFlipped || isMobile) ? 1 : 0,
                      transitionDelay: isMobile ? '0ms' : `${index * 100 + 200}ms`,
                    }}
                  >
                    <div className="service-flip-card-feature-icon">
                      <IconComponent className="service-flip-card-feature-icon-svg" />
                    </div>
                    <span className="service-flip-card-feature-text">{feature}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="service-flip-card-footer">
            <button
              onClick={handleStartBuilding}
              className="service-flip-card-button"
            >
              <span className="service-flip-card-button-text">
                Start Building
              </span>
              <ArrowRight className="service-flip-card-button-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceFlipCard;

