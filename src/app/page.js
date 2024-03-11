import React from "react";
import Head from "next/head";
import Accordion from "./components/Accordion";
import { data } from "./data/data";

const renderListItems = (items, hasSubtitle = false, subtitleKey) =>
  items.map((item, index) => (
    <li key={index}>
      <h3 className="text-lg font-semibold">{item.title}</h3>
      {hasSubtitle && <p>{item[subtitleKey]}</p>}
    </li>
  ));

const renderCategory = (category) => {
  return (
    <ul>
      {category.items.map((item, index) => (
        <li key={index}>
          {category.title === "Projects" && (
            <p>
              {item.title} - {item.description}
            </p>
          )}
          {category.title === "Experience" && (
            <p>
              {item.duration} - {item.company}
            </p>
          )}
          {category.title === "Education" && (
            <p>
              {item.institution} - {item.degree} - {item.duration} - {item.gpa}
            </p>
          )}
          {category.title === "Skills" && <p>{item}</p>}
          {category.title === "Personal Details" && (
            <p>
              {item.link ? <a href={item.link}>{item.value}</a> : item.value}
            </p>
          )}
          {category.title === "Hobbies/Interests" && <p>{item}</p>}
          {category.title === "Activities" && <p>{item}</p>}
          {category.title === "Certifications" && (
            <p>
              {item.title} - {item.provider}
            </p>
          )}
          {category.title === "References" && (
            <p>
              {item.name} - {item.position} - {item.company} -{" "}
              <a href="mailto:{item.email}">{item.email}</a>
            </p>
          )}
        </li>
      ))}
    </ul>
  );
};

const renderAccordionSection = (category) => (
  <section key={category.title} className="my-8">
    <Accordion title={category.title}>
      {category.subtitle && (
        <h2 className="text-2xl font-bold mb-4">{category.subtitle}</h2>
      )}
      {category.items && renderCategory(category)}
    </Accordion>
  </section>
);

export default function Home() {
  return (
    <div className="w-full items-center justify-center mt-4">
      <Head>
        <title className="mt-4 border">{data.title}x</title>
        <meta name="description" content={data.description} />
      </Head>

      <header className="text-center">
        <h1 className="text-4xl font-bold">{data.name}</h1>
        <p className="text-lg">{data.role}</p>
      </header>

      {data.categories.map(renderAccordionSection)}
      <footer className="text-center py-4 bg-gray-800 text-white">
        <p>
          İletişim: berkayozgun001@gmail.com | LinkedIn:
          linkedin.com/in/berkayozgun
        </p>
      </footer>
    </div>
  );
}
