import React, { useState } from 'react';
import './PageHero.css';
import './TeamSlider.css';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const AboutPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const membersPerView = 5;

  const team = [
    {
      name: 'Chamith Samarakoon',
      role: 'CEO & Founder',
      image: 'https://scontent.fcmb11-1.fna.fbcdn.net/v/t39.30808-1/455477524_1503582034371960_9160044163169225430_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&cb2=99be929b-bd9a46d7&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeHMmqw7tbrHyVPabTBuFBELEn3a7D_p27USfdrsP-nbtTz0H5pJteQ618jMXwFa8LoNUndktOPbTnfV6BTzseki&_nc_ohc=buR5d10xjhQQ7kNvwGCJHkI&_nc_oc=AdmVbf-nMXQbpI5RoXDBV4ywvWJrPFlEPh_66JgOAeQbn1bK53X7fTIe5P-BEaggoQ8arz_IkEeHxIAFxkzxl7sP&_nc_zt=24&_nc_ht=scontent.fcmb11-1.fna&_nc_gid=m-ngVZwuPF10iAHtZILppA&oh=00_AfhHKhe_RpQThOCAnijoz8k1TcyqrspVh6HxJjuRm0Tm9g&oe=69236EC8'
    },
    {
      name: 'Sahanya Hewa',
      role: 'Project Manager',
      image: 'https://scontent.fcmb4-2.fna.fbcdn.net/v/t39.30808-1/448889143_122095417400379523_1851773436145769949_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&cb2=99be929b-bd9a46d7&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeEmBS7kQkO1w-RmAGUN1MQTziu-CW6jAqrOK74JbqMCqvVfJmBPTG7YrdNRfHtY7ljAzW125ES-C_DuTq7Z_t1r&_nc_ohc=8Y4FCgSxY8AQ7kNvwGnRoXZ&_nc_oc=AdkkTvJb2vQCIaIXpLERPPzMnUu8QgsqArotsHJymQWrWaDzMf5OSjC_e-W3nfChoB1xTcK8nBOhu3rzjmcpFp6g&_nc_zt=24&_nc_ht=scontent.fcmb4-2.fna&_nc_gid=MJYyyvsFjkcXJiLqvseBBA&oh=00_Afgujm69sIbaAZLi_MJYEJ04O0A-nBDDozajBySfhDLPJg&oe=69237518'
    },
    {
      name: '-',
      role: 'Lead Software Engineer',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPKQ52P6bM6vxzOWrqBrsNpSpLxAi0zpzT4A&s'
    },
    {
      name: 'Shahen Dulash',
      role: 'Digital Marketing Specialist',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQH3Qbj-AUGkxA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1732173366122?e=1765411200&v=beta&t=DbVWXlp7XBBTFk96IF_ObgLgRhmlZiq443v9AAr5DBw'
    },
      {
      name: 'Shahen Dulash',
      role: 'Digital Marketing Specialist',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQH3Qbj-AUGkxA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1732173366122?e=1765411200&v=beta&t=DbVWXlp7XBBTFk96IF_ObgLgRhmlZiq443v9AAr5DBw'
    },
          {
      name: 'Shahen Dulash',
      role: 'Digital Marketing Specialist',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQH3Qbj-AUGkxA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1732173366122?e=1765411200&v=beta&t=DbVWXlp7XBBTFk96IF_ObgLgRhmlZiq443v9AAr5DBw'
    }

  ];

  const nextSlide = () => {
    if (currentIndex < team.length - membersPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">About Us</h1>
          <p className="page-hero-description">
            We're a passionate team of designers, developers, and strategists dedicated to creating exceptional digital experiences.
          </p>
        </div>
      </section>

      <About />

      <section className="team-section">
        <div className="container">
          <div className="team-header-wrapper">
            <div className="team-text-content">
              <div className="team-badge">Team LogozoDev</div>
              <h2 className="section-title">The Team Behind the Innovation</h2>
              <p className="team-description">
                At LogozoDev, we're a hands-on team of engineers, designers, and researchers building production-ready solutions. 
                We blend product thinking with applied expertise to deliver secure, scalable solutions that create real business impact for our customers.
              </p>
            </div>
            
            <div className="team-navigation">
              <button 
                className="team-nav-arrow" 
                onClick={prevSlide}
                disabled={currentIndex === 0}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              <button 
                className="team-nav-arrow" 
                onClick={nextSlide}
                disabled={currentIndex >= team.length - membersPerView}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="team-slider-wrapper">
            <div 
              className="team-slider-track" 
              style={{ 
                transform: `translateX(-${currentIndex * (100 / membersPerView)}%)`,
                width: `${(team.length / membersPerView) * 100}%`
              }}
            >
              {team.map((member, index) => (
                <div key={index} className="team-member">
                  <div className="team-image-wrapper">
                    <img src={member.image} alt={member.name} className="team-image" />
                  </div>
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <CTA />
    </>
  );
};

export default AboutPage;
