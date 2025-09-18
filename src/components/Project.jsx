import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import DoctorAppointment from "./DoctorAppointment.png";

const projects = [
  {
    name: "Road Safety Guard System",
    description:
      "A comprehensive road safety management system with real-time traffic monitoring, accident reporting, emergency response coordination, and safety analytics dashboard for traffic authorities.",
    technologies: ["ReactJS", "Node.js", "MongoDB", "Express.js", "Socket.IO", "Mapbox API", "Tailwind CSS"],
    link: "https://road-safety-guard-rcxx.vercel.app/",
    githubLink: "https://github.com/nikhilcse0427/RoadSafety-Guard",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: ["Real-time traffic monitoring", "Accident reporting system", "Emergency response", "Safety analytics", "Mobile responsive"]
  },
  {
    name: "Doctor Appointment System",
    description:
      "A comprehensive web application for booking doctor appointments online with integrated payment processing, patient management, and appointment scheduling system.",
    technologies: ["ReactJS", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "Stripe API"],
    link: "https://appappointment-75586.web.app",
    githubLink: "https://github.com/nikhilcse0427/doctor-appointment-system",
    image: DoctorAppointment,
    features: ["Online booking", "Payment integration", "Patient management", "Doctor profiles", "Appointment scheduling"]
  },
  {
    name: "Moto Mart",
    description:
      "A modern motorcycle dealership platform with inventory management, customer booking system, service scheduling, and integrated payment processing for motorcycle sales and maintenance.",
    technologies: ["ReactJS", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "Stripe API", "Socket.IO"],
    link: "https://github.com/nikhilcse0427/moto-mart",
    githubLink: "https://github.com/nikhilcse0427/MotorMate",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: ["Motorcycle catalog", "Service booking", "Inventory management", "Customer portal", "Payment integration"]
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="container mx-auto px-6 pt-24 pb-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore my portfolio of innovative web applications and solutions that showcase my expertise in full-stack development
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl border border-gray-700 overflow-hidden hover:shadow-green-500/20 hover:border-green-500/50 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative h-32 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-green-500 hover:bg-green-600 rounded-full text-white transition-colors"
                    title="Live Demo"
                  >
                    <FaExternalLinkAlt size={16} />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full text-white transition-colors"
                    title="GitHub Repository"
                  >
                    <FaGithub size={16} />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4">
                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {project.name}
                </h2>
                <p className="text-gray-300 mb-3 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-3">
                  <h3 className="text-xs font-semibold text-green-400 mb-2 uppercase tracking-wide">Key Features</h3>
                  <div className="flex flex-wrap gap-1">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full border border-gray-600"
                      >
                        {feature}
                      </span>
                    ))}
                    {project.features.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full border border-gray-600">
                        +{project.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-3">
                  <h3 className="text-xs font-semibold text-blue-400 mb-2 uppercase tracking-wide">Technologies</h3>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-lg border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-lg border border-blue-500/30">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-2 px-4 rounded-lg text-center transition-all duration-300 transform hover:scale-105 text-sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg text-center transition-all duration-300 transform hover:scale-105 text-sm"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-400 mb-8">
            Interested in collaborating or have a project in mind?
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </div>
  );
}
