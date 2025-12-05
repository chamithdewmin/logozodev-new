import { motion } from "framer-motion";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <section className="about-page-section">
      <div className="about-page-container">

        <div className="faq-header">
          <motion.h2
            className="faq-title"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome To{" "}
            <span className="faq-title-gradient">LogozoDev</span>
          </motion.h2>

          <motion.p
            className="faq-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            where innovation meets creativity. We are dedicated to helping you bring your digital vision to life with cutting-edge technology and design.
          </motion.p>
        </div>

      </div>
    </section>
  );
};

export default AboutPage;
