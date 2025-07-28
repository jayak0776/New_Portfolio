import React, { useState } from "react";
import FadeInSection from "../FadeInSection";
import axiosInstance from "../../axiosInstance";

const HomeContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await axiosInstance.post("/api/contact", formData);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      console.log(res)
    } catch (error) {
      console.error("Failed to send message:", error);
      setStatus("Failed to send message.");
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-sec dark:bg-gray-900 py-10 md:py-24 px-6 md:px-20 overflow-hidden"
    >
      <div className="absolute top-10 left-[-100px] w-[300px] h-[300px] blur-3xl opacity-10 rounded-full z-0 pointer-events-none bg-main" />

      <FadeInSection delay={200}>
        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
              Let’s <span className="text-main">Connect</span>
            </h2>
            <div className="w-16 h-1 bg-main mb-6 mx-auto md:mx-0 rounded-full" />

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              Got an idea, opportunity, or just want to say hi? I’d love to hear
              from you! I’m open to full-time roles, freelance, and collaborations.
            </p>

            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <p><strong>Email:</strong> jayak0776@gmail.com</p>
              <p><strong>Location:</strong> India (GMT+5:30)</p>
            </div>
          </div>

          {/* ✅ Contact Form Logic Starts Here */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 rounded-sm shadow-sm p-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-gray-50 dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-main transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-gray-50 dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-main transition"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-gray-50 dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-main transition resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-main text-white py-3 font-semibold hover:bg-black transition duration-300"
            >
              Send Message
            </button>
            {status && (
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
                {status}
              </p>
            )}
          </form>
        </div>
      </FadeInSection>
    </section>
  );
};

export default HomeContact;
