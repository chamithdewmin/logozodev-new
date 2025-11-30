import React, { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    quote:
      "The bottom line here is: When you're online, you don't have to worry about being secure or about your information getting out there if you have a VPN. LogozoDev makes it simple.",
    author: 'Abdullah Tushar',
    role: 'CEO',
    image: 'https://via.placeholder.com/60x60/121212/CAFF33?text=AT'
  },
  {
    quote:
      "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
    author: 'John Smith',
    role: 'CEO of Chic Boutique',
    image: 'https://via.placeholder.com/60x60/121212/CAFF33?text=JS'
  },
  {
    quote:
      'They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience.',
    author: 'Sarah Johnson',
    role: 'Founder of HungryBites',
    image: 'https://via.placeholder.com/60x60/121212/CAFF33?text=SJ'
  },
  {
    quote:
      'Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients\' event experiences.',
    author: 'Michael Brown',
    role: 'CEO of EventMasters',
    image: 'https://via.placeholder.com/60x60/121212/CAFF33?text=MB'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What our Clients say About us</h2>
          <p className="section-description">At LogozoDev, we take pride in delivering exceptional digital products and services.</p>
        </div>

        <div className="testimonial-showcase">
          <div className="testimonial-badge">User Review</div>
          
          <div className="testimonial-quotes">
            <svg className="quote-open" width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M35 45C35 30 50 20 65 20C80 20 95 30 95 45C95 60 80 70 65 70C57.5 70 50 67 46 62L35 45Z" stroke="#FFD700" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <svg className="quote-close" width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M105 50C105 35 90 25 75 25C60 25 45 35 45 50C45 65 60 75 75 75C82.5 75 90 72 94 67L105 50Z" fill="#FFD700"/>
            </svg>
          </div>

          <div className="testimonial-content">
            <p className="testimonial-quote-text">{currentTestimonial.quote}</p>
            
            <div className="testimonial-author">
              <img src={currentTestimonial.image} alt={currentTestimonial.author} className="author-avatar" />
              <div className="author-name">{currentTestimonial.author}</div>
            </div>
          </div>

          <div className="testimonial-controls">
            <button className="testimonial-nav-btn" onClick={prevTestimonial}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <button className="testimonial-nav-btn" onClick={nextTestimonial}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
