import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MinusIcon, PlusIcon } from 'lucide-react';
import './FAQ.css';

const faqItems = [
  {
    id: '1',
    question: 'What services does LogozoDev provide?',
    answer:
      'LogozoDev offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.',
    category: 'general',
  },
  {
    id: '2',
    question: 'How can LogozoDev help my business?',
    answer:
      'We can help your business by creating innovative digital solutions that enhance your brand presence, improve user engagement, and drive growth through cutting-edge technology and design.',
    category: 'general',
  },
  {
    id: '3',
    question: 'What industries does LogozoDev work with?',
    answer:
      "We work with startups, enterprise leaders, media & publishers, and social good organizations across various industries including e-commerce, healthcare, education, fintech, and more.",
    category: 'general',
  },
  {
    id: '4',
    question: 'How long does it take to complete a project with LogozoDev?',
    answer:
      'Project timelines vary depending on scope and complexity. Typically, web projects take 8-12 weeks, mobile apps 12-16 weeks, and custom software 16-24 weeks. We provide detailed timelines during our initial consultation.',
    category: 'pricing',
  },
  {
    id: '5',
    question: 'Do you offer ongoing support and maintenance after the project is completed?',
    answer:
      'Yes, we offer comprehensive ongoing support and maintenance packages to ensure your digital products continue to perform optimally. We provide regular updates, security patches, and technical support.',
    category: 'support',
  },
  {
    id: '6',
    question: 'Can you work with existing design or development frameworks?',
    answer:
      'Absolutely! We have experience working with various design systems and development frameworks. We can integrate with your existing tools and technologies or recommend new ones that better suit your needs.',
    category: 'technical',
  },
  {
    id: '7',
    question: 'How involved will I be in the project development process?',
    answer:
      "We believe in collaborative partnerships. You'll be involved in every major milestone through regular check-ins, demos, and feedback sessions. We use agile methodologies to ensure transparency and continuous communication.",
    category: 'general',
  },
  {
    id: '8',
    question: 'Can you help with website or app maintenance and updates?',
    answer:
      'Yes, we provide ongoing maintenance and update services including content updates, feature enhancements, performance optimization, and security updates to keep your digital products running smoothly.',
    category: 'support',
  },
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'general', label: 'General' },
  { id: 'technical', label: 'Technical' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'support', label: 'Support' },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedId, setExpandedId] = useState(null);

  const filteredFaqs =
    activeCategory === 'all'
      ? faqItems
      : faqItems.filter((item) => item.category === activeCategory);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="faq-badge"
          >
            FAQs
          </motion.div>
          <motion.h2
            className="faq-title"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Frequently Asked{' '}
            <span className="faq-title-gradient">Questions</span>
          </motion.h2>
          <motion.p
            className="faq-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Find answers to common questions about LogozoDev and how we can help
            bring your digital vision to life.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <motion.div
          className="faq-categories"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`faq-category-btn ${
                activeCategory === category.id ? 'faq-category-btn-active' : ''
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* FAQ Grid */}
        <div className="faq-grid">
          <AnimatePresence mode="wait">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`faq-card ${
                  expandedId === faq.id ? 'faq-card-expanded' : ''
                }`}
              >
                <button
                  onClick={() => toggleExpand(faq.id)}
                  className="faq-card-button"
                >
                  <h3 className="faq-card-question">{faq.question}</h3>
                  <div className="faq-card-icon">
                    {expandedId === faq.id ? (
                      <MinusIcon className="faq-icon" size={20} />
                    ) : (
                      <PlusIcon className="faq-icon" size={20} />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {expandedId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="faq-card-content-wrapper"
                    >
                      <div className="faq-card-content">
                        <p className="faq-card-answer">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="faq-cta"
        >
          <p className="faq-cta-text">Can&apos;t find what you&apos;re looking for?</p>
          <a href="/contact" className="faq-cta-button">
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
}
