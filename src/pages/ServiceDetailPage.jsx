import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './PageHero.css';
import './ServiceDetailPage.css';

const ServiceDetailPage = () => {
  const { slug } = useParams();

  // Service details database
  const serviceDetails = {
    'website-app-development': {
      title: 'Website & App Development',
      icon: 'M21 12V7H5v5M3 5h18a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2z',
      description: 'Comprehensive development solutions for websites and applications, built with modern technologies and best practices.',
      overview: 'Our Website & App Development service provides end-to-end solutions for creating powerful, scalable, and user-friendly digital platforms. We combine cutting-edge technology with industry best practices to deliver applications that drive business growth.',
      features: [
        'Custom web and mobile application development',
        'Responsive design for all devices',
        'Modern frameworks and technologies (React, Vue, Angular, Node.js)',
        'Cross-platform mobile app development',
        'RESTful API development and integration',
        'Database design and optimization',
        'Third-party service integrations',
        'Performance optimization and testing'
      ],
      benefits: [
        'Scalable architecture that grows with your business',
        'Fast loading times and optimal performance',
        'Secure and compliant with industry standards',
        'SEO-friendly code structure',
        'Ongoing support and maintenance',
        'User-friendly interfaces that enhance engagement'
      ],
      process: [
        {
          step: 'Discovery & Planning',
          description: 'We analyze your requirements, target audience, and business goals to create a comprehensive development plan.'
        },
        {
          step: 'Design & Prototyping',
          description: 'Our team creates wireframes and prototypes to visualize the final product before development begins.'
        },
        {
          step: 'Development',
          description: 'We build your application using agile methodologies, ensuring regular updates and quality assurance.'
        },
        {
          step: 'Testing & Quality Assurance',
          description: 'Rigorous testing across devices and browsers to ensure flawless functionality and performance.'
        },
        {
          step: 'Deployment & Launch',
          description: 'We handle the deployment process and ensure a smooth launch with minimal downtime.'
        },
        {
          step: 'Support & Maintenance',
          description: 'Ongoing support, updates, and maintenance to keep your application running smoothly.'
        }
      ]
    },
    'website-design-development': {
      title: 'Website Design & Development',
      icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
      description: 'Custom website design and development services that combine stunning visuals with powerful functionality.',
      overview: 'We create beautiful, functional websites that not only look great but also drive conversions and engage your audience. Our design-first approach ensures your website stands out while delivering exceptional user experiences.',
      features: [
        'Custom website design tailored to your brand',
        'Responsive and mobile-first design',
        'Content Management System (CMS) integration',
        'E-commerce functionality',
        'Search Engine Optimization (SEO)',
        'Fast loading times and performance optimization',
        'Secure hosting and SSL certificates',
        'Analytics and tracking integration'
      ],
      benefits: [
        'Professional online presence that builds trust',
        'Improved user engagement and conversion rates',
        'Mobile-friendly design for all devices',
        'SEO-optimized for better search rankings',
        'Easy content management and updates',
        'Scalable solutions that grow with your business'
      ],
      process: [
        {
          step: 'Research & Strategy',
          description: 'We research your industry, competitors, and target audience to create an effective design strategy.'
        },
        {
          step: 'Design & Wireframing',
          description: 'Our designers create wireframes and visual designs that align with your brand identity.'
        },
        {
          step: 'Development',
          description: 'We transform designs into fully functional websites using modern web technologies.'
        },
        {
          step: 'Content Integration',
          description: 'We integrate your content and ensure everything displays perfectly across all devices.'
        },
        {
          step: 'Testing & Optimization',
          description: 'Comprehensive testing and optimization for performance, SEO, and user experience.'
        },
        {
          step: 'Launch & Training',
          description: 'We launch your website and provide training on how to manage and update content.'
        }
      ]
    },
    'e-commerce-website-development': {
      title: 'E-commerce Website Development',
      icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
      description: 'Full-featured online stores with secure payment processing, inventory management, and seamless shopping experiences.',
      overview: 'Build a powerful e-commerce platform that drives sales and provides an exceptional shopping experience. We create secure, scalable online stores with advanced features to help you succeed in the digital marketplace.',
      features: [
        'Secure payment gateway integration',
        'Shopping cart and checkout optimization',
        'Inventory management system',
        'Product catalog with advanced filtering',
        'Customer account management',
        'Order tracking and management',
        'Multi-currency and multi-language support',
        'Marketing tools and discount codes'
      ],
      benefits: [
        'Increase online sales and revenue',
        '24/7 availability for customers',
        'Automated order processing',
        'Secure payment processing',
        'Detailed analytics and reporting',
        'Scalable platform for business growth'
      ],
      process: [
        {
          step: 'Requirements Analysis',
          description: 'We analyze your product catalog, payment needs, and business requirements.'
        },
        {
          step: 'Platform Selection',
          description: 'We recommend and set up the best e-commerce platform for your needs.'
        },
        {
          step: 'Design & Development',
          description: 'Custom design and development of your online store with all required features.'
        },
        {
          step: 'Payment Integration',
          description: 'Secure integration of payment gateways and shopping cart functionality.'
        },
        {
          step: 'Product Setup',
          description: 'We help you set up products, categories, and inventory management.'
        },
        {
          step: 'Testing & Launch',
          description: 'Thorough testing of all features before launching your online store.'
        }
      ]
    }
  };

  // Helper function to get icon path
  const getIconPath = (serviceKey) => {
    const icons = {
      'website-app-development': 'M21 12V7H5v5M3 5h18a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2z',
      'website-design-development': 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
      'e-commerce-website-development': 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
      'landing-page-development': 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      'api-integration': 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
      'website-maintenance-support': 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
      'website-performance-optimization': 'M13 10V3L4 14h7v7l9-11h-7z',
      'digital-marketing': 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z',
      'search-engine-optimization-seo': 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
      'local-seo': 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z',
      'social-media-marketing-smm': 'M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z',
      'social-media-management': 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
      'email-marketing': 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      'video-marketing': 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
      'logo-brand-identity-design': 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
      'graphic-design-banners-social-posts-flyers': 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
      'ui-ux-design': 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      'video-production-editing': 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
      'print-design-packaging': 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
      'web-hosting-domain-management': 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
      'ai-content-creation-text-image-video': 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      'chatbots-conversational-ai': 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
      'membership-subscription-platform-setup': 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
      'customer-loyalty-program-setup': 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
    };
    return icons[serviceKey] || icons['website-app-development'];
  };

  // Helper function to generate default service details
  const generateServiceDetails = (slug) => {
    const titleMap = {
      'website-app-development': 'Website & App Development',
      'website-design-development': 'Website Design & Development',
      'e-commerce-website-development': 'E-commerce Website Development',
      'landing-page-development': 'Landing Page Development',
      'api-integration': 'API Integration',
      'website-maintenance-support': 'Website Maintenance & Support',
      'website-performance-optimization': 'Website Performance Optimization',
      'digital-marketing': 'Digital Marketing',
      'search-engine-optimization-seo': 'Search Engine Optimization (SEO)',
      'local-seo': 'Local SEO',
      'social-media-marketing-smm': 'Social Media Marketing (SMM)',
      'social-media-management': 'Social Media Management',
      'email-marketing': 'Email Marketing',
      'video-marketing': 'Video Marketing',
      'logo-brand-identity-design': 'Logo & Brand Identity Design',
      'graphic-design-banners-social-posts-flyers': 'Graphic Design (Banners, Social Posts, Flyers)',
      'ui-ux-design': 'UI/UX Design',
      'video-production-editing': 'Video Production & Editing',
      'print-design-packaging': 'Print Design & Packaging',
      'web-hosting-domain-management': 'Web Hosting & Domain Management',
      'ai-content-creation-text-image-video': 'AI Content Creation (Text, Image, Video)',
      'chatbots-conversational-ai': 'Chatbots & Conversational AI',
      'membership-subscription-platform-setup': 'Membership/Subscription Platform Setup',
      'customer-loyalty-program-setup': 'Customer Loyalty Program Setup'
    };

    const title = titleMap[slug] || slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    const icon = getIconPath(slug);

    return {
      title,
      icon,
      description: `Professional ${title.toLowerCase()} services tailored to your business needs.`,
      overview: `Our ${title} service provides comprehensive solutions designed to help your business achieve its goals. We combine industry expertise with cutting-edge technology to deliver exceptional results that drive growth and success.`,
      features: [
        `Expert ${title.toLowerCase()} solutions`,
        'Customized approach to meet your specific needs',
        'Industry best practices and methodologies',
        'Comprehensive support and guidance',
        'Proven track record of success',
        'Ongoing optimization and improvement',
        'Dedicated team of specialists',
        'Scalable solutions for business growth'
      ],
      benefits: [
        'Achieve your business objectives faster',
        'Access to expert knowledge and experience',
        'Improved efficiency and productivity',
        'Better results and ROI',
        'Competitive advantage in your market',
        'Long-term partnership and support'
      ],
      process: [
        {
          step: 'Consultation & Analysis',
          description: 'We begin with a thorough consultation to understand your business needs, goals, and challenges.'
        },
        {
          step: 'Strategy Development',
          description: 'Our team develops a customized strategy tailored to your specific requirements and objectives.'
        },
        {
          step: 'Implementation',
          description: 'We execute the strategy with precision, ensuring all aspects are handled professionally.'
        },
        {
          step: 'Monitoring & Optimization',
          description: 'Continuous monitoring and optimization to ensure optimal performance and results.'
        },
        {
          step: 'Reporting & Analysis',
          description: 'Regular reporting and analysis to track progress and measure success.'
        },
        {
          step: 'Ongoing Support',
          description: 'Dedicated support and maintenance to ensure continued success and growth.'
        }
      ]
    };
  };

  // Get service details or generate default
  const service = serviceDetails[slug] || generateServiceDetails(slug);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Link to="/services" className="back-link">
            ← Back to Services
          </Link>
          <div className="service-hero-content">
            <div className="service-hero-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#CAFF33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d={service.icon} />
              </svg>
            </div>
            <h1 className="page-hero-title">{service.title}</h1>
            <p className="page-hero-description">{service.description}</p>
          </div>
        </div>
      </section>

      <section className="service-detail-content">
        <div className="container">
          <div className="service-overview">
            <h2>Overview</h2>
            <p>{service.overview}</p>
          </div>
        </div>

        <div className="container">
          <div className="service-features">
            <div className="features-header">
              <h2>Key Features</h2>
            </div>
            <div className="features-list">
              {service.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="service-benefits">
            <h2>Benefits</h2>
            <div className="benefits-grid">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <div className="benefit-icon">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#CAFF33" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                  </div>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="service-cta-section">
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss how we can help transform your business with our expert services.</p>
            <Link to="/contact" className="cta-button">
              Get in Touch
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailPage;

