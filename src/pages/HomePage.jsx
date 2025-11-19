import React from 'react';
import Hero from '../components/Hero';
import TrustedCompanies from '../components/TrustedCompanies';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

const HomePage = () => {
  return (
    <>
      <Hero />
      <TrustedCompanies />
      <Services />
      <About />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
};

export default HomePage;
