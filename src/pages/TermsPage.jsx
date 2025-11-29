import React from 'react';
import './PageHero.css';
import './LegalPage.css';

const TermsPage = () => {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">Terms of Use</h1>
          <p className="page-hero-description">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      <section className="legal-content">
        <div className="container">
          <div className="legal-wrapper">
            <div className="legal-section">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using LogozoDev's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div className="terms-section">
              <h2>2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials on LogozoDev's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul>
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on LogozoDev's website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2>3. Service Description</h2>
              <p>
                LogozoDev provides digital solutions including web development, mobile app development, UI/UX design, and related services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
              </p>
            </div>

            <div className="terms-section">
              <h2>4. User Responsibilities</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account or password.
              </p>
            </div>

            <div className="terms-section">
              <h2>5. Intellectual Property</h2>
              <p>
                All content, features, and functionality of our services are owned by LogozoDev and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </div>

            <div className="terms-section">
              <h2>6. Limitation of Liability</h2>
              <p>
                In no event shall LogozoDev or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on LogozoDev's website.
              </p>
            </div>

            <div className="terms-section">
              <h2>7. Revisions and Errata</h2>
              <p>
                The materials appearing on LogozoDev's website could include technical, typographical, or photographic errors. LogozoDev does not warrant that any of the materials on its website are accurate, complete, or current.
              </p>
            </div>

            <div className="terms-section">
              <h2>8. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Use, please contact us at <a href="mailto:hello@logozodev.com">hello@logozodev.com</a>.
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

export default TermsPage;

