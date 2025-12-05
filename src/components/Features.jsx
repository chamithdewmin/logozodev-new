import React from 'react';
import {
  Building2,
  Lightbulb,
  ScreenShare,
  Trophy,
  User,
  User2,
} from 'lucide-react';
import { motion } from 'framer-motion';
import './Features.css';

// Define the feature item type
const leftFeatures = [
  {
    icon: Building2,
    title: 'Expert Team',
    description:
      'Work with top professionals and experienced developers who bring real-world expertise to every project.',
    position: 'left',
    cornerStyle: 'translate-right',
  },
  {
    icon: User2,
    title: 'Collaborative Approach',
    description:
      'Join a team that values collaboration, communication, and working together to achieve exceptional results.',
    position: 'left',
    cornerStyle: 'translate-left',
  },
  {
    icon: Trophy,
    title: 'Proven Results',
    description:
      'Deliver outstanding digital solutions that drive growth, engagement, and success for businesses worldwide.',
    position: 'left',
    cornerStyle: 'translate-right',
  },
];

const rightFeatures = [
  {
    icon: ScreenShare,
    title: 'Innovative Solutions',
    description:
      'Stay ahead with cutting-edge technology and innovative approaches that set your business apart.',
    position: 'right',
    cornerStyle: 'translate-left',
  },
  {
    icon: User,
    title: 'Client-Focused',
    description:
      'Improve your digital presence with solutions tailored to your unique needs and business goals.',
    position: 'right',
    cornerStyle: 'translate-right',
  },
  {
    icon: Lightbulb,
    title: 'Creative Excellence',
    description:
      'Transform your ideas into reality with creative designs and strategic thinking that captivate audiences.',
    position: 'right',
    cornerStyle: 'translate-left',
  },
];

// Feature card component
const FeatureCard = ({ feature, index }) => {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="feature-card-wrapper"
    >
      <div className={`feature-card feature-card-${feature.cornerStyle}`}>
        <div className="feature-icon">
          <Icon size={32} />
        </div>
        <h2 className="feature-title">{feature.title}</h2>
        <p className="feature-description">{feature.description}</p>
        {/* Decorative elements */}
        <span className="feature-gradient-line"></span>
        <span className="feature-radial-gradient"></span>
      </div>
    </motion.div>
  );
};

export default function Features() {
  return (
    <section className="features-section" id="features">
      <div className="features-container">
        <div className="features-layout">
          {/* Left column */}
          <div className="features-column features-column-left">
            {leftFeatures.map((feature, index) => (
              <FeatureCard key={`left-feature-${index}`} feature={feature} index={index} />
            ))}
          </div>

          {/* Center column */}
          <div className="features-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="features-badge"
            >
              <span className="features-badge-text">Features</span>
              <span className="features-badge-gradient-line"></span>
              <span className="features-badge-radial-gradient"></span>
            </motion.div>
            <motion.h2
              className="features-center-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Key Benefits of LogozoDev
            </motion.h2>
            <motion.p
              className="features-center-description"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We are dedicated to helping you bring your digital vision to life with cutting-edge technology and design.
            </motion.p>
          </div>

          {/* Right column */}
          <div className="features-column features-column-right">
            {rightFeatures.map((feature, index) => (
              <FeatureCard key={`right-feature-${index}`} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
