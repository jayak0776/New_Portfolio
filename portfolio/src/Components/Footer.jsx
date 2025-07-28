import React from "react";
import FadeInSection from "./FadeInSection"// adjust the path if needed

const Footer = () => {
  return (
      <footer className="bg-black text-white py-14 px-6 md:px-20">
        <FadeInSection delay={300}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Jaya Kumar</h3>
            <p className="text-sm leading-relaxed">
              A passionate Full Stack Web Developer and Cybersecurity SOC Analyst.
              I craft secure, scalable, and creative solutions that merge tech and security.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/skills" className="hover:underline">Skills</a></li>
              <li><a href="/projects" className="hover:underline">Projects</a></li>
              <li><a href="/experience" className="hover:underline">Experience</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <ul className="text-sm space-y-2">
              <li>Email: <a href="mailto:jayakumar@example.com" className="underline">jayak0776@gmail.com</a></li>
              <li>Location: India (GMT +5:30)</li>
              <li>Open to: Full-time, Freelance, Collab</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Jaya Kumar. All rights reserved.
        </div>
        </FadeInSection>
      </footer>
    
  );
};

export default Footer;
