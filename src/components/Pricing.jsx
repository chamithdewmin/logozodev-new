import React from 'react';
import { Palette, Rocket, Building2, CheckCircle, ShieldCheck, Clock, RefreshCw } from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
  return (
    <div className="pricing-section">
      <section className="pricing-container">
        <div className="pricing-header">
          <h1 className="pricing-main-title">
            <span className="pricing-title-line-1">Choose Your</span>
            <br />
            <span className="pricing-title-line-2">Creative Journey</span>
          </h1>
          <p className="pricing-subtitle">
            From indie creators to enterprise teams, we&apos;ve crafted the
            perfect plan for every stage of your design evolution
          </p>
        </div>
        
        <div className="pricing-grid">
          <article className="pricing-card pricing-card-creative">
            <div className="pricing-card-header">
              <div className="pricing-card-category">
                <Palette className="pricing-icon" />
                <span className="pricing-category-text">Creative</span>
              </div>
              <span className="pricing-badge pricing-badge-creative">
                Perfect Start
              </span>
            </div>
            
            <div className="pricing-card-content">
              <h2 className="pricing-card-title">Individual Creators</h2>
              <p className="pricing-card-description">
                Everything you need to launch your creative projects
              </p>
            </div>
            
            <div className="pricing-price">
              <div className="pricing-price-amount">
                <span className="pricing-price-value">$79</span>
                <span className="pricing-price-period">/month</span>
              </div>
              <p className="pricing-price-note">
                Billed monthly • Cancel anytime
              </p>
            </div>
            
            <div className="pricing-buttons">
              <button className="pricing-btn pricing-btn-primary">
                Start Creating
              </button>
              <button className="pricing-btn pricing-btn-secondary">
                Learn More
              </button>
            </div>
            
            <hr className="pricing-divider" />
            
            <ul className="pricing-features">
              <li className="pricing-feature-item">
                <CheckCircle className="pricing-check-icon" />
                <span>
                  <strong>Brand Identity</strong> - Logo, colors, typography
                </span>
              </li>
              <li className="pricing-feature-item">
                <CheckCircle className="pricing-check-icon" />
                <span>
                  <strong>Website</strong> - 5 pages, mobile-optimized
                </span>
              </li>
              <li className="pricing-feature-item">
                <CheckCircle className="pricing-check-icon" />
                <span>
                  <strong>Social Media Kit</strong> - 10 custom templates
                </span>
              </li>
              <li className="pricing-feature-item">
                <CheckCircle className="pricing-check-icon" />
                <span>
                  <strong>Email Support</strong> - Response within 24 hours
                </span>
              </li>
            </ul>
          </article>

          <article className="pricing-card pricing-card-popular">
            <div className="pricing-popular-badge">
              <div className="pricing-popular-badge-content">
                Most Popular
              </div>
            </div>
            
            <div className="pricing-card-header">
              <div className="pricing-card-category">
                <Rocket className="pricing-icon" />
                <span className="pricing-category-text pricing-category-text-dark">Professional</span>
              </div>
            </div>
            
            <div className="pricing-card-content">
              <h2 className="pricing-card-title pricing-card-title-dark">Growing Businesses</h2>
              <p className="pricing-card-description pricing-card-description-dark">
                Scale your brand with comprehensive design systems
              </p>
            </div>
            
            <div className="pricing-price">
              <div className="pricing-price-amount">
                <span className="pricing-price-value pricing-price-value-dark">$199</span>
                <span className="pricing-price-period pricing-price-period-dark">/month</span>
              </div>
              <p className="pricing-price-note pricing-price-note-dark">
                Billed monthly • 2 months free yearly
              </p>
            </div>
            
            <div className="pricing-buttons">
              <button className="pricing-btn pricing-btn-white">
                Scale Your Brand
              </button>
              <button className="pricing-btn pricing-btn-outline-white">
                Book Demo
              </button>
            </div>
            
            <hr className="pricing-divider pricing-divider-dark" />
            
            <ul className="pricing-features">
              <li className="pricing-feature-item">
                <CheckCircle className="pricing-check-icon" />
                <span>
                  <strong>Brand Strategy</strong> - Market research &amp; positioning
                </span>
              </li>
              <li className="pricing-feature-item">
                <CheckCircle className="pricing-check-icon" />
                <span>
                  <strong>Web Experience</strong> - 15 pages + e-commerce
                </span>
              </li>
              <li className="pricing-feature-item">
                <CheckCircle className="pricing-check-icon" />
                <span>
                  <strong>UI/UX Design</strong> - App or web application
                </span>
              </li>
              <li className="pricing-feature-item">
                <CheckCircle className="pricing-check-icon" />
                <span>
                  <strong>Marketing Materials</strong> - Brochures, presentations
                </span>
              </li>
              <li className="pricing-feature-item">
                <CheckCircle className="pricing-check-icon" />
                <span>
                  <strong>Priority Support</strong> - Slack + video calls
                </span>
              </li>
            </ul>
          </article>

          <article className="pricing-card pricing-card-enterprise">
            <div className="pricing-card-header">
              <div className="pricing-card-category">
                <Building2 className="pricing-icon" />
                <span className="pricing-category-text">Enterprise</span>
              </div>
              <span className="pricing-badge pricing-badge-enterprise">
                Custom
              </span>
            </div>
            
            <div className="pricing-card-content">
              <h2 className="pricing-card-title">Large Teams</h2>
              <p className="pricing-card-description">
                Dedicated design team with unlimited creative capacity
              </p>
            </div>
            
            <div className="pricing-price">
              <div className="pricing-price-amount">
                <span className="pricing-price-value pricing-price-custom">Custom</span>
              </div>
              <p className="pricing-price-note">
                Tailored pricing based on your needs
              </p>
            </div>
            
            <div className="pricing-buttons">
              <button className="pricing-btn pricing-btn-black">
                Get Custom Quote
              </button>
              <button className="pricing-btn pricing-btn-secondary">
                Enterprise Demo
              </button>
            </div>
            
            <hr className="pricing-divider" />
            
            <ul className="pricing-features">
              <li className="pricing-feature-item">
                <CheckCircle className="pricing-check-icon" />
                <span>
                  <strong>Dedicated Team</strong> - 3-5 senior designers
                </span>
              </li>
              <li className="pricing-feature-item">
                <CheckCircle className="pricing-check-icon" />
                <span>
                  <strong>Enterprise System</strong> - Multi-brand management
                </span>
              </li>
              <li className="pricing-feature-item">
                <CheckCircle className="pricing-check-icon" />
                <span>
                  <strong>White-label Solutions</strong> - Custom portals
                </span>
              </li>
              <li className="pricing-feature-item">
                <CheckCircle className="pricing-check-icon" />
                <span>
                  <strong>24/7 Support</strong> - Dedicated account manager
                </span>
              </li>
            </ul>
          </article>
        </div>

        <div className="pricing-footer">
          <p className="pricing-footer-text">
            Trusted by 2,500+ creative professionals worldwide
          </p>
          <div className="pricing-footer-features">
            <div className="pricing-footer-feature">
              <ShieldCheck className="pricing-footer-icon" />
              <span>SSL Secured</span>
            </div>
            <div className="pricing-footer-feature">
              <Clock className="pricing-footer-icon" />
              <span>24/7 Support</span>
            </div>
            <div className="pricing-footer-feature">
              <RefreshCw className="pricing-footer-icon" />
              <span>Cancel Anytime</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;

