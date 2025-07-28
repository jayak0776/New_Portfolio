import React, { useEffect, useState } from "react";
import defaultImg from "../assets/1.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FadeInSection from "../Components/FadeInSection"
import axiosInstance from "../axiosInstance";


const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [projectTypes, setProjectTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  axiosInstance.get("/api/get-projects")
    .then((res) => {
      const data = res.data || [];
      setProjects(data);

      const defaultTypes = ["Full Stack Web Application", "Web Development"];
      const filtered = data.filter((proj) => defaultTypes.includes(proj.projectType));
      setFilteredProjects(filtered);

      const types = ["All", ...new Set(data.map((proj) => proj.projectType))];
      setProjectTypes(types);
      setSelectedType("Custom");
      setLoading(false);
    })
    .catch((err) => {
      console.error("Error fetching projects:", err);
      toast.error("Failed to load projects. Please try again later.");
      setLoading(false);
    });
}, []);


  // Filter logic
 const handleFilterChange = (e) => {
  const type = e.target.value;
  setSelectedType(type);
  setCurrentPage(1);

  if (type === "All") {
    setFilteredProjects(projects);
  } else if (type === "Custom") {
    setFilteredProjects(projects.filter((proj) =>
      ["Full Stack Web Application", "Web Development"].includes(proj.projectType)
    ));
  } else {
    setFilteredProjects(projects.filter((proj) => proj.projectType === type));
  }
};


  // Pagination logic
  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const paginate = (pageNum) => setCurrentPage(pageNum);

 const getPageNumbers = () => {
  const totalNumbers = 5; // Number of page numbers to show in the middle
  const totalButtons = totalNumbers + 2; // Includes first and last page

  if (totalPages <= totalButtons) {
    return [...Array(totalPages).keys()].map((n) => n + 1);
  }

  const leftBound = Math.max(2, currentPage - 2);
  const rightBound = Math.min(totalPages - 1, currentPage + 2);
  const pageNumbers = [];

  pageNumbers.push(1); // Always show first page

  if (leftBound > 2) {
    pageNumbers.push("...");
  }

  for (let i = leftBound; i <= rightBound; i++) {
    pageNumbers.push(i);
  }

  if (rightBound < totalPages - 1) {
    pageNumbers.push("...");
  }

  pageNumbers.push(totalPages); // Always show last page

  return pageNumbers;
};



  if (loading) return <div className="flex items-center justify-center h-screen text-gray-600 dark:text-gray-300 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-800 dark:border-white"></div>
        <span className="ml-3">Loading...</span>
      </div>

  return (
    <section className="min-h-screen w-full bg-white dark:bg-gray-900 py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
       <FadeInSection delay={0}>
         <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-main mb-2 font-poppins"><span className="text-black dark:text-sec">My</span> Projects</h1>
          <span className="block w-20 h-1 bg-main mt-2 rounded-full mx-auto" />
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 italic">
            A mix of professional, real-world, and mini-projects from my journey.
          </p>
        </div>
       </FadeInSection>

        {/* Filter Dropdown */}
        <FadeInSection delay={300}>
          <div className="mb-8 text-center">
          <select
            value={selectedType}
            onChange={handleFilterChange}
            className="w-full lg:w-[280px] px-3 py-2 border rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300 
                        dark:focus:ring-gray-500 dark:focus:border-gray-500 
                        border-gray-200 dark:border-gray-700 dark:bg-gray-900 text-gray-800 dark:text-gray-100"
          >
            <option value="Custom">Default</option>
            {projectTypes.map((type, i) => (
              <option key={i} value={type}>{type}</option>
            ))}
          </select>

        </div>
        </FadeInSection>

        {/* Projects Grid */}
        <FadeInSection delay={400}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {currentProjects.map((proj, index) => (
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
        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-10 flex justify-center items-center flex-wrap gap-2">
            {/* Prev Button */}
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md border ${
                currentPage === 1
                  ? "bg-gray-300 dark:bg-gray-700 text-white cursor-not-allowed"
                  : "border-main text-main hover:bg-main hover:text-white"
              } transition`}
            >
              Prev
            </button>

            {/* Page Numbers */}
          {getPageNumbers().map((num, i) =>
              num === "..." ? (
                <span key={i} className="px-3 py-2 text-gray-500">...</span>
              ) : (
                <button
                  key={i}
                  onClick={() => paginate(num)}
                  className={`px-4 py-2 rounded-md border text-sm font-medium transition-all duration-200 ${
                    currentPage === num
                      ? "bg-main text-white border-main shadow-md"
                      : "bg-white dark:bg-gray-800 text-main border-main hover:bg-main hover:text-white"
                  }`}
                >
                  {num}
                </button>
              )
            )}


            {/* Next Button */}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-md border ${
                currentPage === totalPages
                  ? "bg-gray-300 dark:bg-gray-700 text-white cursor-not-allowed"
                  : "border-main text-main hover:bg-main hover:text-white"
              } transition`}
            >
              Next
            </button>
          </div>
        )}
        </FadeInSection>


      </div>
    </section>
  );
};

export default Projects;
