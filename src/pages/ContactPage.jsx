import React from 'react';
import './PageHero.css';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">Let's Start Your Project</h1>
          <p className="page-hero-description">
            Complete this quick form to tell us about your needs. We'll respond within 24 hours with a tailored proposal.
          </p>
        </div>
      </section>

      <Contact />
    </>
  );
};

export default ContactPage;
