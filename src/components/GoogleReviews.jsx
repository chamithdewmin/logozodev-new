import React, { useEffect, useRef } from 'react';
import './GoogleReviews.css';

const GoogleReviews = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    // Load Elfsight script if not already loaded
    if (!window.Elfsight) {
      const script = document.createElement('script');
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      script.onload = () => {
        // Script loaded, widget will initialize automatically
        if (window.Elfsight) {
          window.Elfsight.init();
        }
      };
      document.body.appendChild(script);
    } else {
      // Script already loaded, initialize widget
      if (window.Elfsight) {
        window.Elfsight.init();
      }
    }

    // Cleanup
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <section id="testimonials" className="google-reviews">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What our Clients say About us</h2>
        </div>
        
        <div 
          ref={widgetRef}
          className="elfsight-app-f650fecd-a164-4635-88bd-ff432ec57b31" 
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
};

export default GoogleReviews;

