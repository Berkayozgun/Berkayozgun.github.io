// components/Accordion.js
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Accordion.module.css"; // Import the styles

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      animate="visible"
      transition={{ duration: 1 }}
      className={`mb-4 w-3/6 items-center justify-center shadow-lg	${styles.accordion}`}
    >
      {" "}
      {/* Use the accordion style */}
      <div
        className={`bg-gray-200 p-4 cursor-pointer flex justify-between items-center ${styles.tab}`}
        onClick={toggleAccordion}
      >
        <h2>{title}</h2>
        <span
          className={`w-4 h-4 transform ${isOpen ? "rotate-45" : ""}`}
        ></span>
      </div>
      {isOpen && <div className={`p-4 ${styles.tab__content}`}>{children}</div>}
    </motion.div>
  );
};

export default Accordion;
