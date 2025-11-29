import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-green-glow"></div>
      </div>
      <div className="hero-grid-overlay"></div>

      <div className="container">
        <div className="hero-content">
          {/* Top Badge */}
          <div className="hero-badge">
            We raised $5M pre-seed fund
          </div>

          {/* Main Heading */}
          <h1 className="hero-heading">
            The AI SaaS your product needs
          </h1>

          {/* Subtext */}
          <p className="hero-subtext">
            Our AI SaaS solution enhances your product with advanced artificial intelligence, 
            streamlining operations and driving efficiency and innovation.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            <button className="btn-get-template" onClick={() => navigate('/contact')}>
              Get Template
            </button>
            <button className="btn-learn-more" onClick={() => navigate('/about')}>
              Learn More
            </button>
          </div>

          {/* Mockup Card */}
          <div className="hero-mockup-card">
            <div className="mockup-window">
              <div className="mockup-sidebar">
                <div className="mockup-logo">Index</div>
                <div className="mockup-menu">
                  <div className="mockup-menu-item">
                    <div className="menu-dot"></div>
                    <div className="menu-line"></div>
                  </div>
                  <div className="mockup-menu-item">
                    <div className="menu-dot"></div>
                    <div className="menu-line"></div>
                  </div>
                  <div className="mockup-menu-item">
                    <div className="menu-dot"></div>
                    <div className="menu-line"></div>
                  </div>
                  <div className="mockup-menu-item">
                    <div className="menu-dot"></div>
                    <div className="menu-line"></div>
                  </div>
                </div>
              </div>
              <div className="mockup-content">
                <div className="mockup-card-item">
                  <div className="card-line"></div>
                  <div className="card-line short"></div>
                  <div className="card-line"></div>
                </div>
                <div className="mockup-card-item">
                  <div className="card-line"></div>
                  <div className="card-line short"></div>
                  <div className="card-line"></div>
                </div>
                <div className="mockup-card-item">
                  <div className="card-line"></div>
                  <div className="card-line short"></div>
                  <div className="card-line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
