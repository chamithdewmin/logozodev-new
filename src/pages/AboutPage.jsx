import React from 'react';
import './PageHero.css';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const AboutPage = () => {
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
      role: 'Senior Developer',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPKQ52P6bM6vxzOWrqBrsNpSpLxAi0zpzT4A&s'
    },
    {
      name: 'Shahen Dulash',
      role: 'Digital Marketing Specialist',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQH3Qbj-AUGkxA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1732173366122?e=1765411200&v=beta&t=DbVWXlp7XBBTFk96IF_ObgLgRhmlZiq443v9AAr5DBw'
    }
  ];

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

      <section className="about-story" style={{ padding: '100px 0', background: 'var(--darker-bg)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="section-title" style={{ marginBottom: '30px' }}>Our Story</h2>
            <p className="section-description" style={{ marginBottom: '20px' }}>
              Founded in 2020, SquareUp began with a simple mission: to help businesses thrive in the digital age. 
              What started as a small team of passionate creators has grown into a full-service digital agency trusted by over 250 companies worldwide.
            </p>
            <p className="section-description">
              We believe in the power of great design and solid engineering to transform businesses. Every project we undertake 
              is an opportunity to push boundaries, challenge conventions, and deliver results that exceed expectations.
            </p>
          </div>
        </div>
      </section>

      <About />

      <section className="team-section" style={{ padding: '100px 0', background: 'var(--dark-bg)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="section-title">Our Team</h2>
            <p className="section-description">
              Meet the talented individuals who bring your digital dreams to life.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
            {team.map((member, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <img 
                  src={member.image} 
                  alt={member.name}
                  style={{ 
                    width: '180px', 
                    height: '180px', 
                    borderRadius: '50%', 
                    marginBottom: '20px',
                    border: '3px solid var(--primary-color)'
                  }}
                />
                <h3 style={{ fontSize: '22px', marginBottom: '8px', color: 'var(--text-primary)' }}>{member.name}</h3>
                <p style={{ color: 'var(--primary-color)', fontSize: '16px' }}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTA />
    </>
  );
};

export default AboutPage;
