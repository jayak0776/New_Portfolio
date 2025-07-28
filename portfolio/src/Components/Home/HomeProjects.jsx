import React from "react";
import { useState,useEffect } from "react";

import defaultImg from "../../assets/1.png"

import FadeInSection from "../FadeInSection";
import axiosInstance from "../../axiosInstance";


const HomeProjects = () => {

  const [allProjects, setAllProjects] = useState([]);
  const [favoriteProjects, setFavoriteProjects] = useState([]);

  // You define your favorite project IDs (or titles/slugs etc.)
  const favoriteProjectIds = ["6885cc16c77f6cedc63f7a79", "68851cfe4d3d2c89ba5a809c", "68851d474d3d2c89ba5a809f"]; // replace with actual IDs

  useEffect(() => {
    axiosInstance.get("/get-projects") // your actual endpoint here
      .then((res) => {
        setAllProjects(res.data);
        const favs = res.data.filter((project) => favoriteProjectIds.includes(project._id)); // or project.title
        setFavoriteProjects(favs);
        console.log(allProjects)
      })
      .catch((err) => console.error("Failed to fetch projects", err));
  }, []);

  return (
    <>
    <section
      id="projects"
      className="relative w-full bg-white dark:bg-gray-900 py-20 px-6 md:px-20 overflow-hidden"
    >
      {/* Decorative Glow */}
      <div
        className="absolute -bottom-20 right-[-120px] w-[300px] h-[300px] blur-3xl opacity-10 rounded-full z-0 pointer-events-none bg-main"
        
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        
        <FadeInSection delay={0}>
          <h2 className="text-3xl md:text-4xl font-bold text-main dark:text-white">
          My<span className="text-black dark:text-main"> Projects</span>
          <span className="flex justify-center"><span className="block w-14 h-1 bg-main mt-2 rounded-full" /></span>
        </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2 mb-12">
            A glimpse of what I’ve built across development and cybersecurity.
          </p>
        </FadeInSection>


        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-10">
          
          {favoriteProjects.map((proj, index) => (
                      <div
                        key={index}
                        className="bg-white dark:bg-gray-800 shadow-md transition duration-300 overflow-hidden flex flex-col"
                      >
                        <img
                          src={proj.image || defaultImg}
                          alt={proj.title}
                          className="w-full h-48 object-cover"
                        />
          
                        <div className="p-5 flex flex-col flex-grow">
                          <h2 className="text-xl font-bold text-main mb-1">{proj.title}</h2>
          
                          <div className="mt-2 mb-4 flex flex-wrap gap-2">
                            {proj.tech.map((tech, i) => (
                              <span
                                key={i}
                                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white text-xs px-3 py-1 rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
          
                          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{proj.description}</p>
          
                          <div className="mt-auto flex gap-3">
                            {proj.liveLink && (
                              <a
                                href={proj.liveLink}
                                target="_blank"
                                rel="noreferrer"
                                className="px-4 py-2 text-sm rounded-full bg-main text-white hover:bg-black transition"
                              >
                                View Demo
                              </a>
                            )}
                            {proj.codeLink && (
                              <a
                                href={proj.codeLink}
                                target="_blank"
                                rel="noreferrer"
                                className={`px-4 py-2 text-sm rounded-full border hover:text-white transition ${proj.projectType==="Cybersecurity SOC"? `bg-main text-white hover:bg-black`:`border-main text-main hover:bg-main`}`}
                              >
                                {proj.projectType === "Cybersecurity SOC"? "View Document":"View Code"}
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
        </div>

        {/* CTA Button */}
        <FadeInSection delay={400}>
          <div className="mt-14">
            <a
              href="/projects"
              className="inline-block px-6 py-3 bg-main text-white font-medium shadow-md hover:bg-black transition duration-300"
            >
              View All Projects
            </a>
          </div>
        </FadeInSection>

      </div>
    </section>
    <div className="w-full h-[1px] bg-gray-100 dark:bg-gray-800" />
    </>
  );
};

export default HomeProjects;
