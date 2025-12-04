import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/work', label: 'Work' },
    { path: '/process', label: 'Process' },
    { path: '/careers', label: 'Careers' }
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="nav-wrapper">
            <Link to="/" className="logo">
              <img
                className="brand-img"
                src="https://logozodev.com/invoice-demo3/assets/logozodev.png"
                alt="LogozoDev logo"
              />
            </Link>

            {/* Desktop Navigation */}
            <ul className="nav-menu desktop-menu">
              {navItems.map((item) => (
                <li key={item.path} className="nav-item">
                  <Link
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="nav-actions">
              <div className="cta-btn-wrapper" onClick={() => navigate('/contact')}>
                <div className="cta-btn-container">
                  <div className="cta-btn-shimmer" />
                  <div className="cta-btn-inner">
                    <button className="cta-btn-text">
                      Get Started
                    </button>
                  </div>
                  <div className="cta-btn-gradient" />
                </div>
              </div>

              {/* Mobile Hamburger */}
              <div
                className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-divider"></div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <Link to="/" className="mobile-menu-logo" onClick={() => setMobileMenuOpen(false)}>
            <img
              className="brand-img"
              src="https://logozodev.com/invoice-demo3/assets/logozodev.png"
              alt="LogozoDev logo"
            />
          </Link>
          <button
            className="mobile-menu-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <ul className="mobile-menu-list">
          {navItems.map((item) => (
            <li key={item.path} className="mobile-menu-item">
              <Link
                to={item.path}
                className={`mobile-menu-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={() => {
                  setMobileMenuOpen(false);
                  // Ensure navigation happens
                  navigate(item.path);
                }}
              >
                <span>{item.label}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {mobileMenuOpen && (
        <div 
          className="menu-backdrop" 
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}
    </>
  );
};

export default Navbar;
