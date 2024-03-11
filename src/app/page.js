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
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={transition}
      className="flex flex-col w-full items-center justify-center mt-4"
    >
      <Head>
        <title className="mt-4">{data.title}x</title>
        <meta name="description" content={data.description} />
      </Head>
      <motion.header
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={transition}
        className="text-center"
      >
        <h1 className="text-4xl font-bold">{data.name}</h1>
        <p className="text-lg">{data.role}</p>
      </motion.header>
      <div className="flex flex-col justify-center items-center mt-4  w-full">
        <div className="flex flex-col justify-center items-center w-4/6">
          {data.categories.map((category, index) => (
            <Accordion key={index} title={category.title}>
              {category.items.map((item, index) =>
                category.title === "Projects" ? (
                  <div key={index} className="flex flex-col">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                ) : category.title === "Experience" ? (
                  <div key={index} className="flex flex-col">
                    <h3>{item.company}</h3>
                    <p>{item.position}</p>
                    <p>{item.duration}</p>
                  </div>
                ) : category.title === "Education" ? (
                  <div key={index} className="flex flex-col">
                    <h3>{item.institution}</h3>
                    <p>{item.degree}</p>
                    <p>{item.duration}</p>
                    {item.gpa ? <p>{item.gpa}</p> : ""}
                  </div>
                ) : category.title === "Skills" ? (
                  <div key={index} className="flex flex-col">
                    <h3>{item}</h3>
                  </div>
                ) : category.title === "Personal Details" ? (
                  <div key={index} className="flex flex-col">
                    <h3>
                      {item.label} : {item.value}{" "}
                      <a href={item.link}>{item.link}</a>
                    </h3>
                  </div>
                ) : category.title === "Hobbies/Interests" ? (
                  <div key={index} className="flex flex-col">
                    <h3>{item}</h3>
                  </div>
                ) : category.title === "Activities" ? (
                  <div key={index} className="flex flex-col">
                    <h3>{item}</h3>
                  </div>
                ) : category.title === "Certifications" ? (
                  <div key={index} className="flex flex-col">
                    <h3>{item.title}</h3>
                    <p>{item.provider}</p>
                  </div>
                ) : category.title === "References" ? (
                  <div key={index} className="flex flex-col">
                    <h3>{item.name}</h3>
                    <p>{item.position}</p>
                    <p>{item.company}</p>
                    <p>{item.email}</p>
                    <p>{item.link}</p>
                  </div>
                ) : (
                  <div key={index} className="flex flex-col">
                    <h3>{item}</h3>
                  </div>
                )
              )}
            </Accordion>
          ))}
        </div>
      </div>
      <footer className="text-center w-full py-4 bg-gray-800 text-white">
        <p>
          İletişim: <a href="mailto:berkayozgun001@gmail.com">mail</a> |
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/berkayozgun">linkedin</a>
        </p>
      </footer>
    </motion.div>
  );
}
