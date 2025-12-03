import React from 'react';
import Hero from '../components/Hero';
import TrustedCompanies from '../components/TrustedCompanies';
import Services from '../components/Services';
import About from '../components/About';
import GoogleReviews from '../components/GoogleReviews';
import CTA from '../components/CTA';

const HomePage = () => {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <Hero />
      <TrustedCompanies />
      <Services />
      <About />
      <GoogleReviews />
      <CTA />
    </div>
  );
};

export default HomePage;
