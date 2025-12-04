import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CTA.css';

const CTA = () => {
  const navigate = useNavigate();
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-banner">
          <div className="cta-banner-content">
            <div className="cta-text-content">
              <h2 className="cta-title">Connect with us</h2>
              <p className="cta-description">Contact us with any query or any idea.</p>
            </div>
            <button
              className="cta-button"
              onClick={() => navigate('/services')}
            >
              Get In Touch
              <svg fill="currentColor" viewBox="0 0 24 24" className="cta-icon">
                <path clipRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fillRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
