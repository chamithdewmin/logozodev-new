import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What services does LogozoDev provide?",
      answer: "LogozoDev offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
    },
    {
      question: "How can LogozoDev help my business?",
      answer: "We can help your business by creating innovative digital solutions that enhance your brand presence, improve user engagement, and drive growth through cutting-edge technology and design."
    },
    {
      question: "What industries does LogozoDev work with?",
      answer: "We work with startups, enterprise leaders, media & publishers, and social good organizations across various industries including e-commerce, healthcare, education, fintech, and more."
    },
    {
      question: "How long does it take to complete a project with LogozoDev?",
      answer: "Project timelines vary depending on scope and complexity. Typically, web projects take 8-12 weeks, mobile apps 12-16 weeks, and custom software 16-24 weeks. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you offer ongoing support and maintenance after the project is completed?",
      answer: "Yes, we offer comprehensive ongoing support and maintenance packages to ensure your digital products continue to perform optimally. We provide regular updates, security patches, and technical support."
    },
    {
      question: "Can you work with existing design or development frameworks?",
      answer: "Absolutely! We have experience working with various design systems and development frameworks. We can integrate with your existing tools and technologies or recommend new ones that better suit your needs."
    },
    {
      question: "How involved will I be in the project development process?",
      answer: "We believe in collaborative partnerships. You'll be involved in every major milestone through regular check-ins, demos, and feedback sessions. We use agile methodologies to ensure transparency and continuous communication."
    },
    {
      question: "Can you help with website or app maintenance and updates?",
      answer: "Yes, we provide ongoing maintenance and update services including content updates, feature enhancements, performance optimization, and security updates to keep your digital products running smoothly."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-description">
            Still you have any questions? Contact our Team via hello@logozodev.com
          </p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <div className="faq-number">{String(index + 1).padStart(2, '0')}</div>
                <h3>{faq.question}</h3>
                <div className="faq-icon">
                  {openIndex === index ? '✕' : '+'}
                </div>
              </div>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
