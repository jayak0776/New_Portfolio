import React from "react";

const SkillsPage = () => {
  return (
    <section className="min-h-screen w-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white py-20 px-6 md:px-20 relative overflow-hidden">
      {/* Glowing Blob */}
      <div
        className="absolute top-0 left-[-100px] w-[400px] h-[400px] bg-[#FF5F1F] rounded-full blur-3xl opacity-10 z-0"
      ></div>

      {/* Heading */}
      <div className="relative z-10 mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          <span className="text-[#FF5F1F]">Crafted Skills</span> & Real-World Experience
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Combining creativity with problem-solving to deliver secure and scalable solutions across full stack development and cybersecurity.
        </p>
      </div>

      {/* Dual Zones */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Developer Side */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg transition-transform hover:-translate-y-1">
          <h2 className="text-2xl font-bold text-[#FF5F1F] mb-4">👨‍💻 Full Stack Developer</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Building modern web applications from UI to database using two powerful stacks:
          </p>

          {/* MERN Track */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-black dark:text-white mb-2">🚀 MERN Stack</h3>
            <SkillTags tags={["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "JavaScript"]} />
          </div>

          {/* Java Track */}
          <div>
            <h3 className="text-lg font-semibold text-black dark:text-white mb-2">☕ Java Full Stack</h3>
            <SkillTags tags={["Java", "Spring Boot", "Hibernate", "MySQL", "REST APIs"]} />
          </div>
        </div>

        {/* Cybersecurity Side */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg transition-transform hover:-translate-y-1">
          <h2 className="text-2xl font-bold text-[#FF5F1F] mb-4">🔒 Cybersecurity Analyst</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Proficient in tools and techniques used in Security Operations Centers (SOC) for monitoring, threat detection, and incident response.
          </p>

          {/* Cyber Skills */}
          <SkillTags
            tags={[
              "Snort",
              "Suricata",
              "Splunk",
              "Velociraptor",
              "Wireshark",
              "Nmap",
              "Linux",
              "Incident Response",
              "Threat Hunting",
            ]}
          />
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-20 relative z-10">
        <a
          href="/projects"
          className="inline-block px-8 py-4 bg-black text-white font-semibold rounded-full shadow-md hover:bg-[#FF5F1F] transition duration-300"
        >
          🔍 Explore My Projects
        </a>
      </div>
    </section>
  );
};

// SkillTags reusable component
const SkillTags = ({ tags }) => (
  <div className="flex flex-wrap gap-3">
    {tags.map((tag, idx) => (
      <span
        key={idx}
        className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-sm text-black dark:text-white hover:bg-[#FF5F1F] hover:text-white transition"
      >
        {tag}
      </span>
    ))}
  </div>
);

export default SkillsPage;
