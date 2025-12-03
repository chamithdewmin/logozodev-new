import React from 'react';
import './PageHero.css';
import './ProcessPage.css';
import CTA from '../components/CTA';
import LightRays from '../components/LightRays';

const ProcessPage = () => {
  const processSteps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We begin by understanding your business goals, target audience, and project requirements through detailed consultations.',
      activities: ['Stakeholder Interviews', 'Market Research', 'Requirements Gathering', 'Project Scope Definition']
    },
    {
      number: '02',
      title: 'Planning',
      description: 'Our team creates a comprehensive roadmap with timelines, milestones, and resource allocation for your project.',
      activities: ['Project Timeline', 'Resource Planning', 'Technology Stack Selection', 'Risk Assessment']
    },
    {
      number: '03',
      title: 'Design',
      description: 'We craft user-centric designs that align with your brand and deliver exceptional user experiences.',
      activities: ['Wireframing', 'UI/UX Design', 'Prototyping', 'Design Reviews']
    },
    {
      number: '04',
      title: 'Development',
      description: 'Our engineers build your product using best practices, ensuring scalability, security, and performance.',
      activities: ['Agile Development', 'Code Reviews', 'Testing', 'Integration']
    },
    {
      number: '05',
      title: 'Testing',
      description: 'Rigorous quality assurance ensures your product works flawlessly across all platforms and scenarios.',
      activities: ['Functional Testing', 'Performance Testing', 'Security Testing', 'User Acceptance Testing']
    },
    {
      number: '06',
      title: 'Launch',
      description: 'We deploy your product and provide ongoing support to ensure a smooth launch and continued success.',
      activities: ['Deployment', 'Monitoring', 'Training', 'Maintenance & Support']
    }
  ];

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <div className="light-rays-overlay">
        <LightRays
          raysOrigin="top-center"
          raysColor="#CAFF33"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">Our Process</h1>
          <p className="page-hero-description">
            A proven methodology that transforms ideas into successful digital products through systematic execution.
          </p>
        </div>
      </section>

      <section className="process-steps">
        <div className="container">
          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="process-number">{step.number}</div>
                <div className="process-content">
                  <h2>{step.title}</h2>
                  <p>{step.description}</p>
                  <ul className="process-activities">
                    {step.activities.map((activity, i) => (
                      <li key={i}>{activity}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default ProcessPage;
