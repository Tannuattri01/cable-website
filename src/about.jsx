import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="main-about-section" id="about">
      <div className="about-section">
        <h1>About</h1>
        <p className="para-lines">
          Cable Critters save your cables from fraying. These heroic little guys
          slide over your cable and bite onto the lightning or USB connector,
          keeping it from bending and fraying. They are compatible with most
          cables and make for the perfect iPhone, Android, Mac, and keyboard
          accessories.
        </p>
      </div>

      <div className="about-img">
        <motion.img
          className="img1"
          src="/animate cable1.png"
          alt="image1"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        <motion.img
          className="img2"
          src="/animate cable2.png"
          alt="image2"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        />

        <motion.img
          className="img3"
          src="/animate cable3.png"
          alt="image3"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
}

export default About;

