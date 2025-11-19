import React from 'react';
import './PageHero.css';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">Contact Us</h1>
          <p className="page-hero-description">
            Tell us about your project and goals. Our team will respond promptly with next steps.
          </p>
        </div>
      </section>

      <Contact />
    </>
  );
};

export default ContactPage;
