import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    title: 'SquareUp has been Instrumental in Transforming our Online Presence.',
    quote:
      "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
    author: 'John Smith',
    role: 'CEO of Chic Boutique'
  },
  {
    title: 'Working with SquareUp was a breeze.',
    quote:
      'They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience.',
    author: 'Sarah Johnson',
    role: 'Founder of HungryBites'
  },
  {
    title:
      'SquareUp developed a comprehensive booking and reservation system for our event management company',
    quote:
      'Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients\' event experiences.',
    author: 'Michael Brown',
    role: 'CEO of EventMasters'
  },
  {
    title:
      'ProTech Solutions turned to SquareUp to automate our workflow',
    quote:
      'They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp\'s expertise and professionalism have made them a trusted technology partner.',
    author: 'Emily Davis',
    role: 'COO of ProTech Solutions'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-head">
          <h2>What our Clients say About us</h2>
          <p>At SquareUp, we take pride in delivering exceptional digital products and services.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <article key={idx} className="testimonial-card">
              <h3 className="testimonial-title">{t.title}</h3>
              <p className="testimonial-text">{t.quote}</p>
              <div className="testimonial-footer">
                <div className="testimonial-author">
                  <img src="https://via.placeholder.com/50x50/121212/CAFF33?text=%20" alt="" />
                  <div className="author-info">
                    <h4>{t.author}</h4>
                    <p>{t.role}</p>
                  </div>
                </div>
                <button className="open-website-btn" type="button">Open Website</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
