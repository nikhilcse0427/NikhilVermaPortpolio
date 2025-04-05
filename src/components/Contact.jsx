import { useState } from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
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
    try {
      const serviceID = "service_u26l88q";
      const templateID = "template_8lxn969";
      const publicKey = "6ld0TaloJWwJ6vCtq";

      await emailjs.send(serviceID, templateID, formData, publicKey);
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("❌ Failed to send message. Try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-center gap-12">
      {/* Left Section - Contact Info */}
      <div className="w-full md:w-1/2 max-w-md lg:max-w-lg">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-400 mb-4">
          Let's Connect
        </h1>
        <p className="text-gray-300 text-base sm:text-lg mb-6">
          Feel free to reach out for collaborations, queries, or just a chat!
        </p>

        <div className="flex flex-col gap-4 text-base sm:text-lg">
          <a
            href="tel:+919798897988"
            className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition"
          >
            <FaPhone size={20} /> +91 97988 97988
          </a>
          <a
            href="mailto:nikhilverma97988@gmail.com"
            className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition"
          >
            <FaEnvelope size={20} /> nikhilverma97988@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/nikhil-verma-58aa482a6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition"
          >
            <FaLinkedin size={20} /> LinkedIn
          </a>
          <a
            href="https://www.facebook.com/nikhilverma97988/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-300 hover:text-blue-600 transition"
          >
            <FaFacebook size={20} /> Facebook
          </a>
          <a
            href="https://www.instagram.com/nikhilverma0427/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-300 hover:text-pink-500 transition"
          >
            <FaInstagram size={20} /> Instagram
          </a>
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div className="w-full md:w-1/2 max-w-xl bg-black border border-gray-700 rounded-xl p-6 sm:p-8 shadow-md">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white text-center mb-6">
          Send a Message
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 bg-black rounded-lg text-white border border-gray-600 focus:ring-2 focus:ring-green-400 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 bg-black rounded-lg text-white border border-gray-600 focus:ring-2 focus:ring-green-400 outline-none"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-3 bg-black rounded-lg text-white border border-gray-600 focus:ring-2 focus:ring-green-400 outline-none"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg text-white font-semibold shadow-md transition-all"
          >
            Send Message
          </button>
        </form>
        {status && (
          <p className="mt-4 text-center font-semibold text-sm sm:text-base">
            {status}
          </p>
        )}
      </div>
    </div>
  );
}
