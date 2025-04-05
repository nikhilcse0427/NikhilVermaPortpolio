import { useState } from "react";
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
      <div className="p-6 bg-black rounded-lg shadow-lg border border-gray-700 w-full text-white">
        <h2 className="text-3xl font-bold mb-4">Full Stack Web Developer</h2>
        <p className="text-gray-300 mb-4">I am a MERN Stack Developer proficient in both frontend and backend development.</p>
        <p className="text-gray-300 mb-4">Building scalable, efficient, and user-friendly web applications using the latest technologies.</p>
        <div className="flex items-center gap-3 mb-2"><MdLocationOn size={20} className="text-green-400" /><p>Shivnarayanpur, Bhagalpur, Bihar, India</p></div>
        <div className="flex items-center gap-3 mb-2"><MdEmail size={20} className="text-red-400" /><p>nikhilverma97988@gmail.com</p></div>
        <div className="flex items-center gap-3 mb-2"><MdPhone size={20} className="text-yellow-400" /><p>+1 234 567 890</p></div>
        <div className="flex items-center gap-3"><MdWeb size={20} className="text-blue-400" /><p>www.myportfolio.com</p></div>
      </div>
    ),
    Experience: (
      <div className="p-6 bg-black rounded-lg shadow-lg border border-gray-700 w-full">
        <h2 className="text-2xl font-semibold text-white mb-4">Experience</h2>
        <p className="text-gray-400">Freelancer - Full Stack Developer (2023 - Present)</p>
        <p className="text-gray-400">Worked with multiple clients to build web applications.</p>
        <p className="text-gray-400 mt-4">Software Engineer at XYZ Ltd. (2022 - 2023)</p>
        <p className="text-gray-400">Developed scalable web applications.</p>
      </div>
    ),
    Education: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full bg-black p-6 rounded-lg">
        {[{
          school: "Lovely Professional University, Punjab",
          year: "2023-Present",
          degree: "B.Tech in Computer Science & Engineering",
          detail: "Current CGPA: 7.74",
        }, {
          school: "New Horizon School, Bhagalpur",
          year: "2020",
          degree: "Intermediate (PCM)",
          detail: "Percentage: 70.6%",
        }, {
          school: "DAV Public School, Mathurapur",
          year: "2018",
          degree: "Matriculation",
          detail: "Percentage: 85.6%",
        }].map((edu, index) => (
          <div key={index} className="p-6 rounded-lg shadow-lg border border-gray-700 text-white bg-gray-800">
            <FaGraduationCap size={30} className="mb-3 text-yellow-400" />
            <h3 className="text-xl font-semibold">{edu.school}</h3>
            <p className="text-gray-400">{edu.year}</p>
            <p className="text-lg font-medium text-green-400">{edu.degree}</p>
            <p className="text-gray-300">{edu.detail}</p>
          </div>
        ))}
      </div>
    ),
    Skills: (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full bg-black p-6 rounded-lg">
        {["ReactJS", "Node.js", "MongoDB", "Express.js", "TypeScript", "Redux", "C++", "OOPs", "DSA", "HTML", "CSS", "JavaScript", "Bootstrap", "Postman"].map((skill, index) => (
          <div key={index} className="p-4 bg-gray-900 rounded-lg shadow-lg border border-gray-700 flex flex-col items-center">
            {skill === "ReactJS" && <FaReact size={30} className="text-blue-400" />}
            {skill === "Node.js" && <FaNodeJs size={30} className="text-green-500" />}
            {skill === "MongoDB" && <SiMongodb size={30} className="text-green-400" />}
            {skill === "Express.js" && <SiExpress size={30} className="text-gray-400" />}
            {skill === "OOPs" && <FaJava size={30} className="text-red-500" />}
            {skill === "DSA" && <FaCode size={30} className="text-yellow-500" />}
            {skill === "HTML" && <FaHtml5 size={30} className="text-orange-500" />}
            {skill === "CSS" && <FaCss3 size={30} className="text-blue-500" />}
            {skill === "JavaScript" && <SiJavascript size={30} className="text-yellow-500" />}
            {skill === "Bootstrap" && <FaBootstrap size={30} className="text-purple-500" />}
            {skill === "Postman" && <SiPostman size={30} className="text-orange-500" />}
            <span className="text-white text-lg font-medium mt-2">{skill}</span>
          </div>
        ))}
      </div>
    ),
  };

  return (
    <div className="min-h-[88vh] bg-black text-white flex flex-col md:flex-row py-10 px-8 md:px-16 gap-10">
      <div className=" w-full md:w-1/5 flex flex-col space-y-4 p-4 bg-gray-900 rounded-lg shadow-xl">
        {tabs.map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`w-full px-4 py-3 rounded-lg text-left font-medium ${activeTab === tab ? "bg-green-500 text-black" : "bg-gray-800 text-white"}`}>{tab}</button>
        ))}
      </div>
      <div className="w-full md:w-4/5 p-6 bg-black rounded-lg shadow-lg border flex justify-center items-center">
        {content[activeTab]}
      </div>
    </div>
  );
}
