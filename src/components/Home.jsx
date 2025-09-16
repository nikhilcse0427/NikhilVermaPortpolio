import { FaGithub, FaInstagram, FaLinkedin, FaDownload, FaCode, FaRocket, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect } from "react";
import profileImg from "./profileImg.png";

const Home = () => {
  useEffect(() => {
    // Prevent scrolling on home page
    document.body.style.overflow = 'hidden';

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="home-page h-screen w-full bg-black text-white relative overflow-hidden fixed top-0 left-0">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center px-8 md:px-24 gap-16 h-screen w-full">
        {/* Left Section - Introduction */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left md:w-1/2 space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium"
          >
            <FaCode className="mr-2" />
            Full Stack Developer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Hello, I'm <br />
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Nikhil Verma
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-gray-300 max-w-xl leading-relaxed"
          >
            I'm a passionate <span className="text-green-400 font-semibold">MERN Stack Developer</span> with expertise in building
            scalable web applications. I love creating innovative solutions that make a difference.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <button
              onClick={() => window.open('/NikhilVermaCV88.pdf', '_blank')}
              className="group px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 flex items-center justify-center text-sm"
            >
              <FaDownload className="mr-2 group-hover:animate-bounce" />
              Download CV
            </button>
            <a
              href="/project"
              className="group px-6 py-3 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-sm"
            >
              <FaRocket className="mr-2 group-hover:animate-pulse" />
              View Projects
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex justify-center md:justify-start space-x-4 mt-6"
          >
            <a
              href="https://github.com/nikhilcse0427"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <FaGithub className="text-2xl text-gray-400 group-hover:text-white transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/nikhil-verma-58aa482a6"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-gray-800 hover:bg-blue-600 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <FaLinkedin className="text-2xl text-gray-400 group-hover:text-white transition-colors" />
            </a>
            <a
              href="https://www.instagram.com/nikhilverma0427/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-gray-800 hover:bg-pink-600 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <FaInstagram className="text-2xl text-gray-400 group-hover:text-white transition-colors" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Section - Profile Image with Enhanced Design */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mt-8 md:mt-0 flex items-center justify-center"
        >
          {/* Floating Tech Icons */}
          <div className="absolute w-80 h-80 flex flex-wrap gap-5 animate-float">
            {[
              { icon: "⚛️", delay: 0 },
              { icon: "🚀", delay: 0.5 },
              { icon: "💻", delay: 1 },
              { icon: "🔧", delay: 1.5 },
              { icon: "📱", delay: 2 },
              { icon: "🌐", delay: 2.5 },
              { icon: "⚡", delay: 3 },
              { icon: "🎯", delay: 3.5 }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="absolute text-xl opacity-60"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 4,
                  delay: item.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {item.icon}
              </motion.div>
            ))}
          </div>

          {/* Profile Image Container */}
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Outer Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-1 animate-spin-slow">
              <div className="w-full h-full rounded-full bg-black"></div>
            </div>

            {/* Profile Image */}
            <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-900 shadow-2xl border-4 border-gray-800">
              <img
                src={profileImg}
                alt="Nikhil Verma"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Status Badge */}
            <motion.div
              className="absolute -bottom-3 -right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Available for Work
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-float {
            animation: float 6s infinite ease-in-out;
          }
          .animate-spin-slow {
            animation: spin-slow 8s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Home;