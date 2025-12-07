import React from "react";
import { Target, Eye } from "lucide-react";
import SparklesCore from "../components/SparklesCore";
import TeamSection from "../components/TeamSection";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-sparkles-page">
      <div className="about-sparkles-content">
        <div className="about-sparkles-text">
          <span className="about-sparkles-text-rose">Welcome To</span>
          <br />
          <span className="brand-name">LogozoDev<span className="dot">.</span></span>
        </div>
      </div>
      <div className="about-sparkles-background">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          particleDensity={300}
          particleColor="#CAFF33"
          className="about-sparkles-overlay"
        />
      </div>

      <div className="about-our-story-section">
        <div className="about-our-story-container">
          <div className="about-our-story-content">
            <h2 className="about-our-story-title">
              Our <span className="about-story-title-accent">Story</span>
            </h2>
            <div className="about-our-story-text">
              <p className="about-story-paragraph">
                At <span className="about-story-brand">LogozoDev</span>, we are passionate about transforming innovative ideas into powerful digital solutions. Founded with a vision to bridge the gap between creativity and technology, we've been at the forefront of digital innovation, helping businesses and individuals bring their visions to life.
              </p>
              <p className="about-story-paragraph">
                Our journey began with a simple belief: that exceptional design and cutting-edge technology can create experiences that not only meet but exceed expectations. We combine artistic vision with technical expertise to deliver solutions that are both beautiful and functional.
              </p>
              <p className="about-story-paragraph">
                Today, we're proud to have worked with clients across various industries, from startups to established enterprises, helping them navigate the digital landscape and achieve their goals. Our commitment to excellence, innovation, and client satisfaction drives everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-mission-vision-section">
        <div className="about-mission-vision-container">
          <div className="about-mission-vision-grid">
            <div className="about-feature-card">
              <div className="about-feature-icon-wrapper">
                <Target className="about-feature-icon" />
              </div>
              <h3 className="about-feature-title">Our Mission</h3>
              <p className="about-feature-description">
                To empower businesses and individuals by delivering innovative digital solutions that transform ideas into reality. We are committed to providing fast, reliable, and high-quality development services that exceed expectations while respecting our clients' time and budget.
              </p>
            </div>

            <div className="about-feature-card">
              <div className="about-feature-icon-wrapper">
                <Eye className="about-feature-icon" />
              </div>
              <h3 className="about-feature-title">Our Vision</h3>
              <p className="about-feature-description">
                To become the leading digital innovation partner, recognized for our creativity, technical excellence, and unwavering commitment to client success. We envision a future where every business can leverage cutting-edge technology to achieve their goals and make a meaningful impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      <TeamSection />
    </div>
  );
};

export default AboutPage;
