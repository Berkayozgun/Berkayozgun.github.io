"use client";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const AccordionItem = ({ item, category }) => {
  switch (category) {
    case "Projects":
      return (
        <div className='flex flex-col'>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      );
    case "Experience":
      return (
        <div className='flex flex-col'>
          <h3>{item.company}</h3>
          <p>{item.position}</p>
          <p>{item.duration}</p>
        </div>
      );
    case "Education":
      return (
        <div className='flex flex-col'>
          <h3>{item.institution}</h3>
          <p>{item.degree}</p>
          <p>{item.duration}</p>
          {item.gpa ? <p>{item.gpa}</p> : ""}
        </div>
      );
    case "Skills":
    case "Hobbies/Interests":
    case "Activities":
      return (
        <div className='flex flex-col'>
          <h3>{item}</h3>
        </div>
      );
    case "Personal Details":
      return (
        <div className='flex flex-col'>
          <h3>
            {item.label} : {item.value} <a href={item.link}>{item.link}</a>
          </h3>
        </div>
      );
    case "Certifications":
      return (
        <div className='flex flex-col'>
          <h3>{item.title}</h3>
          <p>{item.provider}</p>
        </div>
      );
    case "References":
      return (
        <div className='flex flex-col'>
          <h3>{item.name}</h3>
          <p>{item.position}</p>
          <p>{item.company}</p>
          <p>{item.email}</p>
          <p>{item.link}</p>
        </div>
      );
    default:
      return (
        <div className='flex flex-col'>
          <h3>{item}</h3>
        </div>
      );
  }
};

const Accordion = ({ title, items }) => {
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
        <h2 className={isOpen ? "text-red-500 duration-500" : ""}>{title}</h2>
        <span
          className={`w-4 h-4 transform ${
            isOpen ? "rotate-180 duration-1000" : ""
          }`}
        >
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
          {items.map((item, index) => (
            <AccordionItem key={index} item={item} category={title} />
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Accordion;
