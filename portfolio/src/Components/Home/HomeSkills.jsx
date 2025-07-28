import React from "react";
import FadeInSection from "../FadeInSection"

const mernSkills = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JWT",
  "Tailwind CSS",
  "JavaScript",
];

const javaSkills = [
  "Java",
  "Spring Boot",
  "Hibernate",
  "MySQL",
  "REST APIs",
];

const cyberSkills = [
  "Snort",
  "Suricata",
  "Splunk",
  "Velociraptor",
  "Wireshark",
  "Nmap",
  "Linux",
  "Incident Response",
  "Threat Hunting",
];

const HomeSkills = () => {
  return (
    <>
    <section
      id="skills"
      className="relative w-full bg-white dark:bg-gray-900 py-20 px-6 md:px-20 overflow-hidden"
    >
      {/* Orange Blur Accent */}
      <div
        className="absolute top-[25%] right-[-150px] w-[300px] h-[300px] blur-3xl opacity-10 rounded-full z-0 pointer-events-none bg-main"
      />

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        {/* Section Heading */}
        <FadeInSection delay={100}>
          <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-main dark:text-white flex flex-col justify-center items-center">
            <span><span className="text-black dark:text-main">My Skill</span> Set</span>
            <span className="block w-14 h-1 bg-main mt-2 rounded-full" />
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400 text-lg">
            Tools and technologies I use to build, secure, and scale modern applications.
          </p>
        </div>
        </FadeInSection>

        {/* Full Stack Web Dev */}
        <FadeInSection delay={300}>
          <div>
          <h3 className="text-xl font-bold text-main mb-2 uppercase tracking-wide">
            Full Stack Web Development
          </h3>

          {/* MERN Stack */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-black dark:text-white mb-2">
              MERN Stack
            </h4>
            <div className="flex flex-wrap gap-4">
              {mernSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white text-sm font-medium shadow-sm hover:scale-105 hover:bg-main hover:text-white dark:hover:bg-main transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Java Stack */}
          <div>
            <h4 className="text-lg font-semibold text-black dark:text-white mb-2">
              Java Full Stack
            </h4>
            <div className="flex flex-wrap gap-4">
              {javaSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white text-sm font-medium shadow-sm hover:scale-105 hover:bg-main hover:text-white dark:hover:bg-main transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        </FadeInSection>

        {/* Cybersecurity Skills */}
        <FadeInSection delay={300}> 
          <div>
          <h3 className="text-xl font-bold text-main mb-2 uppercase tracking-wide">
            Cybersecurity - SOC Analyst Role
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Tools and practices I use in threat detection, analysis, and incident response.
          </p>
          <div className="flex flex-wrap gap-4">
            {cyberSkills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white text-sm font-medium shadow-sm hover:scale-105 hover:bg-main hover:text-white dark:hover:bg-main transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        </FadeInSection>

        {/* CTA Button */}
        <div className="text-center pt-6">
          <a
          href="/skills"
          className="inline-block px-6 py-3 bg-main text-white font-medium shadow-md hover:bg-black hover:text-white transition duration-300"
        >
          View All Skills
        </a>
        </div>
      </div>
    </section>
    <div className="w-full h-[1px] bg-gray-100 dark:bg-gray-800" />
    </>
  );
};

export default HomeSkills;
