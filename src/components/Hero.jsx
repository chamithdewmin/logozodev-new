import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="glow-arc glow-arc-1"></div>
        <div className="glow-arc glow-arc-2"></div>
        <div className="swoosh swoosh-1"></div>
        <div className="swoosh swoosh-2"></div>
      </div>
      <div className="hero-grid-overlay"></div>

      <div className="container">
        <div className="hero-layout">
          <div className="hero-left">
            <div className="badge-row">
              <span className="badge-pill badge-accent">
                <span className="dot"></span>
                Innovative Product of the Year
              </span>
              <span className="badge-pill">Best Financial App</span>
            </div>

            <h1 className="hero-heading">
              Designed to <span className="highlight-green">Grow</span><br/>
              <span className="highlight-green">Your</span> Business
            </h1>

            <p className="hero-subtext">
              We provide you with a convenient and reliable platform for effective financial
              management. Forget about complexities — we’ll handle everything for your convenience!
            </p>

            <div className="cta-row">
              <button className="btn-cta-primary" onClick={() => navigate('/contact')}>
                Start Now <span className="arrow">↗</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
