import React from "react";
import FadeInSection from "../FadeInSection";

const HomeAbout = () => {
  return (
    <>
    <section
      id="about"
      className="relative w-full bg-sec dark:bg-gray-900 py-20 px-6 md:px-16 overflow-hidden"
    >
      

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 items-start">
        {/* Section Title */}
        <FadeInSection delay={100}>
          <div className="md:col-span-1">
          <h2 className="text-3xl md:text-4xl font-bold text-main dark:text-white relative inline-block">
            <span className="text-black dark:text-main">About</span> Me
            <span className="block w-14 h-1 bg-main mt-2 rounded-full" />
          </h2>
        </div>
        </FadeInSection>

        {/* Paragraph Content */}
       <FadeInSection delay={300}>
         <div className="md:col-span-2 border-l-4 border-main pl-6 text-gray-800 dark:text-gray-300 space-y-6 text-lg leading-relaxed">
          <p>
            I'm <span className="font-semibold text-black dark:text-white">Jaya Kumar</span>, a dedicated full stack developer and cybersecurity enthusiast who builds secure, efficient, and user-focused digital products.
          </p>
          <p>
            My current stack includes <span className="font-semibold text-main">React</span>, <span className="font-semibold text-main">Node.js</span>, <span className="font-semibold text-main">MongoDB</span> on the development side, and <span className="font-semibold text-main">Snort</span>, <span className="font-semibold text-main">Suricata</span>, <span className="font-semibold text-main">Splunk</span> for security.
          </p>
          <p>
            I enjoy turning ideas into code, constantly learning new tools, and building projects that solve real-world problems with elegance and security.
          </p>
        </div>
       </FadeInSection>
      </div>
    </section>
    <div className="w-full h-[1px] bg-gray-100 dark:bg-gray-800" />
    </>
  );
};

export default HomeAbout;
