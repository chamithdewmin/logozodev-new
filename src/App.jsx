import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedCompanies from './components/TrustedCompanies';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials.jsx';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
      document.body.style.transition = 'opacity 0.5s ease';
      document.body.style.opacity = '1';
    }, 100);

    console.log('SquareUp Website Loaded Successfully! 🚀');
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <TrustedCompanies />
      <Services />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
