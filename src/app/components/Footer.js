import React from "react";
import MailSVG from "../images/MailSVG";
import LinkedinSVG from "../images/LinkedinSVG";
import GithubSVG from "../images/GithubSVG";

function Footer() {
  return (
    <footer className='flex flex-row items-center justify-center self-end text-center w-screen py-4 bg-gray-800 text-white gap-4 fixed bottom-0 left-0 z-10'>
      <div className='flex flex-row items-center justify-center text-center gap-4'>
        © 2024 Berkay Özgün
        <span className='text-white'>|</span>
        <a href='mailto:berkayozgun001@gmail.com'>
          <MailSVG />
        </a>
      </div>
      <div>
        <a href='https://www.linkedin.com/in/berkayozgun'>
          <LinkedinSVG />
        </a>
      </div>
      <div className='flex flex-row items-center justify-center text-center gap-4'>
        <a href='https://www.github.com/Berkayozgun/'>
          <GithubSVG />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
