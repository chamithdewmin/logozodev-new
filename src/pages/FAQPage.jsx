import React, { useEffect } from 'react';
import './FAQPage.css';
import FAQ from '../components/FAQ';

const FAQPage = () => {
  useEffect(() => {
    // Add class to body and html to hide scrollbar
    document.body.classList.add('faq-page-active');
    document.documentElement.classList.add('faq-page-active');
    
    return () => {
      // Remove class when component unmounts
      document.body.classList.remove('faq-page-active');
      document.documentElement.classList.remove('faq-page-active');
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <div className="faq-page-content">
        <FAQ />
      </div>
    </div>
  );
};

export default FAQPage;

