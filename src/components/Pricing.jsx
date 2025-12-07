import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import NumberFlow from '@number-flow/react';
import { Switch } from './ui/switch';
import { useMediaQuery } from '../hooks/use-media-query';
import './Pricing.css';

const plans = [
  {
    name: 'STARTER',
    price: '50',
    yearlyPrice: '40',
    period: 'per month',
    features: [
      'Up to 10 projects',
      'Basic analytics',
      '48-hour support response time',
      'Limited API access',
      'Community support',
    ],
    description: 'Perfect for individuals and small projects',
    buttonText: 'Start Free Trial',
    href: '/contact',
    isPopular: false,
  },
  {
    name: 'PROFESSIONAL',
    price: '99',
    yearlyPrice: '79',
    period: 'per month',
    features: [
      'Unlimited projects',
      'Advanced analytics',
      '24-hour support response time',
      'Full API access',
      'Priority support',
      'Team collaboration',
      'Custom integrations',
    ],
    description: 'Ideal for growing teams and businesses',
    buttonText: 'Get Started',
    href: '/contact',
    isPopular: true,
  },
  {
    name: 'ENTERPRISE',
    price: '299',
    yearlyPrice: '239',
    period: 'per month',
    features: [
      'Everything in Professional',
      'Custom solutions',
      'Dedicated account manager',
      '1-hour support response time',
      'SSO Authentication',
      'Advanced security',
      'Custom contracts',
      'SLA agreement',
    ],
    description: 'For large organizations with specific needs',
    buttonText: 'Contact Sales',
    href: '/contact',
    isPopular: false,
  },
];

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const switchRef = useRef(null);

  const handleToggle = (checked) => {
    setIsMonthly(!checked);
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      confetti({
        particleCount: 50,
        spread: 60,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: ['#CAFF33', '#27ff4b', '#B8E62E', '#FFFFFF'],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ['circle'],
      });
    }
  };

  return (
    <div className="pricing-section">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2 className="pricing-title">
            Choose Your plan to growth
          </h2>
          <p className="pricing-description">
            Choose the plan that works for you<br />
            All plans include access to our platform, lead generation tools, and dedicated support.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 1 }}
              whileInView={
                isDesktop
                  ? {
                      y: plan.isPopular ? -20 : 0,
                      opacity: 1,
                      x: index === 2 ? -30 : index === 0 ? 30 : 0,
                      scale: index === 0 || index === 2 ? 0.94 : 1.0,
                    }
                  : {}
              }
              viewport={{ once: true }}
              transition={{
                duration: 1.6,
                type: 'spring',
                stiffness: 100,
                damping: 30,
                delay: 0.4,
                opacity: { duration: 0.5 },
              }}
              className={`pricing-card ${
                plan.isPopular ? 'pricing-card-popular' : ''
              } ${
                index === 0 || index === 2
                  ? 'pricing-card-side'
                  : 'pricing-card-center'
              } ${index === 0 ? 'pricing-card-left' : ''} ${
                index === 2 ? 'pricing-card-right' : ''
              }`}
            >
              {plan.isPopular && (
                <div className="pricing-popular-badge">
                  <Star className="pricing-star-icon" size={16} />
                  <span className="pricing-popular-text">Popular</span>
                </div>
              )}

              <div className="pricing-card-content">
                <p className="pricing-plan-name">{plan.name}</p>

                <div className="pricing-price-wrapper">
                  <span className="pricing-price-value">
                    <NumberFlow
                      value={
                        isMonthly ? Number(plan.price) : Number(plan.yearlyPrice)
                      }
                      format={{
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      }}
                      transformTiming={{
                        duration: 500,
                        easing: 'ease-out',
                      }}
                      willChange
                      className="pricing-number-flow"
                    />
                  </span>
                  {plan.period !== 'Next 3 months' && (
                    <span className="pricing-period">/ {plan.period}</span>
                  )}
                </div>

                <p className="pricing-billing-note">
                  {isMonthly ? 'billed monthly' : 'billed annually'}
                </p>

                <ul className="pricing-features-list">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="pricing-feature-item">
                      <Check className="pricing-check-icon" size={16} />
                      <span className="pricing-feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>

                <hr className="pricing-divider" />

                <Link
                  to={plan.href}
                  className={`pricing-button ${
                    plan.isPopular ? 'pricing-button-popular' : ''
                  }`}
                >
                  {plan.buttonText}
                </Link>

                <p className="pricing-plan-description">{plan.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
