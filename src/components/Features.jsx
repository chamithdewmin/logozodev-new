import React from 'react';
import {
  Zap,
  ShieldCheck,
  Lock,
  Headphones,
  Monitor,
  Wifi,
} from 'lucide-react';
import { motion } from 'framer-motion';
import './Features.css';

// Define the feature item type
const leftFeatures = [
  {
    icon: Zap,
    title: 'Fast Development with top-notch quality',
    description:
      'We understand the value of your time and budget, which is why we strive to deliver fast and reliable development services. Our team ensures top-notch quality while meeting your deadlines.',
    position: 'left',
    cornerStyle: 'translate-right',
  },
  {
    icon: ShieldCheck,
    title: 'Trustable and one tap solution',
    description:
      'We ensure reliability and foster connectivity to serve your purpose. Our services are quickly updated with cutting-edge technology and thoroughly tested for optimal performance.',
    position: 'left',
    cornerStyle: 'translate-left',
  },
  {
    icon: Lock,
    title: 'Secure Data, ensure privacy',
    description:
      'We understand the value of your sensitive information, which is why we prioritize data security and privacy. We implement robust security measures to protect your digital assets.',
    position: 'left',
    cornerStyle: 'translate-right',
  },
];

const rightFeatures = [
  {
    icon: Headphones,
    title: '24/7 Dedicated Support',
    description:
      'We understand the value of your business operations, which is why we provide round-the-clock support. Our dedicated team is always available to assist you with any issues or questions.',
    position: 'right',
    cornerStyle: 'translate-left',
  },
  {
    icon: Monitor,
    title: 'One solution, all platforms',
    description:
      'We ensure reliability and foster connectivity across all platforms. Our cross-platform solutions are quickly updated with cutting-edge technology and thoroughly tested for seamless integration.',
    position: 'right',
    cornerStyle: 'translate-right',
  },
  {
    icon: Wifi,
    title: 'Keep secure on public networks',
    description:
      'We understand the value of your online security, which is why we implement robust protection measures. Our solutions ensure your data remains secure even on public networks.',
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
              Why Choose LogozoDev?
            </motion.h2>
            <motion.p
              className="features-center-description"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              
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
