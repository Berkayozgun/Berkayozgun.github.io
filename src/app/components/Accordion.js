// components/Accordion.js
"use client";
import { useState } from "react";
import styles from "./Accordion.module.css"; // Import the styles

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`border mb-4 ${styles.accordion}`}>
      {" "}
      {/* Use the accordion style */}
      <div
        className={`bg-gray-200 p-4 cursor-pointer flex justify-between items-center ${styles.tab}`}
        onClick={toggleAccordion}
      >
        <h2>{title}</h2>
        <span
          className={`w-4 h-4 border-t border-r transform ${
            isOpen ? "rotate-45" : ""
          }`}
        ></span>
      </div>
      {isOpen && <div className={`p-4 ${styles.tab__content}`}>{children}</div>}
    </div>
  );
};

export default Accordion;
