import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CTA.css';

const CTA = () => {
  const navigate = useNavigate();
  return (
    <section className="cta-section">
      <div className="cta-background"></div>
      <div className="container">
        <div className="cta-content">
          <div className="cta-logo">
            <img 
              src="https://logozodev.com/invoice-demo3/assets/logozodev.png" 
              alt="LogozoDev Logo"
            />
          </div>
          <h2 className="cta-title">
            Let us Bring your Ideas to Life in the Digital World.
          </h2>
          <p className="cta-description">
            No matter which services you choose, we are committed to delivering exceptional results that exceed your 
            expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified 
            vision for your digital product.
          </p>
          <button
            className="cta-button"
            onClick={() => navigate('/contact#contact-form')}
          >
            Start Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
