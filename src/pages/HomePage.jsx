import React from 'react';
import Hero from '../components/Hero';
import TrustedCompanies from '../components/TrustedCompanies';
import Services from '../components/Services';
import Features from '../components/Features';
import GoogleReviews from '../components/GoogleReviews';
import Pricing from '../components/Pricing';
import CTA from '../components/CTA';

const HomePage = () => {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <Hero />
      <TrustedCompanies />
      <Services />
      <Features />
      <GoogleReviews />
      <Pricing />
      <CTA />
    </div>
  );
};

export default HomePage;
