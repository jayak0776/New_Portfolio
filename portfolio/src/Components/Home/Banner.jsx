import React, { useEffect, useState } from "react";
import FadeInSection from "../FadeInSection";

const HomeBanner = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100); // Delay animation start
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <section className="h-[70vh] md:h-full lg:h-[88vh] w-full bg-white dark:bg-gray-900 font-poppins relative overflow-hidden md:py-32">
      {/* Fixed Orange Circle */}
      <div className="absolute bottom-64 right-[0px] md:bottom-44 md:left-96 w-[300px] h-[300px] blur-3xl opacity-20 rounded-full z-0 pointer-events-none bg-main" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <FadeInSection>
          <h1
          className={`text-3xl md:text-5xl font-semibold text-main  transform transition-all duration-1000 ease-out ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Hi, I'm <span className="text-black dark:text-white">Gubbala Jaya Kumar</span>
        </h1>
        </FadeInSection>

        <FadeInSection delay={200}>
          <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300">
            Full Stack Developer & Cybersecurity Enthusiast
          </p>
        </FadeInSection>

        <FadeInSection delay={300}>
          <div className="my-5 font-semibold text-lg md:text-xl text-gray-700 dark:text-gray-300 flex gap-5 md:gap-10">
            <div>
              <p className="text-main">25+</p>
              <p className="text-xl">Projects</p>
            </div>
            <div>
              <p className="text-main">3</p>
              <p className="text-xl">Global Certifications</p>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={500}>
          <div className="flex flex-col md:flex-row ">
            <a href="https://drive.google.com/file/d/1s8pWOkisfxwPT2tY4abos13hLBy0l-Zo/view?usp=sharing" target="_blank" className="mt-5 md:mt-4 px-24 md:px-14 py-3 w-full text-white font-medium shadow-lg hover:bg-black duration-300 bg-main">
              View Resume
            </a>
           
          </div>
        </FadeInSection>
      </div>
    </section>
    <div className="w-full h-[1px] bg-gray-100 dark:bg-gray-800" />
    </>
  );
};

export default HomeBanner;
