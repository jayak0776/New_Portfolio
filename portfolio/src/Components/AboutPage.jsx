import React from "react";
import { FaLaptopCode, FaShieldAlt, FaCertificate, FaCloud,FaLinkedin, FaWhatsapp, FaInstagram , FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import FadeInSection from "../Components/FadeInSection"

const AboutCards = () => {
  const cards = [
    {
      title: "Full-Stack Developer",
      icon: <FaLaptopCode size={40} />,
      desc: `Built several real-world projects using the MERN stack. Notably, I developed "WorkBuddy", a secure service platform with JWT auth and real-time chat using Socket.IO.`,
    },
    {
      title: "Cybersecurity Enthusiast",
      icon: <FaShieldAlt size={40} />,
      desc: `Completed SOC Analyst training under Deloitte. Gained hands-on experience with tools like Snort, Suricata, Splunk, Velociraptor, and Wireshark.`,
    },
    {
      title: "Certified Professional",
      icon: <FaCertificate size={40} />,
      desc: `Earned certifications including AWS Cloud Practitioner, ServiceNow CSA & CAD. I’ve applied them to real-world workflows and cloud concepts.`,
    },
    {
      title: "Cloud & DevOps Explorer",
      icon: <FaCloud size={40} />,
      desc: `Exploring scalable cloud infrastructure with AWS. Hands-on with EC2, IAM, S3, and integrating CI/CD practices into personal projects.`,
    },
  ];

  const timeline = [
  {
    year: "2018 – 2019",
    title: "10th Grade",
    institution: "Bhashyam School",
    location: "Bommuru, Rajahmundry",
    result: "CGPA: 9.7",
  },
  {
    year: "2019 – 2022",
    title: "Diploma in Mechanical Engineering",
    institution: "B.V.C College of Engineering",
    location: "Diwancharuvu, Rajahmundry",
    result: "Percentage: 89%",
  },
  {
    year: "2022 – 2025",
    title: "B.Tech in Information Technology",
    institution: "Pragati Engineering College",
    location: "Surampalem, Kakinada",
    result: "CGPA: 7.9",
  },
];

  return (
    <>
    <section className="bg-white py-10 px-6 md:px-20 md:py-20 text-gray-800 dark:text-white font-poppins dark:bg-gray-900">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">

        {/* Left Circle / Avatar Block */}
       
       <FadeInSection delay={0}>
         <div className="w-60 h-60 rounded-full bg-main text-white flex items-center justify-center text-4xl font-bold shadow-sm">
          GJK
        </div>
       </FadeInSection>
        

        {/* Right Content */}
        <FadeInSection delay={300}>
          <div className="flex-1">
          {/* Name & Roles */}
          <h1 className="text-3xl md:text-4xl font-semibold uppercase text-black mb-2 text-center dark:text-sec">Gubbala<span className="text-main"> Jaya Kumar</span>
          <span className="flex justify-center"><span className="block w-20 h-1 bg-main mt-2 rounded-full" /></span>
        </h1>
          <p className="text-lg font-medium mb-1 text-main text-center">Full-Stack Developer | Cybersecurity Enthusiast</p>

          {/* Contact Info */}
          <div className="text-sm space-y-1 mt-4">
            <div className="text-sm space-y-2 mt-4">
                <div className="flex justify-center items-center gap-3">
                  <FaPhoneAlt className="text-main" />
                  <span>+91-8919753805</span>
                </div>
                <div className="flex justify-center items-center gap-3">
                  <FaEnvelope className="text-main" />
                  <span>jayak0776@gmail.com</span>
                </div>
                <div className="flex justify-center items-center gap-3">
                  <FaMapMarkerAlt className="text-main" />
                  <span>Rajahmundry, East Godavari, Andhra Pradesh, India</span>
                </div>
              </div>

          </div>

          {/* About Intro */}
          <p className="mt-4 text-gray-700 dark:text-gray-300 text-center">
            A tech enthusiast blending development and cybersecurity. I’ve built real-world web apps using the MERN stack, explored network forensics, and earned certifications in AWS and ServiceNow. Passionate about building secure, scalable, and user-friendly digital experiences.
          </p>

          {/* Social Icons */}
          <div className="mt-5 flex gap-4 justify-center">
            <a
              href="http://www.linkedin.com/in/jayakumargubbala"
              target="_blank"
              rel="noreferrer"
              className="bg-[#0a66c2] text-white p-2 rounded-full hover:scale-105 transition"
              title="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="https://wa.me/918919753805"
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] text-white p-2 rounded-full hover:scale-105 transition"
              title="WhatsApp"
            >
              <FaWhatsapp size={22} />
            </a>
            <a
              href="https://www.instagram.com/jayakumar.gubbala?utm_source=qr&igsh=aWJqbWw5bnF6NzBj "
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white p-2 rounded-full hover:scale-105 transition"
              title="Instagram"
            >
              <FaInstagram size={22} />
            </a>

          </div>
        </div>
        </FadeInSection>
        <div className="absolute bottom-64 right-[0px] md:bottom-44 md:left-96 w-[300px] h-[300px] blur-3xl opacity-20 rounded-full z-0 pointer-events-none bg-main" />
      </div>
    </section>
    <div className="w-full h-[1px] bg-gray-100 dark:bg-gray-800" />
    <section className=" bg-sec dark:bg-gray-900 py-16 px-6 md:py-20 md:px-20 text-gray-800 dark:text-gray-100">
      <FadeInSection delay={400}>
        <h2 className="text-4xl font-bold text-center text-main ">About Me – At a Glance</h2>
      <p className="text-gray-500 dark:text-sec text-center py-2 mb-12">I turn ideas into code and challenges into growth — across web, cloud, and cybersecurity.</p>
      <div className="absolute bottom-64 right-[0px] md:bottom-44 md:left-96 w-[300px] h-[300px] blur-3xl opacity-20 rounded-full z-0 pointer-events-none bg-main" />
      </FadeInSection>
      <FadeInSection delay={400}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative w-full h-72 perspective group"
          >
            {/* Front */}
            <div className="absolute w-full h-full backface-hidden group-hover:rotate-y-180 transition-transform duration-1000 bg-gray-50 dark:bg-gray-800  p-6 flex flex-col items-center justify-center shadow-md">
              <div className="text-main mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold text-center">{card.title}</h3>
            </div>

            {/* Back */}
            <div className="absolute w-full h-full backface-hidden rotate-y-180 group-hover:rotate-y-0 transition-transform duration-1000 bg-main text-white p-6 flex items-center justify-center shadow-md">
              <p className="text-sm text-center">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
      </FadeInSection>
    </section>
    <div className="w-full h-[1px] bg-gray-100 dark:bg-gray-800" />
    <section className="bg-main text-white py-10 px-6 md:px-10 lg:px-20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Text Info */}
              <FadeInSection delay={300}>
                <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Let’s Connect!</h2>
                <p className="text-xs md:text-xs text-white text-center">
                  Interested in working together, collaborating, or just want to say hello? Feel free to reach out!
                </p>
              </div>
              </FadeInSection>
      
              {/* Contact Buttons */}
             <FadeInSection>
               <div className="flex gap-2 mt-4 md:mt-0">
                <a
                  href="mailto:jayak0776@gmail.com"
                  className="flex items-center gap-2 bg-white text-main px-3 py-2 lg:px-4 lg:py-2 rounded-full font-medium hover:bg-gray-200 transition text-xs md:text-sm"
                ><FaEnvelope /> Mail
                </a>
                <a
                  href="https://wa.me/918919753805"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-white text-main px-3 py-2 lg:px-4 lg:py-2 rounded-full font-medium hover:bg-gray-200 transition text-xs md:text-sm"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
                <a
                  href="http://www.linkedin.com/in/jayakumargubbala"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-white text-main px-3 py-2 md:px-2 md:py-1 lg:px-4 lg:py-2 rounded-full font-medium hover:bg-gray-200 transition text-xs lg:text-sm"
                >
                  <FaLinkedin /> LinkedIn
                </a>
              </div>
             </FadeInSection>
            </div>
          </section>
    <div className="w-full h-[1px] bg-gray-100 dark:bg-gray-800" />
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 md:px-20">
      <FadeInSection delay={400}>
        <h2 className="text-4xl font-bold text-center text-main mb-16 uppercase">
        My Academic Journey
      </h2>
      </FadeInSection>
      <FadeInSection delay={400}>
        <div className="relative max-w-5xl mx-auto">
        {/* MOBILE: Left line only */}
        <div className="block md:hidden absolute left-2 top-0 w-1 bg-main h-full z-0"></div>

        {/* DESKTOP: Center line for zig-zag */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-main h-full z-0"></div>

        {timeline.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`mb-12 flex flex-col md:flex-row items-center relative z-10 ${
                isLeft ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* MOBILE dot (left aligned) */}
              <div className="block md:hidden absolute left-[0rem] top-6 w-5 h-5 bg-main rounded-full z-10"></div>

              {/* DESKTOP dot (center aligned) */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-main border-4 border-white dark:border-gray-900 rounded-full z-20"></div>

              {/* Card Content */}
              <div
                className={`w-72 md:w-1/2 ${
                  isLeft ? "md:pr-10" : "md:pl-10"
                }`}
              >
                
                <div className="bg-white dark:bg-gray-800 p-6 shadow-md transition hover:shadow-lg">
                  <h3 className="text-xl font-bold text-main mb-1">{item.title}</h3>
                  <p className="text-sm font-medium dark:text-sec">{item.institution}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.location}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 italic">{item.result}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.year}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </FadeInSection>

    </section>



    </>
    
  );
};

export default AboutCards;
