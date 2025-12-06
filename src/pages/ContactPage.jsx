import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Check, Loader2 } from 'lucide-react';
import SparklesCore from '../components/SparklesCore';
import Earth from '../components/ui/globe';
import './ContactPage.css';

const ContactPage = () => {
  const location = useLocation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, amount: 0.3 });

  // Pre-fill form data from navigation state
  useEffect(() => {
    if (location.state?.prefillSubject) {
      setSubject(location.state.prefillSubject);
    }
    if (location.state?.prefillMessage) {
      setMessage(location.state.prefillMessage);
    }
  }, [location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Perform form submission logic here
      console.log('Form submitted:', { name, email, phone, subject, message });
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full relative bg-black">
      <section className="contact-page-section">
        <div
          className="contact-glow-1"
          style={{
            background: `radial-gradient(circle at center, #CAFF33, transparent 70%)`,
          }}
        />
        <div
          className="contact-glow-2"
          style={{
            background: `radial-gradient(circle at center, #CAFF33, transparent 70%)`,
          }}
        />
        <div className="contact-container">
          <div className="contact-card">
            <div className="contact-grid">
              <div className="contact-form-wrapper" ref={formRef}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="contact-header"
                >
                  <h2 className="contact-title">
                    Contact
                  </h2>
                  <span className="contact-title-accent">
                    Us
                  </span>
                  <SparklesCore
                    id="tsparticles"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={500}
                    className="sparkles-overlay"
                    particleColor="#CAFF33"
                  />
                </motion.div>

                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.3 }}
                  onSubmit={handleSubmit}
                  className="contact-form"
                >
                  <div className="form-row">
                    <motion.div
                      className="form-group"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <label htmlFor="name" className="form-label">Name</label>
                      <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        required
                        className="form-input"
                      />
                    </motion.div>
                    <motion.div
                      className="form-group"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <label htmlFor="email" className="form-label">Email</label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="form-input"
                      />
                    </motion.div>
                  </div>

                  <div className="form-row">
                    <motion.div
                      className="form-group"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.55 }}
                    >
                      <label htmlFor="phone" className="form-label">Phone</label>
                      <input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter your phone number"
                        required
                        className="form-input"
                      />
                    </motion.div>
                    <motion.div
                      className="form-group"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <label htmlFor="subject" className="form-label">Subject</label>
                      <input
                        id="subject"
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Enter subject"
                        required
                        className="form-input"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    className="form-group"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65 }}
                  >
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Enter your message"
                      required
                      className="form-textarea"
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="form-button-wrapper"
                  >
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="form-submit-button"
                    >
                      {isSubmitting ? (
                        <span className="button-content">
                          <Loader2 className="button-icon spin" />
                          Sending...
                        </span>
                      ) : isSubmitted ? (
                        <span className="button-content">
                          <Check className="button-icon" />
                          Message Sent!
                        </span>
                      ) : (
                        <span>Send Message</span>
                      )}
                    </button>
                  </motion.div>
                </motion.form>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="contact-globe-wrapper"
              >
                <div className="globe-container">
                  <article className="globe-card">
                    Creative <br />
                   Solution In Every Dimension
                    <div className="globe-3d-wrapper">
                      <Earth
                        scale={1.1}
                        baseColor={[0.65, 0.898, 0.141]}
                        markerColor={[0.65, 0.898, 0.141]}
                        glowColor={[0.65, 0.898, 0.141]}
                      />
                    </div>
                  </article>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

