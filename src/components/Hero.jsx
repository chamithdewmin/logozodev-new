import React from 'react';
import './Hero.css';

const Hero = () => {

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="wireframe-mountain"></div>
      </div>
      <div className="hero-overlay" aria-hidden="true"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            A Digital Product Studio<br />
            that will <span className="highlight">Work</span>
          </h1>
          <div className="chipbar">
            <span className="chip-label">For</span>
            <span className="chip">Startups</span>
            <span className="chip">Enterprise leaders</span>
            <span className="chip">Media & Publishers</span>
            <span className="chip chip-and">and</span>
            <span className="chip">Social Good</span>
          </div>
          <div className="hero-buttons">
            <button className="btn btn-secondary">Our Works</button>
            <button className="btn btn-primary">Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
