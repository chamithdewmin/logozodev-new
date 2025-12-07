import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import "./TeamSection.css";

const defaultMembers = [
  {
    name: "Chamith Samarakoon",
    role: "Chief Executive Officer",
    imageUrl: "https://scontent.fcmb4-2.fna.fbcdn.net/v/t39.30808-1/455477524_1503582034371960_9160044163169225430_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&cb2=99be929b-bd9a46d7&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeHMmqw7tbrHyVPabTBuFBELEn3a7D_p27USfdrsP-nbtTz0H5pJteQ618jMXwFa8LoNUndktOPbTnfV6BTzseki&_nc_ohc=hEpDEWZsnCcQ7kNvwEMxh9N&_nc_oc=AdksxkjWsxieGPKiKsoRoGS76T-nTLn6o6lxy8oMB2xYwo3AJ8PPHh7mc2kR5dFm1QAArSANf_Kie2sbju4D81lZ&_nc_zt=24&_nc_ht=scontent.fcmb4-2.fna&_nc_gid=xIyIuY7dXPafhGyjav0PjQ&oh=00_AfnIkS-2rDqdtqZHzLPtoWaJC9-C72C8PGI_h-MF_YX3Sw&oe=693B9A48",
    socialLinks: [
      { platform: "instagram", url: "https://instagram.com" },
      { platform: "linkedin", url: "https://linkedin.com" },
    ],
  },
  {
    name: "Sahanya Hewa",
    role: "Chief Operations Officer",
    imageUrl: "https://scontent.fcmb4-2.fna.fbcdn.net/v/t39.30808-6/448889143_122095417400379523_1851773436145769949_n.jpg?_nc_cat=104&cb2=99be929b-bd9a46d7&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEmBS7kQkO1w-RmAGUN1MQTziu-CW6jAqrOK74JbqMCqvVfJmBPTG7YrdNRfHtY7ljAzW125ES-C_DuTq7Z_t1r&_nc_ohc=6oa2UDuLnB8Q7kNvwHShy_Y&_nc_oc=AdmYfL3QBBFfMUleQeK3jsWr4iK2BTIZ-JF4Gd8Egeqp5lj0_TnQJtfIo7ngi5uSgGYhWXuTl_3C5S-IwLgIEceQ&_nc_zt=23&_nc_ht=scontent.fcmb4-2.fna&_nc_gid=Y9QyZl6DeL0A2hKddHiGSQ&oh=00_AfnBncs5RdOF7EIKTHksWCkO4O52Yyfjtt5fB5-pz9g09g&oe=693B7F33",
    socialLinks: [
      { platform: "twitter", url: "https://twitter.com" },
      { platform: "github", url: "https://github.com" },
      { platform: "linkedin", url: "https://linkedin.com" },
    ],
  },
  {
    name: "Shahen Dulash",
    role: "Digital Marketer",
    imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQH3Qbj-AUGkxA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732173366141?e=1766620800&v=beta&t=whEWZF-7idITRjRvy_n_u8GZETacn2PpxxpVwbt6sZU",
    socialLinks: [
      { platform: "github", url: "https://github.com" },
      { platform: "linkedin", url: "https://linkedin.com" },
    ],
  },
  {
    name: "Helene Engels",
    role: "Front-end Developer",
    imageUrl: "https://case.edu.pk/wp-content/uploads/2025/09/icon-7797704_640.png",
    socialLinks: [
      { platform: "twitter", url: "https://twitter.com" },
      { platform: "github", url: "https://github.com" },
    ],
  },
  {
    name: "Thom Belly",
    role: "UI/UX Designer",
    imageUrl: "https://case.edu.pk/wp-content/uploads/2025/09/icon-7797704_640.png",
    socialLinks: [
      { platform: "twitter", url: "https://twitter.com" },
      { platform: "linkedin", url: "https://linkedin.com" },
    ],
  },
  {
    name: "Bonnie Green",
    role: "Product Manager",
    imageUrl: "https://case.edu.pk/wp-content/uploads/2025/09/icon-7797704_640.png",
    socialLinks: [
      { platform: "github", url: "https://github.com" },
      { platform: "linkedin", url: "https://linkedin.com" },
    ],
  },
  {
    name: "Roberta Casas",
    role: "Content Strategist",
    imageUrl: "https://case.edu.pk/wp-content/uploads/2025/09/icon-7797704_640.png",
    socialLinks: [
      { platform: "twitter", url: "https://twitter.com" },
      { platform: "linkedin", url: "https://linkedin.com" },
    ],
  },
  {
    name: "Jesse Leos",
    role: "Back-end Developer",
    imageUrl: "https://case.edu.pk/wp-content/uploads/2025/09/icon-7797704_640.png",
    socialLinks: [
      { platform: "github", url: "https://github.com" },
      { platform: "linkedin", url: "https://linkedin.com" },
    ],
  },
];

const TeamSection = ({
  title = "Our people make us great",
  subtitle = "You'll interact with talented professionals, will be challenged to solve difficult problems and think in new and creative ways.",
  members = defaultMembers,
}) => {
  return (
    <section className="about-team-section">
      <div className="about-team-background">
        <div className="about-team-gradient-1"></div>
        <div className="about-team-gradient-2"></div>
        <div className="about-team-gradient-3"></div>
      </div>

      <div className="about-team-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="about-team-header"
        >
          <h2 className="about-team-title">{title}</h2>
          <p className="about-team-subtitle">{subtitle}</p>
        </motion.div>

        <div className="about-team-grid">
          {members.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

function TeamMemberCard({ member, index }) {
  const getIcon = (platform) => {
    switch (platform) {
      case "github":
        return <Github className="about-team-social-icon" />;
      case "twitter":
        return <Twitter className="about-team-social-icon" />;
      case "linkedin":
        return <Linkedin className="about-team-social-icon" />;
      case "instagram":
        return <Instagram className="about-team-social-icon" />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 * (index % 4) }}
      viewport={{ once: true }}
      className="about-team-member-card"
    >
      <div className="about-team-image-container">
        <div className="about-team-image-overlay"></div>
        <img
          src={member.imageUrl}
          alt={member.name}
          className="about-team-image"
        />

        {member.socialLinks && (
          <div className="about-team-social-links">
            {member.socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="about-team-social-link"
              >
                {getIcon(link.platform)}
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="about-team-member-info">
        <h3 className="about-team-member-name">{member.name}</h3>
        <p className="about-team-member-role">{member.role}</p>
      </div>
    </motion.div>
  );
}

export default TeamSection;
