import React, { useState } from "react";
import FadeInSection from "../Components/FadeInSection"

const skillsData = {
  "Web Development": [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Tailwind CSS", level: 80 },
    { name: "Node.js", level: 80 },
    { name: "Spring Boot", level: 70 },
    { name: "MySQL", level: 75 },
    { name: "MongoDB", level: 80 }
  ],
  "Cybersecurity": [
    { name: "Snort", level: 85 },
    { name: "Suricata", level: 80 },
    { name: "Splunk", level: 85 },
    { name: "Velociraptor", level: 75 },
    { name: "Wireshark", level: 90 },
    { name: "Burp Suite", level: 70 },
    { name: "Metasploit", level: 65 },
    { name: "Nmap", level: 85 }
  ],
  "Cloud & DevOps": [
    { name: "AWS EC2", level: 80 },
    { name: "S3", level: 75 },
    { name: "IAM", level: 70 },
    { name: "CloudWatch", level: 65 },
    { name: "Git", level: 90 },
    { name: "GitHub", level: 90 },
    { name: "Render", level: 80 },
    { name: "Netlify", level: 85 }
  ],
  "ServiceNow": [
    { name: "CSA", level: 85 },
    { name: "CAD", level: 80 },
    { name: "Studio", level: 75 },
    { name: "Workflow Editor", level: 70 },
    { name: "Script Includes", level: 65 },
    { name: "Client Scripts", level: 60 }
  ],
  "Programming Languages": [
    { name: "Java", level: 85 },
    { name: "Python", level: 80 },
    { name: "JavaScript", level: 90 },
    { name: "C (Basics)", level: 60 }
  ],
  "Tools & Environments": [
    { name: "VS Code", level: 95 },
    { name: "Postman", level: 85 },
    { name: "GitHub Desktop", level: 80 },
    { name: "Windows OS", level: 95 }
  ]
};

const SkillsInteractive = () => {
  const [activeCategory, setActiveCategory] = useState("Web Development");

  return (
    <section className="bg-white py-10 md:py-10 md:pb-20 px-6 md:px-20 dark:bg-gray-900">
      <FadeInSection delay={0}>
        <h1 className="text-3xl md:text-4xl font-bold font-poppins text-black mb-2 text-center dark:text-sec">My Skill<span className="text-main"> Overview</span>
      <span className="block w-20 h-1 bg-main mt-2 rounded-full mx-auto" />
         
        </h1>
      <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 italic py-2">My toolkit of transformation—where code meets creativity and security meets precision.</p>
      </FadeInSection>
      <FadeInSection delay={300}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-6 gap-6 relative">
        <div className="md:col-span-2 flex flex-col gap-4">
          {Object.keys(skillsData).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`w-full text-left px-6 py-3 rounded-md font-semibold transition border-l-4 ${
                activeCategory === category
                  ? "bg-main/10 border-main text-main"
                  : "bg-gray-50 dark:bg-gray-800 border-transparent text-gray-700 dark:text-gray-300 hover:bg-main/5 hover:border-main"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="md:col-span-4 bg-white dark:bg-gray-800  p-8 shadow-md transition duration-300">
          <h3 className="text-2xl font-bold text-main mb-6">{activeCategory}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {skillsData[activeCategory].map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-800 dark:text-white">{skill.name}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-300">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-main h-3 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </FadeInSection>
    </section>
  );
};

export default SkillsInteractive;
