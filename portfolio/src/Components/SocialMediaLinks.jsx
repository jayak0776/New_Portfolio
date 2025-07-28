import React from "react";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

import Resume from "../assets/CYBER_RESUME.pdf"
function SocialMediaLinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <AiFillLinkedin size={30} />
        </>
      ),
      href: "http://www.linkedin.com/in/jayakumargubbala",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/jayak0776",
    },
    {
      id: 3,
      child: (
        <>
          Mail
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:jayak0776@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      style: "rounded-br-md",
      href: Resume, // <-- use imported file
      download: "JayaKumar_Resume.pdf",
    },
  ];

  return (
    <div className="hidden flex-col top-[35%] left-0 fixed lg:flex z-50">
      <ul>
        {links.map(({ id, child, style, href, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center text-lg w-40 h-12 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-sm duration-300 bg-black" +
              " " +
              style
            }
          >
            <a
              href={href ? href : "/"}
              className="flex justify-between items-center w-full text-sec dark:text-sec"
              download={download}
              target="_blank"
              rel="noopener noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialMediaLinks;