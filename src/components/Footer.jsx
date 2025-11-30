import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const products = [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Mobile App Development', href: '/services/mobile-app-development' },
    { name: 'UI/UX Design', href: '/services/ui-ux-design' },
    { name: 'E-commerce Solutions', href: '/services/ecommerce-solutions' },
    { name: 'All Services', href: '/services' }
  ];

  const helpSupport = [
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact us', href: '/contact' },
    { name: 'Terms of Use', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' }
  ];

  const company = [
    { name: 'About us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Work', href: '/work' },
    { name: 'Process', href: '/process' }
  ];

  const enterprise = [
    { name: 'Enterprise Solutions', href: '/services/enterprise-solutions' },
    { name: 'Custom Solutions', href: '/services/custom-solutions' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Left Section */}
          <div className="footer-left">
            <div className="footer-brand">
              <div className="brand-logo">
                <img className="brand-img" src="https://logozodev.com/invoice-demo3/assets/logozodev.png" alt="LogozoDev logo" />
              </div>
              <p className="brand-tagline">
                Empowering businesses through innovative digital solutions and cutting-edge technology.
              </p>
            </div>

            <div className="footer-social">
              <div className="social-icons">
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="#" aria-label="X (Twitter)">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" aria-label="TikTok"><i className="fab fa-tiktok"></i></a>
              </div>
            </div>
          </div>

          {/* Right Section - Links Columns */}
          <div className="footer-right">
            <div className="footer-column">
              <h3 className="footer-column-title">Services</h3>
              <ul className="footer-links">
                {products.map((item, index) => (
                  <li key={index}>
                    <Link to={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-column-title">Help & Support</h3>
              <ul className="footer-links">
                {helpSupport.map((item, index) => (
                  <li key={index}>
                    <Link to={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-column-title">Company</h3>
              <ul className="footer-links">
                {company.map((item, index) => (
                  <li key={index}>
                    <Link to={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-column-title">Enterprise</h3>
              <ul className="footer-links">
                {enterprise.map((item, index) => (
                  <li key={index}>
                    <Link to={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="footer-bottom">
          <p className="footer-copy">© 2025 LogozoDev | Powered by LogozoDev</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
