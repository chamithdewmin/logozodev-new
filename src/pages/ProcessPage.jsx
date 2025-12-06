import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Code, Paintbrush, CheckCircle } from 'lucide-react';
import './ProcessPage.css';
import CTA from '../components/CTA';

const ProcessPage = () => {
  const features = [
    {
      step: 'Step 1',
      title: 'Discovery & Planning',
      content:
        'We start by understanding your vision, goals, and requirements. Our team conducts thorough research and creates a comprehensive plan tailored to your business needs.',
      icon: <Rocket style={{ width: '100%', height: '100%' }} />,
      image:
        'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop',
    },
    {
      step: 'Step 2',
      title: 'Design & Development',
      content:
        'Our expert designers and developers bring your vision to life with modern, responsive designs and robust code. We ensure every detail is perfect and user-friendly.',
      icon: <Paintbrush style={{ width: '100%', height: '100%' }} />,
      image:
        'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2070&auto=format&fit=crop',
    },
    {
      step: 'Step 3',
      title: 'Testing & Quality Assurance',
      content:
        'We rigorously test your product across all devices and browsers to ensure flawless performance, security, and user experience before launch.',
      icon: <CheckCircle style={{ width: '100%', height: '100%' }} />,
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    },
    {
      step: 'Step 4',
      title: 'Launch & Support',
      content:
        'We deploy your product with confidence and provide ongoing support, maintenance, and optimization to ensure your success in the long run.',
      icon: <Code style={{ width: '100%', height: '100%' }} />,
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    },
  ];

  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (4000 / 100));
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [progress, features.length]);

  return (
    <div className="process-page-wrapper">
      <div className="process-hero">
        <div className="container">
          <h1 className="process-hero-title">Our proven process delivers exceptional results.</h1>
        </div>
      </div>
      
      <div className="process-page-container">
        <div className="process-page-content">

          <div className="process-grid">
            <div className="process-steps">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="process-step-item"
                  initial={{ opacity: 0.3, x: -20 }}
                  animate={{
                    opacity: index === currentFeature ? 1 : 0.3,
                    x: 0,
                    scale: index === currentFeature ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className={`process-step-icon ${
                      index === currentFeature ? 'active' : ''
                    }`}
                  >
                    {feature.icon}
                  </motion.div>
                  <div className="process-step-content">
                    <h3 className="process-step-title">
                      {feature.title}
                    </h3>
                    <p className="process-step-description">
                      {feature.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="process-image-container">
              <AnimatePresence mode="wait">
                {features.map(
                  (feature, index) =>
                    index === currentFeature && (
                      <motion.div
                        key={index}
                        className="process-image-wrapper"
                        initial={{ y: 100, opacity: 0, rotateX: -20 }}
                        animate={{ y: 0, opacity: 1, rotateX: 0 }}
                        exit={{ y: -100, opacity: 0, rotateX: 20 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                      >
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="process-image"
                          width={1000}
                          height={500}
                        />
                        <div className="process-image-gradient" />
                        <div className="process-step-badge">
                          <span className="process-step-badge-text">
                            {feature.step}
                          </span>
                        </div>
                      </motion.div>
                    ),
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      
      <CTA />
    </div>
  );
};

export default ProcessPage;
