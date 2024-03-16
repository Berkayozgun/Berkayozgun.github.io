"use client";
import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Accordion from "./components/Accordion";
import { data } from "./data/data";
import Footer from "./components/Footer";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

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
    <div className='flex flex-col min-h-screen justify-center items-center'>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={fadeIn}
        transition={transition}
        className='flex flex-col w-full h-full items-center justify-center scroll-smooth'
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
          <div className='flex flex-col justify-center items-center w-10/12'>
            {data.categories.map((category, index) => (
              <Accordion
                key={index}
                title={category.title}
                items={category.items}
              />
            ))}
          </div>
        </div>

        <Footer />
      </motion.div>
    </div>
  );
}
