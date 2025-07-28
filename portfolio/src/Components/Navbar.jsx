import React, { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { IoIosInformationCircle } from "react-icons/io";
import { SiKnowledgebase } from "react-icons/si";
import { MdWork } from "react-icons/md";
import { GiAchievement } from "react-icons/gi";
import { RiContactsFill } from "react-icons/ri";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="top-0 left-0 w-full bg-white dark:bg-gray-900 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-xl font-bold text-gray-800 dark:text-white font-poppins">
          G.J<span className="text-main">KUMAR</span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-10 font-normal text-sm uppercase text-gray-700 dark:text-gray-300">
          <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "text-main font-medium" : "hover:text-main transition"
              }
            >
              <span className="flex gap-1"><AiFillHome className="text-lg"/> Home</span>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-main font-medium" : "hover:text-main transition"
              }
            >
              <span className="flex gap-1"><IoIosInformationCircle className="text-lg"/> About</span>
            </NavLink>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive ? "text-main font-medium" : "hover:text-main transition"
              }
            >
              <span className="flex gap-1"><SiKnowledgebase className="text-lg"/> Skills</span>
            </NavLink>
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                isActive ? "text-main font-medium" : "hover:text-main transition"
              }
            >
              <span className="flex gap-1"><GiAchievement className="text-lg"/> Experience</span>
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "text-main font-medium" : "hover:text-main transition"
              }
            >
              <span className="flex gap-1"><MdWork className="text-lg"/> Projects</span>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-main font-medium" : "hover:text-main transition"
              }
            >
              <span className="flex gap-1"><RiContactsFill className="text-lg"/> Contact</span>
            </NavLink>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="text-main dark:text-gray-300 hover:text-main transition"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={toggleMenu}
            className="lg:hidden text-main dark:text-gray-300"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Menu */}
      {isOpen && (
  <div className="fixed inset-0 bg-main dark:bg-gray-900 z-40 flex flex-col space-y-8 text-gray-100 dark:text-white text-xl uppercase font-semibold transition-all px-10 py-20">
    
    {/* Close Button */}
    <button
      className="absolute top-6 right-6 text-gray-100 dark:text-gray-300"
      onClick={() => setIsOpen(false)}
      aria-label="Close Menu"
    >
      <X size={28} />
    </button>

    {/* Navigation Links */}
    <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "text-black font-medium dark:text-main" : "hover:text-main transition"
              }
               onClick={toggleMenu}
            >
              <span className="flex gap-2"><AiFillHome className="text-2xl"/> Home</span>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-black font-medium dark:text-main" : "hover:text-main transition"
              }
               onClick={toggleMenu}
            >
              <span className="flex gap-2"><IoIosInformationCircle className="text-2xl"/> About</span>
            </NavLink>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive ? "text-black font-medium dark:text-main" : "hover:text-main transition"
              }
               onClick={toggleMenu}
            >
              <span className="flex gap-2"><SiKnowledgebase className="text-2xl"/> Skills</span>
            </NavLink>
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                isActive ? "text-black font-medium dark:text-main" : "hover:text-main transition"
              }
               onClick={toggleMenu}
            >
              <span className="flex gap-2"><GiAchievement className="text-2xl"/> Experience</span>
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "text-black font-medium dark:text-main" : "hover:text-main transition"
              }
               onClick={toggleMenu}
            >
              <span className="flex gap-2"><MdWork className="text-2xl"/> Projects</span>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-black font-medium dark:text-main" : "hover:text-main transition"
              }
               onClick={toggleMenu}
            >
              <span className="flex gap-2"><RiContactsFill className="text-2xl"/> Contact</span>
            </NavLink>
  </div>
)}

    </nav>
  );
};

export default Navbar;
