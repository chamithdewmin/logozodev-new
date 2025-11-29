import React from 'react';
import './PageHero.css';
import './FAQPage.css';
import FAQ from '../components/FAQ';

const FAQPage = () => {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">Frequently Asked Questions</h1>
          <p className="page-hero-description">
            Find answers to common questions about our services, processes, and how we can help your business grow.
          </p>
        </div>
      </section>

      <div className="faq-page-content">
        <FAQ />
      </div>
    </>
  );
};

export default FAQPage;

