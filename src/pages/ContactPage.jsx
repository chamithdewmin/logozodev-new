import React from 'react';
import './PageHero.css';
import Contact from '../components/Contact';
import LightRays from '../components/LightRays';

const ContactPage = () => {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <div className="light-rays-overlay">
        <LightRays
          raysOrigin="top-center"
          raysColor="#CAFF33"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">Let's Start Your Project</h1>
          <p className="page-hero-description">
            Complete this quick form to tell us about your needs. We'll respond within 24 hours with a tailored proposal.
          </p>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default ContactPage;
