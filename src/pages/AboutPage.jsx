import React, { useState } from 'react';
import './PageHero.css';
import './TeamSlider.css';
import './AboutPage.css';
import About from '../components/About';
import CTA from '../components/CTA';
import LightRays from '../components/LightRays';

const AboutPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const membersPerView = 5;

  const team = [
    {
      name: 'Shahen Dulash',
      role: 'Digital Marketing Specialist',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQH3Qbj-AUGkxA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1732173366122?e=1765411200&v=beta&t=DbVWXlp7XBBTFk96IF_ObgLgRhmlZiq443v9AAr5DBw'
    }
  ];

  const nextSlide = () => {
    if (currentIndex < team.length - membersPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const directors = [
    {
      name: 'Chamith Samarakoon',
      role: 'Chief Executive Officer | Director',
      image: 'https://scontent.fcmb4-2.fna.fbcdn.net/v/t39.30808-6/455477524_1503582034371960_9160044163169225430_n.jpg?_nc_cat=109&cb2=99be929b-bd9a46d7&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHMmqw7tbrHyVPabTBuFBELEn3a7D_p27USfdrsP-nbtTz0H5pJteQ618jMXwFa8LoNUndktOPbTnfV6BTzseki&_nc_ohc=OSmQxZVC71IQ7kNvwFP-vlA&_nc_oc=Adm4GnAzDzoDTzPSA76oj-D6jUY32A1HHL850ap2Clhm3pLXWN8IWixLs-xegmsugEQ4HVJ73TYf9ldBHQ5MMXU5&_nc_zt=23&_nc_ht=scontent.fcmb4-2.fna&_nc_gid=iTKsEMSbt4u89x2YCXEUjg&oh=00_AfivGMqKLjfrNbGtdBRuVakehaEj6b6_JKMbiXqFsFA9FA&oe=69324A86'
    },
    {
      name: 'Sahanya Hewa',
      role: 'Chief Operating Officer | Director',
      image: 'https://scontent.fcmb4-2.fna.fbcdn.net/v/t39.30808-6/448889143_122095417400379523_1851773436145769949_n.jpg?_nc_cat=104&cb2=99be929b-bd9a46d7&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEmBS7kQkO1w-RmAGUN1MQTziu-CW6jAqrOK74JbqMCqvVfJmBPTG7YrdNRfHtY7ljAzW125ES-C_DuTq7Z_t1r&_nc_ohc=UlklDWKWpv8Q7kNvwE7kjPP&_nc_oc=AdkdET96RNqvdTdTvE7dZmOAtc-SGWky1Nu5x7DDYmUlcuP2f-I7fcNRATZBgPVFku2mr-wWOQlrt82SAV5XiND2&_nc_zt=23&_nc_ht=scontent.fcmb4-2.fna&_nc_gid=TQXFHsE73iNCCACxjXlSuA&oh=00_AfistXTnKtBCI33L9QTzc95YrzgSRYhG_wiJ-VlFST37sQ&oe=693244B3'
    }
  ];

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <div className="light-rays-overlay">
        <LightRays
          raysOrigin="top-center"
          raysColor="#CAFF33"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-background">
            <img 
              src="https://lh3.googleusercontent.com/p/AF1QipPGnSdt7PvRjQEc0___03SDZqBCnaYhOPX_R3vZ=s680-w680-h510-rw" 
              alt="LogozoDev Office" 
              className="about-hero-bg-image"
            />
            <div className="about-hero-overlay">
              <div className="about-hero-content-new">
                <h1 className="about-hero-title-new">Welcome TO LogozoDev</h1>
                <p className="about-hero-subtitle-new">Creative solutions in every dimension</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="company-story">
        <div className="container">
          <div className="company-story-content">
            <h2 className="company-story-title">Our Story</h2>
            <p className="company-story-text">
              LogozoDev was founded with a vision to transform businesses through innovative digital solutions. 
              We started as a small team of passionate developers and designers, driven by the belief that technology 
              should be accessible, powerful, and transformative. Over the years, we've grown into a trusted partner 
              for businesses worldwide, delivering exceptional digital experiences that drive growth and success.
            </p>
            <p className="company-story-text" style={{ marginTop: '24px' }}>
              Our journey has been marked by continuous innovation, client success, and a commitment to excellence. 
              We've worked with startups, established enterprises, and everything in between, always adapting our 
              approach to meet unique challenges and deliver tailored solutions that make a real impact.
            </p>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="vision-mission">
        <div className="container">
          <div className="vision-mission-grid">
            <div className="vision-card">
              <h3>Our Vision</h3>
              <p>
                To be the leading digital solutions provider, empowering businesses worldwide to achieve their 
                full potential through innovative technology and creative excellence. We envision a future where 
                every business, regardless of size, has access to world-class digital solutions that drive growth 
                and success.
              </p>
            </div>
            <div className="mission-card">
              <h3>Our Mission</h3>
              <p>
                To deliver exceptional digital products and services that transform businesses and create lasting 
                value. We are committed to understanding our clients' unique needs, leveraging cutting-edge technology, 
                and maintaining the highest standards of quality and innovation in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="board-directors">
        <div className="container">
          <div className="board-header">
            <h2 className="board-title">Board of Directors</h2>
            <p className="board-subtitle">
              Meet the visionary leaders driving our company's success and innovation forward.
            </p>
          </div>
          <div className="board-grid">
            {directors.map((director, index) => (
              <div key={index} className="board-member">
                <div className="board-member-image-wrapper">
                  <img 
                    src={director.image} 
                    alt={director.name} 
                    className="board-member-image"
                  />
                  <div className="board-member-overlay">
                    <div className="board-overlay-content">
                      <h3 className="board-overlay-name">{director.name}</h3>
                      <p className="board-overlay-role">{director.role}</p>
                      <div className="board-social-icons">
                        <a href="#" className="board-social-icon" aria-label="LinkedIn">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="currentColor"/>
                          </svg>
                        </a>
                        <a href="#" className="board-social-icon" aria-label="Instagram">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/>
                          </svg>
                        </a>
                        <a href="#" className="board-social-icon" aria-label="Facebook">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="board-member-name">{director.name}</h3>
                <p className="board-member-role">{director.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="team-header-wrapper">
            <div className="team-text-content">
              <h2 className="section-title">The Team Behind the Innovation</h2>
              <p className="team-description">
                At LogozoDev, we're a hands-on team of engineers, designers, and researchers building production-ready solutions. 
                We blend product thinking with applied expertise to deliver secure, scalable solutions that create real business impact for our customers.
              </p>
            </div>
            
            <div className="team-navigation">
              <button 
                className="team-nav-arrow" 
                onClick={prevSlide}
                disabled={currentIndex === 0}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              <button 
                className="team-nav-arrow" 
                onClick={nextSlide}
                disabled={currentIndex >= team.length - membersPerView}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="team-slider-wrapper">
            <div 
              className="team-slider-track" 
              style={{ 
                transform: `translateX(-${currentIndex * (100 / membersPerView)}%)`,
                width: `${(team.length / membersPerView) * 100}%`
              }}
            >
              {team.map((member, index) => (
                <div key={index} className="team-member">
                  <div className="team-image-wrapper">
                    <img src={member.image} alt={member.name} className="team-image" />
                  </div>
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default AboutPage;
