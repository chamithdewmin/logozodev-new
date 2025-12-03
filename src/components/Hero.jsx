import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hyperspeed from './Hyperspeed';
import { hyperspeedPresets } from './hyperspeedPresets';
import ExploreButton from './ExploreButton';
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
            <span className="desktop-text">
              Transform Ideas into
              <br />
              Winning
              <br />
              <span className="highlight-text">Digital Experiences.</span>
            </span>
            <span className="mobile-text">
              Transform ideas
              <br />
              into Winning
              <br />
              <span className="highlight-text">Digital Experiences.</span>
            </span>
          </h1>
        </div>
        <div className="hero-buttons">
          <ExploreButton onClick={() => navigate('/contact')}>
            Explore
          </ExploreButton>
          <button 
            className="btn btn-secondary hero-btn learn-more-btn"
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
