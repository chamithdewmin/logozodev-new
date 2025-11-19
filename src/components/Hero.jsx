import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  // Split headline into words for blur animation
  const line1 = ['A', 'Digital', 'Product', 'Studio'];
  const line2 = ['that', 'will'];
  const highlightWord = 'Work';

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="wireframe-mountain"></div>
      </div>
      <div className="hero-overlay" aria-hidden="true"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="blur-text-line">
              {line1.map((word, index) => (
                <span
                  key={index}
                  className="blur-text-word"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {word}
                </span>
              ))}
            </span>
            <br />
            <span className="blur-text-line">
              {line2.map((word, index) => (
                <span
                  key={index}
                  className="blur-text-word"
                  style={{ animationDelay: `${(line1.length + index) * 0.15}s` }}
                >
                  {word}
                </span>
              ))}
              <span
                className="blur-text-word highlight"
                style={{ animationDelay: `${(line1.length + line2.length) * 0.15}s` }}
              >
                {highlightWord}
              </span>
            </span>
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
            <button className="btn btn-secondary" onClick={() => navigate('/work')}>Our Works</button>
            <button className="btn btn-primary" onClick={() => navigate('/contact#contact-form')}>Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
