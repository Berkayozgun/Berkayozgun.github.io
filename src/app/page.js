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
    <div className='flex flex-col min-h-screen'>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={fadeIn}
        transition={transition}
        className='flex flex-grow flex-col w-full h-full items-center justify-center mt-4 scroll-smooth'
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
        <footer className='flex flex-row items-center justify-center self-end text-center w-full py-4 bg-gray-800 mt-auto text-white gap-4'>
          <div className='flex flex-row items-center justify-center text-center gap-4'>
            © 2024 Berkay Özgün
            <span className='text-white'>|</span>
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
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </a>
          </div>
          <div>
            <a href='https://www.linkedin.com/in/berkayozgun'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20px'
                height='20px'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z'
                  fill='#ffffff'
                />
                <path
                  d='M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z'
                  fill='#ffffff'
                />
                <path
                  d='M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z'
                  fill='#fff'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z'
                  fill='#fff'
                />
              </svg>
            </a>
          </div>
          <div className='flex flex-row items-center justify-center text-center gap-4'>
            <a href='https://www.github.com/Berkayozgun/'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20px'
                height='20px'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M4.0744 2.9938C4.13263 1.96371 4.37869 1.51577 5.08432 1.15606C5.84357 0.768899 7.04106 0.949072 8.45014 1.66261C9.05706 1.97009 9.11886 1.97635 10.1825 1.83998C11.5963 1.65865 13.4164 1.65929 14.7213 1.84164C15.7081 1.97954 15.7729 1.97265 16.3813 1.66453C18.3814 0.651679 19.9605 0.71795 20.5323 1.8387C20.8177 2.39812 20.8707 3.84971 20.6494 5.04695C20.5267 5.71069 20.5397 5.79356 20.8353 6.22912C22.915 9.29385 21.4165 14.2616 17.8528 16.1155C17.5801 16.2574 17.3503 16.3452 17.163 16.4167C16.5879 16.6363 16.4133 16.703 16.6247 17.7138C16.7265 18.2 16.8491 19.4088 16.8973 20.4002C16.9844 22.1922 16.9831 22.2047 16.6688 22.5703C16.241 23.0676 15.6244 23.076 15.2066 22.5902C14.9341 22.2734 14.9075 22.1238 14.9075 20.9015C14.9075 19.0952 14.7095 17.8946 14.2417 16.8658C13.6854 15.6415 14.0978 15.185 15.37 14.9114C17.1383 14.531 18.5194 13.4397 19.2892 11.8146C20.0211 10.2698 20.1314 8.13501 18.8082 6.83668C18.4319 6.3895 18.4057 5.98446 18.6744 4.76309C18.7748 4.3066 18.859 3.71768 18.8615 3.45425C18.8653 3.03823 18.8274 2.97541 18.5719 2.97541C18.4102 2.97541 17.7924 3.21062 17.1992 3.49805L16.2524 3.95695C16.1663 3.99866 16.07 4.0147 15.975 4.0038C13.5675 3.72746 11.2799 3.72319 8.86062 4.00488C8.76526 4.01598 8.66853 3.99994 8.58215 3.95802L7.63585 3.49882C7.04259 3.21087 6.42482 2.97541 6.26317 2.97541C5.88941 2.97541 5.88379 3.25135 6.22447 4.89078C6.43258 5.89203 6.57262 6.11513 5.97101 6.91572C5.06925 8.11576 4.844 9.60592 5.32757 11.1716C5.93704 13.1446 7.4295 14.4775 9.52773 14.9222C10.7926 15.1903 11.1232 15.5401 10.6402 16.9905C10.26 18.1319 10.0196 18.4261 9.46707 18.4261C8.72365 18.4261 8.25796 17.7821 8.51424 17.1082C8.62712 16.8112 8.59354 16.7795 7.89711 16.5255C5.77117 15.7504 4.14514 14.0131 3.40172 11.7223C2.82711 9.95184 3.07994 7.64739 4.00175 6.25453C4.31561 5.78028 4.32047 5.74006 4.174 4.83217C4.09113 4.31822 4.04631 3.49103 4.0744 2.9938Z'
                  fill='#fff'
                />
                <path
                  d='M3.33203 15.9454C3.02568 15.4859 2.40481 15.3617 1.94528 15.6681C1.48576 15.9744 1.36158 16.5953 1.66793 17.0548C1.8941 17.3941 2.16467 17.6728 2.39444 17.9025C2.4368 17.9449 2.47796 17.9858 2.51815 18.0257C2.71062 18.2169 2.88056 18.3857 3.05124 18.5861C3.42875 19.0292 3.80536 19.626 4.0194 20.6962C4.11474 21.1729 4.45739 21.4297 4.64725 21.5419C4.85315 21.6635 5.07812 21.7352 5.26325 21.7819C5.64196 21.8774 6.10169 21.927 6.53799 21.9559C7.01695 21.9877 7.53592 21.998 7.99999 22.0008C8.00033 22.5527 8.44791 23.0001 8.99998 23.0001C9.55227 23.0001 9.99998 22.5524 9.99998 22.0001V21.0001C9.99998 20.4478 9.55227 20.0001 8.99998 20.0001C8.90571 20.0001 8.80372 20.0004 8.69569 20.0008C8.10883 20.0026 7.34388 20.0049 6.67018 19.9603C6.34531 19.9388 6.07825 19.9083 5.88241 19.871C5.58083 18.6871 5.09362 17.8994 4.57373 17.2891C4.34391 17.0194 4.10593 16.7834 3.91236 16.5914C3.87612 16.5555 3.84144 16.5211 3.80865 16.4883C3.5853 16.265 3.4392 16.1062 3.33203 15.9454Z'
                  fill='#fff'
                />
              </svg>
            </a>
          </div>
        </footer>
      </motion.div>
    </div>
  );
}
