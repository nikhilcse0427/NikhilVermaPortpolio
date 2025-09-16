import { useState, useEffect } from "react";
import { FaGithub, FaCode, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Profile() {
  const [githubData, setGithubData] = useState(null);
  const [leetcodeData, setLeetcodeData] = useState(null);

  const githubUsername = "nikhilcse0427";
  const leetcodeUsername = "nikhilverma0427";

  useEffect(() => {
    async function fetchData() {
      try {
        const githubResponse = await fetch(`https://api.github.com/users/${githubUsername}`);
        const githubData = await githubResponse.json();
        setGithubData(githubData);

        const leetcodeResponse = await fetch(`https://leetcode-stats-api.herokuapp.com/${leetcodeUsername}`);
        const leetcodeData = await leetcodeResponse.json();
        setLeetcodeData(leetcodeData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            My Profiles
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Connect with me on various platforms and explore my coding journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* GitHub Profile Box */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="group p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl border border-gray-700 flex flex-col items-center hover:shadow-green-500/20 hover:border-green-500/50 transition-all duration-500"
          >
            <div className="p-3 bg-gray-700/50 rounded-full mb-4 group-hover:bg-green-500/20 transition-colors duration-300">
              <FaGithub size={36} className="text-white group-hover:text-green-400 transition-colors duration-300" />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">GitHub</h2>
            <p className="text-gray-400 text-center mb-4 text-sm">
              Explore my repositories, contributions, and coding projects
            </p>
            {githubData && (
              <div className="grid grid-cols-2 gap-3 mb-4 w-full">
                <div className="text-center p-2 bg-gray-700/50 rounded-lg">
                  <p className="text-lg font-bold text-green-400">{githubData.public_repos}</p>
                  <p className="text-xs text-gray-400">Repositories</p>
                </div>
                <div className="text-center p-2 bg-gray-700/50 rounded-lg">
                  <p className="text-lg font-bold text-blue-400">{githubData.followers}</p>
                  <p className="text-xs text-gray-400">Followers</p>
                </div>
              </div>
            )}
            <motion.a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 text-center text-sm"
            >
              Visit GitHub
            </motion.a>
          </motion.div>

          {/* LeetCode Profile Box */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="group p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl border border-gray-700 flex flex-col items-center hover:shadow-yellow-500/20 hover:border-yellow-500/50 transition-all duration-500"
          >
            <div className="p-3 bg-gray-700/50 rounded-full mb-4 group-hover:bg-yellow-500/20 transition-colors duration-300">
              <FaCode size={36} className="text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">LeetCode</h2>
            <p className="text-gray-400 text-center mb-4 text-sm">
              Check out my problem-solving skills and coding challenges
            </p>
            {leetcodeData && (
              <div className="grid grid-cols-2 gap-3 mb-4 w-full">
                <div className="text-center p-2 bg-gray-700/50 rounded-lg">
                  <p className="text-lg font-bold text-yellow-400">{leetcodeData.totalSolved}</p>
                  <p className="text-xs text-gray-400">Problems Solved</p>
                </div>
                <div className="text-center p-2 bg-gray-700/50 rounded-lg">
                  <p className="text-lg font-bold text-orange-400">{leetcodeData.ranking}</p>
                  <p className="text-xs text-gray-400">Ranking</p>
                </div>
              </div>
            )}
            <motion.a
              href={`https://leetcode.com/${leetcodeUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 text-center text-sm"
            >
              Visit LeetCode
            </motion.a>
          </motion.div>

          {/* LinkedIn Profile Box */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="group p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl border border-gray-700 flex flex-col items-center hover:shadow-blue-500/20 hover:border-blue-500/50 transition-all duration-500"
          >
            <div className="p-3 bg-gray-700/50 rounded-full mb-4 group-hover:bg-blue-500/20 transition-colors duration-300">
              <FaLinkedin size={36} className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">LinkedIn</h2>
            <p className="text-gray-400 text-center mb-4 text-sm">
              Connect with me professionally and view my career journey
            </p>
            <motion.a
              href="https://www.linkedin.com/in/nikhil-verma-58aa482a6"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 text-center text-sm"
            >
              Visit LinkedIn
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
