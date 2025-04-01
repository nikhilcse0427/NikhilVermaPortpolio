import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import profileImg from "./profileImg.png";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-68px)] bg-black text-white flex flex-col md:flex-row items-center justify-center px-5 md:px-20 gap-20">
      {/* Left Section - Introduction */}
      <div className="text-center md:text-left md:w-1/2 space-y-4">
        <p className="text-lg text-gray-400">Software Developer</p>
        <h1 className="text-5xl font-bold">
          Hello I’m <span className="text-green-400">Nikhil Verma</span>
        </h1>
        <p className="text-gray-400 max-w-md">
          I am proficient in MERN stack web development with a passion for coding and problem-solving.
          I continuously explore new technologies to create impactful solutions.
        </p>
        <button
        onClick={() => window.open('/NikhilVermaCV88.pdf', '_blank')}
        className="mt-4 px-6 py-2 border-2 border-green-400 text-green-400 rounded-lg hover:bg-green-400 hover:text-black transition"
        >
      DOWNLOAD CV
    </button>

        <div className="flex justify-center md:justify-start space-x-8 mt-4">
          <a href="https://github.com/nikhilcse0427" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl cursor-pointer hover:text-green-400 transition" />
          </a>
          <a href="https://www.linkedin.com/in/nikhil-verma-58aa482a6" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl cursor-pointer hover:text-green-400 transition" />
          </a>
          <a href="https://www.instagram.com/nikhilverma0427/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl cursor-pointer hover:text-green-400 transition" />
          </a>
        </div>
      </div>

      {/* Right Section - Profile Image with Floating Particles */}
      <div className="relative mt-10 md:mt-0 flex items-center justify-center">
        {/* Floating Particles */}
        <div className="absolute w-72 h-72 md:w-80 md:h-80 flex flex-wrap gap-4 animate-float">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-green-400 rounded-full opacity-50 animate-bounce"
              style={{
                position: "absolute",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Profile Image */}
        <div className="relative w-60 h-60 md:w-64 md:h-64 rounded-full overflow-hidden bg-gray-900 shadow-lg border-2 border-green-400">
          <img src={profileImg} alt="Nikhil Verma" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Floating Animation */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }
          .animate-float div {
            animation: float 3s infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
