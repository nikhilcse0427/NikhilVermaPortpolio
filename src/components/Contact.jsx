import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaMapMarkerAlt,
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's collaborate and create something amazing together!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
          {/* Left Section - Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 max-w-2xl"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl border border-gray-700 p-6">
              <h2 className="text-3xl font-bold text-green-400 mb-6">
                Let's Connect
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                I'm always excited to work on new projects and collaborate with fellow developers. 
                Whether you have a project in mind or just want to chat about technology, feel free to reach out!
              </p>

              <div className="space-y-6">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4 p-4 bg-gray-700/50 rounded-xl hover:bg-gray-700 transition-all duration-300"
                >
                  <div className="p-3 bg-green-500/20 rounded-full">
                    <FaPhone size={20} className="text-green-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <a href="tel:+919798897988" className="text-gray-300 hover:text-green-400 transition">
                      +91 97988 97988
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4 p-4 bg-gray-700/50 rounded-xl hover:bg-gray-700 transition-all duration-300"
                >
                  <div className="p-3 bg-red-500/20 rounded-full">
                    <FaEnvelope size={20} className="text-red-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <a href="mailto:nikhilverma97988@gmail.com" className="text-gray-300 hover:text-red-400 transition">
                      nikhilverma97988@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4 p-4 bg-gray-700/50 rounded-xl hover:bg-gray-700 transition-all duration-300"
                >
                  <div className="p-3 bg-yellow-500/20 rounded-full">
                    <FaMapMarkerAlt size={20} className="text-yellow-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Location</p>
                    <p className="text-gray-300">Shivnarayanpur, Bhagalpur, Bihar, India</p>
                  </div>
                </motion.div>

                <div className="pt-4">
                  <p className="text-lg font-semibold text-white mb-4">Follow Me</p>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/nikhilcse0427"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-all duration-300 transform hover:scale-110"
                    >
                      <FaGithub size={20} className="text-gray-300 hover:text-white" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/nikhil-verma-58aa482a6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-700 hover:bg-blue-600 rounded-full transition-all duration-300 transform hover:scale-110"
                    >
                      <FaLinkedin size={20} className="text-gray-300 hover:text-white" />
                    </a>
                    <a
                      href="https://www.facebook.com/nikhilverma97988/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-700 hover:bg-blue-700 rounded-full transition-all duration-300 transform hover:scale-110"
                    >
                      <FaFacebook size={20} className="text-gray-300 hover:text-white" />
                    </a>
                    <a
                      href="https://www.instagram.com/nikhilverma0427/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-700 hover:bg-pink-600 rounded-full transition-all duration-300 transform hover:scale-110"
                    >
                      <FaInstagram size={20} className="text-gray-300 hover:text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Section - Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 max-w-2xl"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl border border-gray-700 p-6">
              <h2 className="text-2xl font-bold text-white text-center mb-6">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-gray-700/50 rounded-xl text-white border border-gray-600 focus:ring-2 focus:ring-green-400 focus:border-green-400 outline-none transition-all duration-300 placeholder-gray-400"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-gray-700/50 rounded-xl text-white border border-gray-600 focus:ring-2 focus:ring-green-400 focus:border-green-400 outline-none transition-all duration-300 placeholder-gray-400"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-gray-700/50 rounded-xl text-white border border-gray-600 focus:ring-2 focus:ring-green-400 focus:border-green-400 outline-none transition-all duration-300 placeholder-gray-400 resize-none"
                  ></textarea>
                </motion.div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-xl text-white font-semibold shadow-lg transition-all duration-300 transform hover:shadow-green-500/25"
                >
                  Send Message
                </motion.button>
              </form>
              
              {status && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-gray-700/50 rounded-xl text-center"
                >
                  <p className="font-semibold text-sm">
                    {status}
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
