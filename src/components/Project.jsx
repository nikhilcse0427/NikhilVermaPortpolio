import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import DoctorAppointment from "./DoctorAppointment.png";
const projects = [
  {
    name: "Doctor Appointment System",
    description:
      "A web application for booking doctor appointments online. Users can select a doctor, book slots, and make payments.",
    technologies: ["ReactJS", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    link: "https://appappointment-75586.web.app",
    image: DoctorAppointment // Placeholder image
  },
  {
    name: "DevSync-AI",
    description:
      "A real-time AI developer chat application integrated with Gemini AI. Users can collaborate and get AI-powered coding suggestions.",
    technologies: ["ReactJS", "MERN Stack", "Socket.IO", "Framer Motion"],
    link: "https://github.com/nikhilcse0427/devsync-ai",
    image: "https://www.saifety.ai/wp-content/uploads/2023/08/AI-Chatbot.jpg", // Placeholder image
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-r bg-black to-gray-900 text-white flex flex-col items-center py-10 px-6 md:px-20">
        <h1 className="text-3xl font-bold text-center text-blue-500 pb-10">My Projects</h1>
      {/* Project Cards */}
      <div className="w-full max-w-5xl grid grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="p-6 bg-gray-900 rounded-lg shadow-lg border border-gray-700 flex flex-col md:flex-row items-center overflow-hidden transform hover:scale-105 transition duration-500"
          >
            {/* Left Side - Project Image */}
            <div className="md:w-1/3 flex justify-center p-4">
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg shadow-md w-full h-auto object-cover border border-gray-600"
              />
            </div>
            
            {/* Right Side - Project Description */}
            <div className="md:w-2/3 p-4 text-left">
              <h2 className="text-2xl font-semibold text-green-400">{project.name}</h2>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-500 text-white text-sm rounded-lg shadow-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-blue-400 hover:text-blue-500 transition-all text-lg font-semibold"
              >
                View Project <FaExternalLinkAlt className="ml-2" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
