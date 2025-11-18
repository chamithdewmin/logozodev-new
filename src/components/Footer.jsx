import React from 'react';
import './Footer.css';

const Footer = () => {
  const nav = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        {/* Top row: Logo | Nav | Social */}
        <div className="footer-top">
          <div className="brand">
            <div className="brand-logo">
              <img className="brand-img" src="https://logozodev.com/invoice-demo3/assets/logozodev.png" alt="LogozoDev logo" />
            </div>
          </div>

          <nav className="footer-navlinks" aria-label="Footer">
            <ul>
              {nav.map((item) => (
                <li key={item.name}><a href={item.href}>{item.name}</a></li>
              ))}
            </ul>
          </nav>

          <div className="social-box">
            <span className="social-title">Stay Connected</span>
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>

        {/* Middle contact row */}
        <div className="footer-contact-row">
          <a className="contact-chip" href="mailto:hello@logozodev.com">
            <i className="fas fa-envelope"></i>
            <span>hello@logozodev.com</span>
          </a>
          <a className="contact-chip" href="tel:+919181323309">
            <i className="fas fa-phone"></i>
            <span>+91 91813 23 2309</span>
          </a>
          <div className="contact-chip">
            <i className="fas fa-map-marker-alt"></i>
            <span>Somewhere in the World</span>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="footer-copy">© 2023 LogozoDev. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
