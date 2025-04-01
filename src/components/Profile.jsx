import { useState, useEffect } from "react";
import { FaGithub, FaCode } from "react-icons/fa";
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
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center py-10 px-10 md:px-20 gap-10">
      <h1 className="text-3xl font-bold mb-6">My Profiles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {/* GitHub Profile Box */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="p-8 bg-gray-900 rounded-lg shadow-lg border border-gray-700 flex flex-col items-center"
        >
          <FaGithub size={60} className="text-white mb-4" />
          <h2 className="text-2xl font-semibold">GitHub</h2>
          <motion.a
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="mt-4 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md"
          >
            Visit GitHub
          </motion.a>
        </motion.div>

        {/* LeetCode Profile Box */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-8 bg-gray-900 rounded-lg shadow-lg border border-gray-700 flex flex-col items-center"
        >
          <FaCode size={60} className="text-yellow-400 mb-4" />
          <h2 className="text-2xl font-semibold">LeetCode</h2>
          <motion.a
            href={`https://leetcode.com/${leetcodeUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="mt-4 px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg shadow-md"
          >
            Visit LeetCode
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
