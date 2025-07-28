import Footer from "./Components/Footer"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import SocialMediaLinks from "./Components/SocialMediaLinks"
import { Routes, Route } from "react-router-dom";
import AboutPage from "./Components/AboutPage";
import SkillsPage  from "./Components/SkillsPage.jsx"
import ProjectsPage from "./Components/ProjectsPage.jsx"
import ExperiencePage from "./Components/ExperiencePage.jsx"
import ContactPage from "./Components/ContactPage.jsx";
import { ToastContainer } from "react-toastify";


function App() {
  

  return (
    <>
      <Navbar/>
      <SocialMediaLinks/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer/>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
