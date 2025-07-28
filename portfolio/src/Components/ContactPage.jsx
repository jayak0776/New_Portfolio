import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaWhatsapp,
  FaUserTie,
  FaClock,
} from "react-icons/fa";
import HomeContact from "../Components/Home/HomeContact"
import FadeInSection from "./FadeInSection";

const ContactPage = () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">


      <HomeContact/>
       <section className="bg-main text-white py-10 px-6 md:px-10 lg:px-20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Text Info */}
              <FadeInSection delay={300}>
                <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Let’s Connect!</h2>
                <p className="text-xs md:text-xs text-white text-center">
                  Interested in working together, collaborating, or just want to say hello? Feel free to reach out!
                </p>
              </div>
              </FadeInSection>
      
              {/* Contact Buttons */}
             <FadeInSection>
               <div className="flex gap-2 mt-4 md:mt-0">
                <a
                  href="mailto:jayak0776@gmail.com"
                  className="flex items-center gap-2 bg-white text-main px-3 py-2 lg:px-4 lg:py-2 rounded-full font-medium hover:bg-gray-200 transition text-xs md:text-sm"
                ><FaEnvelope /> Mail
                </a>
                <a
                  href="https://wa.me/918919753805"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-white text-main px-3 py-2 lg:px-4 lg:py-2 rounded-full font-medium hover:bg-gray-200 transition text-xs md:text-sm"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
                <a
                  href="http://www.linkedin.com/in/jayakumargubbala"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-white text-main px-3 py-2 md:px-2 md:py-1 lg:px-4 lg:py-2 rounded-full font-medium hover:bg-gray-200 transition text-xs lg:text-sm"
                >
                  <FaLinkedin /> LinkedIn
                </a>
              </div>
             </FadeInSection>
            </div>
          </section>

      {/* Optional Map */}
      <section className="bg-sec text-white py-16 px-8 md:px-20 w-full dark:bg-gray-900">
      <FadeInSection delay={400}>
        <div className="max-w-4xl md:px-10 bg-sec  dark:bg-gray-900" >
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4 py-2">
              My Current <span className="text-main">Location</span>
              <span className="block w-20 h-1 bg-main mt-2 rounded-full mx-4" />
            </h2>
        <iframe
        className="w-full h-72 rounded-sm shadow-md"
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30531.723340037242!2d81.77632188188281!3d16.951642018541506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a34a22c241f7%3A0x8a635346aec3c03!2sDhavaleswaram%2C%20Rajamahendravaram%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1753630128424!5m2!1sen!2sin"
         allowFullScreen
          ></iframe>
      </div>
      </FadeInSection>
      </section>
    </section>
  );
};

export default ContactPage;