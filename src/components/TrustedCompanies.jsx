import React from 'react';
import './TrustedCompanies.css';

const companies = [
  { name: 'Zapier', logo: 'https://cdn.worldvectorlogo.com/logos/zapier-logo.svg' },
  { name: 'Spotify', logo: 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png' },
  { name: 'Zoom', logo: 'https://cdn.worldvectorlogo.com/logos/zoom-communications-logo.svg' },
  { name: 'Slack', logo: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg' },
  { name: 'Amazon', logo: 'https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg' },
  { name: 'Adobe', logo: 'https://cdn.worldvectorlogo.com/logos/adobe-2.svg' }
];

const TrustedCompanies = () => {
  return (
    <section className="trusted-companies">
      <div className="container">
        <div className="trust-pill">Trusted By 250+ Companies</div>
        <div className="companies-grid">
          {companies.map((c, i) => (
            <div key={i} className="company-logo">
              <img src={c.logo} alt={c.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;