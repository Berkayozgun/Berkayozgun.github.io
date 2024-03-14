"use client";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const AccordionItem = ({ item, category }) => {
  switch (category) {
    case "Projects":
      return (
        <div className='flex flex-col w-5/12 flex-wrap border border-gray-200 rounded-lg p-4 shadow-xl justify-evenly hover:shadow-2xl transition-all duration-500 ease-in-out'>
          <h3 className='flex text-md font-semibold'>{item.title}</h3>
          <p className='flex text-sm italic text-gray-600 mt-6'>
            {item.description}
          </p>
        </div>
      );
    case "Experience":
      return (
        <div className='flex flex-col flex-wrap p-4 text-black'>
          <ol className='relative border-s-2 border-gray-200 dark:border-gray-400'>
            <li className='mb-10 ms-6'>
              <span className='absolute flex items-center justify-center h-6 w-6 shadow-2xl rounded-full -start-3 ring-8 ring-white dark:ring-white '>
                <Image
                  src={item.companyLogoUrl}
                  alt='company logo'
                  width={50}
                  height={50}
                  className='rounded-full shadow-xl'
                />
              </span>
              <h3 className='flex items-center mb-1 text-lg font-semibold text-gray-900 text-black'>
                <h3>{item.company}</h3>
              </h3>
              <time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
                {item.position}
              </time>
              <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
                <p>{item.duration}</p>
              </p>
              <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
                <p>{item.description}</p>
              </p>
            </li>
          </ol>
        </div>
      );
    case "Education":
      return (
        <div className='flex flex-col w-full p-4 text-black'>
          <ol className='relative border-s-2 border-gray-200 dark:border-gray-400'>
            <li className='mb-10 ms-6'>
              <span className='absolute flex items-center justify-center h-6 w-6 shadow-2xl rounded-full -start-3 ring-8 ring-white dark:ring-white '>
                <Image
                  src={item.logoUrl}
                  alt='company logo'
                  width={50}
                  height={50}
                  className='rounded-full shadow-xl'
                />
              </span>
              <h3 className='flex items-center mb-1 text-lg font-semibold text-gray-900 text-black'>
                <h3>{item.institution}</h3>
              </h3>
              <time className='flex w-full mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
                {item.degree}
              </time>
              <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
                <p>{item.duration}</p>
              </p>
              <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
                <p>{item.gpa ? <p>{item.gpa}</p> : ""}</p>
              </p>
            </li>
          </ol>
        </div>
      );
    case "Skills":
      return (
        <div className='flex flex-row justify-around'>
          <span className='flex bg-blue-100 text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-500 dark:text-blue-50'>
            {item}
          </span>
        </div>
      );
    case "Activities":
      return (
        <div className='flex flex-col text-black shadow-xl rounded-xl p-2 w-full'>
          <ul
            role='list'
            className='flex w-full divide-y divide-gray-200 dark:divide-gray-700'
          >
            <li className='flex py-4 w-full'>
              <div className='flex items-center w-full gap-4'>
                <div className='flex-shrink-0'>
                  <img
                    className='w-8 h-8 rounded-full'
                    src={item.communityLogo}
                    alt='Neil image'
                  />
                </div>
                <div className='flex-1 min-w-0'>
                  <p className='text-sm font-semibold text-gray-900 truncate dark:text-black'>
                    {item.communityName}
                  </p>
                  <p className='text-sm text-gray-500 truncate dark:text-gray-400'>
                    {item.duration}
                  </p>
                </div>
                <span className='inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300'>
                  <span className='w-2 h-2 me-1 bg-green-500 rounded-full'></span>
                  {item.role}
                </span>
              </div>
            </li>
          </ul>
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
          className={`w-4 h-4 transform rotate-180 ${
            isOpen ? "rotate-90 duration-1000" : ""
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
          className={`p-4 flex flex-wrap bg-gray-50 
           overflow-hidden transition-all duration-100 gap-4 justify-around`}
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
