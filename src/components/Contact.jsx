import { useState } from "react";
import { FaLinkedin, FaFacebook, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";
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
      const serviceID = "service_u26l88q"; // Replace with your EmailJS Service ID
      const templateID = "template_8lxn969"; // Replace with your EmailJS Template ID
      const publicKey = "6ld0TaloJWwJ6vCtq"; // Replace with your EmailJS Public Key

      await emailjs.send(serviceID, templateID, formData, publicKey);
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("❌ Failed to send message. Try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br bg-black text-white flex flex-col md:flex-row items-center justify-center py-10 px-14">
      
      {/* Left Section - Contact Info */}
      <div className="md:w-1/3 flex flex-col gap-6 text-left">
        <h1 className="text-4xl font-bold text-green-400">Let's Connect</h1>
        <p className="text-gray-300 text-lg">
          Feel free to reach out for collaborations, queries, or just a chat!
        </p>

        <div className="flex flex-col gap-4 text-lg">
          <a href="tel:+919798897988" className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition duration-300">
            <FaPhone size={22} /> +91 97988 97988
          </a>
          <a href="mailto:nikhilverma97988@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition duration-300">
            <FaEnvelope size={22} /> nikhilverma97988@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/nikhil-verma-58aa482a6" target="_blank" className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition duration-300">
            <FaLinkedin size={22} /> LinkedIn
          </a>
          <a href="https://www.facebook.com/nikhilverma97988/" target="_blank" className="flex items-center gap-3 text-gray-300 hover:text-blue-600 transition duration-300">
            <FaFacebook size={22} /> Facebook
          </a>
          <a href="https://www.instagram.com/nikhilverma0427/" target="_blank" className="flex items-center gap-3 text-gray-300 hover:text-pink-500 transition duration-300">
            <FaInstagram size={22} /> Instagram
          </a>
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div className="md:w-2/3 p-8 bg-black rounded-xl shadow-lg border border-gray-700 w-full max-w-lg backdrop-blur-md bg-opacity-70">
        <h2 className="text-3xl font-semibold text-white mb-4 text-center">Send a Message</h2>
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
            rows="4"
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
        {status && <p className="mt-3 text-center font-semibold">{status}</p>}
      </div>
    </div>
  );
}
