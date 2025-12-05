import React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { PlusIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from './ui/accordion';
import './FAQ.css';

const items = [
  {
    id: '1',
    title: 'What services does LogozoDev provide?',
    content:
      'LogozoDev offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.',
  },
  {
    id: '2',
    title: 'How can LogozoDev help my business?',
    content:
      'We can help your business by creating innovative digital solutions that enhance your brand presence, improve user engagement, and drive growth through cutting-edge technology and design.',
  },
  {
    id: '3',
    title: 'What industries does LogozoDev work with?',
    content:
      "We work with startups, enterprise leaders, media & publishers, and social good organizations across various industries including e-commerce, healthcare, education, fintech, and more.",
  },
  {
    id: '4',
    title: 'How long does it take to complete a project with LogozoDev?',
    content:
      'Project timelines vary depending on scope and complexity. Typically, web projects take 8-12 weeks, mobile apps 12-16 weeks, and custom software 16-24 weeks. We provide detailed timelines during our initial consultation.',
  },
  {
    id: '5',
    title: 'Do you offer ongoing support and maintenance after the project is completed?',
    content:
      'Yes, we offer comprehensive ongoing support and maintenance packages to ensure your digital products continue to perform optimally. We provide regular updates, security patches, and technical support.',
  },
  {
    id: '6',
    title: 'Can you work with existing design or development frameworks?',
    content:
      'Absolutely! We have experience working with various design systems and development frameworks. We can integrate with your existing tools and technologies or recommend new ones that better suit your needs.',
  },
  {
    id: '7',
    title: 'How involved will I be in the project development process?',
    content:
      "We believe in collaborative partnerships. You'll be involved in every major milestone through regular check-ins, demos, and feedback sessions. We use agile methodologies to ensure transparency and continuous communication.",
  },
  {
    id: '8',
    title: 'Can you help with website or app maintenance and updates?',
    content:
      'Yes, we provide ongoing maintenance and update services including content updates, feature enhancements, performance optimization, and security updates to keep your digital products running smoothly.',
  },
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.4,
    },
  }),
};

export default function FAQ() {
  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <motion.h2
            className="faq-title"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked{' '}
            <span className="faq-title-gradient">
              Questions
            </span>
          </motion.h2>
          <motion.p
            className="faq-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Everything you need to know about LogozoDev and how we can help
            bring your digital vision to life.
          </motion.p>
        </div>
        <motion.div
          className="faq-content-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Decorative gradient */}
          <div className="faq-gradient-1" />
          <div className="faq-gradient-2" />

          <Accordion
            type="single"
            collapsible
            className="faq-accordion"
            defaultValue="1"
          >
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                custom={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={item.id}
                  className="faq-accordion-item"
                >
                  <AccordionPrimitive.Header className="flex">
                    <AccordionPrimitive.Trigger
                      className="faq-accordion-trigger"
                    >
                      {item.title}
                      <PlusIcon
                        size={18}
                        className="faq-plus-icon"
                        aria-hidden="true"
                      />
                    </AccordionPrimitive.Trigger>
                  </AccordionPrimitive.Header>
                  <AccordionContent
                    className="faq-accordion-content"
                  >
                    <div className="faq-content-inner">
                      {item.content}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
