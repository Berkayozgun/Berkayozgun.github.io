"use client";
import * as React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Accordion from "./components/Accordion";
import { data } from "./data/data";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const transition = {
  delay: 0.5,
  ease: "easeOut",
  duration: 0.5,
};

export default function Home() {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={fadeIn}
      transition={transition}
      className='flex flex-col w-full items-center justify-center mt-4 scroll-smooth'
    >
      <Head>
        <title className='mt-4'>{data.title}x</title>
        <meta name='description' content={data.description} />
      </Head>
      <motion.header
        initial='hidden'
        animate='visible'
        variants={fadeIn}
        transition={transition}
        className='text-center'
      >
        <h1 className='text-4xl font-bold'>{data.name}</h1>
        <p className='text-lg'>{data.role}</p>
      </motion.header>
      <div className='flex flex-col justify-center items-center mt-4  w-full'>
        <div className='flex flex-col justify-center items-center w-4/6'>
          {data.categories.map((category, index) => (
            <Accordion key={index} title={category.title}>
              {category.items.map((item, index) =>
                category.title === "Projects" ? (
                  <div key={index} className='flex flex-col'>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                ) : category.title === "Experience" ? (
                  <div key={index} className='flex flex-col'>
                    <h3>{item.company}</h3>
                    <p>{item.position}</p>
                    <p>{item.duration}</p>
                  </div>
                ) : category.title === "Education" ? (
                  <div key={index} className='flex flex-col'>
                    <h3>{item.institution}</h3>
                    <p>{item.degree}</p>
                    <p>{item.duration}</p>
                    {item.gpa ? <p>{item.gpa}</p> : ""}
                  </div>
                ) : category.title === "Skills" ? (
                  <div key={index} className='flex flex-col'>
                    <h3>{item}</h3>
                  </div>
                ) : category.title === "Personal Details" ? (
                  <div key={index} className='flex flex-col'>
                    <h3>
                      {item.label} : {item.value}{" "}
                      <a href={item.link}>{item.link}</a>
                    </h3>
                  </div>
                ) : category.title === "Hobbies/Interests" ? (
                  <div key={index} className='flex flex-col'>
                    <h3>{item}</h3>
                  </div>
                ) : category.title === "Activities" ? (
                  <div key={index} className='flex flex-col'>
                    <h3>{item}</h3>
                  </div>
                ) : category.title === "Certifications" ? (
                  <div key={index} className='flex flex-col'>
                    <h3>{item.title}</h3>
                    <p>{item.provider}</p>
                  </div>
                ) : category.title === "References" ? (
                  <div key={index} className='flex flex-col'>
                    <h3>{item.name}</h3>
                    <p>{item.position}</p>
                    <p>{item.company}</p>
                    <p>{item.email}</p>
                    <p>{item.link}</p>
                  </div>
                ) : (
                  <div key={index} className='flex flex-col'>
                    <h3>{item}</h3>
                  </div>
                )
              )}
            </Accordion>
          ))}
        </div>
      </div>
      <footer className='flex flex-row items-center justify-center text-center w-full py-4 bg-gray-800 text-white'>
        <div>
          © 2024 Berkay Özgün İletişim:{" "}
          <a href='mailto:berkayozgun001@gmail.com'>
            <svg
              width='20px'
              height='20px'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M21 8L17.4392 9.97822C15.454 11.0811 14.4614 11.6326 13.4102 11.8488C12.4798 12.0401 11.5202 12.0401 10.5898 11.8488C9.53864 11.6326 8.54603 11.0811 6.5608 9.97822L3 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z'
                stroke='#ffffff'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </a>
        </div>
        <div>
          LinkedIn:{" "}
          <a href='https://www.linkedin.com/in/berkayozgun'>linkedin</a>
        </div>
      </footer>
    </motion.div>
  );
}
