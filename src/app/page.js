// pages/index.js
import React from "react"; // Add missing import for React
import Head from "next/head";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Berkay Özgün - Portfolio</title>
        <meta name="description" content="Yazılım geliştirici portföyü" />
      </Head>

      <header className="text-center">
        <h1 className="text-4xl font-bold">Berkay Özgün</h1>
        <p className="text-lg">Software Developer</p>
      </header>

      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <ul>
          <li>
            <h3 className="text-lg font-semibold">
              Notification Center Management Tool at JotForm
            </h3>
            <p> Jotform`da kullanılan bildirim merkezi yönetim aracı.</p>
          </li>
          <li>
            <h3 className="text-lg font-semibold">
              Campfire Microblog-Fullstack on Sixfab
            </h3>
            <p>Kısa açıklama...</p>
          </li>
          <li>
            <h3 className="text-lg font-semibold">Flight Ticket App</h3>
            <p>Kısa açıklama...</p>
          </li>
          <li>
            <h3 className="text-lg font-semibold">Bus Ticket App</h3>
            <p>Kısa açıklama...</p>
          </li>
          <li>
            <h3 className="text-lg font-semibold">
              Full-stack todo App web/mobile
            </h3>
            <p>Kısa açıklama...</p>
          </li>
          <li>
            <h3 className="text-lg font-semibold">Restaurant Menu App</h3>
            <p>Kısa açıklama...</p>
          </li>
          <li>
            <h3 className="text-lg font-semibold">
              Career Recommendation Project
            </h3>
            <p>Kısa açıklama...</p>
          </li>
          <li>
            <h3 className="text-lg font-semibold">
              Parentwiser Commercial Website Project
            </h3>
            <p>Kısa açıklama...</p>
          </li>
          <li>
            <h3 className="text-lg font-semibold">
              Parentwiser Kidswiser Mobile App UI
            </h3>
            <p>Kısa açıklama...</p>
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Experience</h2>
        <ul>
          <li>
            <h3 className="text-lg font-semibold">Sixfab</h3>
            <p>Software Enginering Intern ---- November 2023 - January 2024</p>
          </li>
          <li>
            <h3 className="text-lg font-semibold">Jotform</h3>
            <p>Intern Frontend Developer ---- July 2023 - August 2023 </p>
          </li>
          <li>
            <h3 className="text-lg font-semibold">Parentwiser</h3>
            <p>Intern Frontend Developer ---- January 2022 - August 2022</p>
          </li>
          <li>
            <h3 className="text-lg font-semibold">Ecodation</h3>
            <p>Intern Mobile Developer ---- July 2021 - August 2021</p>
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <ul>
          <li>
            <h3 className="text-lg font-semibold">
              Trakya University 2019 - 2023
            </h3>
            <p>Bachelor of Science in Computer Engineering GPA : 2.8/4.0</p>
          </li>
          <li>
            <h3 className="text-lg font-semibold">
              Dokuz Eylul University 2017-2019
            </h3>
            <p>Mechanical Engineering</p>
          </li>
          {/* Daha fazla eğitim ekleyebilirsiniz */}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>SQL</li>
          <li>MongoDB</li>
          <li>Git</li>
          <li>React-native</li>
          <li>Ionic</li>
          <li>C#</li>
          <li>Tailwind CSS</li>
          <li>Redux Toolkit</li>
          <li>Figma</li>
          <li>Python</li>
          <li>Flask</li>
          <li>Vue.js</li>
          {/* Daha fazla yetenek ekleyebilirsiniz */}
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Personal Details</h2>
        <p>
          Date of Birth: 26/03/1998 <br />
        </p>
        <p>
          Address: Edirne, Turkey <br />
        </p>
        <p>
          Email:
          <a
            href="mailto:
          berkayozgun001@gmail.com"
          />
        </p>
        <p>
          Phone:
          <a href="tel:+905422666081">+905422666081</a>
        </p>
        <p>
          Github:
          <a href="github.com/Berkayozgun001">github.com/Berkayozgun</a>
        </p>
        <p>
          LinkedIn:
          <a href="linkedin.com/in/berkayozgun">linkedin.com/in/berkayozgun</a>
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Hobbies/Interests</h2>
        <p>Table-tennis, basketball, writing, photography, reading</p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Activities</h2>
        <p>IEEE Trakya University Student Branch Member</p>
        <p>Google Developer Student Club Member</p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Certifications</h2>
        <ul>
          <li>
            <h3 className="text-lg font-semibold">Responsive Web Design</h3>
            <p>freecodecamp.com</p>
          </li>
          <li>
            <h3 className="text-lg font-semibold">
              Mobile Programming Training
            </h3>
            <p>Ecodation</p>
          </li>
          <li>
            <h3 className="text-lg font-semibold">
              DEV236x : Introduction to Python: Absolute Beginner
            </h3>
            <p>edX.org - Microsoft</p>
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">References</h2>
        <p>
          You can contact with the following references to get more information.
        </p>
        <br />

        <li>
          Ferhat Yaldıran - Senior UI Developer / Team Lead at JotForm Inc.
          <br />
          <a href="mailto:fyaldiran@gmail.com">fyaldiran@gmail.com</a>
        </li>
        <br />
        <p>
          Assoc. Prof. Dr. Özlem Aydın, Instructor at Computer Engineering
          Department, Trakya University <br />
          <a href="mailto:ozlema@trakya.edu.tr">ozlema@trakya.edu.tr</a>
        </p>
      </section>

      <footer className="text-center py-4 bg-gray-800 text-white">
        <p>İletişim: email@example.com | LinkedIn: linkedin.com/in/example</p>
      </footer>
    </div>
  );
}
