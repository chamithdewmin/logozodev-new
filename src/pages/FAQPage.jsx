import React from 'react';
import './FAQPage.css';
import FAQ from '../components/FAQ';

const FAQPage = () => {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <div className="faq-page-content">
        <FAQ />
      </div>
    </div>
  );
};

export default FAQPage;

