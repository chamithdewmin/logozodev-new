import React from 'react';
import './PageHero.css';
import './LegalPage.css';

const PrivacyPage = () => {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">Privacy Policy</h1>
          <p className="page-hero-description">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      <section className="legal-content">
        <div className="container">
          <div className="legal-wrapper">
            <div className="legal-section">
              <h2>1. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, including:
              </p>
              <ul>
                <li>Name and contact information (email address, phone number)</li>
                <li>Company information and project details</li>
                <li>Payment and billing information</li>
                <li>Communications with us</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Monitor and analyze trends and usage</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>3. Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul>
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>With service providers who assist us in operating our business</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div className="privacy-section">
              <h2>5. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </div>

            <div className="privacy-section">
              <h2>6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Data portability</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>7. Children's Privacy</h2>
              <p>
                Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18.
              </p>
            </div>

            <div className="privacy-section">
              <h2>8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </div>

            <div className="privacy-section">
              <h2>9. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hello@logozodev.com">hello@logozodev.com</a>.
              </p>
            </div>

            <div className="legal-updated">
              <p><strong>Last Updated:</strong> January 2025</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPage;

