import React from "react";
import FadeInSection from "../Components/FadeInSection"

const experienceData = [
  {
    title: "Cybersecurity Intern",
    company: "SDI Bhubaneswar – Deloitte Training Program",
    location: "Bhubaneswar, India",
    duration: "Feb 2025 – May 2025",
    points: [
      "Completed SOC Analyst Level 1 training with hands-on lab activities.",
      "Worked with tools like Splunk, Wireshark, Snort, Suricata, Velociraptor.",
      "Simulated real-time attack scenarios and implemented detection techniques."
    ]
  },
  {
    title: "Full-Stack Developer Intern",
    company: "Personal Projects & Freelance",
    location: "Remote",
    duration: "2024 – Present",
    points: [
      "Built ‘WorkBuddy’ – a MERN stack real-time service platform with JWT auth and Socket.IO chat.",
      "Developed multiple mini projects like To-Do App, Quote Generator, Netflix Clone.",
      "Designed REST APIs, user authentication, and role-based dashboards."
    ]
  },
  {
    title: "ServiceNow Training",
    company: "I Aspire Mind Foundation",
    location: "Remote",
    duration: "2024",
    points: [
      "Completed ServiceNow training and earned CSA & CAD certifications.",
      "Worked on ServiceNow Studio, Workflow Editor, Script Includes, and automation scripting.",
      "Built and deployed custom low-code applications."
    ]
  },
  {
    title: "AWS Cloud Practitioner Training",
    company: "Pragati Engineering College",
    location: "Surampalem, India",
    duration: "2024",
    points: [
      "Completed foundational training on AWS Cloud concepts and services.",
      "Explored core AWS offerings like EC2, S3, IAM, CloudWatch, and VPC.",
      "Gained understanding of cloud architecture, billing models, and security principles."
    ]
  }
];


const pdfCertificates = [
  {
    title: "ServiceNow CSA",
    src: "https://res.cloudinary.com/dquha58yu/image/upload/v1753625893/csa_k521mp.png",
     summary:
      "Gained expertise in managing and configuring the ServiceNow platform. Covered user interface policies, client/server-side scripting, ACLs, workflows, and basic ITSM modules.",
  
  },
  {
    title: "ServiceNow CAD",
    src: "https://res.cloudinary.com/dquha58yu/image/upload/v1753625893/cad_z94m8g.png",
    summary:
      "Demonstrated advanced knowledge in app development within ServiceNow. Built scoped applications, used Flow Designer, Script Includes, and Application Studio for custom solutions.",
  
    
  },
  {
    title: "AWS Cloud Practitioner",
    src: "https://res.cloudinary.com/dquha58yu/image/upload/v1753625893/awscloud_cp4q5p.png",
     summary:
      "Validated foundational cloud knowledge covering AWS core services (EC2, S3, IAM), billing, architecture, security, and best practices. Demonstrated proficiency in cloud adoption and global infrastructure concepts.",
  
  },
];

const Experience = () => {
  return (
    <>
    <section className="bg-sec dark:bg-gray-900 py-10 md:py-20 px-6 md:px-20 ">
      <FadeInSection delay={0}>
        <h2 className="text-4xl font-bold text-center text-main mb-4 font-poppins"><span className="text-black dark:text-sec">My</span> Experience</h2>
      <span className="block w-20 h-1 bg-main mt-2 rounded-full mx-auto" />
      <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 italic">
        Practical exposure to development, security, cloud, and ITSM tools through real-world implementations and training.
      </p>
      </FadeInSection>


     <FadeInSection delay={200}>
       <div className="relative max-w-4xl mx-auto before:absolute before:left-4 before:top-0 before:bottom-0 before:w-1 before:bg-main">
        {experienceData.map((exp, index) => (
          <div key={index} className="mb-10 relative pl-12">
            {/* Dot */}
            <span className="absolute left-0 top-5 w-9 h-9 md:w-9 md:h-9 bg-main border-4 border-white dark:border-gray-900 rounded-full"></span>

            {/* Card */}
            <div className="bg-white dark:bg-gray-800 p-6 shadow-md">
              <h3 className="text-xl font-bold text-main">{exp.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium">{exp.company}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {exp.location} • {exp.duration}
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300 space-y-1">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
     </FadeInSection>
    </section>
    <div className="w-full h-[1px] bg-gray-100 dark:bg-gray-800" />
    <section className="py-20 bg-gray-50 dark:bg-gray-900 px-6 md:px-20">
       <FadeInSection delay={300}>
         <h2 className="text-3xl md:text-4xl font-bold text-center text-main"><span className="text-black dark:text-sec">Global</span> Certifications</h2>
        <span className="block w-20 h-1 bg-main mt-2 rounded-full mx-auto" />
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 italic py-2">
          Recognized certifications validating my expertise across cloud and enterprise platforms.
        </p>
       </FadeInSection>
        <FadeInSection>
          <div className="max-w-5xl mx-auto space-y-20 md:space-y-40  relative">
          {pdfCertificates.map((cert, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row ${!isEven ? "md:flex-row-reverse" : ""} items-center gap-10 md:gap-20`}
              >
                <div className="md:w-1/2">
                  <img
                    src={cert.src}
                    width="100%"
                    height="400px"
                    className="rounded-sm shadow-lg p-2"
                    allow="autoplay"
                    alt={cert.title}
                  />
                </div>

                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-black mb-2 text-center dark:text-main">{cert.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{cert.summary}</p>
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

export default Experience;
