import React from 'react';
import './TrustedCompanies.css';

const companies = [
  { name: 'Google', logo: 'https://logozodev.com/assets/img/brand/vl-brand-1.1.png' },
  { name: 'Microsoft', logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-5.svg' },
  { name: 'Apple', logo: 'https://cdn.worldvectorlogo.com/logos/apple-11.svg' },
  { name: 'Netflix', logo: 'https://logozodev.com/assets/img/brand/vl-brand-1.1.png' },
  { name: 'Adobe', logo: 'https://zenithscs.vercel.app/assets/logo-light-DFpW3abd.svg' },
  { name: 'Salesforce', logo: 'https://cdn.worldvectorlogo.com/logos/salesforce-2.svg' },
  { name: 'Oracle', logo: 'https://cdn.worldvectorlogo.com/logos/oracle-6.svg' },
  { name: 'IBM', logo: 'https://cdn.worldvectorlogo.com/logos/ibm-1.svg' },
  { name: 'Spotify', logo: 'https://cdn.worldvectorlogo.com/logos/spotify-2.svg' },
  { name: 'Slack', logo: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg' },
  { name: 'Zoom', logo: 'https://cdn.worldvectorlogo.com/logos/zoom-communications-logo.svg' },
  { name: 'Shopify', logo: 'https://cdn.worldvectorlogo.com/logos/shopify.svg' },
  { name: 'Atlassian', logo: 'https://cdn.worldvectorlogo.com/logos/atlassian-1.svg' },
  { name: 'Airbnb', logo: 'https://cdn.worldvectorlogo.com/logos/airbnb-2.svg' },
  { name: 'PayPal', logo: 'https://cdn.worldvectorlogo.com/logos/paypal-2.svg' },
  { name: 'Intel', logo: 'https://cdn.worldvectorlogo.com/logos/intel-2.svg' },
  { name: 'NVIDIA', logo: 'https://cdn.worldvectorlogo.com/logos/nvidia.svg' },
  { name: 'SAP', logo: 'https://cdn.worldvectorlogo.com/logos/sap-2.svg' },
  { name: 'Cisco', logo: 'https://cdn.worldvectorlogo.com/logos/cisco-2.svg' },
  { name: 'Twitter', logo: 'https://cdn.worldvectorlogo.com/logos/twitter-6.svg' },
  { name: 'LinkedIn', logo: 'https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg' },
  { name: 'Tesla', logo: 'https://cdn.worldvectorlogo.com/logos/tesla-9.svg' }
];

const TrustedCompanies = () => {
  // Double the companies array for seamless loop
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="trusted-companies">
      <div className="container">
        <div className="trust-pill">Trusted By 250+ Companies</div>
        <div className="logo-loop-container">
          <div className="logo-loop">
            {duplicatedCompanies.map((c, i) => (
              <div key={i} className="company-logo">
                <img src={c.logo} alt={c.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;