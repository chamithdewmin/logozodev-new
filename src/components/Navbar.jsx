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

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services', dropdown: [
      { label: 'Web Development', href: '/services?type=web' },
      { label: 'Mobile Apps', href: '/services?type=mobile' },
      { label: 'UI/UX Design', href: '/services?type=design' }
    ] },
    { path: '/work', label: 'Work' },
    { path: '/process', label: 'Process' },
    { path: '/careers', label: 'Careers' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-surface">
          <div className="nav-wrapper">
            <Link to="/" className="logo">
              <img
                className="brand-img"
                src="https://logozodev.com/invoice-demo3/assets/logozodev.png"
                alt="LogozoDev logo"
              />
            </Link>

            <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
              {navItems.map((item) => (
                <li key={item.path} className={`nav-item ${item.dropdown ? 'has-dropdown' : ''}`}>
                  <Link
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    <span>{item.label}</span>
                    {item.dropdown && (
                      <svg className="caret" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </Link>
                  {item.dropdown && (
                    <div className="dropdown-menu">
                      {item.dropdown.map((d) => (
                        <a key={d.label} href={d.href} className="dropdown-item">{d.label}</a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <button
              className="cta-btn"
              onClick={() => navigate('/contact')}
            >
              Get started
            </button>

            <div
              className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
