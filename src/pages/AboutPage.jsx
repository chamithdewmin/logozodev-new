import { motion } from "framer-motion";
import "./AboutPage.css";
import Features from "../components/Features";
import Earth from "../components/ui/globe";
import CTA from "../components/CTA";

const AboutPage = () => {
  return (
    <section className="about-page-section">
      <div className="about-page-container">

        <div className="about-hero-section">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              className="about-get-access-btn"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Get Access
            </motion.button>
            
            <motion.h2
              className="about-title"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Welcome To{" "}
              <span className="faq-title-gradient">LogozoDev</span>
            </motion.h2>

            <motion.p
              className="about-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              where innovation meets creativity. We are dedicated to helping you bring your digital vision to life with cutting-edge technology and design.
            </motion.p>
          </motion.div>

          <motion.div
            className="about-globe-wrapper"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="about-globe-container">
              <Earth
                scale={1.1}
                baseColor={[0.65, 0.898, 0.141]}
                markerColor={[0.65, 0.898, 0.141]}
                glowColor={[0.65, 0.898, 0.141]}
              />
            </div>
          </motion.div>
        </div>

        <Features />

      </div>
      
      <CTA />
    </section>
  );
};

export default AboutPage;
