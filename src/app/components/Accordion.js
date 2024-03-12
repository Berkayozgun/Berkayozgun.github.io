// components/Accordion.js
"use client";
import { useState } from "react";
import { motion } from "framer-motion"; // Stil dosyasını içeri aktarın

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const accordionVariants = {
    open: { height: "auto", opacity: 1 },
    closed: { height: 0, opacity: 0 },
  };

  return (
    <motion.div
      variants={accordionVariants}
      animate='visible'
      transition={{ duration: 1 }}
      className={`mb-4 w-3/6 items-center justify-center shadow-md hover:shadow-xl transition-all duration-500 ease-in-out `}
    >
      <div
        className={`bg-gray-200 p-4 cursor-pointer flex justify-between items-center `}
        onClick={toggleAccordion}
      >
        <h2>{title}</h2>
        <span className={`w-4 h-4 transform ${isOpen ? "rotate-180" : ""}`}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20px'
            height='20px'
            viewBox='0 0 24 24'
            fill='none'
          >
            <path
              d='M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z'
              fill='#0F0F0F'
            />
          </svg>
        </span>
      </div>
      {isOpen && (
        <motion.div
          variants={fadeIn}
          initial='hidden'
          animate='visible'
          className={`p-4 
           max-h-min-content overflow-hidden transition-all duration-1000`}
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Accordion;
