import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './WorkCard.css';

const WorkCard = ({ project, onLearnMore }) => {
  const projectImage = project.projectImages && project.projectImages.length > 0 
    ? project.projectImages[0] 
    : project.image;

  const handleCardClick = (e) => {
    onLearnMore(project);
  };

  const getTechIcon = (tech) => {
    const icons = {
      'Spring Boot': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      'Flutter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
      'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
      '.NET': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg'
    };
    return icons[tech] || null;
  };

  return (
    <div className="work-card-wrapper">
      <div 
        className="work-card group"
        onClick={handleCardClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onLearnMore(project);
          }
        }}
      >
        <figure className="work-card-figure">
          <div className="work-card-gradient-overlay"></div>
          <img
            src={projectImage}
            alt={project.title}
            className="work-card-image"
          />
        </figure>
        
        <article className="work-card-content">
          <img 
            src="https://logozodev.com/invoice-demo3/assets/logozodev.png"
            alt="LogozoDev Logo"
            className="work-card-logo"
          />
          
          <h1 className="work-card-title">
            {project.title}
          </h1>
          
          <p className="work-card-description">
            {project.description || project.fullDescription?.substring(0, 120) + '...'}
          </p>
          
          {project.technologies && project.technologies.length > 0 && (
            <div className="work-card-tech-icons">
              {project.technologies.map((tech, index) => (
                <div key={index} className="work-card-tech-icon" title={tech}>
                  {getTechIcon(tech) && (
                    <img 
                      src={getTechIcon(tech)} 
                      alt={tech} 
                      className="tech-icon-img"
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </article>
        
        <div className="work-card-arrow-icon">
          <ArrowUpRight size={24} />
        </div>
      </div>
    </div>
  );
};

export default WorkCard;

