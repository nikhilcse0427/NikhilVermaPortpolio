import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaDatabase, FaCode, FaBootstrap, FaTools, FaGraduationCap, FaHtml5, FaCss3, FaJava
} from "react-icons/fa";
import {
  SiMongodb, SiExpress, SiPostman, SiJavascript, SiGraphql, SiRedux
} from "react-icons/si";
import { MdLocationOn, MdEmail, MdPhone, MdWeb } from "react-icons/md";

export default function Resume() {
  const [activeTab, setActiveTab] = useState("About Me");

  const tabs = ["About Me", "Experience", "Education", "Skills"];

  const content = {
    "About Me": (
      <div className="p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl border border-gray-700 w-full text-white h-full overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Full Stack Web Developer
          </h2>
          <div className="space-y-2 text-sm leading-relaxed">
            <p className="text-gray-300">
              I am a passionate <span className="text-green-400 font-semibold">MERN Stack Developer</span> with expertise in both frontend and backend development.
              My journey in web development began with a curiosity to build solutions that make a real impact.
            </p>
            <p className="text-gray-300">
              I specialize in creating <span className="text-blue-400 font-semibold">scalable, efficient, and user-friendly web applications</span> using the latest technologies.
              My approach combines technical excellence with creative problem-solving to deliver exceptional user experiences.
            </p>
            <p className="text-gray-300">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
              or working on innovative solutions that address real-world challenges.
            </p>
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2 p-2 bg-gray-700/50 rounded-lg">
              <MdLocationOn size={16} className="text-green-400" />
              <div>
                <p className="font-semibold text-white text-xs">Location</p>
                <p className="text-gray-300 text-xs">Shivnarayanpur, Bhagalpur, Bihar, India</p>
              </div>
            </div>
            <div className="flex items-center gap-2 p-2 bg-gray-700/50 rounded-lg">
              <MdEmail size={16} className="text-red-400" />
              <div>
                <p className="font-semibold text-white text-xs">Email</p>
                <p className="text-gray-300 text-xs">nikhilverma97988@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-2 p-2 bg-gray-700/50 rounded-lg">
              <MdPhone size={16} className="text-yellow-400" />
              <div>
                <p className="font-semibold text-white text-xs">Phone</p>
                <p className="text-gray-300 text-xs">+91 97988 97988</p>
              </div>
            </div>
            <div className="flex items-center gap-2 p-2 bg-gray-700/50 rounded-lg">
              <MdWeb size={16} className="text-blue-400" />
              <div>
                <p className="font-semibold text-white text-xs">Portfolio</p>
                <p className="text-gray-300 text-xs">www.nikhilverma.dev</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    ),
    Experience: (
      <div className="p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl border border-gray-700 w-full text-white h-full overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Professional Experience
          </h2>

          <div className="space-y-4">
            <div className="border-l-4 border-green-400 pl-3">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                <h3 className="text-base font-semibold text-white">Full Stack Developer</h3>
                <span className="text-green-400 font-medium text-xs">2023 - Present</span>
              </div>
              <p className="text-blue-400 font-medium mb-1 text-xs">Freelance Developer</p>
              <ul className="text-gray-300 space-y-1 text-xs">
                <li>• Developed and deployed 15+ web applications using MERN stack</li>
                <li>• Collaborated with clients to understand requirements and deliver custom solutions</li>
                <li>• Implemented responsive designs and optimized performance for better user experience</li>
                <li>• Integrated third-party APIs and payment gateways for e-commerce applications</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-400 pl-3">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                <h3 className="text-base font-semibold text-white">Software Development Intern</h3>
                <span className="text-blue-400 font-medium text-xs">2022 - 2023</span>
              </div>
              <p className="text-blue-400 font-medium mb-1 text-xs">Tech Solutions Inc.</p>
              <ul className="text-gray-300 space-y-1 text-xs">
                <li>• Worked on developing scalable web applications using modern technologies</li>
                <li>• Participated in code reviews and agile development processes</li>
                <li>• Gained experience in database design and API development</li>
                <li>• Contributed to open-source projects and team collaboration</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    ),
    Education: (
      <div className="p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl border border-gray-700 w-full text-white h-full overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Educational Background
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[{
              school: "Lovely Professional University, Punjab",
              year: "2023-Present",
              degree: "B.Tech in Computer Science & Engineering",
              detail: "Current CGPA: 7.74",
              status: "Ongoing"
            }, {
              school: "New Horizon School, Bhagalpur",
              year: "2020",
              degree: "Intermediate (PCM)",
              detail: "Percentage: 70.6%",
              status: "Completed"
            }, {
              school: "DAV Public School, Mathurapur",
              year: "2018",
              degree: "Matriculation",
              detail: "Percentage: 85.6%",
              status: "Completed"
            }].map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-3 rounded-lg shadow-lg border border-gray-700 bg-gradient-to-br from-gray-700 to-gray-800 hover:shadow-green-500/20 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <FaGraduationCap size={20} className="text-yellow-400" />
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${edu.status === 'Ongoing' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                    }`}>
                    {edu.status}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">{edu.school}</h3>
                <p className="text-gray-400 text-xs mb-1">{edu.year}</p>
                <p className="text-sm font-medium text-green-400 mb-1">{edu.degree}</p>
                <p className="text-gray-300 text-xs">{edu.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    ),
    Skills: (
      <div className="p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl border border-gray-700 w-full text-white h-full overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>

          <div className="space-y-4">
            {/* Frontend Skills */}
            <div>
              <h3 className="text-base font-semibold text-green-400 mb-2">Frontend Development</h3>
              <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                {["ReactJS", "HTML", "CSS", "JavaScript", "TypeScript", "Redux", "Bootstrap", "Tailwind CSS"].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group p-2 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg shadow-lg border border-gray-600 flex flex-col items-center hover:shadow-green-500/20 hover:border-green-500/50 transition-all duration-300"
                  >
                    {skill === "ReactJS" && <FaReact size={20} className="text-blue-400 group-hover:scale-110 transition-transform" />}
                    {skill === "HTML" && <FaHtml5 size={20} className="text-orange-500 group-hover:scale-110 transition-transform" />}
                    {skill === "CSS" && <FaCss3 size={20} className="text-blue-500 group-hover:scale-110 transition-transform" />}
                    {skill === "JavaScript" && <SiJavascript size={20} className="text-yellow-500 group-hover:scale-110 transition-transform" />}
                    {skill === "TypeScript" && <FaCode size={20} className="text-blue-600 group-hover:scale-110 transition-transform" />}
                    {skill === "Redux" && <SiRedux size={20} className="text-purple-500 group-hover:scale-110 transition-transform" />}
                    {skill === "Bootstrap" && <FaBootstrap size={20} className="text-purple-600 group-hover:scale-110 transition-transform" />}
                    {skill === "Tailwind CSS" && <FaCode size={20} className="text-cyan-500 group-hover:scale-110 transition-transform" />}
                    <span className="text-white text-xs font-medium mt-1 group-hover:text-green-400 transition-colors">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div>
              <h3 className="text-base font-semibold text-blue-400 mb-2">Backend Development</h3>
              <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                {["Node.js", "Express.js", "MongoDB", "Postman", "REST APIs", "GraphQL", "Socket.IO", "JWT"].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group p-2 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg shadow-lg border border-gray-600 flex flex-col items-center hover:shadow-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
                  >
                    {skill === "Node.js" && <FaNodeJs size={20} className="text-green-500 group-hover:scale-110 transition-transform" />}
                    {skill === "Express.js" && <SiExpress size={20} className="text-gray-400 group-hover:scale-110 transition-transform" />}
                    {skill === "MongoDB" && <SiMongodb size={20} className="text-green-400 group-hover:scale-110 transition-transform" />}
                    {skill === "Postman" && <SiPostman size={20} className="text-orange-500 group-hover:scale-110 transition-transform" />}
                    {skill === "REST APIs" && <FaCode size={20} className="text-blue-500 group-hover:scale-110 transition-transform" />}
                    {skill === "GraphQL" && <SiGraphql size={20} className="text-pink-500 group-hover:scale-110 transition-transform" />}
                    {skill === "Socket.IO" && <FaCode size={20} className="text-white group-hover:scale-110 transition-transform" />}
                    {skill === "JWT" && <FaCode size={20} className="text-yellow-400 group-hover:scale-110 transition-transform" />}
                    <span className="text-white text-xs font-medium mt-1 group-hover:text-blue-400 transition-colors">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Programming Languages */}
            <div>
              <h3 className="text-base font-semibold text-purple-400 mb-2">Programming Languages</h3>
              <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                {["JavaScript", "C++", "Java", "Python"].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group p-2 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg shadow-lg border border-gray-600 flex flex-col items-center hover:shadow-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
                  >
                    {skill === "JavaScript" && <SiJavascript size={20} className="text-yellow-500 group-hover:scale-110 transition-transform" />}
                    {skill === "C++" && <FaCode size={20} className="text-blue-600 group-hover:scale-110 transition-transform" />}
                    {skill === "Java" && <FaJava size={20} className="text-red-500 group-hover:scale-110 transition-transform" />}
                    {skill === "Python" && <FaCode size={20} className="text-green-600 group-hover:scale-110 transition-transform" />}
                    <span className="text-white text-xs font-medium mt-1 group-hover:text-purple-400 transition-colors">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    ),
  };

  return (
    <div className="h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      <div className="container mx-auto px-6 py-8 h-full">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Get to know more about my journey, experience, and technical expertise
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-4 max-w-6xl mx-auto h-full">
          {/* Sidebar Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/4 h-full"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl border border-gray-700 p-4 h-full flex flex-col">
              <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
              <div className="space-y-2 flex-1">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`w-full px-3 py-2 rounded-lg text-left font-medium transition-all duration-300 text-sm ${activeTab === tab
                      ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-3/4 h-full overflow-y-auto"
          >
            <div className="h-full">
              {content[activeTab]}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
