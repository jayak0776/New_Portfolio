import React from "react";
import FadeInSection from "../FadeInSection"

const experiences = [
  {
    role: "SOC Analyst Trainee",
    company: "Deloitte – SDI Bhubaneswar",
    duration: "May 2024 – Jul 2024",
    summary:
      "Trained in threat detection, log analysis, Snort/Suricata rules, Splunk dashboards, and incident response. Hands-on exposure to cybersecurity tools in real-world scenarios.",
  },
  {
    role: "AWS Cloud Practitioner – Cloud Training",
    company: "Pragati Engineering College (Global Certification)",
    duration: "Jan 2024 – Mar 2024",
    summary:
      "Gained foundational knowledge in AWS services, cloud architecture, security best practices, and billing models. Completed AWS global certification.",
  },
  {
    role: "ServiceNow Certified Admin & Developer",
    company: "Global ServiceNow Certification Program",
    duration: "2023 – 2024",
    summary:
      "Earned CSA and CAD certifications. Built custom apps, automated workflows, and delivered ITSM solutions with ServiceNow.",
  },
];

const HomeExperience = () => {
  return (
    <>
    <section
      id="experience"
      className="w-full bg-sec text-white py-20 px-6 md:px-20 overflow-hidden dark:bg-gray-900"
    >
      {/* Section Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-main dark:text-white">
          My<span className="text-black dark:text-main"> Experience</span>
          <span className="flex justify-center"><span className="block w-14 h-1 bg-main mt-2 rounded-full" /></span>
        </h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          A timeline of my certified training, tools expertise & real-world exposure.
        </p>
      </div>

      {/* Experience Strips */}
      <div className="space-y-10 max-w-5xl mx-auto ">
        {experiences.map((exp, index) => (
          <FadeInSection key={index} delay={index * 100}>
            <div className="bg-white text-black border-l-8 md:border-l-10 border-l-main shadow-xl px-6 py-6 md:py-8 duration-300 dark:bg-gray-800 dark:text-white">
              <h3 className="text-xl font-bold text-black dark:text-white">{exp.role}</h3>
              <p className="text-sm text-gray-700 mt-1 font-medium  dark:text-gray-400">
                {exp.company} — <span className="italic">{exp.duration}</span>
              </p>
              <p className="mt-3 text-gray-800 leading-relaxed dark:text-white">{exp.summary}</p>
            </div>
          </FadeInSection>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-14">
        <a
          href="/experience"
          className="inline-block px-6 py-3 bg-main text-white font-medium shadow-md hover:bg-black hover:text-white transition duration-300"
        >
          View Full Experience
        </a>
      </div>
    </section>
    <div className="w-full h-[1px] bg-gray-100 dark:bg-gray-800" />
    </>
  );
};

export default HomeExperience;
