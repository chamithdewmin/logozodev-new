import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hyperspeed from './Hyperspeed';
import { hyperspeedPresets } from './hyperspeedPresets';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <Hyperspeed effectOptions={hyperspeedPresets.akira} />
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Transform Ideas into
            <br />
            Winning
            <br />
            <span className="highlight-text">Digital Experiences.</span>
          </h1>
        </div>
        <div className="hero-buttons">
          <button 
            className="btn btn-primary hero-btn"
            onClick={() => navigate('/contact')}
          >
            Get Started
          </button>
          <button 
            className="btn btn-secondary hero-btn"
            onClick={() => navigate('/about')}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
