import React from 'react';
import './FAQPage.css';
import FAQ from '../components/FAQ';
import LightRays from '../components/LightRays';

const FAQPage = () => {
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
      <div className="faq-page-content">
        <FAQ />
      </div>
    </div>
  );
};

export default FAQPage;

